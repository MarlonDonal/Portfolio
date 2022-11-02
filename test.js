var newley = document.getElementsByClassName('burgericons');
var contentscon = document.getElementsByClassName('contents');
var linkend = document.getElementsByClassName('links');
var pagebody = document.getElementsByClassName('body');
var loadingscreen = document.getElementsByClassName('loadingscreen');
var discoverfuntionforicons = document.getElementsByClassName('discoverfunctions');
var formformtheuser = document.getElementsByClassName('formformtheuser');
var background = document.getElementsByClassName('backgroundgradiant');
var input = document.getElementById('form3Example1m');
var input2 = document.getElementById('form3Example1n');
var input3 = document.getElementById('form3Example1m1');
var input4 = document.getElementById('form3Example1n1');
var input5 = document.getElementById('form3Example8');
var dob = document.getElementById('form3Example9');
var pincode = document.getElementById('form3Example90');
var course = document.getElementById('form3Example99');
var emailid = document.getElementById('form3Example97');

emailid.onblur = () => {
    if (emailid.value == "") {

        emailid.style.border = '1px solid red'

    } else {
        emailid.removeAttribute('style');
    }


}


course.onblur = () => {
    if (course.value == "") {

        course.style.border = '1px solid red'

    } else {
        course.removeAttribute('style');
    }


}


pincode.onblur = () => {
    if (pincode.value == "") {

        pincode.style.border = '1px solid red'

    } else {
        pincode.removeAttribute('style');
    }


}


dob.onblur = () => {
    if (dob.value == "") {

        dob.style.border = '1px solid red'

    } else {
        dob.removeAttribute('style');
    }


}
input5.onblur = () => {
    if (input5.value == "") {

        input5.style.border = '1px solid red'

    } else {
        input5.removeAttribute('style');
    }
}


input2.onblur = () => {
    if (input2.value == "") {

        input2.style.border = '1px solid red'

    } else {
        input2.removeAttribute('style');
    }
}
input3.onblur = () => {
    if (input3.value == "") {

        input3.style.border = '1px solid red'

    } else {
        input3.removeAttribute('style');
    }
}
input4.onblur = () => {
    if (input4.value == "") {

        input4.style.border = '1px solid red'

    } else {
        input4.removeAttribute('style');
    }
}



input.onblur = () => {
    if (input.value == "") {

        input.style.border = '1px solid red'

    } else {
        input.removeAttribute('style');
    }

}

function iconsxxxxxxxxxxx() {

    background[0].style.display = 'none'

}
// ######discover#######


function discoverfunctions() {
    background[0].style.display = 'flex'

}

function burgerforjs() {
    contentscon[0].style.display = 'flex'
    newley[0].setAttribute("onclick", "burgerforjz()")
}

function burgerforjz() {
    contentscon[0].style.display = 'none'
    newley[0].setAttribute("onclick", "burgerforjs()")
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        contentscon[0].style.display = 'none'
        newley[0].setAttribute("onclick", "burgerforjs()")
    } else {
        contentscon[0].style.display = 'flex'
    }
}

var x = window.matchMedia("(max-width: 915px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function linked(hreflink) {
    pagebody[0].style.height = "0";
    loadingscreen[0].style.top = "0";
    loadingscreen[0].style.display = "flex";

    function newload() {

        pagebody[0].style.display = "none";
    }
    setTimeout(newload, 300)

    function test() {
        window.location.href = hreflink;
    }
    setTimeout(test, 3000);
}