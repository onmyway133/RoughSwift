//
//  Drawable.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation
import JavaScriptCore

public struct Drawable {
  let shape: String
  let type: String
  let operations: [Operation]
  let options: [String: Any]
  
  public static func from(value: JSValue) -> Drawable? {
    guard
      let shape = value.objectForKeyedSubscript("shape")?.toString(),
      let sets = value.objectForKeyedSubscript("sets"),
      let options = value.objectForKeyedSubscript("options"),
      let type = sets.objectForKeyedSubscript("type"),
      let ops = sets.objectForKeyedSubscript("ops")?.toArray()
    else {
      return nil
    }
    
    let operations: [Operation] = ops.compactMap({
      guard let dictionary = $0 as? [String: Any] else {
        return nil
      }
      
      return Operation.from(dictionary: dictionary)
    })
    
    return Drawable(
      shape: shape,
      type: type.toString(),
      operations: operations,
      options: options.toDictionary() as? [String: Any] ?? [:]
    )
  }
}
