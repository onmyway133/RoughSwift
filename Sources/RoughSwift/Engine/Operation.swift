//
//  Operation.swift
//  RoughSwift
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import Foundation

/// Detailed instruction to convert to bezier path
public class Operation {
    static func from(dictionary: JSONDictionary) -> Operation? {
        guard
            let op = dictionary["op"] as? String,
            let numberData = dictionary["data"] as? [NSNumber]
        else {
            return nil
        }

        let data = numberData.map({ $0.floatValue })

        switch op {
        case OperationType.move.rawValue where data.count == 2:
            return Move(data: data)
        case OperationType.lineTo.rawValue where data.count == 2:
            return LineTo(data: data)
        case OperationType.bezierCurveTo.rawValue where data.count == 6:
            return BezierCurveTo(data: data)
        case OperationType.quadraticCurveTo.rawValue where data.count == 4:
            return QuadraticCurveTo(data: data)
        default:
            return nil
        }
    }
}

public class Move: Operation {
    public let point: Point

    init(data: [Float]) {
        self.point = Point(x: data[0], y: data[1])
    }
}

public class LineTo: Operation {
    public let point: Point

    init(data: [Float]) {
        self.point = Point(x: data[0], y: data[1])
    }
}

public class BezierCurveTo: Operation {
    public let point: Point
    public let controlPoint1: Point
    public let controlPoint2: Point

    init(data: [Float]) {
        // void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        self.controlPoint1 = Point(x: data[0], y: data[1])
        self.controlPoint2 = Point(x: data[2], y: data[3])
        self.point = Point(x: data[4], y: data[5])
    }
}

public class QuadraticCurveTo: Operation {
    public let point: Point
    public let controlPoint: Point

    init(data: [Float]) {
        // void ctx.quadraticCurveTo(cpx, cpy, x, y);
        self.controlPoint = Point(x: data[0], y: data[1])
        self.point = Point(x: data[2], y: data[3])
    }
}
