//
//  Generator.swift
//  RoughSwift
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import JavaScriptCore

public class Generator {
    private let generator: JSValue

    /// Called when a drawable has been generated
    public var onDrawable: ((Drawable) -> Void)?

    public init(generator: JSValue) {
        self.generator = generator
    }
    
    public func line(from: Point, to: Point, options: Options = Options()) {
        let drawable = generator.invokeMethod(
            "line",
            withArguments: [from.x, from.y, to.x, to.y, options.toRoughDictionary()]
        )

        handle(roughDrawable: drawable)
    }

    public func rectangle(x: Float, y: Float, width: Float, height: Float, options: Options = Options()) {
        let drawable = generator.invokeMethod(
            "rectangle",
            withArguments: [x, y, width, height, options.toRoughDictionary()]
        )

        handle(roughDrawable: drawable)
    }

    public func ellipse(x: Float, y: Float, width: Float, height: Float, options: Options = Options()) {
        let drawable = generator.invokeMethod(
            "ellipse",
            withArguments: [x, y, width, height, options.toRoughDictionary()]
        )

        handle(roughDrawable: drawable)
    }

    public func circle(x: Float, y: Float, diameter: Float, options: Options = Options()) {
        let drawable = generator.invokeMethod(
            "circle",
            withArguments: [x, y, diameter, options.toRoughDictionary()]
        )

        handle(roughDrawable: drawable)
    }

    public func linearPath(points: [Point], options: Options = Options()) {
        let roughPoints = points.map({ $0.toRoughPoint() })
        let drawable = generator.invokeMethod(
            "linearPath",
            withArguments: [roughPoints, options.toRoughDictionary()]
        )

        handle(roughDrawable: drawable)
    }

    public func arc(
        x: Float, y: Float, width: Float, height: Float,
        start: Float, stop: Float,
        closed: Bool = false, options: Options = Options()) {
            let drawable = generator.invokeMethod(
                "arc",
                withArguments: [x, y, width, height, start, stop, closed, options.toRoughDictionary()]
            )

            handle(roughDrawable: drawable)
        }

    public func curve(points: [Point], options: Options = Options()) {
        let roughPoints = points.map({ $0.toRoughPoint() })
        let drawable = generator.invokeMethod(
            "curve",
            withArguments: [roughPoints, options.toRoughDictionary()]
        )

        handle(roughDrawable: drawable)
    }

    public func polygon(points: [Point], options: Options = Options()) {
        let roughPoints = points.map({ $0.toRoughPoint() })
        let drawable = generator.invokeMethod(
            "polygon",
            withArguments: [roughPoints, options.toRoughDictionary()]
        )

        handle(roughDrawable: drawable)
    }

    public func path(d: String, options: Options = Options()) {
        let drawable = generator.invokeMethod(
            "path",
            withArguments: [d, options.toRoughDictionary()]
        )

        handle(roughDrawable: drawable)
    }

    private func handle(roughDrawable: JSValue?) {
        guard
            let roughDrawable = roughDrawable,
            let dictionary = roughDrawable.toDictionary() as? JSONDictionary else {
            return
        }

        guard let drawable = Drawable.from(dictionary: dictionary) else {
            return
        }

        onDrawable?(drawable)
    }
}
