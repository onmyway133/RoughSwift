import XCTest
import RoughSwift

class iOSTests: XCTestCase {
  func testExample() {
    let engine = Engine()
    let generator = engine.generator(size: CGSize(width: 300, height: 300))
    generator.rectangle(x: 10, y: 20, width: 100, height: 200)
  }

  func testPerformanceExample() {
    // This is an example of a performance test case.
    self.measure {
      // Put the code you want to measure the time of here.
    }
  }
}
