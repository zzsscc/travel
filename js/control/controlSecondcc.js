$(function(){
    var chooseDown=document.getElementsByClassName('choose-drop-down')[0];
    chooseDown.onmouseenter=function(){
        $('.choose-drop-other').css('display','block');
    }
    chooseDown.onmouseleave=function(){
        $('.choose-drop-other').css('display','none');
    }
    var chooseOther=chooseDown.getElementsByClassName('othermatou');
    for(var i=0;i<chooseOther.length;i++){
        chooseOther[i].onmouseover=function(){
            this.style.backgroundColor='#00c199';
        }
        chooseOther[i].onmouseout=function(){
            this.style.backgroundColor='#fff';
        }
        chooseOther[i].onclick=function(){
            var newWord=this.innerHTML;
            var chooseDropDownWord=document.getElementsByClassName('choose-drop-down-word')[0];
            var oldWord=chooseDropDownWord.innerHTML
            chooseDropDownWord.innerHTML=newWord;
            this.innerHTML=oldWord;
        }
    }
})