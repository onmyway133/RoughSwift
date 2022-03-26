//
//  Size.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

public struct Size: Equatable {
    public let width: Float
    public let height: Float
    
    public init(width: Float, height: Float) {
        self.width = width
        self.height = height
    }
}
