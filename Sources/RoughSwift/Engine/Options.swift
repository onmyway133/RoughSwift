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

    static func from(dictionary: JSONDictionary) -> Options {
        var options = Options()
        options.maxRandomnessOffset <-? (dictionary["maxRandomnessOffset"] as? NSNumber)?.floatValue
        options.roughness <-? (dictionary["roughness"] as? NSNumber)?.floatValue
        options.bowing <-? (dictionary["bowing"] as? NSNumber)?.floatValue
        options.strokeWidth <-? (dictionary["strokeWidth"] as? NSNumber)?.floatValue
        options.curveTightness <-? (dictionary["curveTightness"] as? NSNumber)?.floatValue
        options.curveStepCount <-? (dictionary["curveStepCount"] as? NSNumber)?.floatValue
        options.fillWeight <-? (dictionary["fillWeight"] as? NSNumber)?.floatValue
        options.hachureAngle <-? (dictionary["hachureAngle"] as? NSNumber)?.floatValue
        options.hachureGap <-? (dictionary["hachureGap"] as? NSNumber)?.floatValue
        options.dashOffset <-? (dictionary["dashOffset"] as? NSNumber)?.floatValue
        options.dashGap <-? (dictionary["dashGap"] as? NSNumber)?.floatValue
        options.zigzagOffset <-? (dictionary["zigzagOffset"] as? NSNumber)?.floatValue

        if let fillStyleRawValue = dictionary["fillStyle"] as? String,
           let fillStyle = FillStyle(rawValue: fillStyleRawValue) {
            options.fillStyle = fillStyle
        }

        options.stroke <-? (dictionary["stroke"] as? String).map(UIColor.init(hex:))
        options.fill <-? (dictionary["fill"] as? String).map(UIColor.init(hex:))

        return options
    }
}
