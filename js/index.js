var rad = Math.PI/180;
var circle = $('#circle')[0];
var ctx = circle.getContext("2d");
circles(0,2*Math.PI);
function circles(start,end) {
	ctx.strokeStyle = "#eef2f5";
	ctx.lineWidth = 2;
	ctx.moveTo(294,294);
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#e5eddd";
	ctx.arc(294,294,290,start,end,false)
	ctx.stroke();
	ctx.fill();
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#dcede2";
	ctx.arc(294,294,260,start,end,false)
	ctx.stroke();
	ctx.fill()
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#d7edf0";
	ctx.arc(294,294,230,start,end,false)
	ctx.stroke();
	ctx.fill()
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#d7e7f0";
	ctx.arc(294,294,200,start,end,false)
	ctx.stroke();
	ctx.fill()
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#dde1ec";
	ctx.arc(294,294,170,start,end,false)
	ctx.stroke();
	ctx.fill()
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#e5e3ec";
	ctx.arc(294,294,140,start,end,false)
	ctx.stroke();
	ctx.fill()
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#e9e0e6";
	ctx.arc(294,294,110,start,end,false)
	ctx.stroke();
	ctx.fill()
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#ede4e6";
	ctx.arc(294,294,80,start,end,false)
	ctx.stroke();
	ctx.fill()
	
	ctx.beginPath()
	ctx.moveTo(294,294);
	ctx.fillStyle = "#eef2f5";
	ctx.arc(294,294,50,start,end,false)
	ctx.stroke();
	ctx.fill()
}



function prepare(percent, startDeg, time) {
	ctx.strokeStyle = "#eef2f5";
	ctx.lineWidth = 2;
	ctx.moveTo(294,294);

	var i = 0;
	var timer = setInterval(function(){
		var start = startDeg*rad;
		var end = startDeg*rad+percent/100*2*Math.PI/100*(++i)
		
		console.log(start,end);
		if(end >= start+2*Math.PI*percent/100){
			clearInterval(timer);
		}
		circles(start,end)
		
	},10)
}
function dataShow(radius, percent, startDeg, time, color) {
	ctx.strokeStyle = "#eef2f5";
	ctx.lineWidth = 2;
	ctx.moveTo(294,294);

	var i = 0;
	var timer = setInterval(function(){
		var start = startDeg*rad;
		var end = startDeg*rad+percent/100*2*Math.PI/100*(++i)
		
		console.log(start,end);
		if(end >= start+2*Math.PI*percent/100){
			clearInterval(timer);
		}
		
		ctx.beginPath()
		ctx.moveTo(294,294);
		ctx.fillStyle = color;
		ctx.arc(294,294,radius,start,end,false)
		ctx.stroke();
		ctx.fill();
		
		ctx.beginPath()
		ctx.moveTo(294,294);
		ctx.fillStyle = transparent;
		ctx.arc(294,294,radius-30,start,end,false)
		ctx.stroke();
		ctx.fill();
	},10);
}


$(document).click(function(){
//	setTimeout(function(){
//		dataShow(290,90,270,1000,"#fffff0");
//		dataShow(260,80,270,1000,"#ffff00");
//	},2000)
});