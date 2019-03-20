import XCTest
import RoughSwift

class iOSTests: XCTestCase {
  func testDrawble() {
    let expectation = self.expectation(description: "")
    
    let engine = Engine()
    let generator = engine.generator(size: CGSize(width: 300, height: 300))
    
    generator.onDrawable = { drawable in
      XCTAssertEqual(drawable.shape, "rectangle")
      XCTAssertEqual(drawable.sets.count, 1)
      
      let set = drawable.sets[0]
      XCTAssertEqual(set.operations.count, 16)
    
      XCTAssertEqual(drawable.options.count, 14)
      
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
      XCTAssertEqual(drawable.sets.count, 1)
      
      let set = drawable.sets[0]
      XCTAssertEqual(set.operations.count, 22)
      
      XCTAssertEqual(drawable.options.count, 14)
      XCTAssertEqual(drawable.options["fillStyle"] as? String, "zigzag")
      XCTAssertEqual(drawable.options["hachureAngle"] as? NSNumber, 60)
      XCTAssertEqual(drawable.options["hachureGap"] as? NSNumber, 8)
      
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
}
