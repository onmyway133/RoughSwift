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
  generator.circle(x: 200, y: 200, diameter: 80, options: options)
})

view.layer.addSublayer(layer)
PlaygroundPage.current.liveView = view
