
//
//  SVGPath.swift
//  SVGPath
//
//  Created by Tim Wood on 1/21/15.
//  Copyright (c) 2015 Tim Wood. All rights reserved.
//

import UIKit
import CoreGraphics

// MARK: UIBezierPath

public extension UIBezierPath {
    convenience init (svgPath: String) {
        self.init()
        applyCommands(from: SVGPath(svgPath))
    }
}

private extension UIBezierPath {
    func applyCommands(from svgPath: SVGPath) {
        for command in svgPath.commands {
            switch command.type {
            case .move: move(to: command.point)
            case .line: addLine(to: command.point)
            case .quadCurve: addQuadCurve(to: command.point, controlPoint: command.control1)
            case .cubeCurve: addCurve(to: command.point, controlPoint1: command.control1, controlPoint2: command.control2)
            case .close: close()
            }
        }
    }
}

// MARK: Enums

fileprivate enum Coordinates {
    case absolute
    case relative
}

// MARK: Class

public class SVGPath {
    public var commands: [SVGCommand] = []
    private var builder: SVGCommandBuilder = move
    private var coords: Coordinates = .absolute
    private var increment: Int = 2
    private var numbers = ""
    
    public init (_ string: String) {
        for char in string {
            switch char {
            case "M": use(.absolute, 2, move)
            case "m": use(.relative, 2, move)
            case "L": use(.absolute, 2, line)
            case "l": use(.relative, 2, line)
            case "V": use(.absolute, 1, lineVertical)
            case "v": use(.relative, 1, lineVertical)
            case "H": use(.absolute, 1, lineHorizontal)
            case "h": use(.relative, 1, lineHorizontal)
            case "Q": use(.absolute, 4, quadBroken)
            case "q": use(.relative, 4, quadBroken)
            case "T": use(.absolute, 2, quadSmooth)
            case "t": use(.relative, 2, quadSmooth)
            case "C": use(.absolute, 6, cubeBroken)
            case "c": use(.relative, 6, cubeBroken)
            case "S": use(.absolute, 4, cubeSmooth)
            case "s": use(.relative, 4, cubeSmooth)
            case "Z": use(.absolute, 1, close)
            case "z": use(.absolute, 1, close)
            default: numbers.append(char)
            }
        }
        finishLastCommand()
    }
    
    private func use (_ coords: Coordinates, _ increment: Int, _ builder: @escaping SVGCommandBuilder) {
        finishLastCommand()
        self.builder = builder
        self.coords = coords
        self.increment = increment
    }
    
    private func finishLastCommand () {
        for command in take(SVGPath.parseNumbers(numbers), increment: increment, coords: coords, last: commands.last, callback: builder) {
            commands.append(coords == .relative ? command.relative(to: commands.last) : command)
        }
        numbers = ""
    }
}

// MARK: Numbers

private let numberSet = CharacterSet(charactersIn: "-.0123456789eE")
private let locale = Locale(identifier: "en_US")


public extension SVGPath {
    class func parseNumbers (_ numbers: String) -> [CGFloat] {
        var all:[String] = []
        var curr = ""
        var last = ""
        
        for char in numbers.unicodeScalars {
            let next = String(char)
            if next == "-" && last != "" && last != "E" && last != "e" {
                if curr.utf16.count > 0 {
                    all.append(curr)
                }
                curr = next
            } else if numberSet.contains(UnicodeScalar(char.value)!) {
                curr += next
            } else if curr.utf16.count > 0 {
                all.append(curr)
                curr = ""
            }
            last = next
        }
        
        all.append(curr)
        
        return all.map { CGFloat(truncating: NSDecimalNumber(string: $0, locale: locale)) }
    }
}

// MARK: Commands

public struct SVGCommand {
    public var point:CGPoint
    public var control1:CGPoint
    public var control2:CGPoint
    public var type:Kind
    
    public enum Kind {
        case move
        case line
        case cubeCurve
        case quadCurve
        case close
    }
    
    public init () {
        let point = CGPoint()
        self.init(point, point, point, type: .close)
    }
    
    public init (_ x: CGFloat, _ y: CGFloat, type: Kind) {
        let point = CGPoint(x: x, y: y)
        self.init(point, point, point, type: type)
    }
    
    public init (_ cx: CGFloat, _ cy: CGFloat, _ x: CGFloat, _ y: CGFloat) {
        let control = CGPoint(x: cx, y: cy)
        self.init(control, control, CGPoint(x: x, y: y), type: .quadCurve)
    }
    
    public init (_ cx1: CGFloat, _ cy1: CGFloat, _ cx2: CGFloat, _ cy2: CGFloat, _ x: CGFloat, _ y: CGFloat) {
        self.init(CGPoint(x: cx1, y: cy1), CGPoint(x: cx2, y: cy2), CGPoint(x: x, y: y), type: .cubeCurve)
    }
    
    public init (_ control1: CGPoint, _ control2: CGPoint, _ point: CGPoint, type: Kind) {
        self.point = point
        self.control1 = control1
        self.control2 = control2
        self.type = type
    }
    
    fileprivate func relative (to other:SVGCommand?) -> SVGCommand {
        if let otherPoint = other?.point {
            return SVGCommand(control1 + otherPoint, control2 + otherPoint, point + otherPoint, type: type)
        }
        return self
    }
}

// MARK: CGPoint helpers

private func +(a:CGPoint, b:CGPoint) -> CGPoint {
    return CGPoint(x: a.x + b.x, y: a.y + b.y)
}

private func -(a:CGPoint, b:CGPoint) -> CGPoint {
    return CGPoint(x: a.x - b.x, y: a.y - b.y)
}

// MARK: Command Builders

private typealias SVGCommandBuilder = ([CGFloat], SVGCommand?, Coordinates) -> SVGCommand

private func take (_ numbers: [CGFloat], increment: Int, coords: Coordinates, last: SVGCommand?, callback: SVGCommandBuilder) -> [SVGCommand] {
    var out: [SVGCommand] = []
    var lastCommand:SVGCommand? = last
    
    let count = (numbers.count / increment) * increment
    var nums:[CGFloat] = [0, 0, 0, 0, 0, 0];
    
    for i in stride(from: 0, to: count, by: increment) {
        for j in 0 ..< increment {
            nums[j] = numbers[i + j]
        }
        lastCommand = callback(nums, lastCommand, coords)
        out.append(lastCommand!)
    }
    
    return out
}

// MARK: Mm - Move

private func move (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    return SVGCommand(numbers[0], numbers[1], type: .move)
}

// MARK: Ll - Line

private func line (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    return SVGCommand(numbers[0], numbers[1], type: .line)
}

// MARK: Vv - Vertical Line

private func lineVertical (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    return SVGCommand(coords == .absolute ? last?.point.x ?? 0 : 0, numbers[0], type: .line)
}

// MARK: Hh - Horizontal Line

private func lineHorizontal (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    return SVGCommand(numbers[0], coords == .absolute ? last?.point.y ?? 0 : 0, type: .line)
}

// MARK: Qq - Quadratic Curve To

private func quadBroken (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    return SVGCommand(numbers[0], numbers[1], numbers[2], numbers[3])
}

// MARK: Tt - Smooth Quadratic Curve To

private func quadSmooth (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    var lastControl = last?.control1 ?? CGPoint()
    let lastPoint = last?.point ?? CGPoint()
    if (last?.type ?? .line) != .quadCurve {
        lastControl = lastPoint
    }
    var control = lastPoint - lastControl
    if coords == .absolute {
        control = control + lastPoint
    }
    return SVGCommand(control.x, control.y, numbers[0], numbers[1])
}

// MARK: Cc - Cubic Curve To

private func cubeBroken (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    return SVGCommand(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5])
}

// MARK: Ss - Smooth Cubic Curve To

private func cubeSmooth (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    var lastControl = last?.control2 ?? CGPoint()
    let lastPoint = last?.point ?? CGPoint()
    if (last?.type ?? .line) != .cubeCurve {
        lastControl = lastPoint
    }
    var control = lastPoint - lastControl
    if coords == .absolute {
        control = control + lastPoint
    }
    return SVGCommand(control.x, control.y, numbers[0], numbers[1], numbers[2], numbers[3])
}

// MARK: Zz - Close Path

private func close (_ numbers: [CGFloat], last: SVGCommand?, coords: Coordinates) -> SVGCommand {
    return SVGCommand()
}
