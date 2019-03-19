import XCTest
import RoughSwift

class iOSTests: XCTestCase {
  func testDrawble1() {
    let expectation = self.expectation(description: "")
    
    let engine = Engine()
    let generator = engine.generator(size: CGSize(width: 300, height: 300))
    
    generator.onDrawable = { drawable in
      print(drawable)
      expectation.fulfill()
    }
    
    generator.rectangle(x: 10, y: 20, width: 100, height: 200)
    wait(for: [expectation], timeout: 1)
  }
}
