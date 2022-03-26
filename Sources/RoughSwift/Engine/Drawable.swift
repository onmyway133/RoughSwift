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
}

public struct LinearPath: Drawable {
    public var method: String { "linearPath" }

    public var arguments: [Any] {
        points.map({ $0.toRoughPoint() })
    }

    let points: [Point]
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
    var closed: Bool = false
}

public struct Curve: Drawable {
    public var method: String { "curve" }

    public var arguments: [Any] {
        points.map({ $0.toRoughPoint() })
    }

    let points: [Point]
}

public struct Polygon: Drawable {
    public var method: String { "polygon" }

    public var arguments: [Any] {
        points.map({ $0.toRoughPoint() })
    }

    let points: [Point]
}

public struct Path: Drawable {
    public var method: String { "path" }

    public var arguments: [Any] {
        [
            d
        ]
    }

    let d: String
}
