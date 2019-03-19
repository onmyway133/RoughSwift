//
//  Option.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

public struct Options {
  public var maxRandomnessOffset: Float = 2
  public var roughness: Float = 1
  public var bowing: Float = 1
  public var stroke: String = "#000"
  public var strokeWidth: Float = 1
  public var curveTightness: Float = 0
  public var curveStepCount: Float = 9
  public var fillStyle: String = "hachure"
  public var fillWeight: Float = -1
  public var hachureAngle: Float = -41
  public var hachureGap: Float = -1
  public var dashOffset: Float = -1
  public var dashGap: Float = -1
  public var zigzagOffset: Float = -1
}
