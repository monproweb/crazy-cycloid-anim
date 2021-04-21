# 🌀 Crazy Cycloid Animation

![GPLV3 with text](https://www.gnu.org/graphics/gplv3-with-text-136x68.png)

Here's a link to the [animation](https://monproweb.github.io/crazy-cycloid-anim/).

## ℹ️ About

This animation runs on [p5.js](https://p5js.org/).

I was messing around with cycloid graphs in math class and came up for an idea for an animation. 

Each frame, the [epicycloid](https://en.wikipedia.org/wiki/Epicycloid) of two circles is drawn.

This graph draws the path of a point on the outer circle as it rolls around the outside of the inner circle.

![The red curve is an epicycloid traced as the small circle (radius r = 1) rolls around the outside of the large circle (radius R = 3).](https://upload.wikimedia.org/wikipedia/commons/a/ae/EpitrochoidOn3-generation.gif)

### 🧠 How ?

I draw this graph by sampling points on it and drawing lines between each adjacent pair of points. 

Each frame, I increment the radius of the outer circle, as the ratio of the two radii is very important for the shape of the graph.

### ✨ What makes this special ?

Is that varying the level of detail (aka number of points sampled on the graph) creates completely different, satisfying variations on the same animation.

Each of them follow wildly different paths but they all have a special symmetry about them.

### 🎚️ How to use ?

The slider in the bottom center controls this level-of-detail.

## 🙏 Thank You

[Eddie Hatfield](https://github.com/e-hat/crazy-cycloid-anim)

![e-hat](https://avatars.githubusercontent.com/u/22687828?v=4)