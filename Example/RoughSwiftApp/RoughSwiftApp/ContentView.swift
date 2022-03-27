//
//  ContentView.swift
//  RoughSwiftApp
//
//  Created by khoa on 26/03/2022.
//

import SwiftUI
import RoughSwift

struct ContentView: View {
    @State private var flag = false
    var body: some View {
        TabView {
            StylesView()
                .tabItem {
                    Label("Styles", systemImage: "paintpalette.fill")
                }
            Chartview()
                .tabItem {
                    Label("Chart", systemImage: "chart.bar")
                }

            SVGView()
                .tabItem {
                    Label("SVG", systemImage: "swift")
                }

            CustomizeView()
                .tabItem {
                    Label("Customize", systemImage: "paintbrush.pointed.fill")
                }
        }
    }
}

struct CustomizeView: View {
    @State var flag = false

    var body: some View {
        VStack {
            Button(action: {
                flag.toggle()
            }) {
                Text("Click")
            }

            RoughView()
                .fill(flag ? UIColor.green : UIColor.yellow)
                .fillStyle(flag ? .hachure : .dots)
                .circle()
                .frame(width: flag ? 200 : 100, height: flag ? 200 : 100)
        }

    }
}

struct SVGView: View {
    var apple: String {
        "M85 32C115 68 239 170 281 192 311 126 274 43 244 0c97 58 146 167 121 254 28 28 40 89 29 108 -25-45-67-39-93-24C176 409 24 296 0 233c68 56 170 65 226 27C165 217 56 89 36 54c42 38 116 96 161 122C159 137 108 72 85 32z"
    }

    var body: some View {
        VStack {
            RoughView()
                .stroke(.systemTeal)
                .fill(.red)
                .draw(Path(d: apple))
                .frame(width: 300, height: 300)
        }
    }
}

struct StylesView: View {
    var body: some View {
        LazyVGrid(columns: [.init(), .init(), .init()], spacing: 12) {
            RoughView()
                .fill(.red)
                .fillStyle(.crossHatch)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.green)
                .fillStyle(.dashed)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.purple)
                .fillStyle(.dots)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.cyan)
                .fillStyle(.hachure)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.orange)
                .fillStyle(.solid)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.gray)
                .fillStyle(.starBurst)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.yellow)
                .fillStyle(.zigzag)
                .circle()
                .frame(width: 100, height: 100)

            RoughView()
                .fill(.systemTeal)
                .fillStyle(.zigzagLine)
                .circle()
                .frame(width: 100, height: 100)
        }
    }
}

struct Chartview: View {
    var heights: [CGFloat] {
        Array(0 ..< 10).map { _ in CGFloat.random(in: 0 ..< 150) }
    }

    var body: some View {
        HStack {
            ForEach(0 ..< 10) { index in
                VStack {
                    Spacer()
                    RoughView()
                        .fill(.yellow)
                        .rectangle()
                        .frame(height: heights[index])
                }
            }
        }
        .padding(.horizontal)
        .padding(.bottom, 100)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
