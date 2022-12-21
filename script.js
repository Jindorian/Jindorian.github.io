const express = require("express");

const app = express();

app.use(express.static('public'))

app.listen(3000, () => console.log("3000 Listen"));

// 자켓 이미지 배열을 생성하여 종류별 자켓 이미지 저장
var Jackets_img = ['Img/Jacket_Black.png', 'Img/Jacket_Blue.png','Img/Jacket_Brown.png','Img/Jacket_Ivory.png','Img/Jacket_Pink.png','Img/Jacket_Purple.png'];
var Jacket_index = 0

// 장신구 이미지 배열을 생성하여 종류별로 장신구를 저장
var Jangsik_img = ['Img/Earing_Short.png','Img/Earing_Long.png','Img/Glasses_Thin.png','Img/Glasses_Bold.png','Img/Mask_White.png','Img/Mask_Black.png'];
var Jangsik_index = 0

let draggedItem = null;

// 드래그 기능을 하는 함수 생성
function drag()
{
    draggedItem = this;
    console.log(draggedItem.src);
}

function dragenter()
{
    document.getElementById('Jacket-win').src= Jackets_img[Jacket_index];
}

function dragenter()
{
    document.getElementById('Jangsik-win').src= Jangsik_img[Jangsik_index];
}

// 도움말 블럭 Footer 함수 생성
function changeOnFooter()
{
    document.getElementById('onoff').style.display = "block";
}
function changeOffFooter()
{
    document.getElementById('onoff').style.display = "none";
}

// 자켓 이미지를 다음으로 넘기는 기능을 가진 함수
function upJacketButton()
{
    if(Jacket_index >= 5)
    {
        Jacket_index = 0;
    }
    else
    {   
        Jacket_index++;
    }
    document.getElementById('Char-Jackets').src = Jackets_img[Jacket_index];
}

// 반대로 자켓 이미지를 이전으로 넘기는 기능을 가진 함수
function downJacketButton()
{
    if(Jacket_index <= 0)
    {
        Jacket_index = 5;
    }
    else
    {
        Jacket_index--;
    }
    document.getElementById('Char-Jackets').src = Jackets_img[Jacket_index];
}

// 장신구 이미지를 다음으로 넘기는 기능을 가진 함수
function upJangsikButton()
{
    if(Jacket_index >= 5)
    {
        Jacket_index = 0;
    }
    else
    {   
        Jacket_index++;
    }
    document.getElementById('Char-Jangsik').src = Jangsik_img[Jangsik_index];
}

// 반대로 장신구 이미지를 이전으로 넘기는 기능을 가진 함수
function downJacketButton()
{
    if(Jacket_index <= 0)
    {
        Jacket_index = 5;
    }
    else
    {
        Jacket_index--;
    }
    document.getElementById('Char-Jangsik').src = Jangsik_img[Jangsik_index];
}

// 헤어스타일이 바뀌는 기능을 추가한 함수 생성
function changeHair(hair)
{
    if (hair == "shortHair1")
    {
        document.getElementById('base-img').src="Img/Head01.png";
        console.log("OK");
    } else if (hair == "shortHair2"){
        document.getElementById('base-img').src="Img/Head05.png";
        console.log("OK");
    } else if (hair == "shorHair3"){
        document.getElementById('base-img').src="Img/Head06.png";
        console.log("OK");
    } else if (hair == "longHair1"){
        document.getElementById('base-img').src="Img/Head04.png";
        console.log("OK");
    } else if (hair == "longHair2"){
        document.getElementById('base-img').src="Img/Head02.png";
        console.log("OK");
    } else if (hair == "longHair3"){
        document.getElementById('base-img').src="Img/Head03.png";
        console.log("OK");
    }
}