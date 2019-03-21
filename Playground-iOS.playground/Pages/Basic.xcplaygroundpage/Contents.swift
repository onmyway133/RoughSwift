// RoughSwift iOS Playground

import UIKit
import RoughSwift
import PlaygroundSupport

let size = CGSize(width: 800, height: 500)
let view = UIView(frame: CGRect(origin: .zero, size: size))
view.backgroundColor = .white

// https://roughjs.com/examples/sampler.html

func sineWave(generator: Generator) {
  let points: [Point] = Array(0..<20).map { i in
    let x: Float = (400 / 20) * Float(i) + 100
    let xdeg = (Float.pi / 100) * x
    let y = round(sin(xdeg) * 90) + 250
    return Point(x: x, y: y)
  }
 
  var options = Options()
  options.stroke = UIColor.brown
  options.strokeWidth = 3
  options.roughness = 1.2
  generator.curve(points: points, options: options)
}

func polygon(generator: Generator) {
  let points = [
    Point(x: 5, y: 5),
    Point(x: 100, y: 50),
    Point(x: 50, y: 100),
    Point(x: 10, y: 90)
  ]

  var options = Options()
  options.stroke = UIColor.red
  options.fill = UIColor.green
  options.hachureAngle = 65

  generator.polygon(points: points, options: options)
}

func chart(generator: Generator) {
  let width: Float = 50
  var options = Options()
  options.fill = UIColor.yellow
  Array(0..<10).forEach { i in
    let height = Float(arc4random_uniform(100))
    generator.rectangle(x: Float(i) * width + 100, y: 450 - height, width: width, height: height, options: options)
  }
}

let layer = draw(size: size, using: { generator in
  var options = Options()
  options.fill = UIColor.green
  generator.rectangle(x: 80, y: 10, width: 140, height: 100, options: options)
    
  options.fill = UIColor.blue
  options.fillStyle = .starBurst
  generator.circle(x: 280, y: 50, diameter: 80, options: options)
    
  options.fill = UIColor.brown
  options.fillStyle = .zigzagLine
  generator.ellipse(x: 400, y: 50, width: 140, height: 80, options: options)
    
  options.stroke = UIColor.purple
  options.strokeWidth = 4
  options.fillStyle = .crossHatch
  generator.arc(x: 500, y: 20, width: 200, height: 180, start: 0, stop: Float.pi/2, closed: true, options: options)

  sineWave(generator: generator)
  polygon(generator: generator)
  chart(generator: generator)
})

let bird = draw(size: CGSize(width: 150, height: 150), using: { generator in
  var options = Options()
  options.stroke = UIColor.brown
  options.fill = UIColor.red
  let apple = "M85 32C115 68 239 170 281 192 311 126 274 43 244 0c97 58 146 167 121 254 28 28 40 89 29 108 -25-45-67-39-93-24C176 409 24 296 0 233c68 56 170 65 226 27C165 217 56 89 36 54c42 38 116 96 161 122C159 137 108 72 85 32z"
  generator.path(d: apple, options: options)
})

bird.frame.origin = CGPoint(x: 500, y: 140)

view.layer.addSublayer(layer)
view.layer.addSublayer(bird)
PlaygroundPage.current.liveView = view
