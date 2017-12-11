# Day 15 - Local Storage

Day covers Local Storage and Event Delegation

`e.preventDefault();` prevents default action from occurring. In this case we are preventing the browser default from refreshing after submitting. You can learn more about it [HERE](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault 'MDM Event.preventDefault()'):


What we have done in this lesson:
1. Added an event listener to the submit button.
2. Create add item function triggered by event
   * Query form selector for name="item" and store value in variable called text.
   * Create new object called item with properties of text and done.
   * Push item into items array.
   * Used `this.reset()` to clear input field after submit.
3. Create populateList function
   * Takes two parameters named plates, and platesList.
   * Replace plateList parameter inner html with string get by mapping over plates array.
   * Added input checkbox linked with label using label "for" and input "id" attributes.
   * Get item property "done" value by using [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator 'MDN Ternary Operator').
4. Store data in local storage
   * Use JSON.stringify to convert object to string.
   * Store to localStorage using `localStorage.setItem()`
   * Add local stored info to list on page load by calling populateList function at end of JavaScript
   * convert local storage back to object using `JSON.parse()` on local storage and store in items array. Array will return local storage or nothing if there is no local storage.
5. Create toggle function to persist toggle state.
   * Go to ul element listen for click on child li input.
   * Store event target to variable named element.
   * Get dataset index value from element and store to variable named index.
   * Set done value to opposite of current value (true/false).
   * Stringify with JSON and store to local Storage.
   * Populate list to update list.

If we try using a normal event listener directly on the list item it will fail, because those items do not exist on the initial page load. If we move the event listener to after the populate list function and add an item it fails again due to a populate list occuring before the list items are created again. To get around this we used _Event Delegation_. Essentially we put the event listener on the parent element which already exist on the page at initial load. We then check to see if a target child element was click, if so the event passes and is triggered. This is a bit of a confusing concept. I found [this](https://davidwalsh.name/event-delegate 'David Walsh Event Delegation') article and will revisit my assessment after reviewing it.

### Twisted Possibilities:
* To-Do list
* Parts Checklist
* Grill Line Order list

Add Functionality: Toggle All Function, Remove Item Function, Remove All Function
