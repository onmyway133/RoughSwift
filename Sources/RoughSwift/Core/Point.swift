//
//  Point.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

public struct Point: Equatable {
    let x: Float
    let y: Float
    
    public init(x: Float, y: Float) {
        self.x = x
        self.y = y
    }

    public func toRoughPoint() -> [Float] {
        return [x, y]
    }
}
