// RoughSwift iOS Playground

import UIKit
import RoughSwift
import PlaygroundSupport

let size = CGSize(width: 300, height: 300)
let view = UIView(frame: CGRect(origin: .zero, size: size))
view.backgroundColor = .white

let layer = draw(size: size, using: { generator in
  var options = Options()
  options.fill = UIColor.red
  options.fillStyle = .zigzag
  generator.circle(x: 200, y: 200, diameter: 80, options: options)
    
  options.fillStyle = .sunburst
  options.hachureAngle = 120
  options.hachureGap = 4
  generator.rectangle(x: 10, y: 10, width: 100, height: 50, options: options)
    
  options.fill = UIColor.green
  options.fillStyle = .crossHatch
  generator.ellipse(x: 80, y: 100, width: 100, height: 50, options: options)
})

view.layer.addSublayer(layer)
PlaygroundPage.current.liveView = view
