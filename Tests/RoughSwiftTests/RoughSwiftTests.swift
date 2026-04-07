#if canImport(UIKit)
import Testing
import UIKit
@testable import RoughSwift

@Suite("RoughSwift Tests")
struct RoughSwiftTests {

    // MARK: - Engine & Generator

    @Test("Engine creates a generator without crashing")
    func engineCreatesGenerator() {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))
        // Generator must be non-nil (creation itself is the assertion)
        _ = generator
    }

    @Test("Shared engine is reusable")
    func sharedEngine() {
        let g1 = Engine.shared.generator(size: CGSize(width: 100, height: 100))
        let g2 = Engine.shared.generator(size: CGSize(width: 200, height: 200))
        _ = g1
        _ = g2
    }

    // MARK: - Drawing: Shape Names

    @Test("Rectangle drawing has correct shape name")
    func rectangleShapeName() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))
        let drawing = try #require(
            generator.generate(drawable: Rectangle(x: 10, y: 20, width: 100, height: 200))
        )
        #expect(drawing.shape == "rectangle")
    }

    @Test("Circle drawing has correct shape name")
    func circleShapeName() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))
        let drawing = try #require(
            generator.generate(drawable: Circle(x: 50, y: 150, diameter: 80))
        )
        #expect(drawing.shape == "circle")
    }

    @Test("Ellipse drawing has correct shape name")
    func ellipseShapeName() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))
        let drawing = try #require(
            generator.generate(drawable: Ellipse(x: 50, y: 50, width: 100, height: 60))
        )
        #expect(drawing.shape == "ellipse")
    }

    @Test("Line drawing has correct shape name")
    func lineShapeName() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))
        let drawing = try #require(
            generator.generate(drawable: Line(from: Point(x: 0, y: 0), to: Point(x: 100, y: 100)))
        )
        #expect(drawing.shape == "line")
    }

    // MARK: - Drawing: Operation Sets

    @Test("Rectangle drawing produces multiple operation sets")
    func rectangleOperationSets() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))
        let drawing = try #require(
            generator.generate(drawable: Rectangle(x: 10, y: 20, width: 100, height: 200))
        )
        #expect(drawing.sets.count >= 1)
        #expect(drawing.sets.allSatisfy { !$0.operations.isEmpty })
    }

    @Test("Circle drawing produces non-empty operations")
    func circleOperations() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))
        let drawing = try #require(
            generator.generate(drawable: Circle(x: 50, y: 150, diameter: 80))
        )
        #expect(drawing.sets.count >= 1)
        let totalOps = drawing.sets.reduce(0) { $0 + $1.operations.count }
        #expect(totalOps > 0)
    }

    // MARK: - Options

    @Test("Custom options are preserved in drawing")
    func customOptionsPreserved() throws {
        let engine = Engine()
        let generator = engine.generator(size: CGSize(width: 300, height: 300))

        var options = Options()
        options.hachureAngle = 60
        options.hachureGap = 8
        options.fillStyle = .zigzag

        let drawing = try #require(
            generator.generate(drawable: Circle(x: 50, y: 150, diameter: 80), options: options)
        )

        #expect(drawing.options.fillStyle == .zigzag)
        #expect(drawing.options.hachureAngle == 60)
        #expect(drawing.options.hachureGap == 8)
    }

    @Test("Default options have expected values")
    func defaultOptions() {
        let options = Options()
        #expect(options.fillStyle == .hachure)
        #expect(options.roughness == 1)
        #expect(options.strokeWidth == 1)
    }

    // MARK: - Renderer

    @MainActor
    @Test("Renderer adds sublayers to parent layer")
    func rendererAddsSublayers() throws {
        let size = CGSize(width: 300, height: 300)
        let engine = Engine()
        let generator = engine.generator(size: size)

        var options = Options()
        options.fill = .red
        options.stroke = .green

        let drawing = try #require(
            generator.generate(
                drawable: Rectangle(x: 10, y: 10, width: 50, height: 50),
                options: options
            )
        )

        let view = UIView(frame: CGRect(origin: .zero, size: size))
        let renderer = Renderer(layer: view.layer)
        renderer.render(drawing: drawing)

        #expect(view.layer.sublayers?.isEmpty == false)
    }

    // MARK: - Color

    @Test("UIColor round-trips through hex")
    func colorHexRoundTrip() {
        let original = UIColor.red
        let hex = original.toHex()
        let restored = UIColor(hex: hex)

        var r1: CGFloat = 0, r2: CGFloat = 0
        original.getRed(&r1, green: nil, blue: nil, alpha: nil)
        restored.getRed(&r2, green: nil, blue: nil, alpha: nil)

        #expect(abs(r1 - r2) < 0.01)
    }

    @Test("Clear color converts to 'none'")
    func clearColorToHex() {
        #expect(UIColor.clear.toHex() == "none")
    }

    @Test("'none' hex string becomes clear color")
    func noneHexStringBecomesClear() {
        let color = UIColor(hex: "none")
        #expect(color == .clear)
    }

    // MARK: - FillStyle

    @Test("All fill styles have valid raw values")
    func fillStyleRawValues() {
        let styles: [FillStyle] = [
            .hachure, .solid, .zigzag, .crossHatch,
            .dots, .sunBurst, .starBurst, .dashed, .zigzagLine
        ]
        #expect(styles.allSatisfy { !$0.rawValue.isEmpty })
    }
}
#endif
