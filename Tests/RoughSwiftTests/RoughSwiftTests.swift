import XCTest
@testable import RoughSwift

final class RoughSwiftTests: XCTestCase {
    func testDrawing() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))

        let drawing = try XCTUnwrap(
            generator.generate(drawable: Rectangle(x: 10, y: 20, width: 100, height: 200))
        )

        XCTAssertEqual(drawing.shape, "rectangle")
        XCTAssertEqual(drawing.sets.count, 2)

        let set = drawing.sets[0]
        XCTAssertEqual(set.operations.count, 208)
    }

    func testDrawingWithOption() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))

        var options = Options()
        options.hachureAngle = 60
        options.hachureGap = 8
        options.fillStyle = .zigzag
        options.fill = UIColor.red
        let drawing = try XCTUnwrap(
            generator.generate(drawable: Circle(x: 50, y: 150, diameter: 80), options: options)
        )

        XCTAssertEqual(drawing.shape, "circle")
        XCTAssertEqual(drawing.sets.count, 2)

        let set = drawing.sets[0]
        XCTAssertTrue(set.operations.count == 68 || set.operations.count == 76)

        XCTAssertEqual(drawing.options.fillStyle, .zigzag)
        XCTAssertEqual(drawing.options.hachureAngle, 60)
        XCTAssertEqual(drawing.options.hachureGap, 8)
    }

    func testRenderer() throws {
        let size = CGSize(width: 300, height: 300)
        let engine = Engine()
        let generator = engine.generator(size: size)

        var options = Options()
        options.fill = UIColor.red
        options.stroke = UIColor.green

        let drawing = try XCTUnwrap(generator.generate(
            drawable: Rectangle(x: 10, y: 10, width: 50, height: 50),
            options: options
        ))

        let view = UIView(frame: CGRect(origin: .zero, size: size))
        let renderer = Renderer(layer: view.layer)
        renderer.render(drawing: drawing)

        XCTAssertEqual(view.layer.frame.size, size)
    }

    func testRectangle() {
        let size = CGSize(width: 300, height: 300)
        let engine = Engine()
        let generator = engine.generator(size: size)

        let drawing = generator.generate(
            drawable: Rectangle(x: 10, y: 20, width: 100, height: 200)
        )
        XCTAssertNotNil(drawing)
    }
}
