//
//  Generator.swift
//  RoughSwift
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import JavaScriptCore

public class Generator {
    private let jsValue: JSValue

    public init(generator: JSValue) {
        self.jsValue = generator
    }

    public func generate(drawable: Drawable, options: Options = .init()) -> Drawing? {
        jsValue.invokeMethod(
            drawable.method,
            withArguments: drawable.arguments + [options.toRoughDictionary()]
        ).toDrawing
    }
}

private extension JSValue {
    var toDrawing: Drawing? {
        Drawing(roughDrawing: self)
    }
}
