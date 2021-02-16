let controlePosition = []; // este array vai receber as posições do jogo
let elementosVisuais = []; // este array vi controlar os elementos visuais do jogo
let quemJoga = 0; // 0 = jogador  1 == cpu
let verificaVencedor // este variável vao verificar quem ganhou o jogo
let jogoRodando = true; // esta variável vai me dizer se o jogo está rodando ou não
let nivelDeDificuldade = 2; // esta variável vai guardar o nível de jogo
let jogadaCPU = 1; // esta variavel vai dizer qual a jogada da cpu
let quemComeca = 1; // esta variavel vai dizer quem começa, cpu ou player
let jogada = 0;

window.addEventListener('load', start);

function start(){// esta função vai inicializar as variáveis do jogo
	jogoRodando = true;
	jogada = 0;
	jogadaCPU = 1;
	controlePosition = [
		["", "", ""],
		["", "", ""],
		["", "", ""]
	];
	elementosVisuais = [
		[document.getElementById('position1'), document.getElementById('position2'), document.getElementById('position3')],
		[document.getElementById('position4'), document.getElementById('position5'), document.getElementById('position6')],
		[document.getElementById('position7'), document.getElementById('position8'), document.getElementById('position9')]
	];
	atualizaElementosVisuais();
	if(quemComeca == 1){
		quemComeca = 0;
		quemJoga == quemComeca;
		document.getElementById('quemIniciaJogando').innerHTML = "Quem Começa: Jogador";
	}else{
		quemComeca = 1;
		quemJoga == quemComeca;
		document.getElementById('quemIniciaJogando').innerHTML = "Quem Começa: CPU";
		playCpu();
	}
}

function playCpu(){
	if(jogoRodando){
		var linha, coluna;
		if(nivelDeDificuldade == 1){ // nivel 1
			do{
				linha = Math.round(Math.random() * 2);
				coluna = Math.round(Math.random() * 2);
			}while(controlePosition[linha][coluna] != "");
			controlePosition[linha][coluna] = "O";
		}else if(nivelDeDificuldade == 2){
			if((controlePosition[0][0] == "O") && (controlePosition[0][1] == "O") && (controlePosition[0][2] == "")){ //ATAQUE //jogadas linha 1
				controlePosition[0][2] = "O";
			}else if((controlePosition[0][0] == "O") && (controlePosition[0][2] == "O") && (controlePosition[0][1] == "")){
				controlePosition[0][1] = "O";
			}else if((controlePosition[0][1] == "O") && (controlePosition[0][2] == "O") && (controlePosition[0][0] == "")){
				controlePosition[0][0] = "O";
			}else if((controlePosition[1][0] == "O") && (controlePosition[1][1] == "O") && (controlePosition[1][2] == "")){ //jogadas linha 2
				controlePosition[1][2] = "O";
			}else if((controlePosition[1][0] == "O") && (controlePosition[1][2] == "O") && (controlePosition[1][1] == "")){
				controlePosition[1][1] = "O";
			}else if((controlePosition[1][1] == "O") && (controlePosition[1][2] == "O") && (controlePosition[1][0] == "")){
				controlePosition[1][0] = "O";
			}else if((controlePosition[2][0] == "O") && (controlePosition[2][1] == "O") && (controlePosition[2][2] == "")){//jogadas linha 3
				controlePosition[2][2] = "O";
			}else if((controlePosition[2][0] == "O") && (controlePosition[2][2] == "O") && (controlePosition[2][1] == "")){
				controlePosition[2][1] = "O";
			}else if((controlePosition[2][1] == "O") && (controlePosition[2][2] == "O") && (controlePosition[2][0] == "")){
				controlePosition[2][0] = "O";
			}else if((controlePosition[0][0] == "O") && (controlePosition[1][0] == "O") && (controlePosition[2][0] == "")){ //jogadas coluna 1
				controlePosition[2][0] = "O";
			}else if((controlePosition[0][0] == "O") && (controlePosition[2][0] == "O") && (controlePosition[1][0] == "")){
				controlePosition[1][0] = "O";
			}else if((controlePosition[1][0] == "O") && (controlePosition[2][0] == "O") && (controlePosition[0][0] == "")){
				controlePosition[0][0] = "O";
			}else if((controlePosition[0][1] == "O") && (controlePosition[1][1] == "O") && (controlePosition[2][1] == "")){//jogadas coluna 2
				controlePosition[2][1] = "O";
			}else if((controlePosition[0][1] == "O") && (controlePosition[2][1] == "O") && (controlePosition[1][1] == "")){
				controlePosition[1][1] = "O";
			}else if((controlePosition[1][1] == "O") && (controlePosition[2][1] == "O") && (controlePosition[0][1] == "")){
				controlePosition[0][1] = "O";
			}else if((controlePosition[0][2] == "O") && (controlePosition[1][2] == "O") && (controlePosition[2][2] == "")){ //jogadas coluna 3
				controlePosition[2][2] = "O";
			}else if((controlePosition[0][2] == "O") && (controlePosition[2][2] == "O") && (controlePosition[1][2] == "")){
				controlePosition[1][2] = "O";
			}else if((controlePosition[1][2] == "O") && (controlePosition[2][2] == "O") && (controlePosition[0][2] == "")){
				controlePosition[0][2] = "O";
			}else if((controlePosition[0][0] == "O") && (controlePosition[1][1] == "O") && (controlePosition[2][2] == "")){ //jogadas diagonal 1
				controlePosition[2][2] = "O";
			}else if((controlePosition[0][0] == "O") && (controlePosition[2][2] == "O") && (controlePosition[1][1] == "")){
				controlePosition[1][1] = "O";
			}else if((controlePosition[1][1] == "O") && (controlePosition[2][2] == "O") && (controlePosition[0][0] == "")){
				controlePosition[0][0] = "O";
			}else if((controlePosition[0][2] == "O") && (controlePosition[1][1] == "O") && (controlePosition[2][0] == "")){ //jogadas diagonal 2
				controlePosition[2][0] = "O";
			}else if((controlePosition[0][2] == "O") && (controlePosition[2][0] == "O") && (controlePosition[1][1] == "")){
				controlePosition[1][1] = "O";
			}else if((controlePosition[2][0] == "O") && (controlePosition[1][1] == "O") && (controlePosition[0][2] == "")){
				controlePosition[0][2] = "O";
			}else if((controlePosition[0][0] == "X") && (controlePosition[0][1] == "X") && (controlePosition[0][2] == "")){ //DEFESA //jogadas linha 1
				controlePosition[0][2] = "O";
			}else if((controlePosition[0][0] == "X") && (controlePosition[0][2] == "X") && (controlePosition[0][1] == "")){
				controlePosition[0][1] = "O";
			}else if((controlePosition[0][1] == "X") && (controlePosition[0][2] == "X") && (controlePosition[0][0] == "")){
				controlePosition[0][0] = "O";
			}else if((controlePosition[1][0] == "X") && (controlePosition[1][1] == "X") && (controlePosition[1][2] == "")){ //jogadas linha 2
				controlePosition[1][2] = "O";
			}else if((controlePosition[1][0] == "X") && (controlePosition[1][2] == "X") && (controlePosition[1][1] == "")){
				controlePosition[1][1] = "O";
			}else if((controlePosition[1][1] == "X") && (controlePosition[1][2] == "X") && (controlePosition[1][0] == "")){
				controlePosition[1][0] = "O";
			}else if((controlePosition[2][0] == "X") && (controlePosition[2][1] == "X") && (controlePosition[2][2] == "")){ //jogadas linha 3
				controlePosition[2][2]= "O";
			}else if((controlePosition[2][0] == "X") && (controlePosition[2][2] == "X") && (controlePosition[2][1] == "")){
				controlePosition[2][1] = "O";
			}else if((controlePosition[2][1] == "X") && (controlePosition[2][2] == "X") && (controlePosition[2][0] == "")){
				controlePosition[2][0] = "O";
			}else if((controlePosition[0][0] == "X") && (controlePosition[1][0] == "X") && (controlePosition[2][0] == "")){ //jogadas coluna 1
				controlePosition[2][0] = "O";
			}else if((controlePosition[0][0] == "X") && (controlePosition[2][0] == "X") && (controlePosition[1][0] == "")){
				controlePosition[1][0] = "O";
			}else if((controlePosition[1][0] == "X") && (controlePosition[2][0] == "X") && (controlePosition[0][0] == "")){
				controlePosition[0][0] = "O";
			}else if((controlePosition[0][1] == "X") && (controlePosition[1][1] == "X") && (controlePosition[2][1] == "")){ //jogadas coluna 1
				controlePosition[2][1] = "O";
			}else if((controlePosition[0][1] == "X") && (controlePosition[2][1] == "X") && (controlePosition[1][1] == "")){
				controlePosition[1][1] = "O";
			}else if((controlePosition[1][1] == "X") && (controlePosition[2][1] == "X") && (controlePosition[0][1] == "")){
				controlePosition[0][1] = "O";
			}else if((controlePosition[0][2] == "X") && (controlePosition[1][2] == "X") && (controlePosition[2][2] == "")){ //jogadas coluna 3
				controlePosition[2][2] = "O";
			}else if((controlePosition[0][2] == "X") && (controlePosition[2][2] == "X") && (controlePosition[1][2] == "")){
				controlePosition[1][2] = "O";
			}else if((controlePosition[1][2] == "X") && (controlePosition[2][2] == "X") && (controlePosition[0][2] == "")){
				controlePosition[0][2] = "O";
			}else if((controlePosition[0][0] == "X") && (controlePosition[1][1] == "X") && (controlePosition[2][2] == "")){ //jogadas diagonal 1
				controlePosition[2][2] = "O";
			}else if((controlePosition[0][0] == "X") && (controlePosition[2][2] == "X") && (controlePosition[1][1] == "")){
				controlePosition[1][1] = "O";
			}else if((controlePosition[1][1] == "X") && (controlePosition[2][2] == "X") && (controlePosition[0][0] == "")){
				controlePosition[0][0] =" O";
			}else if((controlePosition[0][2] == "X") && (controlePosition[1][1] == "X") && (controlePosition[2][0] == "")){ //jogadas diagonal 2
				controlePosition[2][0] = "O";
			}else if((controlePosition[0][2] == "X") && (controlePosition[2][0] == "X") && (controlePosition[1][1] == "")){
				controlePosition[1][1] = "O";
			}else if((controlePosition[2][0] == "X") && (controlePosition[1][1] == "X") && (controlePosition[0][2] == "")){
				controlePosition[0][2] = "O";
			}else{
				if(jogada < 8){
					do{
						linha = Math.round(Math.random() * 2);
						coluna = Math.round(Math.random() * 2);
					}while(controlePosition[linha][coluna] != "");
					controlePosition[linha][coluna] = "O";
				}else{
					for(var linha = 0 ; linha < 3; linha++){
						for(var coluna = 0; coluna < 3; coluna++){
							if(controlePosition[linha][coluna] == ""){
								controlePosition[linha][coluna] = "O";
							}
						}
					}
				}
			}
		}

		verificaVencedor = verificaVitoria();
		if(verificaVencedor != ""){
			window.alert(verificaVencedor + " Venceu");
			jogoRodando = false;
		}
		atualizaElementosVisuais();
		jogada++;
		quemJoga = 0; 
	}
}

function verificaVitoria(){
	var linha, coluna;
	for(linha = 0; linha < 3; linha++){ // Linha
		if((controlePosition[linha][0] == controlePosition[linha][1]) && (controlePosition[linha][1] == controlePosition[linha][2])){
			return controlePosition[linha][0];
		}
	}

	for(coluna = 0; coluna < 3; coluna++){ // Coluna
		if((controlePosition[0][coluna] == controlePosition[1][coluna]) && (controlePosition[1][coluna] == controlePosition[2][coluna])){
			return controlePosition[0][coluna];
		}
	}

	//Diagonais

	if((controlePosition[0][0] == controlePosition[1][1]) && (controlePosition[1][1] == controlePosition[2][2])){
			return controlePosition[0][0];
	}

	if((controlePosition[0][2] == controlePosition[1][1]) && (controlePosition[1][1] == controlePosition[2][0])){
			return controlePosition[0][2];
	}

	return "";
}

function play(p){
	if((jogoRodando) && (quemJoga == 0)){
		switch(p){
			case 1:
				if(controlePosition[0][0] == ""){
					controlePosition[0][0] = "X";
					quemJoga = 1;
				}
			break;
			case 2:
				if(controlePosition[0][1] == ""){
					controlePosition[0][1] = "X";
					quemJoga = 1;
				}
			break;
			case 3:
				if(controlePosition[0][2] == ""){
					controlePosition[0][2] = "X";
					quemJoga = 1;
				}
			break;
			case 4:
				if(controlePosition[1][0] == ""){
					controlePosition[1][0] = "X";
					quemJoga = 1;
				}
			break;
			case 5:
				if(controlePosition[1][1] == ""){
					controlePosition[1][1] = "X";
					quemJoga = 1;
				}
			break;
			case 6:
				if(controlePosition[1][2] == ""){
					controlePosition[1][2] = "X";
					quemJoga = 1;
				}
			break;
			case 7:
				if(controlePosition[2][0] == ""){
					controlePosition[2][0] = "X";
					quemJoga = 1;
				}
			break;
			case 8:
				if(controlePosition[2][1] == ""){
					controlePosition[2][1] = "X";
					quemJoga = 1;
				}
			break;
			default:
				if(controlePosition[2][2] == ""){
					controlePosition[2][2] = "X";
					quemJoga = 1;
				}
			break;
		}

		if(quemJoga == 1){
			atualizaElementosVisuais();
			verificaVencedor = verificaVitoria();
			if(verificaVencedor != ""){
				window.alert(verificaVencedor + " Venceu");
				jogoRodando = false;
			}
			jogada++;
			playCpu();
		}
	}
}

function atualizaElementosVisuais(){
	for (let linha = 0; linha < 3; linha++) {
		for (let coluna = 0; coluna < 3; coluna++) {
			if(controlePosition[linha][coluna] == "X"){
				elementosVisuais[linha][coluna].innerHTML = "X";
				elementosVisuais[linha][coluna].style.cursor = "default";
			}else if(controlePosition[linha][coluna] == "O"){
					elementosVisuais[linha][coluna].innerHTML = "O";
					elementosVisuais[linha][coluna].style.cursor = "default";
			}else{
				elementosVisuais[linha][coluna].innerHTML = "";
				elementosVisuais[linha][coluna].style.cursor = "pointer";
			}
		}
	}
}
