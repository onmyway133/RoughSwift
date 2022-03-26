//
//  Option.swift
//  RoughSwift
//
//  Created by khoa on 19/03/2019.
//  Copyright © 2019 Khoa Pham. All rights reserved.
//

import UIKit

public struct Options {
    public var maxRandomnessOffset: Float = 2
    public var roughness: Float = 1
    public var bowing: Float = 1
    public var fill: UIColor = .clear
    public var stroke: UIColor = .black
    public var strokeWidth: Float = 1
    public var curveTightness: Float = 0
    public var curveStepCount: Float = 9
    public var fillStyle: FillStyle = .hachure
    public var fillWeight: Float = -1
    public var hachureAngle: Float = -41
    public var hachureGap: Float = -1
    public var dashOffset: Float = -1
    public var dashGap: Float = -1
    public var zigzagOffset: Float = -1

    public init() {}

    func toRoughDictionary() -> JSONDictionary {
        return [
            "maxRandomnessOffset": maxRandomnessOffset,
            "roughness": roughness,
            "bowing": bowing,
            "stroke": stroke.toHex(),
            "fill": fill.toHex(),
            "strokeWidth": strokeWidth,
            "curveTightness": curveTightness,
            "curveStepCount": curveStepCount,
            "fillStyle": fillStyle.rawValue,
            "fillWeight": fillWeight,
            "hachureAngle": hachureAngle,
            "hachureGap": hachureGap,
            "dashOffset": dashOffset,
            "dashGap": dashGap,
            "zigzagOffset": zigzagOffset
        ]
    }
}

public extension Options {
    init(dictionary: JSONDictionary) {
        maxRandomnessOffset <-? (dictionary["maxRandomnessOffset"] as? NSNumber)?.floatValue
        roughness <-? (dictionary["roughness"] as? NSNumber)?.floatValue
        bowing <-? (dictionary["bowing"] as? NSNumber)?.floatValue
        strokeWidth <-? (dictionary["strokeWidth"] as? NSNumber)?.floatValue
        curveTightness <-? (dictionary["curveTightness"] as? NSNumber)?.floatValue
        curveStepCount <-? (dictionary["curveStepCount"] as? NSNumber)?.floatValue
        fillWeight <-? (dictionary["fillWeight"] as? NSNumber)?.floatValue
        hachureAngle <-? (dictionary["hachureAngle"] as? NSNumber)?.floatValue
        hachureGap <-? (dictionary["hachureGap"] as? NSNumber)?.floatValue
        dashOffset <-? (dictionary["dashOffset"] as? NSNumber)?.floatValue
        dashGap <-? (dictionary["dashGap"] as? NSNumber)?.floatValue
        zigzagOffset <-? (dictionary["zigzagOffset"] as? NSNumber)?.floatValue

        if let fillStyleRawValue = dictionary["fillStyle"] as? String,
           let fillStyle = FillStyle(rawValue: fillStyleRawValue) {
            self.fillStyle = fillStyle
        }

        stroke <-? (dictionary["stroke"] as? String).map(UIColor.init(hex:))
        fill <-? (dictionary["fill"] as? String).map(UIColor.init(hex:))
    }
}
