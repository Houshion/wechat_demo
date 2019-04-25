import base from "./o_base"
window.document.onkeydown = disableRefresh;

function disableRefresh(evt) {
    evt = (evt) ? evt : window.event
    if (evt.keyCode) {
        if (evt.keyCode == 13) {
            //do something
            base.enter()
        }
    }
}