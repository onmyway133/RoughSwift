//
//  Canvas.swift
//  RoughSwift-iOS
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import UIKit
import JavaScriptCore

public typealias JSONDictionary = [String: Any]
public typealias JSONArray = [JSONDictionary]

public class Engine {
    private let context = JSContext()!
    private let rough: JSValue
    
    public static let shared = Engine()

    public init() {
        context.evaluateScript(roughJs)

        context.exceptionHandler = { context, exception in
            print(exception!.toString() as Any)
        }
        rough = context.objectForKeyedSubscript("rough")!
    }

    public func generator(size: CGSize) -> Generator {
        let drawingSurface: JSONDictionary = [
            "width": size.width,
            "height": size.height
        ]

        let value = rough.invokeMethod("generator", withArguments: [drawingSurface])!
        return Generator(generator: value)
    }
}
