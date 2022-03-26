//
//  OperationSet.swift
//  RoughSwift
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

/// Instructions about which set type to draw and operations
public struct OperationSet {
    public let type: OperationSetType
    public let operations: [Operation]
    
    // For path
    public let path: String?
    public let size: Size?

    static func from(dictionary: JSONDictionary) -> OperationSet? {
        guard
            let rawType = dictionary["type"] as? String,
            let type = OperationSetType(rawValue: rawType),
            let ops = dictionary["ops"] as? JSONArray
        else {
            return nil
        }

        let path = dictionary["path"] as? String
        var size: Size? = nil
        if let sizeArray = dictionary["size"] as? [NSNumber], sizeArray.count == 2{
            size = Size(width: sizeArray[0].floatValue, height: sizeArray[1].floatValue)
        }

        return OperationSet(
            type: type,
            operations: ops.compactMap({ Operation.from(dictionary: $0) }),
            path: path,
            size: size
        )
    }
}
