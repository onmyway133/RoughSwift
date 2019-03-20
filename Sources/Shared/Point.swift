//
//  Point.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

public struct Point {
  let x: Float
  let y: Float
  
  func toRoughPoint() -> [Float] {
    return [x, y]
  }
}
