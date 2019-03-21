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

let apple = draw(size: CGSize(width: 500, height: 500), using: { generator in
  var options = Options()
  options.stroke = UIColor.red
  options.fill = UIColor.purple
  let apple = "M809.333 349q-21-31-49-52.5t-55.5-31-46.5-13.5-36-4q-35-4-75 7.5t-73 25-48 13.5q-17 0-75-22.5t-94-21.5q-65 1-121.5 35.5t-90.5 92.5q-32 57-40 129t5.5 141.5 39.5 133 60 112.5q20 30 34.5 48t36 40 44.5 32.5 46 9.5q30-1 78.5-21.5t89.5-20.5q40 0 88 20.5t81 20.5q25-1 47-11t42.5-30.5 33.5-37.5 34-47q43-64 71-146-8-3-17.5-8t-33-22.5-40.5-38.5-31.5-58-15.5-80q0-36 11.5-69.5t25-53.5 34-39 26.5-23.5 14-9.5zm-186-349q-39 2-81 23.5t-70 54.5q-27 30-41.5 73t-9.5 85q41 3 80.5-17.5t68.5-54.5q28-35 43-78t10-86z"
  generator.path(d: apple, options: options)
})

apple.setAffineTransform(CGAffineTransform(scaleX: 0.15, y: 0.15))
view.layer.addSublayer(layer)
view.layer.addSublayer(apple)
PlaygroundPage.current.liveView = view
