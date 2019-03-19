//
//  Canvas.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import UIKit
import JavaScriptCore

public class Canvas {
  init() {
    let context = JSContext()!
    let window = JSValue(newObjectIn: context)
    context.setObject(window, forKeyedSubscript: "window" as NSString)
  }
}
