//
//  OperationSetType.swift
//  RoughSwift
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

public enum OperationSetType: String {
    /// border
    case path
    /// solid fill
    case fillPath
    /// sketch fill
    case fillSketch
    /// svg path solid fill
    case path2DFill = "path2Dfill"
    /// svg path sketch fill
    case path2DPattern = "path2Dpattern"
}
