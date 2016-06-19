window.onload = function(){
	var btn = document.getElementById('btn');
	var timer = null;
	var isTop = true;
	var clientHeight = document.documentElement.clientHeight;
	console.log(clientHeight)
	window.onscroll =function (){
		var osTop = document.documentElement.scrollTop||document.body.scrollTop;
		if(osTop >= clientHeight){
			btn.style.display = "block";
		}else{
			btn.style.display="none"
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}
	btn.onclick = function(){
		// alert("我被点击了");
	timer = setInterval(function(){
	var osTop = document.documentElement.scrollTop||document.body.scrollTop;
	var iSpeed = Math.floor(-osTop/6);
	document.documentElement.scollTop = document.body.scrollTop = osTop+iSpeed;
	isTop = true;
	if(osTop ==0){
		clearInterval(timer);
	} 
},30)
	}
}