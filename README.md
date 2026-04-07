# RoughSwift

Create sketchy, hand-drawn styled graphics in iOS apps using [Rough.js](https://roughjs.com) via JavaScriptCore.

[![Swift](https://img.shields.io/badge/Swift-6.0-orange.svg?style=social)](https://swift.org)
[![iOS](https://img.shields.io/badge/iOS-16%2B-blue.svg?style=social)](https://developer.apple.com/ios/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=social)](LICENSE)

## Features

- Sketchy, hand-drawn style shapes
- Supports rectangle, circle, ellipse, line, arc, curve, polygon, and path
- Configurable fill styles: hachure, solid, zigzag, crossHatch, dots, dashed
- Customizable roughness, stroke width, fill color, and stroke color
- Built on top of [Rough.js](https://roughjs.com) via JavaScriptCore
- Renders to `CALayer` for seamless UIKit integration

## Requirements

- iOS 16+
- Swift 6
- Xcode 16+

## Installation

### Swift Package Manager

Add RoughSwift to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/onmyway133/RoughSwift", from: "3.0.0")
]
```

Or add it via Xcode: **File → Add Package Dependencies** and enter the repository URL.

## Usage

### Basic Drawing

```swift
import RoughSwift
import UIKit

let size = CGSize(width: 300, height: 300)
let engine = Engine()
let generator = engine.generator(size: size)

// Generate a drawing
let drawing = generator.generate(drawable: Rectangle(x: 10, y: 10, width: 200, height: 100))

// Render it
let view = UIView(frame: CGRect(origin: .zero, size: size))
let renderer = Renderer(layer: view.layer)
renderer.render(drawing: drawing)
```

### Shapes

```swift
// Rectangle
generator.generate(drawable: Rectangle(x: 10, y: 20, width: 100, height: 200))

// Circle
generator.generate(drawable: Circle(x: 50, y: 150, diameter: 80))

// Ellipse
generator.generate(drawable: Ellipse(x: 50, y: 50, width: 120, height: 60))

// Line
generator.generate(drawable: Line(from: Point(x: 0, y: 0), to: Point(x: 100, y: 100)))
```

### Custom Options

```swift
var options = Options()
options.roughness = 2.0
options.strokeWidth = 3
options.fill = .blue
options.stroke = .black
options.fillStyle = .hachure
options.hachureAngle = 60
options.hachureGap = 8

let drawing = generator.generate(drawable: Circle(x: 100, y: 100, diameter: 150), options: options)
```

### Fill Styles

| Style | Description |
|-------|-------------|
| `.hachure` | Parallel diagonal lines (default) |
| `.solid` | Solid fill |
| `.zigzag` | Zigzag lines |
| `.crossHatch` | Cross-hatched lines |
| `.dots` | Dot pattern |
| `.dashed` | Dashed lines |
| `.zigzagLine` | Zigzag stroke lines |

### Shared Engine

```swift
// Reuse a single engine instance
let generator = Engine.shared.generator(size: CGSize(width: 300, height: 300))
```

## License

RoughSwift is released under the MIT license. See LICENSE for details.

Copyright (c) 2019-2026 Khoa Pham
