//
//  NavAccessTestUITests.swift
//  NavAccessTestUITests
//
//  Created by Andy Buckingham on 21/02/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import XCTest

class NavAccessTestUITests: XCTestCase {
  
  var app = XCUIApplication()

  override func setUp() {
    super.setUp();
    
    app.launch();
  }

  func testExample() {
    let menuButton = app.otherElements["DrawerMenuButton.Touchable"]
    _ = menuButton.waitForExistence(timeout: 30)
    menuButton.tap()
  }

}
