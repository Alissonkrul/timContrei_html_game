


//Retorna a string resposta ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function answerFunc(npc, answer){

	return text[npc].answer[answer][0];

}

//Retorna a string fala ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function speachFunc(npc, speach){


	return text[npc].speach[speach][0];
}


//Implementa o diálogo entre npc e personagem +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function dialog(npc, x){

	var speach = text[npc].speach[x][1]; // Variáveis auxiliares
	var answer = text[npc].answer; // Variáveis auxiliares

	if(npc===3){
		itens['badboy']=true;
	}

	if(npc===5){
		itens['naka']=true;
	}

	// Criando a tag de fala --------------------------------------------------------------------------------------



	$('div.speach').append('<p class="dialog" id="dialog_main">'+speachFunc(npc, x)+'</p>');



	//Criando os botões de resposta -------------------------------------------------------------------------------

	for(var i=0; i<speach.length; i++){ //Itera no vetor de índices de resposta -----------------------------------


		if(answer[speach[i]][2] || itens[answer[speach[i]][3]]){ //Verifica uma variável de controle e se possui o item utilizado na ação 


			$('table.answer').append('<tr class="dialog"><td><button data-id="'+speach[i]+'">'+answerFunc(npc, speach[i])+'</button></td></tr>');
		}	
	
	}
	
}

function focusPerson(){
	$(".person").on("mouseover",".imagem", function(){
		var name = "#"+($(this).data("id"));
		$("#names").find(name).show();
		$(".imagem").css({opacity:0.75});
		$(".ballon").css({opacity:0});
		$(this).css({opacity:1});
		$(this).parent().children(".ballon").css({opacity:1});
	});
	$(".person").on("mouseout",".imagem", function(){
		$(".name").hide();
		$(".imagem").css({opacity:0.8});
		$(".ballon").css({opacity:0});
	});
}


function action(option, person){

	var action = {

		exit: function(person){
				
			if(person!=0){
				$("#chat").hide();
			}

			$("#block").css('z-index',0);
			$("#pda").css('z-index',1);
			$(".face").hide();
		},

		map: function(person){

			if(person===1 || person===2){
				locations['woods']=true;
			}else if(person===3 || person===4){
				locations['sec_floor']=true;
			}else{
				locations['gym']=true;
			}

		},

		item: function(person){

			if(person===8){
				
			}else if(person===4){
				itens['badboy']=true;
			}else if(person===2){
				itens['pedro']=true;
			}

		},

		close: function(person){

			avatar.first[person] = 2;

		},

		check: function(person){

			if(item[person]){
				item[person]=true;
			}

		},

		give: function(person){

			if(person===5){
				itens['milk']=false;
				$("#milk").css({opacity:0.3});
			}else if(person===1){
				itens['beer']=false;
				$("#beer").css({opacity:0.3});
			}else if(person===2){
				itens['cable']=false;
				$("#cable").css({opacity:0.3});
			}else if(person===7){
				itens['choco']=false;
				$("#choco").css({opacity:0.3});
			}

				
		},

		store: function(person){

			if(item===0 && cash>= itemStore[0]){

				itens.choco = true;
				$("#choco").css({opacity:1});
				cash=cash-5;
				$("#cash").html(cash);

			}else if(item===1  && cash>=itemStore[1]){

				itens.beer = true;
				$("#beer").css({opacity:1});
				cash=cash-10;
				$("#cash").html(cash);

			}else if(item==2  && cash>=itemStore[2]){

				itens.milk = true;
				$("#milk").css({opacity:1});
				cash=cash-10;
				$("#cash").html(cash);

			}else{
				alert('Você não tem dinheiro suficiente!');
			}

		},

		rat: function(){

			itens['rat']=true;
		},

		naka: function(){

			itens['naka']=true;
		},

		buiu: function(){

			itens['buiu']=true;
			$("#dogs").show();
		},

		russo: function(){
			itens['russo']=true;
		},

		buy: function(){

			if(cash>=5){


				if(person===5){
					itens['beer']=true;
					$("#beer").css({opacity:1});
					cash=cash-5;
					$("#cash").html(cash);
				}else if(person===3){
					itens['milk']=true;
					$("#milk").css({opacity:1});
					cash=cash-5;
					$("#cash").html(cash);
				}


			}else{

			alert('Você não tem dinheiro suficiente!');

			}
		},

		final1: function(){

			$(".map").hide();
			$("#table_item").hide();
			$("#table_bt_maps").hide();
			$("body").css('background-image', 'url(Imagens/mapas/why.jpg)');
			$("#final1span").html('<audio autoplay><source src="audio.mp3" type="audio/mpeg"></audio>')
			$("#final1").show();

		},

		final2: function(){

			$(".map").hide();
			$("#table_item").hide();
			$("#table_bt_maps").hide();
			$("body").css('background-image', 'url(Imagens/mapas/fodase.jpg)');
			$("#final2").show();
			
		},

		timeLeft: function(){

			


				if(person===8){
					itens['cable']=true;
					$("#cable").css({opacity:1});
					timeLeft=timeLeft-25;
					$("#timeLeft").html(timeLeft);
				}else if(person===2){
					timeLeft=timeLeft-10;
					$("#timeLeft").html(timeLeft);
				}


		}

				

	}

	if(action.hasOwnProperty(option)){
		action[option](person);
	}


}





