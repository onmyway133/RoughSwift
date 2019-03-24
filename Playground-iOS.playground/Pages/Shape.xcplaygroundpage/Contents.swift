// RoughSwift iOS Playground

import UIKit
import RoughSwift
import PlaygroundSupport

let size = CGSize(width: 800, height: 500)
let view = UIView(frame: CGRect(origin: .zero, size: size))
view.backgroundColor = .white

func greenRectangle(generator: Generator) {
  var options = Options()
  options.fill = UIColor.green
  generator.rectangle(x: 80, y: 10, width: 140, height: 100, options: options)
}

func circles(generator: Generator) {
  var options = Options()
  options.stroke = UIColor.blue
  
  options.fill = UIColor.red
  options.fillStyle = .crossHatch
  generator.circle(x: 100, y: 100, diameter: 100, options: options)
    
  options.fill = UIColor.green
  options.fillStyle = .dashed
  generator.circle(x: 230, y: 100, diameter: 100, options: options)
    
  options.fill = UIColor.purple
  options.fillStyle = .dots
  generator.circle(x: 350, y: 100, diameter: 100, options: options)
    
  options.fill = UIColor.cyan
  options.fillStyle = .hachure
  generator.circle(x: 480, y: 100,  diameter: 100, options: options)
  
  options.fill = UIColor.orange
  options.fillStyle = .solid
  generator.circle(x: 100, y: 300,  diameter: 100, options: options)
  
  options.fill = UIColor.gray
  options.fillStyle = .starBurst
  generator.circle(x: 230, y: 300, diameter: 100, options: options)
    
  options.fill = UIColor.yellow
  options.fillStyle = .zigzag
  generator.circle(x: 350, y: 300,  diameter: 100, options: options)
  
  options.fill = UIColor.blue
  options.fillStyle = .zigzagLine
  generator.circle(x: 480, y: 300, diameter: 100, options: options)
}

let layer = draw(size: size, using: { generator in
//  greenRectangle(generator: generator)
    circles(generator: generator)
})

view.layer.addSublayer(layer)
PlaygroundPage.current.liveView = view
