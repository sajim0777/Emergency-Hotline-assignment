What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANSWER:

= getElementById: Finds one element by its ID super fast and direct. 
= getElementsByClassName: Finds all elements with a class name. 
= querySelector: Finds the first element that matches a CSS selector. 
= querySelectorAll: Finds all elements that match a CSS selector.

How do you create and insert a new element into the DOM?
ANSWER:

const ul = document.getElementById("Khabar"); const li = document.createElement("li");  li.textContent = "pizza"; ul.appendChild(li);

What is Event Bubbling and how does it work?
ANSWER:

When i  click on a child element (like a button inside a div), the event first happens on that child, then "bubbles up" to its parent, then grandparent, and then grandparent er bap .

What is Event Delegation in JavaScript? Why is it useful? ANSWER:
Imagine i have a list of buttons inside a box. Instead of putting a click listener on each button, you just put one listener on the box. When you click a button, the box notices and says, "YOYO"! That click come from one of my buttons!”

Why is it Useful? 
== you don’t need to add or remove listeners for every item. 
= even if you add buttons later, the box still catches the click. 
= few listener means better performance.

What is the difference between preventDefault() and stopPropagation() methods?
= preventDefault(): stops the browser action like clicking a link won’t go to another page.

= stopPropagation(): stops the event from bubbling up to parent like clicking a button won’t trigger its parent’s click event.