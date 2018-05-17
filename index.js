/*
Pedra é igual à 0
Papel é igual à 1
Tesoura é a igual à 2

*/
tie = 0;
pontopc = 0;
ponto = 0;
var inicio = comd(1);
function comd(jogo){
do{
var jdj = prompt("Para jogar o Jokenpô, basta você digitar sua escolha e pressionar enter no teclado ou clicar em OK, a primeira jogada sempre é obrigatória, 	no fim de cada rodada aparece o placar, e depois a opção de continuar ou sair. OBS: utilizar somente letra MINUSCULA !!! \nDigite sua escolha pedra, papel ou tesoura?");
var vdf = 0;
if( jdj == "pedra"){
	vdf = 1;
}
else{
if( jdj == "papel"){
	vdf = 1;
}
else{ 
if( jdj == "tesoura"){
	vdf = 1;
}}
vine = 0;	
}

}
while(vdf == 0);
console.log("O user jogou "+ jdj);

var qlq = main(jdj);

function main(padrao){
	var rnd = Math.floor((Math.random()*3));
	
	switch(rnd){
		case 0: 
			rnd = "pedra";
		break;
		case 1: 
			rnd = "papel";
		break;
		case 2: 
			rnd = "tesoura";
		break;
	}
	console.log("A jogada do computador foi: "+ rnd);
	var resultado;
	if(jdj == rnd){
		resultado = "O jogo empatou";
		console.log("O jogo empatou");
		tie++;
	}
	else{
		if((jdj == "pedra")&(rnd == "tesoura")){
			ponto = ponto +1;
			console.log("Você ganhou");
			resultado = "Você ganhou";
		}
		if((jdj == "pedra")&(rnd == "papel")){
			pontopc = pontopc +1;
			resultado = "O PC ganhou";
			console.log("O PC ganhou");
		}
		if((jdj == "papel")&(rnd == "pedra")){
			ponto = ponto +1;
			resultado = "Você ganhou";
			console.log("Você ganhou");
		}
		if((jdj == "papel")&(rnd == "tesoura")){
			pontopc = pontopc +1;
			resultado = "O PC ganhou";
			console.log("O PC ganhou");
		}
		if((jdj == "tesoura")&(rnd == "papel" )){
			ponto = ponto +1;
			resultado = "Você ganhou";
			console.log("Você ganhou");
		}
		if((jdj == "tesoura")&(rnd == "pedra" )){
			pontopc = pontopc +1;
			resultado = "O PC ganhou";
			console.log("O PC ganhou");
		}
	}
	alert("A jogada do computador foi:  "+ rnd +"\n VC jogou: "+ jdj+" \n Resultado:  "+resultado );
	var placar = alert("Placar do PC: "+pontopc+"\n Seu placar: " +ponto+ "\n Número de empates :" +tie); 
	var decisao = confirm("Deseja continuar jogando? ");
	if(decisao){
		var t = comd(jogo);
		
	}else{
		alert ("Você clicou no botão CANCELAR, obrigado por ter jogado.\n Para jogar novamente basta recarregar a página!");
	}
	var xx= true;

}
}




