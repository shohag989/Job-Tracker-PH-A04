# Here is the five Answers of Challenge part.

#1- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

##Answer:
getElementById()
-Selects one element by its id.
-Returns a single element or null.
-Very direct and fast.

const box = document.getElementById("box");
(Use it when we know the id is unique and we only need that one element.)

getElementsByClassName()
-Selects elements by class name.
-Returns an HTMLCollection.
-It’s a live collection, meaning if the DOM changes, the collection updates automatically.
const items = document.getElementsByClassName("item");
(We can’t directly use array methods like map() unless you convert it to an array.)

querySelector()
-Uses CSS selectors.
-Returns the first matching element.

const firstItem = document.querySelector(".item");

querySelectorAll()
-Also uses CSS selectors.
-Returns all matching elements as a NodeList.
-Not live.
-Supports forEach().

const allItems = document.querySelectorAll(".item");
(In modern projects, most developers prefer querySelector and querySelectorAll because they’re flexible and consistent.)

#2- How do you create and insert a new element into the DOM.

## Answer
When I want to create and insert a new element, I follow three basic steps.

Step 1: Create the element

const newDiv = document.createElement("div");

Step 2: Add content or attributes

newDiv.textContent = "Hello World";
newDiv.classList.add("box");

Step 3: Insert it into the DOM

document.body.append(newDiv);

Or if I want to insert it inside a specific container:

const container = document.getElementById("container");
container.append(newDiv);

So the overall flow is: create - customize - insert.

#3- What is Event Bubbling? And how does it work.

## Answer
Event bubbling means when an event happens on a child element, it automatically moves up through its parent elements.

For example:

<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

If I click the button, first "Child clicked" will log, then "Parent clicked".

That happens because the event starts at the target element and then bubbles up to its parent, then grandparent, and so on.

#4- What is Event Delegation in JavaScript? Why is it useful.

## Answer
Event delegation is a technique where instead of adding event listeners to multiple child elements, we add a single event listener to their parent.
Example:

document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

Here, I am listening on the parent <ul> instead of every <li>.

This is useful because:
-It improves performance since we use fewer event listeners.
-It works for dynamically added elements.
-The code becomes cleaner and easier to manage.

Even if new <li> elements are added later, the event still works because of bubbling.

#5 - What is the difference between preventDefault() and stopPropagation() methods.

##Answer
These two methods are often confused, but they do different things.
preventDefault()
This method stops the browser’s default behavior.

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

For example, normally a form reloads the page on submit.
By using preventDefault(), I can stop that behavior and handle the form manually.


stopPropagation()
This method stops the event from moving up to parent elements.

document.getElementById("child").addEventListener("click", function (e) {
  e.stopPropagation();
});

If I use this inside the child, the parent’s click event will not run.
So in simple terms:
-preventDefault() stops the browser’s default action.
-stopPropagation() stops the event from bubbling up.