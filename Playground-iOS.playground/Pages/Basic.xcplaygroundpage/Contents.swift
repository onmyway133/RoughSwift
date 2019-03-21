// RoughSwift iOS Playground

import UIKit
import RoughSwift
import PlaygroundSupport

let size = CGSize(width: 800, height: 500)
let view = UIView(frame: CGRect(origin: .zero, size: size))
view.backgroundColor = .white

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
})

view.layer.addSublayer(layer)
PlaygroundPage.current.liveView = view
