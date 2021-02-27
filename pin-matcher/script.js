// pin generator
function generatePinNumber() {
    const pinGen = Math.floor(100000 + Math.random() *90000);
    document.getElementById("input1").value = pinGen;
}


// submit/match pin
function inputButton(buttonNumber) {
    document.getElementById('input2').value = input2.value + buttonNumber;
}

function submit() { 
    const inputOne = document.getElementById('input1').value;
    const inputTwo = document.getElementById('input2').value;

    if (inputOne !== inputTwo) {
        document.getElementById('notify1').style.display = "block";
        document.getElementById('notify2').style.display  = "none";
    }
    if(inputTwo == '' && inputOne == ''){
        document.getElementById('notify3').style.display = "block"
        document.getElementById('notify3').style.color = "red";
        document.getElementById("notify1").style.display = "none";
        document.getElementById("notify2").style.display = "none";
    }
    else{
        document.getElementById("notify2").style.display = "block";
        document.getElementById("notify1").style.display = "none";
    }
}

function backSpace() {
    var backSp =  document.getElementById('input2').value;
    document.getElementById("input2").value = backSp.substring(0, backSp.length - 1);
}

function cleanButton() { document.getElementById('input2').value= '';}