# Day 16 - Mouse Move shadow

Todays lesson covers using the mousemove event to cause the titles text-shadow to move based on the pointers location on the screen.

1. Declare variable for hover area in this case the hero div
2. Declare variable for text we will shadow, in this case the h1 tag.
3. Declare range shadow should spread out from h1, assigned to walk variable.
4. Add an event listener for mousemove event and tie it to a function (shadow).
5. Create function called shadow which we pass the event as a parameter.
   * Get width and height of hero and assign each to variable
   * Get info where the cursor is and assign variable for x and for y coordinate
   * Adjust for x and y if event target element !== to declared value for event listener, in this case hero.
   * Assign walk range to x and y variables, xWalk and yWalk.
   * Update text style textShadow using xWalk and yWalk see file for variations



We had to make some adjustments, which should be clarified.  The Event is listening on the hero div, but if there are children elements it will give us the x and y of the actual element we are hovering, in this case the child element. So what we can do is create an if statement. If this (div named hero) does not equal the event target, then we update x by adding x to the event.target.offsetLeft, and offsetTop for the y value.

### Twisted Possibilities
 -More Subtle version in mock site.
 -Blur event on mousemove, focus when at correct origin point.
 -Simple Background image move.
