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
        let bundle = Bundle.module
        let path = bundle.url(forResource: "rough", withExtension: "js")!
        let content = try! String(contentsOf: path)
        context.evaluateScript(content)

        context.exceptionHandler = { context, exception in
            print(exception!.toString())
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
