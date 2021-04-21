/*
    Crazy Cycloids Animation
    Copyright (C) 2021  Thomas Erhel

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
let tSlider;

/*
The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color and to load media such as images and fonts as the program starts. There can only be one setup() function for each program and it shouldn't be called again after its initial execution.
Note: Variables declared within setup() are not accessible within other functions, including draw().
*/
function setup() {
  /*
  Creates a canvas element in the document, and sets the dimensions of it in pixels. This method should be called only once at the start of setup. Calling createCanvas more than once in a sketch will result in very unpredictable behavior. If you want more than one drawing canvas you could use createGraphics (hidden by default but it can be shown).
  Important note: in 2D mode (i.e. when p5.Renderer is not set) the origin (0,0) is positioned at the top left of the screen. In 3D mode (i.e. when p5.Renderer is set to WEBGL), the origin is positioned at the center of the canvas. See this issue for more information.
  The system variables width and height are set by the parameters passed to this function. If createCanvas() is not used, the window will be given a default size of 100x100 pixels.
  For more ways to position the canvas, see the positioning the canvas wiki page.

  createCanvas(w, h, [renderer])
  
  w Number: width of the canvas
  h Number: height of the canvas
  renderer Constant: either P2D or WEBGL (Optional)
  */
  createCanvas(windowWidth, windowHeight)
  /*
  The background() function sets the color used for the background of the p5.js canvas. The default background is transparent. This function is typically used within draw() to clear the display window at the beginning of each frame, but it can be used inside setup() to set the background on the first frame of animation or if the background need only be set once.
  The color is either specified in terms of the RGB, HSB, or HSL color depending on the current colorMode. (The default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255.
  If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.
  A p5.Color object can also be provided to set the background color.
  A p5.Image can also be provided to set the background image.

  background(color)
  background(colorstring, [a])
  background(gray, [a])
  background(v1, v2, v3, [a])
  background(values)
  background(image, [a])
  
  color p5.Color: any value created by the color() function
  colorstring String: color string, possible formats include: integer rgb() or rgba(), percentage rgb() or rgba(), 3-digit hex, 6-digit hex
  a Number: opacity of the background relative to current color range (default is 0-255) (Optional)
  gray Number: specifies a value between white and black
  v1 Number: red or hue value (depending on the current color mode)
  v2 Number: green or saturation value (depending on the current color mode)
  v3 Number: blue or brightness value (depending on the current color mode)
  values Number[]: an array containing the red, green, blue and alpha components of the color
  image p5.Image: image created with loadImage() or createImage(), to set as background (must be same size as the sketch window)
  */
  background(236, 111, 24)
  /*
  Sets the current alignment for drawing text. Accepts two arguments: horizAlign (LEFT, CENTER, or RIGHT) and vertAlign (TOP, BOTTOM, CENTER, or BASELINE).
  The horizAlign parameter is in reference to the x value of the text() function, while the vertAlign parameter is in reference to the y value.
  So if you write textAlign(LEFT), you are aligning the left edge of your text to the x value you give in text(). If you write textAlign(RIGHT, TOP), you are aligning the right edge of your text to the x value and the top of edge of the text to the y value.
  textAlign(horizAlign, [vertAlign])
  textAlign()

  horizAlign Constant: horizontal alignment, either LEFT, CENTER, or RIGHT
  vertAlign Constant: vertical alignment, either TOP, BOTTOM, CENTER, or BASELINE (Optional)
  */
  textAlign(CENTER, BOTTOM)
  /*
  Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all shapes drawn after the fill command will be filled with the color orange. This color is either specified in terms of the RGB or HSB color depending on the current colorMode(). (The default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255.
  If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.
  A p5 Color object can also be provided to set the fill color.

  fill(v1, v2, v3, [alpha])
  fill(value)
  fill(gray, [alpha])
  fill(values)
  fill(color)
  
  v1 Number: red or hue value relative to the current color range
  v2 Number: green or saturation value relative to the current color range
  v3 Number: blue or brightness value relative to the current color range
  alpha Number: (Optional)
  value String: a color string
  gray Number: a gray value
  values Number[]: an array containing the red,green,blue & and alpha components of the color
  color p5.Color: the fill color
  */
  fill(0, 0, 0)
  /*
  Creates a slider <input></input> element in the DOM. Use .size() to set the display length of the slider.

  createSlider(min, max, [value], [step])

  min Number: minimum value of the slider
  max Number: maximum value of the slider
  value Number: default value of the slider (Optional)
  step Number: step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value) (Optional)
  
  p5.Element: pointer to p5.Element holding created node 
  */
  tSlider = createSlider(Math.PI, 42, Math.PI, 0);

  /*
  Returns the orientation in degrees (in 90-degree increments) of the viewport relative to the device's natural orientation.
  Its only possible values are -90, 0, 90, and 180. Positive values are clockwise; negative values are counterclockwise.
  */
  if (typeof window.orientation !== "undefined" ||
    /*
    The NavigatorID.userAgent read-only property returns the user agent string for the current browser.
    The specification asks browsers to provide as little information via this field as possible. Never assume that the value of this property will stay the same in future versions of the same browser. Try not to use it at all, or only for current and past versions of a browser. New browsers may start using the same UA, or part of it, as an older browser: you really have no guarantee that the browser agent is indeed the one advertised by this property.
    Also keep in mind that users of a browser can change the value of this field if they want (UA spoofing).
    Browser identification based on detecting the user agent string is unreliable and is not recommended, as the user agent string is user configurable. For example:
    In Firefox, you can change the preference general.useragent.override in about:config. Some Firefox extensions do that; however, this only changes the HTTP header that gets sent, and doesn't affect browser detection performed by JavaScript code.
    Opera 6+ allows users to set the browser identification string via a menu.
    Microsoft Internet Explorer uses the Windows registry.
    Safari and iCab allow users to change the browser user agent string to predefined Internet Explorer or Netscape strings via a menu.

    var ua = navigator.userAgent;

    A DOMString specifying the complete user agent string the browser provides both in HTTP headers and in response to this and other related methods on the Navigator object.
    The user agent string is built on a formal structure which can be decomposed into several pieces of info. Each of these pieces of info comes from other navigator properties which are also settable by the user. Gecko-based browsers comply with the following general structure:

    userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;
    Localization; rv: revision-version-number) product/productSub
    Application-Name Application-Name-version
    */
    navigator.userAgent.indexOf('IEMobile' !== -1)) {
    /*
    position()
    position([x], [y], positionType)
    
    x Number: x-position relative to upper left of window (optional) (Optional)
    y Number: y-position relative to upper left of window (optional) (Optional)
    positionType String: it can be static, fixed, relative, sticky, initial or inherit (optional)

    Object: object of form { x: 0, y: 0 } containing the position of the element in an object
    */
    tSlider.position(width / 2, height / 1.3);
  } else {
    tSlider.position(width / 2, height / 1.3);
  }
}

/*
 the amount of detail, changing this value makes a totally new animation!

 let urlStep = (new URLSearchParameters(document.location.search)).get('tStep');
 let tStep = (!isNaN(inputStep)) ? inputStep : 4
*/
let T = 300
// initial radius of smaller circle
let r = 50
// initial radius of larger circle
let R = 100
// speed of the animation
let increment = .01
let rInit = 50

/*
Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called. Note if noLoop() is called in setup(), draw() will still be executed once before stopping. draw() is called automatically and should never be called explicitly.
It should always be controlled with noLoop(), redraw() and loop(). After noLoop() stops the code in draw() from executing, redraw() causes the code inside draw() to execute once, and loop() will cause the code inside draw() to resume executing continuously.
The number of times draw() executes in each second may be controlled with the frameRate() function.
There can only be one draw() function for each sketch, and draw() must exist if you want the code to run continuously, or to process events such as mousePressed(). Sometimes, you might have an empty call to draw() in your program, as shown in the above example.
It is important to note that the drawing coordinate system will be reset at the beginning of each draw() call. If any transformations are performed within draw() (ex: scale, rotate, translate), their effects will be undone at the beginning of draw(), so transformations will not accumulate over time. On the other hand, styling applied (ex: fill, stroke, etc) will remain in effect.
*/
function draw() {
  // scaling, otherwise the animation grows off screen
  let tStep = tSlider.value();
  let s = (rInit + R) / (r + R)
  /*
  Increases or decreases the size of a shape by expanding or contracting vertices. Objects always scale from their relative origin to the coordinate system. Scale values are specified as decimal percentages. For example, the function call scale(2.0) increases the dimension of a shape by 200%.
  Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), the transformation is reset when the loop begins again.
  Using this function with the z parameter is only available in WEBGL mode. This function can be further controlled with push() and pop().
  
  scale(s, [y], [z])
  scale(scales)

  s Number|p5.Vector|Number[]: percent to scale the object, or percentage to scale the object in the x-axis if multiple arguments are given
  y Number: percent to scale the object in the y-axis (Optional)
  z Number: percent to scale the object in the z-axis (webgl only) (Optional)
  scales p5.Vector|Number[]: per-axis percents to scale the object
  */
  scale(s)
  /*
  Clears the pixels within a buffer. This function only clears the canvas. It will not clear objects created by createX() methods such as createVideo() or createDiv(). Unlike the main graphics context, pixels in additional graphics areas created with createGraphics() can be entirely or partially transparent. This function clears everything to make all of the pixels 100% transparent.
  
  clear()
  */
  clear()
  /*
  The background() function sets the color used for the background of the p5.js canvas. The default background is transparent. This function is typically used within draw() to clear the display window at the beginning of each frame, but it can be used inside setup() to set the background on the first frame of animation or if the background need only be set once.
  The color is either specified in terms of the RGB, HSB, or HSL color depending on the current colorMode. (The default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255.
  If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.
  A p5.Color object can also be provided to set the background color.
  A p5.Image can also be provided to set the background image.

  background(color)
  background(colorstring, [a])
  background(gray, [a])
  background(v1, v2, v3, [a])
  background(values)
  background(image, [a])
 
  color p5.Color: any value created by the color() function
  colorstring String: color string, possible formats include: integer rgb() or rgba(), percentage rgb() or rgba(), 3-digit hex, 6-digit hex
  a Number: opacity of the background relative to current color range (default is 0-255) (Optional)
  gray Number: specifies a value between white and black
  v1 Number: red or hue value (depending on the current color mode)
  v2 Number: green or saturation value (depending on the current color mode)
  v3 Number: blue or brightness value (depending on the current color mode)
  values Number[]: an array containing the red, green, blue and alpha components of the color
  image p5.Image: image created with loadImage() or createImage(), to set as background (must be same size as the sketch window)
  */
  background(236, 111, 24)

  let lastX1 = width / 2 + R,
    lastY1 = height / 2
  let lastX2 = width / 2 + R,
    lastY2 = height / 2

  /*
  The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with push(), it builds on the current style and transform information. The push() and pop() functions can be embedded to provide more control. (See the second example for a demonstration.)
  push() stores information related to the current transformation state and style settings controlled by the following functions: fill(), noFill(), noStroke(), stroke(), tint(), noTint(), strokeWeight(), strokeCap(), strokeJoin(), imageMode(), rectMode(), ellipseMode(), colorMode(), textAlign(), textFont(), textSize(), textLeading(), applyMatrix(), resetMatrix(), rotate(), scale(), shearX(), shearY(), translate(), noiseSeed().
  In WEBGL mode additional style settings are stored. These are controlled by the following functions: setCamera(), ambientLight(), directionalLight(), pointLight(), texture(), specularMaterial(), shininess(), normalMaterial() and shader().
  
  push()
  */
  push()
  /*
  Specifies an amount to displace objects within the display window. The x parameter specifies left/right translation, the y parameter specifies up/down translation.
  Transformations are cumulative and apply to everything that happens after and subsequent calls to the function accumulates the effect. For example, calling translate(50, 0) and then translate(20, 0) is the same as translate(70, 0). If translate() is called within draw(), the transformation is reset when the loop begins again. This function can be further controlled by using push() and pop().

  translate(x, y, [z])
  translate(vector)

  x Number: left/right translation
  y Number: up/down translation
  z Number: forward/backward translation (webgl only) (Optional)
  vector p5.Vector: the vector to translate by
  */
  translate(width / 2 / s, height / 2 / s)
  /*
  Sets the width of the stroke used for lines, points and the border around shapes. All widths are set in units of pixels.

  strokeWeight(weight)

  weight Number: the weight of the stroke (in pixels)
  */
  strokeWeight(2 / s)
  /*
  for creates a loop that is useful for executing one section of code multiple times.
  A 'for loop' consists of three different expressions inside of a parenthesis, all of which are optional.These expressions are used to control the number of times the loop is run.The first expression is a statement that is used to set the initial state for the loop.The second expression is a condition that you would like to check before each loop. If this expression returns false then the loop will exit.The third expression is executed at the end of each loop. These expression are seperated by ; (semi-colon).In case of an empty expression, only a semi-colon is written.
  The code inside of the loop body (in between the curly braces) is executed between the evaluation of the second and third expression.
  As with any loop, it is important to ensure that the loop can 'exit', or that the test condition will eventually evaluate to false. The test condition with a for loop is the second expression detailed above. Ensuring that this expression can eventually become false ensures that your loop doesn't attempt to run an infinite amount of times, which can crash your browser.
  From the MDN entry: Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
  */
  for (let t = 0; t < T; t += tStep) {
    // x and y of epicycloid
    let x1 = (r + R) * cos(t) - r * cos((R + r) / r * t),
      y1 = (r + R) * sin(t) - r * sin((R + r) / r * t)

    // x and y of hypocycloid
    let x2 = (R - r) * cos(t) + r * cos((R - r) / r * t),
      y2 = (R - r) * sin(t) - r * sin((R - r) / r * t)

    /*
    Sets the color used to draw lines and borders around shapes. This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255.
    If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.
    A p5 Color object can also be provided to set the stroke color.

    stroke(v1, v2, v3, [alpha])
    stroke(value)
    stroke(gray, [alpha])
    stroke(values)
    stroke(color)

    v1 Number: red or hue value relative to the current color range
    v2 Number: green or saturation value relative to the current color range
    v3 Number: blue or brightness value relative to the current color range
    alpha Number: (Optional)
    value String: a color string
    gray Number: a gray value
    values Number[]: an array containing the red,green,blue & and alpha components of the color
    color p5.Color: the stroke color
    */
    stroke(158, 221, 248)
    if (t > 0) {
      /*
      Draws a line (a direct path between two points) to the screen. If called with only 4 parameters, it will draw a line in 2D with a default width of 1 pixel. This width can be modified by using the strokeWeight() function. A line cannot be filled, therefore the fill() function will not affect the color of a line. So to color a line, use the stroke() function.
      line(x1, y1, x2, y2)
      line(x1, y1, z1, x2, y2, z2)

      x1 Number: the x-coordinate of the first point
      y1 Number: the y-coordinate of the first point
      x2 Number: the x-coordinate of the second point
      y2 Number: the y-coordinate of the second point
      z1 Number: the z-coordinate of the first point
      z2 Number: the z-coordinate of the second point

      Drawing lines between points on graph.
      */
      line(lastX1, -lastY1, x1, -y1)
      line(lastX2, -lastY2, x2, -y2)
    }
    lastX1 = x1
    lastY1 = y1
    lastX2 = x2
    lastY2 = y2
  }
  // stepping the animation forward
  r += increment
  /*
  The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with push(), it builds on the current style and transform information. The push() and pop() functions can be embedded to provide more control. (See the second example for a demonstration.)
  push() stores information related to the current transformation state and style settings controlled by the following functions: fill(), noFill(), noStroke(), stroke(), tint(), noTint(), strokeWeight(), strokeCap(), strokeJoin(), imageMode(), rectMode(), ellipseMode(), colorMode(), textAlign(), textFont(), textSize(), textLeading(), applyMatrix(), resetMatrix(), rotate(), scale(), shearX(), shearY(), translate(), noiseSeed().
  In WEBGL mode additional style settings are stored. These are controlled by the following functions: setCamera(), ambientLight(), directionalLight(), pointLight(), texture(), specularMaterial(), shininess(), normalMaterial() and shader().

  pop()
  */
  pop()
  /*
  Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all shapes drawn after the fill command will be filled with the color orange. This color is either specified in terms of the RGB or HSB color depending on the current colorMode(). (The default color space is RGB, with each value in the range from 0 to 255). The alpha range by default is also 0 to 255.
  If a single string argument is provided, RGB, RGBA and Hex CSS color strings and all named color strings are supported. In this case, an alpha number value as a second argument is not supported, the RGBA form should be used.
  A p5 Color object can also be provided to set the fill color.

  fill(v1, v2, v3, [alpha])
  fill(value)
  fill(gray, [alpha])
  fill(values)
  fill(color)

  v1 Number: red or hue value relative to the current color range
  v2 Number: green or saturation value relative to the current color range
  v3 Number: blue or brightness value relative to the current color range
  alpha Number: (Optional)
  value String: a color string
  gray Number: a gray value
  values Number[]: an array containing the red,green,blue & and alpha components of the color
  color p5.Color: the fill color
  */
  fill(0, 0, 0)
  /*
  Sets/gets the current font size. This size will be used in all subsequent calls to the text() function. Font size is measured in pixels.

  textSize(theSize)
  textSize()

  theSize Number: the size of the letters in units of pixels
  */
  textSize(64 / s)
  /*
  Draws text to the screen. Displays the information specified in the first parameter on the screen in the position specified by the additional parameters. A default font will be used unless a font is set with the textFont() function and a default size will be used unless a font is set with textSize(). Change the color of the text with the fill() function. Change the outline of the text with the stroke() and strokeWeight() functions.
  The text displays in relation to the textAlign() function, which gives the option to draw to the left, right, and center of the coordinates.
  The x2 and y2 parameters define a rectangular area to display within and may only be used with string data. When these parameters are specified, they are interpreted based on the current rectMode() setting. Text that does not fit completely within the rectangle specified will not be drawn to the screen. If x2 and y2 are not specified, the baseline alignment is the default, which means that the text will be drawn upwards from x and y.
  WEBGL: Only opentype/truetype fonts are supported. You must load a font using the loadFont() method (see the example above). stroke() currently has no effect in webgl mode.

  text(str, x, y, [x2], [y2])

  str String|Object|Array|Number|Boolean: the alphanumeric symbols to be displayed
  x Number: x-coordinate of text
  y Number: y-coordinate of text
  x2 Number: by default, the width of the text box, see rectMode() for more info (Optional)
  y2 Number: by default, the height of the text box, see rectMode() for more info (Optional)
  */
  text(tSlider.value(), (tSlider.x) / s, (tSlider.y - height / 2) / s);
}
