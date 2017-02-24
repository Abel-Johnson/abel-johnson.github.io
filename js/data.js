var skillLis = {
	showType:"circle",
	content:[
	{
		language:"HTML",
		percent:"95%",
		tips:[
			"熟练根据页面结构应用各类语义化标签",
			"熟悉H5新增标签",
			"掌握SVG,Canvas配合js绘制基本图形"
		]
	},
	{
		language:"CSS",
		percent:"95%",
		tips:[
			"掌握移动端/响应式/弹性盒模型flex等多终端适配解决方法",
			"使用合适的结构编写兼容主流浏览器的页面布局(模仿过携程[三屏页面],QQ音乐等大型网站的静态页面)",
			"熟练使用第三方字体库,如font-awesome等"
		]
	},
	{
		language:"JavaScript",
		percent:"90%",
		tips:[
			"了解数据类型、作用域闭包等语言特性",
			"掌握定时器、数组字符串及递归、数组去重等",
			"深入使用DOM\BOM，能完成各类组件开发",
			"掌握JS的数据调用、ajax实现机制、各类接口调用",
			"掌握面向对象编程，对封装、继承、多态等均有了解",
			"熟悉正则表达式，熟悉JS兼容性、JS性能提升",
			"熟练掌握原生js,能够脱离jQuery等类库编码",
			"了解ECMAScript6(2015)的新增语法"
		]
	},
	// {
	// 	language:"Canvas",
	// 	percent:"70%",
	// 	tips:[
	// 		"能熟练配合js使用相关接口绘制各类图形",
	// 		"能运用canvas开发小游戏"
	// 	]
	// },
	{
		language:"Git",
		percent:"75%",
		tips:[
			"能熟练使用git的各种指令完成项目合作,版本控制",
			"有自己的github,存放项目,博客"
		]
	},
	{
		language:"Vue",
		percent:"80%",
		tips:[
			"熟练使用Vue这种MVVM框架提供的'v-','@',':'等各种数据绑定指令",
			"熟练使用框架提供的各种API,进行组件开发"
		]
	},
	{
		language:"jQuery",
		percent:"80%",
		tips:[
			"熟练使用jquery提供的各种常用方法",
			"能够自己封装常用jQuery扩展插件",
			"了解部分功能实现原理,如jQuery的无new实例化的实现原理等"
		]
	},
	{
		language:"Node.js",
		percent:"70%",
		tips:[
			"了解服务端Node.js"
		]
	},
	{
		language:"webpack/grunt",
		percent:"80%",
		tips:[
			"能够使用各种打包工具"
		]
	},
	{
		language:"Java",
		percent:"60%",
		tips:[
			"有一定的后端语言Java基础",
			"了解一定的移动端Android开发知识"
		]
	}
	]
}


var cases = [
		{
			caseName:"CSS+JS效果",
			caseList:[


				{
					caseTitle:"瀑布流",
					publishTime:"2016-6-4",
					caseThumbnail:"img/case/pubuliu.png",
					caseDescription:"功能:网上找到一个可以向别的网站请求大量图片的php文件,解决了跨域的问题,然后使用AJAX动态请求JSON数据,填充页面,实现了瀑布流和懒加载",
					caseWebsite:"https://github.com/Abel-Johnson/Demos/tree/master/pubuliuAjax"
				},
				{
					caseTitle:"网站上常见的几种焦点图",
					publishTime:"2016-6-4",
					caseThumbnail:"img/case/focusPlay.png",
					caseDescription:"功能:根据市面上常见的9种广告焦点图的效果(包括轮播,淡入淡出,手风琴等效果),代码实现(网址只链接到了其中一个,更多请到我的github仓库查看:github.com/Abel-Johnson/Demos/tree/master/9种常见轮播图)",
					caseWebsite:"https://abel-johnson.github.io/Demos/9种常见轮播图/index.html"
				},
				{
					caseTitle:"图片破碎还原",
					publishTime:"2016-09-26",
					caseThumbnail:"img/case/posui.png",
					caseDescription:"功能:点击图片破碎,再次点击还原的同时切换图片\
					技术要点:使用10x10定位布局;运用preserve-3d,景深,以及各种3D变换(旋转.斜切等);使用Math.radom计算出随机的变换角度",
					caseWebsite:"https://abel-johnson.github.io/CSSX-suipian/"
				},
				{
					caseTitle:"图片3D旋转切换",
					publishTime:"2016-8-10",
					caseThumbnail:"img/case/DEMO-3Dalbum.png",
					caseDescription:"功能:点击对应按钮切换图片时,图片会以螺旋状依次旋转,最终达到切换到新图片的效果",
					caseWebsite:"https://abel-johnson.github.io/Demos/DEMO-3Dalbum/"
				},
				{
					caseTitle:"锤子官网特效",
					publishTime:"2016-11-16",
					caseThumbnail:"img/case/t.tt.png",
					caseDescription:"视差效果,根据光标移动距离改变显示"
					,caseWebsite:"https://abel-johnson.github.io/Demos/t.tt_Module"
				},
				{
					caseTitle:"文字3D折叠",
					publishTime:"2016-8-4",
					caseThumbnail:"img/case/specialLetter.png",
					caseDescription:"功能:鼠标划过时文字会折叠到底下的槽里,充分用到了3D变换,配合transition,配合自定义属性实现",
					caseWebsite:"https://abel-johnson.github.io/Demos/3DspecialLetter/"
				}
			]
		},
		{
			caseName:"响应式",
			caseList:[
				{
					caseTitle:"仿LE响应式布局",
					publishTime:"2016-7-10 22:08",
					caseThumbnail:"img/case/LE.png",
					caseDescription:"仿LE响应式三档布局,技术要点:响应式布局;内容列表部分使用了弹性盒模型flex"
					,caseWebsite:"https://abel-johnson.github.io/LEresp/"
				},
			]
		},{
			caseName:"移动端",
			caseList:[
				{
					caseTitle:"仿微博移动端",
					publishTime:"2016-9-10",
					caseThumbnail:"img/case/weibo-mobile.png",
					caseDescription:" 描述:两屏的微博移动端,加入了一些动画;技术要点:定时器;自定义字体;rem字体单位,以便适用于不同屏幕;使用了预编译语言less(通过Koala编译);"
					,caseWebsite:"https://abel-johnson.github.io/mobile-weibo/"

				},
				{
					caseTitle:"苏宁移动端",
					publishTime:"2016-9-2",
					caseThumbnail:"img/case/suning.png",
					caseDescription:" 描述:仿苏宁移动端,使用了定时器实现轮播图;"
					,caseWebsite:"https://abel-johnson.github.io/Demos/mobile_suning"

				},
				{
					caseTitle:"携程移动端",
					publishTime:"2016-8-10",
					caseThumbnail:"img/case/ctrip-M.png",
					caseDescription:" 描述:仿携程移动端"
					,caseWebsite:"https://abel-johnson.github.io/Demos/mobile_ctrip"
				}
			]
		},
		{
			caseName:"日期对象",
			caseList:[
			]
		},{
			caseName:"大型PC网站",
			caseList:[
				{
					caseTitle:"仿携程(三屏页面)",
					publishTime:"2016-7-10",
					caseThumbnail:"img/case/ctrip-pc.png",
					caseDescription:"项目描述:包括携程首页,酒店,机票(3屏),根据网站截图,从切图到布局独立完成.技术要点: 使用大量语义化标签,解决了IE6的兼容性问题",
					caseWebsite:"https://abel-johnson.github.io/Ctrip-PC/html/"

				},
				{
					caseTitle:"QQ音乐首页",
					publishTime:"2016-6-20",
					caseThumbnail:"img/case/qqmusic.png",
					caseDescription:"布局兼容IE6"
					,caseWebsite:"https://abel-johnson.github.io/Demos/QQmusic/"
				}
			]
		},
		{
			caseName:"小组件",
			caseList:[

				{
					caseTitle:"多功能钟表",
					publishTime:"2016-8-16",
					caseThumbnail:"img/case/Muti-clock.png",
					caseDescription:"基本功能: ;指针指示当前时间;秒表计时(有start,stop以及reset三个按钮);显示当前是星期几;显示当前日期;技术要点:2D旋转;定位的相关知识;		"			,caseWebsite:"https://abel-johnson.github.io/multifunctional-clock/"
				},
				{
					caseTitle:"自定义H5视频播放器",
					publishTime:"2016-3-10",
					caseThumbnail:"img/case/videoPlayer.png",
					caseDescription:"结合h5的<video>标签提供的而诸如play(),pause()等API,配合bootstrap,实现了自定义美化播放控件,并实现了对应的(诸如进度条,滚轮调节音量,全屏等的)功能"
					,caseWebsite:"https://abel-johnson.github.io/Demos/videoPlayer"
				},
				{
					caseTitle:"模拟数字时钟",
					publishTime:"2016-10-16",
					caseThumbnail:"img/case/digitalClock.png",
					caseDescription:"通过运动函数,定时器达到滚动切换的效果",	
					caseWebsite:"https://abel-johnson.github.io/Demos/digital_clock/"
				}
			]
		},
		{
			caseName:"H5小游戏开发",
			caseList:[
				{
					caseTitle:"贪吃蛇",
					publishTime:"2016-5-10",
					caseThumbnail:"img/case/snack.png",
					caseDescription:"通过数组实时存放蛇的坐标位置,并根据该数组进行渲染,配合键盘事件对象event的keycode属性,判断键盘按下的键位,实现了蛇的移动"
					,caseWebsite:"https://abel-johnson.github.io/Demos/snack"
				},
				{
					caseTitle:"canvas祖玛",
					publishTime:"2016-7-10",
					caseThumbnail:"img/case/zuma.png",
					caseDescription:"纯canvas绘制而成,简易版"
					,caseWebsite:"https://abel-johnson.github.io/Demos/zuma"
				},
				{
					caseTitle:"物理足球",
					publishTime:"2016-3-10",
					caseThumbnail:"img/case/soccer.jpg",
					caseDescription:"使用常用的鼠标的三个事件(按下,移动,抬起)实现鼠标拽着足球跑,下落用定时器模拟了重力加速度,弹起时给了0.75的系数使速度衰减,而且碰到可视窗口边框也会常规反弹,完全模拟了物理效果"
					,caseWebsite:"https://abel-johnson.github.io/Demos/soccer"
				}
			]
		},
		{
			caseName:"大型功能类web应用",
			caseList:[
				{
					caseTitle:"仿云盘",
					publishTime:"2016-12-10",
					caseThumbnail:"img/case/weiyun.png",
					caseDescription:"实现大部分常见功能"
					,caseWebsite:"https://abel-johnson.github.io/weiyun/"
				}
			]
		},
		{
			caseName:"中型web应用",
			caseList:[
				{
					caseTitle:"豆瓣书籍",
					publishTime:"2016-1-14",
					caseThumbnail:"img/case/douban.png",
					caseDescription:"利用豆瓣API通过jsonp请求数据"
					,caseWebsite:"https://abel-johnson.github.io/Demos/jsonpDouban/"
				},
				{
					caseTitle:"TODO待办事项",
					publishTime:"2016-12-20 22:08",
					caseThumbnail:"img/case/todo.png",
					caseDescription:"使用Vue实现"
					,caseWebsite:"https://abel-johnson.github.io/TODO/"
				}
			]
		}
]

var projects = [
		{
			projectName:"TODO待办事项",
			projectWebsite:"https://abel-johnson.github.io/TODO/",
		    startTime:"2016.12.10",
			endTime:"2016.12.20",
			projectExplain:"技术要点:使用Vue编写,实现了事项列表的增,删,改,查,通过localStorage在本地存储数据,实现了关闭浏览器再次打开,列表的状态依然保留,通过修改hash值,配合onhashchange函数实现了3种状态切换时的显示变化",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"img/case/todo.png"
		},
		{
			projectName:"仿云盘",
			projectWebsite:"https://abel-johnson.github.io/weiyun/",
		    startTime:"2016.12.20",
			endTime:"2017.1.10",
			projectExplain:"技术要点: 原生JavaScript编写,面向过程编程;封装了通用的弹框dialog.js组件,提高了代码复用性;使用了ES6的形如`${}`的超级字符串;构造了一套伪数据,一定程度模拟了开发环境,实现了数据与表现同步",
				projectLabel:["html","css3","css","js"],
			projectThumbnail:"img/case/weiyun.png"
		}
]
