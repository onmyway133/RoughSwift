//
//  Renderer.swift
//  RoughSwift-iOS
//
//  Created by khoa on 20/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import UIKit

public class Renderer {
  private let layer: CALayer
  
  public init(layer: CALayer) {
    self.layer = layer
  }
  
  public func handle(drawable: Drawable) {
    drawable.sets.forEach { set in
      set.operations.forEach { op in
        let shapeLayer = handle(op: op)
        layer.addSublayer(shapeLayer)
      }
    }
  }
  
  private func handle(op: Operation) -> CAShapeLayer {
    let shapeLayer = CAShapeLayer()
    let path = UIBezierPath()
    
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
    
    shapeLayer.path = path.cgPath
    return shapeLayer
  }
}

extension Point {
  func toCGPoint() -> CGPoint {
    return CGPoint(x: CGFloat(x), y: CGFloat(y))
  }
}
