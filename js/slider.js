function slide1(){
    document.getElementById('slider').src="img/001.jpg";
    setTimeout("slide2()", 5000)
    }
    
function slide2(){
    document.getElementById('slider').src="img/002.jpg";
    setTimeout("slide3()", 5000)
    }
    
function slide3(){
    document.getElementById('slider').src="img/003.jpg";
    setTimeout("slide1()", 5000)
}