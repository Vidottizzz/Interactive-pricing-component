const slider = document.getElementById("myinput");
const min = slider.min;
const max = slider.max;
const value = slider.value;
let priceMonth = document.querySelector("#price-month");
let myOutput = document.querySelector('#myoutput');
// preencher com a cor verde até onde a bola de referencia do range input está
let monthSpan = document.querySelector('#month-span');
let yearSpan = document.querySelector('#year-span');
//valores escolhidos
  myOutput.innerHTML = slider.value;

  slider.onmousemove = function() {
    console.log(slider.value);
    if (slider.value == 0) {
      myOutput.innerHTML = 10 + "K ";
      priceMonth.innerHTML = `$${8}.00`;
    }
    else if (slider.value == 50) {
      myOutput.innerHTML = 50 + "K ";
      priceMonth.innerHTML = `$${12}.00`;
    }
    else if (slider.value == 100) {
      myOutput.innerHTML = 100 + "K ";
      priceMonth.innerHTML = `$${16}.00`;
    }
    else if (slider.value == 150) {
      myOutput.innerHTML = 500 + "K ";
      priceMonth.innerHTML = `$${24}.00`;
    }
    else if (slider.value == 200) {
      myOutput.innerHTML = 1 + "M ";
      priceMonth.innerHTML = `$${36}.00`;
    }
    // myOutput.innerHTML = this.value;
  }


slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`;

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`;
};




// toggle

let active = false;

function toggle() {
  let toggle = document.querySelector(".toggle");
  let text = document.querySelector(".text");
  let decision = false;
  active = !active;
  if (active) {
    toggle.classList.add("active");
    monthSpan.classList.remove("focus-span");
    yearSpan.classList.add("focus-span");

    //quando está ativo decision é true
    decision = true;
  } else {
    
    yearSpan.classList.remove("focus-span");
    monthSpan.classList.add("focus-span");
    toggle.classList.remove("active");
    decision = false;
  }
  if (decision === true) {

  }
}
