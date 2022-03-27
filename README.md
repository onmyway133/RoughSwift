![](Screenshots/s.png)

❤️ Support my apps ❤️ 

- [Push Hero - pure Swift native macOS application to test push notifications](https://onmyway133.com/pushhero)
- [PastePal - Pasteboard, note and shortcut manager](https://onmyway133.com/pastepal)
- [My other apps](https://onmyway133.com/apps/)

❤️❤️😇😍🤘❤️❤️

![](Screenshots/s1.png)

## Description

RoughSwift allows us to easily make shapes in hand drawn, sketchy, comic style in SwiftUI.

- [x] Support iOS, tvOS
- [x] Support all shapes: line, rectangle, circle, ellipse, linear path, arc, curve, polygon, svg path
- [x] Generate `UIBezierPath` for `CAShapeLayer`
- [x] Easy cusomizations with Options
- [x] Easy composable APIs
- [x] Convenient draw functions
- [x] Platform independant APIs which can easily support new platforms
- [x] Test coverage
- [x] Immutable and type safe data structure
- [ ] SVG elliptical arc

There are [Example](https://github.com/onmyway133/RoughSwift/tree/master/Example) project where you can explore further.

## Basic

Use `generator` in `draw` function to specify which shape to render. The returned `CALayer` contains the rendered result in correct `size` and is updated everytime `generator` is instructed.

Here's how to draw a green rectangle

![](Screenshots/green_rectangle.png)

```swift
RoughView()
    .fill(.yellow)
    .fillStyle(.hachure)
    .hachureAngle(-41)
    .hachureGap(-1)
    .fillWeight(-1)
    .stroke(.systemTeal)
    .strokeWidth(2)
    .curveTightness(0)
    .curveStepCount(9)
    .dashOffset(-1)
    .dashGap(-1)
    .zigzagOffset(-9)
```

The beauty of `CALayer` is that we can further animate, transform (translate, scale, rotate) and compose them into more powerful shapes.

## Options

`Options` is used to custimize shape. It is immutable struct and apply to one shape at a time. The following properties are configurable

- maxRandomnessOffset
- toughness
- bowing
- fill
- stroke
- strokeWidth
- curveTightness
- curveStepCount
- fillStyle
- fillWeight
- hachureAngle
- hachureGap
- dashOffset
- dashGap
- zigzagOffset

## Shapes

RoughSwift supports all primitive shapes, including SVG path

- line
- rectangle
- ellipse
- circle
- linearPath
- arc
- curve
- polygon
- path

## Fill style

Most of the time, we use `fill` for solid fill color inside shape, `stroke` for shape border, and `fillStyle` for sketchy fill style.

Available fill styles

- crossHatch
- dashed
- dots
- hachure
- solid
- starBurst
- zigzag
- zigzagLine

Here's how to draw circles in different fill styles. The default fill style is hachure

![](Screenshots/circles.png)

```swift
struct StylesView: View {
    var body: some View {
        LazyVGrid(columns: [.init(), .init(), .init()], spacing: 12) {
            RoughView()
                .fill(.red)
                .fillStyle(.crossHatch)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.green)
                .fillStyle(.dashed)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.purple)
                .fillStyle(.dots)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.cyan)
                .fillStyle(.hachure)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.orange)
                .fillStyle(.solid)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.gray)
                .fillStyle(.starBurst)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.yellow)
                .fillStyle(.zigzag)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.systemTeal)
                .fillStyle(.zigzagLine)
                .circle()
                .frame(width: 100, height: 100)
        }
    }
}
```

## SVG

![](Screenshots/svg.png)

SVG shape can be bigger or smaller than the specifed layer size, so RoughSwift scales them to your requested `size`. This way we can compose and transform the SVG shape.

```swift
struct SVGView: View {
    var apple: String {
        "M85 32C115 68 239 170 281 192 311 126 274 43 244 0c97 58 146 167 121 254 28 28 40 89 29 108 -25-45-67-39-93-24C176 409 24 296 0 233c68 56 170 65 226 27C165 217 56 89 36 54c42 38 116 96 161 122C159 137 108 72 85 32z"
    }

    var body: some View {
        VStack {
            RoughView()
                .stroke(.systemTeal)
                .fill(.red)
                .draw(Path(d: apple))
                .frame(width: 300, height: 300)
        }
    }
}
```

## Creative shapes

With all the primitive shapes, we can create more beautiful things. The only limit is your imagination.

Here's how to create chart

![](Screenshots/chart.png)

```swift
struct Chartview: View {
    var heights: [CGFloat] {
        Array(0 ..< 10).map { _ in CGFloat.random(in: 0 ..< 150) }
    }

    var body: some View {
        HStack {
            ForEach(0 ..< 10) { index in
                VStack {
                    Spacer()
                    RoughView()
                        .fill(.yellow)
                        .rectangle()
                        .frame(height: heights[index])
                }
            }
        }
        .padding(.horizontal)
        .padding(.bottom, 100)
    }
}
```


## Advance with Drawable, Generator and Renderer

Behind the screen, we composes `Generator` and `Renderer`. 

We can instantiate `Engine` or use a shared `Engine` for memory efficiency, to make `Generator`. Every time we instruct `Generator` to draw a shape, the engine works hard to figure out information about the sketchy shape in `Drawable`.

The name of these concepts follow `rough.js` for better code reasoning.

For iOS, there is a `Renderer` that can handle `Drawable` and transform it into `UIBezierPath` and `CALayer`. There will be more `Renderer` that can render into graphics context, image and for other platforms like macOS and watchOS.


```swift
let layer = CALayer()
let size = CGSize(width: 200, heigh: 200)

let renderer = Renderer(layer: layer)
let generator = Engine.shared.generator(size: bounds.size)

let drawable: Drawable = Rectangle(x: 10, y: 10, width: 100, height: 50)
let drawing = generate.generate(drawable: drawable)

renderer.render(drawing: drawing)
```

## Installation

Add the following line to the dependencies in your `Package.swift` file

```swift
.package(url: "https://github.com/onmyway133/RoughSwift"),
```

## Author

Khoa Pham, onmyway133@gmail.com

## Credit

- [rough](https://github.com/pshihn/rough) for the generator that powers RoughSwift. All the hard work is done via rough in JavascriptCore.
- [SVGPath](https://github.com/timrwood/SVGPath) for constructing UIBezierPath from SVG path

## Contributing

We would love you to contribute to **RoughSwift**, check the [CONTRIBUTING](https://github.com/onmyway133/RoughSwift/blob/master/CONTRIBUTING.md) file for more info.

## License

**RoughSwift** is available under the MIT license. See the [LICENSE](https://github.com/onmyway133/RoughSwift/blob/master/LICENSE.md) file for more info.
