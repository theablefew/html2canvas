/*
  html2canvas @VERSION@ <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/
function h2cRenderContext(width, height) {
    var storage = [];
    return {
        storage: storage,
        width: width,
        height: height,
        fillRect: function () {
            storage.push({
                type: "function",
                name: "fillRect",
                'arguments': arguments
            });
        },
        drawShape: function() {
          
            var shape = [];
            
            storage.push({
                type: "function",
                name: "drawShape",
                'arguments': shape
            });
          
            return {
                moveTo: function() {
                    shape.push({
                        name: "moveTo",
                        'arguments': arguments
                    });
                },
                lineTo: function() {
                    shape.push({
                        name: "lineTo",
                        'arguments': arguments
                    });
                },
                fill: function () {
                    shape.push({
                        type: "function",
                        name: "fill",
                        'arguments': arguments
                    });
                },
                stroke: function () {
                    shape.push({
                        type: "function",
                        name: "stroke",
                        'arguments': arguments
                    });
                },
                arc: function () {
                    shape.push({
                        type: "function",
                        name: "arc",
                        'arguments': arguments
                    });
                },
                arcTo: function() {
                    shape.push({
                        name: "arcTo",
                        'arguments': arguments
                    });
                },
                bezierCurveTo: function() {
                    shape.push({
                        name: "bezierCurveTo",
                        'arguments': arguments
                    });
                },
                quadraticCurveTo: function() {
                    shape.push({
                        name: "quadraticCurveTo",
                        'arguments': arguments
                    });
                }
            };
          
        },
        drawImage: function () {
            storage.push({
                type: "function",
                name: "drawImage",
                'arguments': arguments
            });
        },
        fillText: function () {
            storage.push({
                type: "function",
                name: "fillText",
                'arguments': arguments
            });
        },
        setVariable: function (variable, value) {
            storage.push({
                type: "variable",
                name: variable,
                'arguments': value
            });
        }
    };
}
