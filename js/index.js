/**
 * @author lastbee@163.com 2018-03-21 19:45
 * @description 根据canvas绘制转盘的图片 
 * @description 根据点击事件的坐标判断所点击的图片
 * @description 边界效应的考虑
 * @description 需要屏幕自适应
 * @description number赋值结果
 * @return 点击的区域返回值 {Boolean} 0 => 图片外的区域
 * @return 点击的区域返回值 {Boolean} 1 => 图片“银”的区域
 * @return 点击的区域返回值 {Boolean} 2 => 图片“金”的区域
 * @return 点击的区域返回值 {Boolean} 3 => 图片“西”的区域
 * @return 点击的区域返回值 {Boolean} 4 => 图片“北”的区域
 * @return 点击的区域返回值 {Boolean} 5 => 图片“中原”的区域
 * @return 点击的区域返回值 {Boolean} 6 => 图片“东”的区域
 * @return 点击的区域返回值 {Boolean} 7 => 图片“南”的区域
 * @return 点击的区域返回值 {Boolean} 8 => 图片“兔”的区域
 * @return 点击的区域返回值 {Boolean} 9 => 图片“龙”的区域
 * @return 点击的区域返回值 {Boolean} 10 => 图片“蛇”的区域
 * @return 点击的区域返回值 {Boolean} 11 => 图片“马”的区域
 * @return 点击的区域返回值 {Boolean} 12 => 图片“羊”的区域
 * @return 点击的区域返回值 {Boolean} 13 => 图片“猴”的区域
 * @return 点击的区域返回值 {Boolean} 14 => 图片“鸡”的区域
 * @return 点击的区域返回值 {Boolean} 15 => 图片“狗”的区域
 * @return 点击的区域返回值 {Boolean} 16 => 图片“猪”的区域
 * @return 点击的区域返回值 {Boolean} 17 => 图片“鼠”的区域
 * @return 点击的区域返回值 {Boolean} 18 => 图片“牛”的区域
 * @return 点击的区域返回值 {Boolean} 19 => 图片“虎”的区域
 */
//屏幕的宽度
var init = function(){
	var htmlWidth =  document.body.clientWidth
	
	//canvas
	var canvas = document.getElementById("canvas")
	
	//context
	var context = canvas.getContext('2d')
	
	//width and height
	canvas.width = parseFloat(htmlWidth*.9)
	canvas.height = parseFloat(htmlWidth*.9)
	document.title = parseFloat(htmlWidth*.9)
	
	// 三个半径 的比例
	var r1 = .1672*canvas.width
	var r2 = .2888*canvas.width
	var r3 = .5106*canvas.width
	//image
	var image = new Image()
	//路径
	image.src = 'img/img.png'
	image.onload = function()
	{
		//清除画布
		context.clearRect(0,0,canvas.width,canvas.height);  
		//绘制图片
		context.drawImage(image , 0,0 ,canvas.width , canvas.height)
	}
	
	
	canvas.onclick = function(e)
	{
		var number = returnAnswer(e)
	}
	
	
	
	
	function returnAnswer(e){
		//距离远点的距离
		var disAndAng = getDistanceAndAngel(e.offsetX , e.offsetY)
		
		var distance = disAndAng.distance
		var angel = disAndAng.angel
		
		var answer = 0;
		if(distance<r1){//点击第一个圈
			if(0<angel&&angel<90 || angel>270&&angel<360){
				answer = 1
			}else{
				answer = 2
			}
		}else if(distance<r2){
			if(angel>270&&angel<=342){
				answer = 3
			}else if(angel>342&&angel<=360 || angel>=0&&angel<54){
				answer = 4
			}else if(54<=angel&&angel<126){
				answer = 5
			}else if(angel<198){
				answer = 6
			}else{
				answer = 7
			}
		}else if(distance < r3){
			if(angel>=0&&angel<15 ||angel>345&&angel<=360){
				answer = 8
			}else if(angel<45){
				answer = 9
			}else if(angel<75){
				answer = 10
			}else if(angel<105){
				answer = 11
			}else if(angel<135){
				answer = 12
			}else if(angel<175){
				answer = 13
			}else if(angel<205){
				answer = 14
			}else if(angel<235){
				answer = 15
			}else if(angel<265){
				answer = 16
			}else if(angel<295){
				answer = 17
			}else if(angel<315){
				answer = 18
			}else{
				answer = 19
			}
		}else{
			answer = 0
		}
		return answer
	}
	//获得距离与角度
	function getDistanceAndAngel(x,y){
		var dx = x - canvas.width/2
		var dy = y - canvas.width/2
		var angel;
		if(dy < 0){
			angel = 360*Math.atan(dy/dx)/(2*Math.PI)
			console.log(angel)
			if(angel<0){
				angel = 360 + angel 
			}else{
				angel = 180 + angel 
			}
		
		}else if(dy > 0){
			angel = 360*Math.atan(dy/dx)/(2*Math.PI)
			if(angel < 0){
				angel = 180 + angel
			}
		}else{
			if(dx > 0){
				angel = 0
			}else{
				angel = 180
			}
		}
		var distance =  parseFloat( Math.sqrt( Math.pow((dx),2) + Math.pow((dy),2) ))
		return{angel,distance}
	}
	
}

 window.addEventListener('resize', init, false);
 window.onload = init