import interact from "interactjs";
interact(".resizable").resizable({
  edges: { left: false, right: true, bottom: true, top: false },

  listeners: {
    move(event) {
      var target = event.target;
      var x = parseFloat(target.getAttribute("data-x")) || 0;
      var y = parseFloat(target.getAttribute("data-y")) || 0;

      // update the element's style
      target.style.width = event.rect.width + "px";
      target.style.height = event.rect.height + "px";

      // translate when resizing from top or left edges

      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px," + y + "px)";

      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }
  },
  modifiers: [
    // minimum size
    interact.modifiers.restrictSize({
      min: { width: 600, height: 400 }
    })
  ],

  inertia: true
});

interact(".icon")
  .styleCursor(false)
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: ".desktop",
        endOnly: true,
      })
    ],
    // enable autoScroll
    autoScroll: false,
    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener2

      // call this function on every dragend event
    }
  });

function dragMoveListener2(event) {
  var target = event.target;
  console.log(target);
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

// target elements with the "draggable" class
interact(".draggable")
  .styleCursor(false)
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: ".desktop",
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: false,
    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener

      // call this function on every dragend event
    }
  });

function dragMoveListener(event) {
  var target = event.target.parentElement;
  if (!event.target.classList.contains("titlebar")) {
    console.log(event.target.classList);
    return;
  }
  //console.log(target)
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}
