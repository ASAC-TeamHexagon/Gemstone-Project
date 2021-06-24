'use strict';

var counter = 1;
setInterval(function () {
    document.getElementById('r' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);
