(function ($) {
    "use strict";


/*----------------------------
 Canvas
------------------------------ */

var granimInstance = new Granim({
    element: "#canvas-gradient",
    name: "basic-gradient",
    direction: "left-right",
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ["#d620e1", "#e120b6"],
                ["#20d1e1", "#19f892"],
                ["#e15f20", "#e1208d"]
            ]
        }
    }
})

})(jQuery); 