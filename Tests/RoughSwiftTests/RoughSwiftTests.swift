import XCTest
@testable import RoughSwift

final class RoughSwiftTests: XCTestCase {
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
        let size = CGSize(width: 500, height: 500)
        let layer = draw(size: size, using: { generator in
            var options = Options()
            options.fill = UIColor.green
            let d = "M809.333 349q-21-31-49-52.5t-55.5-31-46.5-13.5-36-4q-35-4-75 7.5t-73 25-48 13.5q-17 0-75-22.5t-94-21.5q-65 1-121.5 35.5t-90.5 92.5q-32 57-40 129t5.5 141.5 39.5 133 60 112.5q20 30 34.5 48t36 40 44.5 32.5 46 9.5q30-1 78.5-21.5t89.5-20.5q40 0 88 20.5t81 20.5q25-1 47-11t42.5-30.5 33.5-37.5 34-47q43-64 71-146-8-3-17.5-8t-33-22.5-40.5-38.5-31.5-58-15.5-80q0-36 11.5-69.5t25-53.5 34-39 26.5-23.5 14-9.5zm-186-349q-39 2-81 23.5t-70 54.5q-27 30-41.5 73t-9.5 85q41 3 80.5-17.5t68.5-54.5q28-35 43-78t10-86z"
            generator.path(d: d, options: options)
        })

        XCTAssertEqual(layer.frame.size, size)
    }

    func testPathSolid() {
        let size = CGSize(width: 250, height: 250)
        let layer = draw(size: size, using: { generator in
            var options = Options()
            options.fill = UIColor.green
            options.fillStyle = .solid
            let d = "M85 32C115 68 239 170 281 192 311 126 274 43 244 0c97 58 146 167 121 254 28 28 40 89 29 108 -25-45-67-39-93-24C176 409 24 296 0 233c68 56 170 65 226 27C165 217 56 89 36 54c42 38 116 96 161 122C159 137 108 72 85 32z"
            generator.path(d: d, options: options)
        })

        XCTAssertEqual(layer.frame.size, size)
    }

    func testPathDrawble() {
        let expectation = self.expectation(description: "")

        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))

        generator.onDrawable = { drawable in
            XCTAssertEqual(drawable.sets[0].path, "M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z")
            XCTAssertEqual(drawable.sets[0].size, Size(width: 100, height: 100))

            expectation.fulfill()
        }

        var options = Options()
        options.fill = UIColor.green
        generator.path(d: "M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z")
        wait(for: [expectation], timeout: 1)
    }

    func testPolygon() {
        let size = CGSize(width: 500, height: 500)
        let layer = draw(size: size, using: { generator in
            let points = [
                Point(x: 10, y: 10),
                Point(x: 70, y: 30),
                Point(x: 150, y: 100),
                Point(x: 30, y: 140)
            ]

            var options = Options()
            options.stroke = UIColor.red
            options.fill = UIColor.green
            options.hachureAngle = 65

            generator.polygon(points: points, options: options)
        })

        XCTAssertEqual(layer.frame.size, size)
    }
}
