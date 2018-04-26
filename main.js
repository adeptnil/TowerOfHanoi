const columns = document.querySelectorAll(".column");
var holding = document.getElementById("holding");
var choosenDisc;

for (let column of columns) {
    column.addEventListener('click', moveChoice);
}

function selectDisc(event) {
    if (document.getElementById("end").childNodes.length == 4) {
        alert("You Win")
    }

    let columnChoice = event.currentTarget;
    let topDisc = columnChoice.lastElementChild
    topDisc.remove();
    let destination = document.getElementById('holding');
    destination.appendChild(topDisc);
    choosenDisc = document.getElementById('holding').childNodes[0]
}


function placeDisc(event) {
    let columnChoice = event.currentTarget;
    let topDisc = columnChoice.lastElementChild

    if (topDisc == null || choosenDisc.id[3] > topDisc.id[3]) {
        let columnChoice = event.currentTarget;
        columnChoice.appendChild(choosenDisc);
    } else { alert("Pick other Column") }
}
var holding = document.getElementById('holding')

function moveChoice() {
    if (holding.childNodes.length == 0) {
        selectDisc(event);
    } else { 
        placeDisc(event);
    }
}




// const columBus = document.querySelectorAll('.column');
// const sizes = ["small", "medium", "large", "xlarge"];
// const ifBlockMove = true;
// var choosenDisc;

// function createHandler() {
//     var cols = document.getElementsByClassName("column");



//     for (let i = 0; i < cols.length; i++) {
//         cols[i].addEventListener('click', handleClick);
//     }
// }

// function discPlace(event){
//     let columnChoice = event.currentTarget;
//     let topDisc = columnChoice.lastElementChild;

//     if (topDisc == null || choosenDisc.id[3] > topDisc.id[3]){

//     }
// }

// function handleClick(event) {
//     if (sizes.includes(event.target.id)){
//         var adult = document.getElementById(event.target.id).parentElement;
//     } else {
//         var adult = event.target
//     } 

//     if (ifBlockMove===true) {
//         shouldMove(adult);
//     } else { 
//         placeBlock(adult)
//     }

// }


// function placeBlock(){
//     console.log("false");
// }

// function shouldMove(adult){
//     // let childNodes = adult.childNodes

//     for (let i =0; i < sizes.length; i++) {
//         if (sizes.includes(adult.getElementsByTagName('div')[i].id)){
//             var idToMove = adult.getElementsByTagName('div')[i].id
//             adult.getElementsByTagName("div")[i].removeAttribute("id");
//             break;
//         } 
//     }
//         ifBlockMove = false;
// }

// createHandler();
