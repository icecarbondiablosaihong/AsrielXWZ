      function rand(m,n){
        return m+parseInt((n-m)*Math.random());
      }


      var oC = $('#container').get(0)

      var mxwidth = oC.offsetWidth;
      var mxheight = oC.offsetHeight;


      var oB = new CollBox('container');
      oB.ballRun();

// 小球7个 Toys 开始
for (var i = 1;i <=8; i++) {
	// //生成球的代码 定义分类 🔥
// command / 注释
var b=rand(40,60); //球半径
var x=rand(b,mxwidth-b); //小球中心点的横坐标
var y=rand(b,mxheight-b); //小球中心点的纵坐标
var ball=new Ball({
  'b':b,
  'x':x,
  'y':y,
  'sx':rand(1,4), //小球在x轴方向速度
  'sy':rand(1,4), //小球在y轴方向速度
  'c':'url(./img/toy-'+i+'.png)',
  'id':'toy',
  'opa':rand(60,100)/100,
  'callBack':function(n){
	  //小球撞击后的回调处理
	//this.setB(rand(30,50));
	//this.setM();
	// if(n%3==0){this.setC('url(./img/'+rand(1,45)+'.png)')};//撞三次改变下图片
	// if(n%50==0){
	  // this.setB(rand(40+parseInt((n>1000?1000:n)/50),60+parseInt((n>1000?1000:n)/50)));
	// }//撞50次改大小
  }
});
oB.addBall(ball);
} 
				// 小球7个 toys结束







// 小球5个 fish 开始

for (var i = 1;i <=6; i++) {
			    // //生成球的代码 定义分类 🔥
			// command / 注释
			var b=rand(40,60); //球半径
			var x=rand(b,mxwidth-b); //小球中心点的横坐标
			var y=rand(b,mxheight-b); //小球中心点的纵坐标
			var ball=new Ball({
			  'b':b,
			  'x':x,
			  'y':y,
			  'sx':rand(1,4), //小球在x轴方向速度
			  'sy':rand(1,4), //小球在y轴方向速度
			  'c':'url(./img/fish-'+i+'.png)',
			  'id':'fish',
			  'opa':rand(60,100)/100,
			  'callBack':function(n){
				  //小球撞击后的回调处理
				//this.setB(rand(30,50));
				//this.setM();
				// if(n%3==0){this.setC('url(./img/'+rand(1,45)+'.png)')};//撞三次改变下图片
				// if(n%50==0){
				  // this.setB(rand(40+parseInt((n>1000?1000:n)/50),60+parseInt((n>1000?1000:n)/50)));
				// }//撞50次改大小
			  }
			});
		oB.addBall(ball);
 }
// 小球5个 fish结束


// 小球8个 beads开始
for (var i = 1;i <=9; i++) {
	// //生成球的代码 定义分类 🔥
// command / 注释
var b=rand(40,60); //球半径
var x=rand(b,mxwidth-b); //小球中心点的横坐标
var y=rand(b,mxheight-b); //小球中心点的纵坐标
var ball=new Ball({
  'b':b,
  'x':x,
  'y':y,
  'sx':rand(1,4), //小球在x轴方向速度
  'sy':rand(1,4), //小球在y轴方向速度
  'c':'url(./img/beads-'+i+'.png)',
  'id':'beads',
  'opa':rand(60,100)/100,
  'callBack':function(n){
	  //小球撞击后的回调处理
	//this.setB(rand(30,50));
	//this.setM();
	// if(n%3==0){this.setC('url(./img/'+rand(1,45)+'.png)')};//撞三次改变下图片
	// if(n%50==0){
	  // this.setB(rand(40+parseInt((n>1000?1000:n)/50),60+parseInt((n>1000?1000:n)/50)));
	// }//撞50次改大小
  }
});
oB.addBall(ball);
} 
// 小球8个 beads结束



// 小球5个 flower开始
for (var i = 1;i <=6; i++) {
	// //生成球的代码 定义分类 🔥
// command / 注释
var b=rand(40,60); //球半径
var x=rand(b,mxwidth-b); //小球中心点的横坐标
var y=rand(b,mxheight-b); //小球中心点的纵坐标
var ball=new Ball({
  'b':b,
  'x':x,
  'y':y,
  'sx':rand(1,4), //小球在x轴方向速度
  'sy':rand(1,4), //小球在y轴方向速度
  'c':'url(./img/flower-'+i+'.png)',
  'id':'flower',
  'opa':rand(60,100)/100,
  'callBack':function(n){
	  //小球撞击后的回调处理
	//this.setB(rand(30,50));
	//this.setM();
	// if(n%3==0){this.setC('url(./img/'+rand(1,45)+'.png)')};//撞三次改变下图片
	// if(n%50==0){
	  // this.setB(rand(40+parseInt((n>1000?1000:n)/50),60+parseInt((n>1000?1000:n)/50)));
	// }//撞50次改大小
  }
});
oB.addBall(ball);
} 
// 小球5个 flower结束

// 小球7个 tree开始
for (var i = 1;i <=8; i++) {
	// //生成球的代码 定义分类 🔥
// command / 注释
var b=rand(40,60); //球半径
var x=rand(b,mxwidth-b); //小球中心点的横坐标
var y=rand(b,mxheight-b); //小球中心点的纵坐标
var ball=new Ball({
  'b':b,
  'x':x,
  'y':y,
  'sx':rand(1,4), //小球在x轴方向速度
  'sy':rand(1,4), //小球在y轴方向速度
  'c':'url(./img/tree-'+i+'.png)',
  'id':'tree',
  'opa':rand(60,100)/100,
  'callBack':function(n){
	  //小球撞击后的回调处理
	//this.setB(rand(30,50));
	//this.setM();
	// if(n%3==0){this.setC('url(./img/'+rand(1,45)+'.png)')};//撞三次改变下图片
	// if(n%50==0){
	  // this.setB(rand(40+parseInt((n>1000?1000:n)/50),60+parseInt((n>1000?1000:n)/50)));
	// }//撞50次改大小
  }
});
oB.addBall(ball);
} 
// 小球7个 tree结束	

// 小球7个 statue开始
for (var i = 1;i <=8; i++) {
	// //生成球的代码 定义分类 🔥
// command / 注释
var b=rand(40,60); //球半径
var x=rand(b,mxwidth-b); //小球中心点的横坐标
var y=rand(b,mxheight-b); //小球中心点的纵坐标
var ball=new Ball({
  'b':b,
  'x':x,
  'y':y,
  'sx':rand(1,4), //小球在x轴方向速度
  'sy':rand(1,4), //小球在y轴方向速度
  'c':'url(./img/statue-'+i+'.png)',
  'id':'statue',
  'opa':rand(60,100)/100,
  'callBack':function(n){
	  //小球撞击后的回调处理
	//this.setB(rand(30,50));
	//this.setM();
	// if(n%3==0){this.setC('url(./img/'+rand(1,45)+'.png)')};//撞三次改变下图片
	// if(n%50==0){
	  // this.setB(rand(40+parseInt((n>1000?1000:n)/50),60+parseInt((n>1000?1000:n)/50)));
	// }//撞50次改大小
  }
});
oB.addBall(ball);
} 
// 小球7个 statue结束				
		    
