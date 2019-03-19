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
  private let context = JSContext()!

  public init() {
    let window = JSValue(newObjectIn: context)
    context.setObject(window, forKeyedSubscript: "window" as NSString)
    let path = Bundle.main.url(forResource: "rough", withExtension: "js")!
    let content = try! String(contentsOf: path)
    context.evaluateScript(content)
    let abc = window?.objectForKeyedSubscript("rough")
    print(abc)
  }
}
