window.addEventListener("DOMContentLoaded", init);
function init() {
    const move_elment = document.querySelector('.move_element');
    const move_elment_1 = document.querySelector('.move_element.elem1');
    const move_elment_2 = document.querySelector('.move_element.elem2');
    let x = 0, y = 0;
    function eventInit(event) {
        event.addEventListener("touchstart", handelTouchStart, false);
        event.addEventListener("touchmove", handelTouchMove, false);
    }
    
    function addStyle(element, x, y) {
        let stylElem = element.style;
        stylElem.left = Math.abs(x) + 'px';
        stylElem.top = Math.abs(y) + 'px';
        stylElem.transform = 'translate(-50%, -50%)';
    };
    function handelTouchStart(event) {
        let touchFirst = event.touches[0];
        x =+ touchFirst.clientX;
        y =+ touchFirst.clientY;
    };
    function handelTouchMove(event) {
        if (!x || !y) {
            console.log('not a changes');
            return false;    
        };
        moveTouch = event.touches[0];
        xM = moveTouch.clientX;
        yM = moveTouch.clientY;
        xDiffe = (x - xM) - x;
        yDiffe = (y - yM) - y;
        addStyle(this, xDiffe, yDiffe);
    };
    eventInit(move_elment);
    eventInit(move_elment_1);
    eventInit(move_elment_2);
}