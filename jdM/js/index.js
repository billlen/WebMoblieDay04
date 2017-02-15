/**
 * Created by Administrator on 2017/2/14 0014.
 */
window.onload =function(){
    search();
    secondKill();
    scroLLPic();
}

var search = function(){
    /*搜索框对象*/
    var search = document.getElementsByClassName("jd_header_box")[0];
    /*banner对象*/
    var banner = document.getElementsByClassName("jd_banner")[0];
    /*高度*/
    var height = banner.offsetHeight;

    window.onscroll =function(){
        var top = document.body.scrollTop;//网页被卷去的高度;
        /*当滚动高度大于banner的高度时候颜色不变*/
        if(top>height){
            search.style.background =  "rgba(201,21,35,0.85)";
        }else{
            var op = top/height * 0.85;
            search.style.background =  "rgba(201,21,35,"+op+")";
        }
    }
}
/*秒杀倒计时*/
var secondKill = function(){
    /*复盒子*/
    var parentTime = document.getElementsByClassName("sk_time")[0];
    /*span时间*/
    var timeList = parentTime.getElementsByClassName("num");
    console.log(timeList.length);

    var times = 2 * 60 * 60;
    var timer;
    timer = setInterval(function(){
        times --;

        var h = Math.floor(times/(60*60));//整除得到小时;
        var m = Math.floor(times/60)%60;//得到多少分后以60为单位余
        var s = times%60;//以60秒为单位余

        console.log(h+"--"+m+"--"+s);

        timeList[0].innerHTML = h>10?Math.floor(h/10):0;//大于10就取除10的整数,否则显示0
        timeList[1].innerHTML = h%10;//取10的余数

        timeList[2].innerHTML = m>10?Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>10?Math.floor(s/10):0;
        timeList[5].innerHTML = s%10;

        if(times<=0){
          clearInterval(timer);
        }
    },1000);
}

var scroLLPic = function(){
    //banner
    var banner = document.getElementsByClassName("jd_banner")[0];

    var width = banner.offsetWidth;

    var imgBox = banner.getElementsByTagName('ul')[0];

    var pointBox = banner.getElementsByTagName('ul')[1];

    var pointList = pointBox.getElementsByTagName('li');

    var index = 1;
    var timer;

    //过渡
    var addTransition = function(){
        imgBox.style.transition ="all .3s ease 0s";
        imgBox.style.webkittransition ="all .3s ease 0s";//适配老的浏览器
    }
    //清除过度
    var removeTransition = function(){
        imgBox.style.transition ="none";
        imgBox.style.webkittransition ="none";
    }
    //改变位置
    var setTransform = function(t){
        imgBox.style.transform ='translateX('+t+'px)';
        imgBox.style.webkittransform ='translateX('+t+'px)';
    }
    timer = setInterval(function(){
        index++;
        addTransition();
        setTransform(-index*width);
    },3000);

    imgBox.addEventListener("transitionEnd",function(){
        console.log('过渡完了');
        if(index>=9){
            index=1;
        }else if(index<=0){//向右滑动时;
            index=8;
        }
        removeTransition();
        setTransform(-index*width);
    },false);
    imgBox.addEventListener("webkitTransitionEnd",function(){
        console.log('过渡完了');
        if(index>=9){
            index=1;
        }else if(index<=0){//向右滑动时;
            index=8;
        }
        removeTransition();//清空
        setTransform(-index*width);//重设
    },false);

}






/*复盒子*/


/*span时间*/