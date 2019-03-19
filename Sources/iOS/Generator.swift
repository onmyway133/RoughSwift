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
  
  public func rectangle(x: Float, y: Float, width: Float, height: Float, options: Options = Options()) {
    let drawble = generator.invokeMethod(
      "rectangle",
      withArguments: [x, y, width, height, options.toRoughDictionary()]
    )
  }
  
  public func ellipse(x: Float, y: Float, width: Float, height: Float, options: Options = Options()) {
    let drawble = generator.invokeMethod(
      "ellipse",
      withArguments: [x, y, width, height, options.toRoughDictionary()]
    )
  }
  
  public func circle(x: Float, y: Float, diameter: Float, options: Options = Options()) {
    let drawable = generator.invokeMethod(
      "circle",
      withArguments: [x, y, diameter, options.toRoughDictionary()]
    )
  }
  
  public func linearPath(points: [Point], options: Options = Options()) {
    let roughPoints = points.map({ $0.toRoughPoint() })
    let drawble = generator.invokeMethod(
      "linearPath",
      withArguments: [roughPoints, options.toRoughDictionary()]
    )
  }
  
  public func arc(
    x: Float, y: Float, width: Float, height: Float,
    start: Float, stop: Float,
    closed: Bool = false, options: Options = Options()) {
    let drawble = generator.invokeMethod(
      "arc",
      withArguments: [x, y, width, height, start, stop, closed, options.toRoughDictionary()]
    )
  }
  
  public func curve(points: [Point], options: Options = Options()) {
    let roughPoints = points.map({ $0.toRoughPoint() })
    let drawble = generator.invokeMethod(
      "curve",
      withArguments: [roughPoints, options.toRoughDictionary()]
    )
  }
  
  public func polygon(points: [Point], options: Options = Options()) {
    let roughPoints = points.map({ $0.toRoughPoint() })
    let drawble = generator.invokeMethod(
      "polygon",
      withArguments: [roughPoints, options.toRoughDictionary()]
    )
  }
  
  public func path(d: String, options: Options = Options()) {
    let drawble = generator.invokeMethod(
      "path",
      withArguments: [d, options.toRoughDictionary()]
    )
  }
}
