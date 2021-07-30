function highlightOnlyOnFocus() {
    document.addEventListener("keydown", function onKeydown() {
        var pressedKey = event.code;
        if(event.code == pressedKey) {
            document.getElementById(pressedKey).style.backgroundColor = "#cccccc";
        }
    });
    
    document.addEventListener("keyup", function onKeyup() {
        var pressedKey = event.code;
        if(event.code == pressedKey) {
            document.getElementById(pressedKey).style.backgroundColor = "#228B22";
        }
    });
}


/* Won't allow tabbing out of text area */
focusOnKeyboardTest = function getFocus() {
  document.getElementById("keyboard-test").focus();
}