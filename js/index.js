var rad = Math.PI/180;
var circle = $('#circle')[0];
var ctx = circle.getContext("2d");
var colorArr = ['#e26c60', '#b93d5f', '#985a99', '#4b4b9c', '#0987c2', '#09c0c2', '#3ebe3b', '#99c209', '#e0c857', '#e09857']

// 左侧文字颜色
// $('#abilityShow dd').each(function(index, value) {
// 	console.log(index,value)
// 	value.style.color = colorArr[index]
// })


//circles(0,2*Math.PI);
//动画生成同心圆
prepare(100, -90, 3)
setTimeout(function(){
		for (var i = 0; i < skillArr.length; i++) {
			console.log("xxx",i);
			console.log(colorArr)
			dataShow(290-30*i,skillArr[i].perc,270,10*skillArr[i].perc,colorArr[i]);
			
		}
//		dataShow(260,80,270,1000,"#ffff00");
	},1500)

function circles(start,end) {
//	console.log(ctx);
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
		
//		console.log(start,end);
		if(end >= start+2*Math.PI*percent/100){
			clearInterval(timer);
		}
		circles(start,end)
		
	},10)
}
function dataShow(radius, percent, startDeg, time, colorAttr) {

	// ctx.beginPath();
	console.log(color)
	var color = colorAttr;
	radius-=15;
	ctx.strokeStyle = color;
	ctx.lineWidth = 26;
	// ctx.moveTo(294,294);

	var i = 0;
	var timer = setInterval(function(){
		var start = startDeg*rad;
		var end = startDeg*rad+percent/100*2*Math.PI/100*(++i)
		
		// console.log(start,end);
		if(end >= start+2*Math.PI*percent/100){
			clearInterval(timer);
		}
		
		ctx.beginPath();
		ctx.moveTo(294,294-radius);
		ctx.strokeStyle = color;
		ctx.fillStyle = 'transparent';
		ctx.arc(294,294,radius,start,end,false)
		ctx.stroke();
		ctx.fill();
	},10);
}




//获取到技能数据
var skillArr = [];
for (var i = 0; i < skillLis.content.length; i++) {
	var item = {
		index: i,
		lang: skillLis.content[i].language,
		perc: Number(skillLis.content[i].percent.substr(0,2))
	}
	skillArr.push(item);
}
console.log(skillArr);


// $(document).click(function(){
// 	console.log("进入");
// 	setTimeout(function(){
// 		for (var i = 0; i < skillArr.length; i++) {
// 			console.log("xxx",i);
// 			console.log(colorArr)
// 			dataShow(290-30*i,skillArr[i].perc,270,10*skillArr[i].perc,colorArr[i]);
			
// 		}
// //		dataShow(260,80,270,1000,"#ffff00");
// 	},1000)
// });


//vue写技能部分
new Vue({
	el: '.word',
	data: {
		list: skillLis.content,//获取到技能数组
		showPageIndex: 0,
		colorArr: colorArr
	},
	computed: {
		pageNum: function(){
			return Math.ceil(this.list.length/3)
		}
	},
	methods: {
		changePage: function(index) {
			this.showPageIndex = index;
		}
	}
});

//vue写项目部分
new Vue({
	el: '.ps_content',
	data: {
		list: projects//获取到proj数组
	},
	computed: {},
	methods: {
		
	}
})

//vue写demo部分

//给每一项数据加一个表征当前显示状态的属性
for (var i = 0; i < cases.length; i++) {
	cases[i].isOpen = false;
}
cases[0].isOpen = true;
console.log(cases);



let vm = new Vue({
	el: '#demosShow',
	data: {
		list: cases,//获取到demo数组
		currentCaseObj: cases[0].caseList[0]
	},
	methods: {
		showDetail: function(item) {
			this.currentCaseObj = item;
			
			this.$nextTick(function() {
//				var innerObj = vm.$refs['demoDesc'];//获取到渲染完的描述部分
//				console.log("获取到innerObj");
//				var rateR = $('.container').height()/$(innerObj).outerHeight()
////				console.log($('.container').height(),$(innerObj).outerHeight(), innerObj.offsetHeight);
//				if(rateR>=1) {
					sWay.eq(1).hide()
//				} else {
//					sWay.eq(1).show()
//				};
//				if(rateR<1/20) rateR=1/20;
//				console.log(rateR);
//				sDiv.eq(1).height(rateR*sWay.height())
			})
		},
		imgFinish: function() {
			console.log("图片加载完毕");
			var innerObj = vm.$refs['demoDesc'];//获取到渲染完的描述部分
//				console.log(innerObj);
				var rateR = $('.container').height()/$(innerObj).outerHeight()
//				console.log($('.container').height(),$(innerObj).outerHeight(), innerObj.offsetHeight);
				if(rateR>=1) {
					sWay.eq(1).hide()
				} else {
					sWay.eq(1).show()
				};
				if(rateR<1/20) rateR=1/20;
				console.log(rateR);
				sDiv.eq(1).height(rateR*sWay.height())
		},
		switchFolder: function(item,index) {
//			this.currentFolderObj = item;
			console.log(index);
			for (var i = 0; i < cases.length; i++) {
				if(i!== index){
					cases[i].isOpen = false;
				}
			}
			item.isOpen = !item.isOpen;
			
			this.$nextTick(function() {
				var innerObj = vm.$refs['folderLis'];//获取到渲染完的ul
				var rateL = $('.container').height()/$(innerObj).height()//
				console.log('窗口高度/内容高度的比例'+rateL);
				if(rateL>=1) sWay.eq(0).hide();//如果内容不够多,就让滚动条消失
				if(rateL<1/20) rateL=1/20;//如果内容太多,就让滚动条保持在1/20的大小
				sDiv.eq(0).height(rateL*sWay.height())//计算出此时的滑块高度
				
				var maxL = $(innerObj).height()-$('.container').height();
				var maxDL = sWay.eq(0).height() - sDiv.eq(0).height()
				console.log('内容高度:'+$(innerObj).height(),'内容top值:'+$(innerObj).position().top,'容器高度'+$('.container').height());
				if( $(innerObj).height() + $(innerObj).position().top < $('.container').height()) {
					$(innerObj).css('top', -($(innerObj).height() - $('.container').height())+"px" )
					console.log("底部靠上了");
				}
				
				
				var rateNow = -($(innerObj).position().top/maxL);
				console.log('内容区top距离值'+$(innerObj).position().top,'内容区最大滚动距离'+maxL);
				console.log('比例'+rateNow);
				var divTop = rateNow*maxDL;
				sDiv.eq(0).css('top',divTop+"px");
			})
		}
	}
});




//写滚动条部分
//container: 窗口容器
$('container')
//folderLis/demoDesc: 内容
$('.folderLis')
$('.demoDesc')
//scrollBar: 滑槽
var sWay = $('.scrollBar')
//barDiv: 滑块
var sDiv = $('.barDiv')

//先写左边列表区的滑块对应逻辑
var rateL = $('.container').height()/$('.folderLis').height()
if(rateL>=1) sWay.eq(0).hide();
if(rateL<1/20) rateL=1/20;
sDiv.eq(0).height(rateL*sWay.height())



var rateR = $('.container').height()/$('.demoDesc').height()
if(rateR>=1) sWay.eq(1).hide();
if(rateR<1/20) rateR=1/20;
sDiv.eq(1).height(rateR*sWay.height())



//添加滑块拖动逻辑

//右边

//左边



sDiv.eq(0).on('mousedown', function(ev) {
	ev.preventDefault()//添加处理,不让鼠标拖动时选中文字
	//左边
	var maxL = $('.folderLis').height()-$('.container').height();
	var maxDL = sWay.eq(0).height() - sDiv.eq(0).height()
	var dis = ev.clientY- $(this).position().top;
	function mdFn(ev) {
		//滑块定位
//		console.log(ev.clientY);
//		滑块top值
		var divTop = ev.clientY-dis;
		
		if(divTop<0) divTop = 0;
		if(divTop>maxDL) divTop = maxDL;
		
		sDiv.eq(0).css('top',divTop+"px");
		$('.folderLis').css('top',-divTop/maxDL*maxL+"px");
	}
	
	$(document).on('mousemove', mdFn)
	$(document).on('mouseup', function() {
		$(document).off('mousemove', mdFn)
	})
})


sDiv.eq(1).on('mousedown', function(ev) {
	ev.preventDefault()//添加处理,不让鼠标拖动时选中文字
	var maxR = $('.demoDesc').innerHeight()-$('.container').eq(1).height();
	console.log($('.demoDesc').height(),$('.container').eq(1).height());
	var maxDR = sWay.eq(1).height() - sDiv.eq(1).height()
	console.log(maxR,maxDR);
	var dis = ev.clientY- $(this).position().top;
	function mdFn(ev) {
		//滑块定位
		
//		给滑块定位
		var divTop = ev.clientY-dis;
		if(divTop<0) divTop = 0;
		if(divTop>maxDR) divTop = maxDR;
		console.log(divTop);
		sDiv.eq(1).css('top',divTop+"px");
		console.log(divTop/maxDR*maxR);
		$('.demoDesc').css('top',-divTop/maxDR*maxR+"px");
	}
	
	$(document).on('mousemove', mdFn)
	$(document).on('mouseup', function() {
		$(document).off('mousemove', mdFn)
	})
})

