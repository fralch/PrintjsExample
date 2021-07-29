const printjs = function (printableArea) {
    var content = document.getElementById(printableArea).innerHTML; //getting printable content
    var htmlDom =  document.body.innerHTML;  //saving the dom html
    document.body.innerHTML = content;  //overwriting content in html body
    window.print(); //event to print
    document.body.innerHTML= htmlDom; //restoring dom html
}

//  function that removes the header and footer of the page to be printed
var cssPagedMedia = (function () { 
    var style = document.createElement('style');
    document.head.appendChild(style);
    return function (rule) {
        style.innerHTML = rule;
    };
}());
cssPagedMedia.size = function (size) {
    cssPagedMedia('@page {size: ' + size + '; margin:0mm}');
};

cssPagedMedia.size('auto');

/*
 * printJs v0.0.1
 * @author Frank Cairampoma -> fralch
 *
 * Licensed under the MIT licence:
 *              http://www.opensource.org/licenses/mit-license.php
 * (c)Frank Cairampoma 2021
 *
 * Usage:
 * import the library through on the html, as shown in the example:  <script src="js/printjs.js"></script>
 * create a div with id = "printableArea" which will contain the information to print, like this: <div id="printableArea"><h1>Print me</h1></div>
 * create a button that executes the script to print, like this: <input type="button" onclick="printjs('printableArea')" value="Printer Button">
 * Notes:
 *  - the styles for the printable content will be done through the id of the div "printableArea"
 */