// your code here...
let d=document.querySelectorAll(".cell");

let but=document.querySelector(".game--restart");

let h=document.querySelector(".game--status");
let turn=0;
h.innerHTML="It's X's turn";

d[0].addEventListener('click',p0);
d[1].addEventListener('click',p1);
d[2].addEventListener('click',p2);
d[3].addEventListener('click',p3);
d[4].addEventListener('click',p4);
d[5].addEventListener('click',p5);
d[6].addEventListener('click',p6);
d[7].addEventListener('click',p7);
d[8].addEventListener('click',p8);

but.addEventListener('click',res)
let cel = Array(9)
let end=0;


function check(){
	let count=0;
	for(let i=0;i<9;i++){
		if (cel[i]==1 || cel[i]==2){
			count+=1
		}
	}
	if((cel[0]==1 && cel[1]==1 && cel[2]==1)||
		(cel[3]==1 && cel[4]==1 && cel[5]==1)||
		(cel[6]==1 && cel[7]==1 && cel[8]==1)||
		(cel[0]==1 && cel[4]==1 && cel[8]==1)||
		(cel[2]==1 && cel[4]==1 && cel[6]==1)||
		(cel[0]==1 && cel[3]==1 && cel[6]==1)||
		(cel[1]==1 && cel[4]==1 && cel[7]==1)||
		(cel[2]==1 && cel[5]==1 && cel[8]==1)){
			h.innerHTML="Player X has won";
			end=1;
		}else if((cel[0]==2 && cel[1]==2 && cel[2]==2)||
		(cel[3]==2 && cel[4]==2 && cel[5]==2)||
		(cel[6]==2 && cel[7]==2 && cel[8]==2)||
		(cel[0]==2 && cel[4]==2 && cel[8]==2)||
		(cel[2]==2 && cel[4]==2 && cel[6]==2)||
		(cel[0]==2 && cel[3]==2 && cel[6]==2)||
		(cel[1]==2 && cel[4]==2 && cel[7]==2)||
		(cel[2]==2 && cel[5]==2 && cel[8]==2)){
			h.innerHTML="Player O has won";
			end=1;
		}else if(count==9){
			h.innerHTML="Game ended in a draw";
			end=1
		}
}
function res(){
	turn=0
	for (let i=0;i<9;i++){
		d[i].innerHTML="";
		cel[i]=0;
	}
	h.innerHTML="It's X's turn";
	end=0
}

function show(){
	if(end==0){
	if (turn%2==1){
		h.innerHTML="It's O's turn";
	}else{
		h.innerHTML="It's X's turn";
	}	
	}
}

function p0(){
	if (end==0 && d[0].innerHTML !='X' && d[0].innerHTML !='O'){
	if (turn%2==0){
		d[0].innerHTML='X';
		cel[0]=1;
	}else{
		d[0].innerHTML='O';
		cel[0]=2;
	}
	turn+=1;
	}
	check();
	show();
}

function p1(){
	if (end==0 && d[1].innerHTML !='X' && d[1].innerHTML !='O'){
	if (turn%2==0){
		d[1].innerHTML='X';
		cel[1]=1;
	}else{
		d[1].innerHTML='O';
		cel[1]=2
	}
	turn+=1;
	}
	check();
	show();
}

function p2(){
	if (end==0 && d[2].innerHTML !='X' && d[2].innerHTML !='O'){
	if (turn%2==0){
		d[2].innerHTML='X';
		cel[2]=1;
	}else{
		d[2].innerHTML='O';
		cel[2]=2;
	}
	turn+=1;
	}
	check();
	show();
}

function p3(){
	if (end==0 && d[3].innerHTML !='X' && d[3].innerHTML !='O'){
	if (turn%2==0){
		d[3].innerHTML='X';
		cel[3]=1;
	}else{
		d[3].innerHTML='O';
		cel[3]=2;
	}
	turn+=1;
	}
	check();
	show();
}

function p4(){
	if (end==0 && d[4].innerHTML !='X' && d[4].innerHTML !='O'){
	if (turn%2==0){
		d[4].innerHTML='X';
		cel[4]=1;
	}else{
		d[4].innerHTML='O';
		cel[4]=2
	}
	turn+=1;
	}
	check();
	show();
}

function p5(){
	if (end==0 && d[5].innerHTML !='X' && d[5].innerHTML !='O'){
	if (turn%2==0){
		d[5].innerHTML='X';
		cel[5]=1;
	}else{
		d[5].innerHTML='O';
		cel[5]=2;
	}
	turn+=1;
	}
	check();
	show();
}

function p6(){
	if (end==0 && d[6].innerHTML !='X' && d[6].innerHTML !='O'){
	if (turn%2==0){
		d[6].innerHTML='X';
		cel[6]=1;
	}else{
		d[6].innerHTML='O';
		cel[6]=2;
	}
	turn+=1;
	}
	check();
	show();
}

function p7(){
	if (end==0 && d[7].innerHTML !='X' && d[7].innerHTML !='O'){
	if (turn%2==0){
		d[7].innerHTML='X';
		cel[7]=1;
	}else{
		d[7].innerHTML='O';
		cel[7]=2
	}
	turn+=1;
	}
	check();
	show();
}

function p8(){
	if (end==0 && d[8].innerHTML !='X' && d[8].innerHTML !='O'){ 
	if (turn%2==0){
		d[8].innerHTML='X';
		cel[8]=1;
	}else{
		d[8].innerHTML='O';
		cel[8]=2;
	}
	turn+=1;
	}
	check();
	show();
}
