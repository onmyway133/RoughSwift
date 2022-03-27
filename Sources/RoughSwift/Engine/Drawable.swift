//
//  Drawable.swift
//  RoughSwift
//
//  Created by khoa on 26/03/2022.
//

import Foundation

public protocol Drawable {
    var method: String { get }
    var arguments: [Any] { get }
}

public struct Line: Drawable {
    public var method: String { "line" }

    public var arguments: [Any] {
        [
            from.x, from.y, to.x, to.y
        ]
    }

    let from: Point
    let to: Point
}

public struct Rectangle: Drawable {
    public var method: String { "rectangle" }

    public var arguments: [Any] {
        [
            x, y, width, height,
        ]
    }

    let x: Float
    let y: Float
    let width: Float
    let height: Float

    public init(
        x: Float,
        y: Float,
        width: Float,
        height: Float
    ) {
        self.x = x
        self.y = y
        self.width = width
        self.height = height
    }
}

public struct Ellipse: Drawable {
    public var method: String { "ellipse" }

    public var arguments: [Any] {
        [
            x, y, width, height,
        ]
    }

    let x: Float
    let y: Float
    let width: Float
    let height: Float

    public init(
        x: Float,
        y: Float,
        width: Float,
        height: Float
    ) {
        self.x = x
        self.y = y
        self.width = width
        self.height = height
    }
}

public struct Circle: Drawable {
    public var method: String { "circle" }
    
    public var arguments: [Any] {
        [
            x, y, diameter
        ]
    }
    
    let x: Float
    let y: Float
    let diameter: Float

    public init(
        x: Float,
        y: Float,
        diameter: Float
    ) {
        self.x = x
        self.y = y
        self.diameter = diameter
    }
}

public struct LinearPath: Drawable {
    public var method: String { "linearPath" }

    public var arguments: [Any] {
        points.map({ $0.toRoughPoint() })
    }

    let points: [Point]

    public init(
        points: [Point]
    ) {
        self.points = points
    }
}

public struct Arc: Drawable {
    public var method: String { "v" }
    
    public var arguments: [Any] {
        [
            x, y, width, height,
            start, stop, closed
        ]
    }

    let x: Float
    let y: Float
    let width: Float
    let height: Float
    let start: Float
    let stop: Float
    var closed: Bool

    public init(
        x: Float,
        y: Float,
        width: Float,
        height: Float,
        start: Float,
        stop: Float,
        closed: Bool = false
    ) {
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.start = start
        self.stop = stop
        self.closed = closed
    }
}

public struct Curve: Drawable {
    public var method: String { "curve" }

    public var arguments: [Any] {
        points.map({ $0.toRoughPoint() })
    }

    let points: [Point]

    public init(
        points: [Point]
    ) {
        self.points = points
    }
}

public struct Polygon: Drawable {
    public var method: String { "polygon" }

    public var arguments: [Any] {
        points.map({ $0.toRoughPoint() })
    }

    let points: [Point]

    public init(
        points: [Point]
    ) {
        self.points = points
    }
}

public struct Path: Drawable {
    public var method: String { "path" }

    public var arguments: [Any] {
        [
            d
        ]
    }

    let d: String

    public init(
        d: String
    ) {
        self.d = d
    }
}

protocol Fulfillable {
    func arguments(size: Size) -> [Any]
}

struct FullRectangle: Drawable, Fulfillable {
    var method: String { "rectangle"}
    var arguments: [Any] { [] }
    func arguments(size: Size) -> [Any] {
        [
            0, 0, size.width, size.height
        ]
    }
}

struct FullCircle: Drawable, Fulfillable {
    var method: String { "circle" }
    var arguments: [Any] { [] }

    func arguments(size: Size) -> [Any] {
        [
            size.width / 2, size.height / 2, min(size.width, size.height)
        ]
    }
}
