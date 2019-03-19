//
//  Drawable.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

public struct Drawable {
  public let shape: String
  public let sets: [OperationSet]
  public let options: JSONDictionary
  
  public static func from(dictionary: [String: Any]) -> Drawable? {
    guard
      let shape = dictionary["shape"] as? String,
      let sets = dictionary["sets"] as? JSONArray,
      let options = dictionary["options"] as? JSONDictionary
    else {
      return nil
    }
    
    return Drawable(
      shape: shape,
      sets: sets.compactMap({ OperationSet.from(dictionary: $0) }),
      options: options
    )
  }
}
