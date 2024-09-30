"use strict";
function wsoma(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    return s;
}
console.log(wsoma(10, 50, 60));
