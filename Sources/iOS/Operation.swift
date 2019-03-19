//
//  Operation.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

public class Operation {
  public static func from(dictionary: [String: Any]) -> Operation? {
    guard
      let op = dictionary["op"] as? String,
      let data = dictionary["data"] as? [Float]
    else {
        return nil
    }
    
    switch op {
    case "move" where data.count == 2:
      return Move(data: data)
    case "lineTo" where data.count == 2:
      return LineTo(data: data)
    case "bcurveTo" where data.count == 6:
      return BCurveTo(data: data)
    case "qcurveTo" where data.count == 4:
      return QCurveTo(data: data)
    default:
      return nil
    }
  }
}

public class Move: Operation {
  public let a: Float
  public let b: Float
  
  init(data: [Float]) {
    self.a = data[0]
    self.b = data[1]
  }
}

public class LineTo: Operation {
  public let a: Float
  public let b: Float
  
  init(data: [Float]) {
    self.a = data[0]
    self.b = data[1]
  }
}

public class BCurveTo: Operation {
  public let a: Float
  public let b: Float
  public let c: Float
  public let d: Float
  public let e: Float
  public let f: Float
  
  init(data: [Float]) {
    self.a = data[0]
    self.b = data[1]
    self.c = data[2]
    self.d = data[3]
    self.e = data[4]
    self.f = data[5]
  }
}

public class QCurveTo: Operation {
  public let a: Float
  public let b: Float
  public let c: Float
  public let d: Float
  
  init(data: [Float]) {
    self.a = data[0]
    self.b = data[1]
    self.c = data[2]
    self.d = data[3]
  }
}
