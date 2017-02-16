window.onload = function(){
    checkBox();
    deletefun();
}

/*复选框*/
var checkBox = function(){
    var checkBoxList = document.getElementsByClassName("jd_check_box");
    console.log(checkBoxList.length);
    for(var i =0;i<checkBoxList.length;i++){
        checkBoxList[i].onclick = function(){
            var hasChecked = this.getAttribute("checked");
            if(hasChecked!=null){//说明被选中;
                this.removeAttribute("checked");
            }else{
                this.setAttribute("checked"," ");
            }
        }
    }
}

var deleteList = document.getElementsByClassName("deleteBox");
var win = document.getElementsByClassName("jd_win")[0];
var winBox = win.getElementsByClassName("jd_win_box")[0];

var up;


/*删除方法*/
var deletefun = function(){
    for(var i = 0;i<deleteList.length;i++){
        deleteList[i].onclick = function(){
            win.style.display = "block";
            winBox.className = "jd_win_box jumpOut";//把动画的class加上;

            var deleteObj = this;

            up = deleteObj.getElementsByClassName("deleteBox_top")[0];
            var down = deleteObj.getElementsByClassName("deleteBox_bot")[0];

            up.style.transition = 'all 1s ease 0s';
            up.style.webkittransition = 'all 1s ease 0s';

            up.style.transform = "translateY(-5px) translateX(-2px) rotate(-45deg)";
            up.style.webkittransform = "translateY(-5px) translateX(-2px) rotate(-45deg)";
        }
    }

    winBox.getElementsByClassName('cancel')[0].onclick=function(){
        win.style.display = "none";
        winBox.className = "jd_win_box";//去掉动画的class;
        if(up){
            up.style.transform = "translateY(0px) translateX(0px) rotate(0deg)";
            up.style.webkittransform = "translateY(0px) translateX(0px) rotate(0deg)";
        }
    };

    winBox.getElementsByClassName('submit')[0].onclick=function(){
        win.style.display = "none";
        winBox.className = "jd_win_box";//去掉动画的class;
        if(up){

        }

    };
}