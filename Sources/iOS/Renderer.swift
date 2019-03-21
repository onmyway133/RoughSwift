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
    let pairs = drawable.sets.map({
      return ($0, self.shapeLayer(set: $0, options: drawable.options))
    })
    
    pairs.forEach { pair in
      let shapeLayer = pair.1
      layer.addSublayer(shapeLayer)
      shapeLayer.frame = layer.bounds
    }
    
    handlePath2DIfAny(pairs: pairs, options: drawable.options)
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
  
  /// Apply mask for path2DFill or path2DPattern
  private func handlePath2DIfAny(pairs: [(OperationSet, CAShapeLayer)], options: Options) {
    guard let pair = pairs.first(where: { $0.0.path != nil }) else {
      return
    }
    
    let set = pair.0
    let fillLayer = pair.1
    
    // Apply mask
    let maskLayer = CAShapeLayer()
    maskLayer.path = UIBezierPath(svgPath: pair.0.path!).cgPath
    scalePathToFrame(shapeLayer: maskLayer)
    fillLayer.mask = maskLayer
  
    // Somehow fillLayer loses backgroundColor, set fillColor again
    if (set.type == .path2DFill) {
      fillLayer.backgroundColor = options.fill.cgColor
    }
    
    pairs.forEach {
      scalePathToFrame(shapeLayer: $0.1)
    }
  }
  
  /// For svg path, make all path within frame
  private func scalePathToFrame(shapeLayer: CAShapeLayer) {
    guard let path = shapeLayer.path else {
      return
    }

    // Avoid division by 0
    let scaleX = path.boundingBox.size.width / max(layer.frame.size.width, 1)
    let scaleY = path.boundingBox.size.height / max(layer.frame.size.height, 1)
    
    let scaledPath = UIBezierPath(cgPath: path)
    scaledPath.apply(CGAffineTransform(scaleX: 1/scaleX, y: 1/scaleY))
    shapeLayer.path = scaledPath.cgPath
  }
}

extension Point {
  func toCGPoint() -> CGPoint {
    return CGPoint(x: CGFloat(x), y: CGFloat(y))
  }
}
