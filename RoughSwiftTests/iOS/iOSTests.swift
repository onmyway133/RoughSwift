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
      XCTAssertEqual(set.operations.count, 76)
      
      XCTAssertEqual(drawable.options.fillStyle, .zigzag)
      XCTAssertEqual(drawable.options.hachureAngle, 60)
      XCTAssertEqual(drawable.options.hachureGap, 8)
      
      expectation.fulfill()
    }
    
    var options = Options()
    options.hachureAngle = 60
    options.hachureGap = 8
    options.fillStyle = .zigzag
    options.fill = "red"
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
    options.fill = "rgb(10,150,10)"
    options.stroke = "green"
    generator.rectangle(x: 10, y: 10, width: 50, height: 50, options: options)
    
    DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + 0.9, execute: {
      let abc = view
      expectation.fulfill()
    })

    wait(for: [expectation], timeout: 1)
  }
}
