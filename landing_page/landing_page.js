// document.addEventListener("DOMContentLoaded", function () {
//     var headers = document.querySelectorAll(".with-small-line");
//     headers.forEach(function (header) {
//         var line = header.querySelector("::before");
//         var headerWidth = header.offsetWidth;
//         var lineWidth = parseInt(window.getComputedStyle(line, "::before").width);

//         // Adjust the left position based on header and line width
//         var leftPosition = (headerWidth - lineWidth) / 2;
//         line.style.left = leftPosition + "px";
//     });
// });