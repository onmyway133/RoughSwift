//
//  Generator.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import JavaScriptCore

public class Generator {
  private let generator: JSValue
  public init(generator: JSValue) {
    self.generator = generator
  }
  
  public func rectangle(x: Float, y: Float, width: Float, height: Float) {
    let drawble = generator.invokeMethod("rectangle", withArguments: [x, y, width, height])
  }
  
  public func ellipse(x: Float, y: Float, width: Float, height: Float) {
    let drawble = generator.invokeMethod("ellipse", withArguments: [x, y, width, height])
  }
  
  public func circle(x: Float, y: Float, diameter: Float) {
    let drawable = generator.invokeMethod("circle", withArguments: [x, y, diameter])
  }
  
  public func linearPath(points: [Point]) {
    let roughPoints = points.map({ $0.toRoughPoint() })
    let drawble = generator.invokeMethod("linearPath", withArguments: roughPoints)
  }
  
  public func arc(x: Float, y: Float, width: Float, height: Float, start: Float, stop: Float, closed: Bool = false) {
    let drawble = generator.invokeMethod("arc", withArguments: [x, y, width, height, start, stop, closed])
  }
  
  public func curve(points: [Point]) {
    let roughPoints = points.map({ $0.toRoughPoint() })
    let drawble = generator.invokeMethod("curve", withArguments: [roughPoints])
  }
  
  public func polygon(points: [Point]) {
    let roughPoints = points.map({ $0.toRoughPoint() })
    let drawble = generator.invokeMethod("polygon", withArguments: roughPoints)
  }
  
  public func path(d: String) {
    let drawble = generator.invokeMethod("path", withArguments: [d])
  }
}
