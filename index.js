let saveEl = document.getElementById("save-el")
let countElh = document.getElementById("count-elh")
let countEla = document.getElementById("count-ela")
let counth = 0
let counta = 0

function incrementh() {
    counth += 1
    countElh.textContent = counth
}
function incrementa() {
    counta += 1
    countEla.textContent = counta
}
// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }
