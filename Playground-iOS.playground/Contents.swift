// RoughSwift iOS Playground

import UIKit
import RoughSwift
import PlaygroundSupport

let size = CGSize(width: 300, height: 300)
let view = UIView(frame: CGRect(origin: .zero, size: size))
view.backgroundColor = .white

let layer = draw(size: size, using: { generator in
  var options = Options()
  options.fill = UIColor.brown
  options.fillStyle = .zigzag
  generator.circle(x: 200, y: 200, diameter: 120, options: options)
    
  options.fill = UIColor.purple
  options.fillStyle = .hachure
  generator.circle(x: 200, y: 100, diameter: 80, options: options)
    
  options.fillStyle = .starBurst
  options.fill = UIColor.blue
  generator.rectangle(x: 10, y: 10, width: 100, height: 50, options: options)
    
  options.fill = UIColor.green
  options.fillStyle = .crossHatch
  options.stroke = UIColor.brown
  generator.ellipse(x: 80, y: 170, width: 100, height: 50, options: options)
  
  options.stroke = UIColor.yellow
  options.fill = UIColor.purple
  generator.path(d: "M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z")
})

view.layer.addSublayer(layer)
PlaygroundPage.current.liveView = view
