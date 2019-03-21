import UIKit
import RoughSwift

class ViewController: UIViewController {
  
  override func viewDidLoad() {
    super.viewDidLoad()
    view.backgroundColor = UIColor.white
    
    let bird = draw(size: CGSize(width: 150, height: 150), using: { generator in
      var options = Options()
      options.stroke = UIColor.brown
      options.fill = UIColor.red
      let apple = "M85 32C115 68 239 170 281 192 311 126 274 43 244 0c97 58 146 167 121 254 28 28 40 89 29 108 -25-45-67-39-93-24C176 409 24 296 0 233c68 56 170 65 226 27C165 217 56 89 36 54c42 38 116 96 161 122C159 137 108 72 85 32z"
      generator.path(d: apple, options: options)
    })
   
    bird.frame.origin = CGPoint(x: 100, y: 200)
    view.layer.addSublayer(bird)
  }
}

