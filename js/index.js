function init(){
	var iw=$(window).width()
	var ih=$(window).height();
	$("#page,.bg").css("height",ih);
	$(".bg").css("width",iw);
	$("#artive").css("height",$("#page_1").height())
	$("#left,#right").css("height",ih+"px")
	$("#left").css("background","#ece9e7")
	$("#right").css("background","#f3f0ed")
	var iTop=parseFloat($(".lines").css("top"))+140
	
}
function draw(obj){
	var arr=[0,10,35,30,40]
	obj.each(function(index){
		drawHua(obj.get(index).getContext("2d"),arr[index])
	})
		/*var =obj.get(0).getContext("2d")
		drawHua(ctx,val)*/
}
function drawHua(ctx,val){
	 ctx.beginPath();  
                //设置当前线条的宽度  
                ctx.lineWidth=10;//10px  
                //设置笔触的颜色  
                ctx.strokeStyle='#CCCCCC';  
                //arc()方法创建弧/曲线（用于创建圆或部分圆）arc(圆心x,圆心y,半径,开始角度,结束角度)  
                ctx.arc(50,50,40,0,2*Math.PI);            
                //绘制已定义的路径  
                ctx.stroke();  
                  
                //绘制根据百分比变动的环  
                ctx.beginPath();  
                ctx.lineWidth=10;  
                ctx.strokeStyle='#d54540';  
                //设置开始处为0点钟方向（-90*Math.PI/180）  
                //x为百分比值（0-100）  
                ctx.arc(50,50,40,-90*Math.PI/180,((val+50)*3.6-90)*Math.PI/180);  
                ctx.stroke();  
                //绘制中间的文字  
                ctx.font='20px Arial';  
                ctx.fillStyle='#747474';  
                ctx.textBaseline='middle';  
                ctx.textAlign='center';  
                ctx.fillText((val+50)+'%',50,50);  
}
