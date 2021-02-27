//btn1
var btn_7 = document.getElementById("btnSeven");
btn_7.addEventListener("click", function(){
    document.form.field.value += 7;
})

//btn2
var btn_8 = document.getElementById("btnEight");
btn_8.addEventListener("click", function(){
    document.form.field.value += 8;
})

//btn3
var btn_9 = document.getElementById("btnNine");
btn_9.addEventListener("click", function(){
    document.form.field.value += 9;
})

//btn4
var btn_Mi = document.getElementById("btnMinus");
btn_Mi.addEventListener("click", function(){
    document.form.field.value += '-';
})

//btn5
var btn_4 = document.getElementById("btnFour");
btn_4.addEventListener("click", function(){
    document.form.field.value += 4;
})

//btn6
var btn_5 = document.getElementById("btnFive");
btn_5.addEventListener("click", function(){
    document.form.field.value += 5;
})

//btn7
var btn_6 = document.getElementById("btnSix");
btn_6.addEventListener("click", function(){
    document.form.field.value += 6;
})

//btn8
var btn_Pls = document.getElementById("btnPlus");
btn_Pls.addEventListener("click", function(){
    document.form.field.value += '+';
})

//btn9
var btn_1 = document.getElementById("btnOne");
btn_1.addEventListener("click", function(){
    document.form.field.value += 1;
})

//btn10
var btn_2 = document.getElementById("btnTwo");
btn_2.addEventListener("click", function(){
    document.form.field.value += 2;
})

//btn11
var btn_3 = document.getElementById("btnThree");
btn_3.addEventListener("click", function(){
    document.form.field.value += 3;
})

//btn12
var btn_Ex = document.getElementById("btnX");
btn_Ex.addEventListener("click", function(){
    document.form.field.value += '*';
})

//btn13
var btn_Ce = document.getElementById("btnC");
btn_Ce.addEventListener("click", function(){
    document.form.field.value = '';
})

//btn14
var btn_0 = document.getElementById("btnZero");
btn_0.addEventListener("click", function(){
    document.form.field.value += 0;
})

//btn15
var btn_Dt = document.getElementById("btnDot");
btn_Dt.addEventListener("click", function(){
    document.form.field.value += '.';
})

//btn16
var btn_Sls = document.getElementById("btnSlash");
btn_Sls.addEventListener("click", function(){
    document.form.field.value += '/';
})

//btn17
var btn_Eql = document.getElementById("btnEq");
btn_Eql.addEventListener("click", function(){
    document.form.field.value = eval(document.form.field.value);
})
