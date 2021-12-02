// document.addEventListener("keypress", (e) => {
//     
// })

function showKeys(strEventName) {
    let theH1 = document.querySelector("h1");
    let eventObj = document.body[strEventName]["arguments"][0];
    let ps = document.querySelectorAll("section div p:nth-of-type(2)");
    theH1.innerHTML = eventObj.charCode;

    ps.forEach((elem, index) => {
        switch (index) {
            case 0: elem.innerHTML = eventObj.key; break;
            case 1: elem.innerHTML = eventObj.keyCode; break;
            case 2: elem.innerHTML = eventObj.code; break;
        }
    })
}

