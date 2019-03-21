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
})

let apple = draw(size: CGSize(width: 150, height: 150), using: { generator in
  var options = Options()
  options.stroke = UIColor.brown
  options.fill = UIColor.red
  let apple = "M85 32C115 68 239 170 281 192 311 126 274 43 244 0c97 58 146 167 121 254 28 28 40 89 29 108 -25-45-67-39-93-24C176 409 24 296 0 233c68 56 170 65 226 27C165 217 56 89 36 54c42 38 116 96 161 122C159 137 108 72 85 32z"
  generator.path(d: apple, options: options)
})

view.layer.addSublayer(layer)
view.layer.addSublayer(apple)
PlaygroundPage.current.liveView = view
