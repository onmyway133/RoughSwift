//
//  OperationSet.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

public struct OperationSet {
  public let type: OperationSetType
  public let operations: [Operation]
  
  static func from(dictionary: JSONDictionary) -> OperationSet? {
    guard
      let rawType = dictionary["type"] as? String,
      let type = OperationSetType(rawValue: rawType),
      let ops = dictionary["ops"] as? JSONArray
    else {
      return nil
    }
    
    return OperationSet(
      type: type,
      operations: ops.compactMap({ Operation.from(dictionary: $0) })
    )
  }
}
