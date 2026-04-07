// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "RoughSwift",
    platforms: [
        .iOS(.v16)
    ],
    products: [
        .library(
            name: "RoughSwift",
            targets: ["RoughSwift"]
        )
    ],
    targets: [
        .target(
            name: "RoughSwift",
            resources: [
                .process("Resources")
            ]
        ),
        .testTarget(
            name: "RoughSwiftTests",
            dependencies: ["RoughSwift"]
        )
    ]
)
