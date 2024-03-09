const display = document.getElementById('display');
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('number') || this.classList.contains('decimal')) {
            if (display.innerText === '0') display.innerText = this.innerText;
            else display.innerText += this.innerText;
        } else if (this.classList.contains('operator')) {
            display.innerText += ' ' + this.innerText + ' ';
        } else if (this.classList.contains('equals')) {
            display.innerText = eval(display.innerText);
        } else if (this.classList.contains('clear')) {
            display.innerText = '0';
        }
    });
});
