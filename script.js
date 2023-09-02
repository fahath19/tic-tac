const boxs=document.getElementsByClassName('boxs');
const playerstatus=document.getElementById('player-status');
let arry=Array.from(boxs);
const btn=document.getElementById('btn');
const x='<image src="/x.png" width=50% height=50%>';
const o='<image src="/o.png" width=50% height=50%>';
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let option=['','','','','','','','','']
let currentplayer=x;
let player="x";
let running=false;

init()
function init(){
    arry.forEach(box =>box.addEventListener('click',clickbox) );
    playerstatus.textContent=`${player} your turn`;
    running=true;
    btn.addEventListener('click',reset);


}
function clickbox(){
    const index=this.dataset.index;
    if(option[index]!='' || !running){
        return
    }
    updatebox(this,index);
    checkwinner()
}
function updatebox(box,index){
   option[index]=player;
   box.innerHTML=currentplayer;
}
function changeplayer(){
    player=(player=="x")?"o":"x";
    currentplayer=(currentplayer==x)? o: x;
    playerstatus.textContent=player+' your turn'

}
function checkwinner(){
    let iswon=false;
    for(let i=0;i<win.length;i++){
        let condition=win[i];
        let box1=option[condition[0]]
        let box2=option[condition[1]]
        let box3=option[condition[2]]
        if(box1=="" || box2==""|| box3==""){
            continue
        }
        if(box1==box2 && box2==box3){
            iswon=true;
            boxs[condition[0]].classList.add('bling')
            boxs[condition[1]].classList.add('bling')
            boxs[condition[2]].classList.add('bling')
        }
     
    }
    if(iswon){
        playerstatus.textContent=`${player} won`;
        running=false

    }
    else if(!option.includes("")){
        playerstatus.textContent=`game over`
        running=false
    
    }
    else{
        changeplayer()
    }

}
function reset(){
    let option=['','','','','','','','','']
    let currentplayer=x;
    let player="x";
    let running=false;
    playerstatus.textContent=`${player} your turn`;
    arry.forEach(box=>
        {box.innerHTML=""
        box.classList.remove('bling')
    })
}