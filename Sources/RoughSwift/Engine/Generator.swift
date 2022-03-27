//
//  Generator.swift
//  RoughSwift
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import JavaScriptCore

public class Generator {
    private let size: CGSize
    private let jsValue: JSValue

    public init(
        size: CGSize,
        jsValue: JSValue
    ) {
        self.size = size
        self.jsValue = jsValue
    }

    public func generate(drawable: Drawable, options: Options = .init()) -> Drawing? {
        let arguments: [Any]
        if let fullable = drawable as? Fulfillable {
            arguments = fullable.arguments(size: size.toSize)
        } else {
            arguments = drawable.arguments
        }

        return jsValue.invokeMethod(
            drawable.method,
            withArguments: arguments + [options.toRoughDictionary()]
        ).toDrawing
    }
}

private extension JSValue {
    var toDrawing: Drawing? {
        Drawing(roughDrawing: self)
    }
}

private extension CGSize {
    var toSize: Size {
        Size(width: Float(width), height: Float(height))
    }
}
