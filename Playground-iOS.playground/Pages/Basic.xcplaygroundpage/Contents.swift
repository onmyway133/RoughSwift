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
    let x: Float = (400 / 20) * Float(i) + 10
    let xdeg = (Float.pi / 100) * x
    let y = round(sin(xdeg) * 90) + 250
    return Point(x: x, y: y)
  }
 
  var options = Options()
  options.stroke = UIColor.red
  options.strokeWidth = 3
  options.roughness = 1.2
  generator.curve(points: points, options: options)
}

func polygon(generator: Generator) {
  let points = [
    Point(x: 200, y: 370),
    Point(x: 300, y: 385),
    Point(x: 400, y: 480),
    Point(x: 350, y: 460)
  ]

  var options = Options()
  options.stroke = UIColor.red
  options.fill = UIColor.green
  options.hachureAngle = 65

  generator.polygon(points: points, options: options)
}

let layer = draw(size: size, using: { generator in
  var options = Options()
  options.fill = UIColor.red
  generator.rectangle(x: 10, y: 10, width: 140, height: 100, options: options)
    
  options.fill = UIColor.blue
  options.fillStyle = .starBurst
  generator.circle(x: 200, y: 50, diameter: 80, options: options)
    
  options.fill = UIColor.brown
  options.fillStyle = .zigzagLine
  generator.ellipse(x: 340, y: 50, width: 140, height: 80, options: options)
    
  options.stroke = UIColor.red
  options.strokeWidth = 4
  options.fillStyle = .crossHatch
  generator.arc(x: 430, y: 20, width: 200, height: 180, start: 0, stop: Float.pi/2, closed: true, options: options)

  sineWave(generator: generator)
  polygon(generator: generator)
})

view.layer.addSublayer(layer)
PlaygroundPage.current.liveView = view
