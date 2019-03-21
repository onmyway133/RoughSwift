import XCTest
import RoughSwift

class iOSTests: XCTestCase {
  func testDrawble() {
    let expectation = self.expectation(description: "")
    
    let engine = Engine()
    let generator = engine.generator(size: CGSize(width: 300, height: 300))
    
    generator.onDrawable = { drawable in
      XCTAssertEqual(drawable.shape, "rectangle")
      XCTAssertEqual(drawable.sets.count, 2)
      
      let set = drawable.sets[0]
      XCTAssertEqual(set.operations.count, 208)
      
      expectation.fulfill()
    }
    
    generator.rectangle(x: 10, y: 20, width: 100, height: 200)
    wait(for: [expectation], timeout: 1)
  }
  
  func testDrawableWithOption() {
    let expectation = self.expectation(description: "")
    
    let engine = Engine()
    let generator = engine.generator(size: CGSize(width: 300, height: 300))
    
    generator.onDrawable = { drawable in
      XCTAssertEqual(drawable.shape, "circle")
      XCTAssertEqual(drawable.sets.count, 2)
      
      let set = drawable.sets[0]
      XCTAssertTrue(set.operations.count == 68 || set.operations.count == 76)
      
      XCTAssertEqual(drawable.options.fillStyle, .zigzag)
      XCTAssertEqual(drawable.options.hachureAngle, 60)
      XCTAssertEqual(drawable.options.hachureGap, 8)
      
      expectation.fulfill()
    }
    
    var options = Options()
    options.hachureAngle = 60
    options.hachureGap = 8
    options.fillStyle = .zigzag
    options.fill = UIColor.red
    generator.circle(x: 50, y: 150, diameter: 80, options: options)
    wait(for: [expectation], timeout: 1)
  }
  
  func testRenderer() {
    let expectation = self.expectation(description: "")

    let size = CGSize(width: 300, height: 300)
    let view = UIView(frame: CGRect(origin: .zero, size: size))
    let engine = Engine()
    let generator = engine.generator(size: size)
    let renderer = Renderer(layer: view.layer)
    generator.onDrawable = renderer.handle
    
    var options = Options()
    options.fill = UIColor.red
    options.stroke = UIColor.green
    generator.rectangle(x: 10, y: 10, width: 50, height: 50, options: options)
    
    DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + 0.5, execute: {
      let _ = view
      expectation.fulfill()
    })

    wait(for: [expectation], timeout: 1)
  }
  
  func testRectangle() {
    let size = CGSize(width: 300, height: 300)
    let layer = draw(size: size, using: { generator in
      generator.rectangle(x: 10, y: 20, width: 100, height: 200)
    })
    
    XCTAssertEqual(layer.frame.size, size)
  }
  
  func testDrawLines() {
    let size = CGSize(width: 300, height: 300)
    let layer = draw(size: size, using: { generator in
      generator.circle(x: 80, y: 120, diameter: 50)
      generator.ellipse(x: 300, y: 100, width: 150, height: 80)
      generator.line(from: Point(x: 80, y: 120), to: Point(x: 300, y: 100))
    })
    
    XCTAssertEqual(layer.frame.size, size)
  }
  
  func testDrawFilling() {
    let size = CGSize(width: 300, height: 300)
    let layer = draw(size: size, using: { generator in
      var options = Options()
      options.fill = UIColor.green
      generator.circle(x: 50, y: 50, diameter: 80, options: options)
    })
    
    XCTAssertEqual(layer.frame.size, size)
  }
  
  func testDrawFillingSolid() {
    let size = CGSize(width: 300, height: 300)
    let layer = draw(size: size, using: { generator in
      var options = Options()
      options.fill = UIColor.red
      options.fillStyle = .solid
      
      generator.rectangle(x: 120, y: 105, width: 80, height: 80, options: options)
    })
    
    XCTAssertEqual(layer.frame.size, size)
  }
  
  func testDrawFillingHachureGap() {
    let size = CGSize(width: 300, height: 300)
    let layer = draw(size: size, using: { generator in
      var options = Options()
      options.fill = UIColor.red
      options.hachureAngle = 60
      options.hachureGap = 8
      
      generator.rectangle(x: 100, y: 100, width: 80, height: 80, options: options)
    })
    
    XCTAssertEqual(layer.frame.size, size)
  }
  
  func testPath() {
    let size = CGSize(width: 300, height: 300)
    let layer = draw(size: size, using: { generator in
      var options = Options()
      options.fill = UIColor.green
      generator.path(d: "M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z")
    })
    
    XCTAssertEqual(layer.frame.size, size)
  }
}
