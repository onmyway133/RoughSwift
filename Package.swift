// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "RoughSwift",
    platforms: [
        .iOS(.v9)
    ],
    products: [
        .library(
            name: "RoughSwift",
            targets: ["RoughSwift"]
        ),
    ],
    dependencies: [],
    targets: [
        .target(
            name: "RoughSwift",
            dependencies: []
        ),
        .testTarget(
            name: "RoughSwiftTests",
            dependencies: ["RoughSwift"]
        ),
    ]
)
