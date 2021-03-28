var image = 1;

var img_one = document.getElementsByClassName("image_one")[0];
var img_two = document.getElementsByClassName("image_two")[0];
var img_three = document.getElementsByClassName("image_three")[0];

var timer = setInterval(slider,3000);

function slider(){
	switch(image){
		case 1:{
			img_one.style.left = "0";
			img_two.style.left="-100%";
			img_three.style.left="-100%";
			image +=1;
			break;
		}
		case 2:{
			img_one.style.left = "-100%";
			img_two.style.left="0";
			img_three.style.left="-100%";
			image +=1;
			break;
		}
		case 3:{
			img_one.style.left = "-100%";
			img_two.style.left="-100%";
			img_three.style.left="0";
			image =1;
			break;
		}
		default:{
			image =1;
		}
	}
}