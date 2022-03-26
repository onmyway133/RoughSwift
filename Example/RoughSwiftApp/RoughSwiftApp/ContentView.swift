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
        VStack {
            RoughView()
                .maxRandomnessOffset(flag ? 10 : 20)
                .roughness(flag ? 1 : 2)
                .frame(width: flag ? 200 : 100, height: flag ? 200 : 100)
            Button(action: {
                flag.toggle()
            }) {
                Text("click")
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
