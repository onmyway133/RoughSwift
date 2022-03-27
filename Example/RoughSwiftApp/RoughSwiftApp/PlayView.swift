//
//  PlayView.swift
//  RoughSwiftApp
//
//  Created by khoa on 26/03/2022.
//

import SwiftUI
import RoughSwift

struct PlayView: View {
    var heights: [CGFloat] {
        Array(0 ..< 10).map { _ in CGFloat.random(in: 0 ..< 150) }
    }
    var body: some View {
        HStack {
            ForEach(0 ..< 10) { index in
                VStack {
                    Spacer()
                    RoughView()
                        .fill(.orange)
                        .rectangle()
                        .frame(height: heights[index])
                }
            }
        }
    }
}

struct PlayView_Previews: PreviewProvider {
    static var previews: some View {
        PlayView()
    }
}
