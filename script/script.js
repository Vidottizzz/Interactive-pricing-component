var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}




// toggle

let active = false

function toggle() {
    let toggle = document.querySelector('.toggle')
    let text = document.querySelector('.text')
    active = !active
    if (active) {
        toggle.classList.add('active')
        text.innerHTML = 'N'
    } else {
        toggle.classList.remove('active')
        text.innerHTML = 'FF'
    }
}