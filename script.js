window.onload = function(){
	var btn = document.getElementById('btn');
	var timer = null;
	var isTop = true;
        var scrollElem; //滚动元素
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
        if(document.documentElement.scrollTop) scrollElem = document.documentElement;
        else scrollElem = document.body;
        
        scrollElem.style.willChange = 'scroll-position'; //滚动条滚动之前准备调用GPU加速

	timer = setInterval(function(){
	var osTop = document.documentElement.scrollTop||document.body.scrollTop;
	var iSpeed = Math.floor(-osTop/6);
	document.documentElement.scollTop = document.body.scrollTop = osTop+iSpeed;
	isTop = true;
	if(osTop ==0){
		clearInterval(timer);
                scrollElem.style.willChange = 'auto';  //滚动结束，移除willChange
	} 
},30)
	}
}
