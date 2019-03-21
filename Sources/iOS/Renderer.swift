//
//  Renderer.swift
//  RoughSwift-iOS
//
//  Created by khoa on 20/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import UIKit

public class Renderer {
  public let layer: CALayer
  
  public init(layer: CALayer) {
    self.layer = layer
  }
  
  public func handle(drawable: Drawable) {
    drawable.sets.forEach { set in
      let shapeLayer = self.shapeLayer(set: set, options: drawable.options)
      shapeLayer.frame = layer.bounds
      layer.addSublayer(shapeLayer)
    }
  }
  
  private func shapeLayer(set: OperationSet, options: Options) -> CAShapeLayer {
    let layer = CAShapeLayer()
    let path = UIBezierPath()
    layer.fillColor = nil
    
    switch set.type {
    case .path:
      path.lineWidth = CGFloat(options.strokeWidth)
      layer.strokeColor = options.stroke.cgColor
    case .fillSketch:
      fillSketch(path: path, layer: layer, options: options)
    case .fillPath:
      fillPath(layer: layer, options: options)
    case .path2DFill:
      fillPath(layer: layer, options: options)
    case .path2DPattern:
      fillSketch(path: path, layer: layer, options: options)
      break
    }
    
    set.operations.forEach { op in
      operate(op: op, path: path)
    }
    
    layer.path = path.cgPath
    return layer
  }
  
  /// Sketch style fill, using many stroke paths
  private func fillSketch(path: UIBezierPath, layer: CAShapeLayer, options: Options) {
    var fweight = options.fillWeight
    if (fweight < 0) {
      fweight = options.strokeWidth / 2
    }
    
    path.lineWidth = CGFloat(fweight)
    layer.strokeColor = options.fill.cgColor
  }
  
  /// Solid fill, using fill layer
  private func fillPath(layer: CAShapeLayer, options: Options) {
    layer.fillColor = options.fill.cgColor
  }
  
  private func operate(op: Operation, path: UIBezierPath) {
    switch op {
    case let op as Move:
      path.move(to: op.point.toCGPoint())
    case let op as LineTo:
      path.addLine(to: op.point.toCGPoint())
    case let op as BezierCurveTo:
      path.addCurve(
        to: op.point.toCGPoint(),
        controlPoint1: op.controlPoint1.toCGPoint(),
        controlPoint2: op.controlPoint2.toCGPoint()
      )
    case let op as QuadraticCurveTo:
      path.addQuadCurve(
        to: op.point.toCGPoint(),
        controlPoint: op.controlPoint.toCGPoint()
      )
    default:
      break
    }
  }
}

extension Point {
  func toCGPoint() -> CGPoint {
    return CGPoint(x: CGFloat(x), y: CGFloat(y))
  }
}
