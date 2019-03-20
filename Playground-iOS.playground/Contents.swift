// RoughSwift iOS Playground

import UIKit
import RoughSwift
import PlaygroundSupport

let size = CGSize(width: 300, height: 300)
let view = UIView(frame: CGRect(origin: .zero, size: size))
let engine = Engine()
let generator = engine.generator(size: size)
let renderer = Renderer(layer: view.layer)
generator.onDrawable = renderer.handle

generator.rectangle(x: 10, y: 10, width: 50, height: 50)

PlaygroundPage.current.liveView = view
