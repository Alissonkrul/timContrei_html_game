
var text = [
	{
		intro: [
			'Hello Katie, tudo bem contigo?',
			'Oi Bob, tudo ótimo e contigo?',
			'Tudo fantástico. Meu trabalho sobre FIFO ficou do car****! Valeu a pena virar 15 noites!',
			'Que bacana, posso ver?',
			'Claro, deixa só eu achar o pendrive!',
			'...',
			'...',
			'...',
			'CADE A PORRA DO PENDRIVE ?!?!?!?!',
			'ESQUECI O PENDRIVE EM CASA!! Vou ligar pro Bill e pedir pra ele me trazer!',
			'...',
			'...',
			'...',
			'MERDA A TIM NÃO TEM SINAL!',
			'Katie, sabe onde por aqui tem sinal?',
			'Isso eu já não sei… Mas no pátio tem alguns veteranos, pergunte pra eles!'
		]
	},


	//Giba
	{
		speach: [
			['Falaaa calouro Burro! Por quê tá com essa cara de perdido?', [0,1,2], true],
			['Já arranjou minha cerveja?', [3,4], true],
			['Não me enche mais o saco!', [5], true],
			['E eu preciso de uma bera, me arranje uma e eu te conto!', [5], true],
			['Isso mesmo calouro, marquei o bosque no seu mapa!', [6], true],
			['Ihhhh, drogado!!!!',[5], true]
		],
		answer: [
			['Preciso descobrir onde é o bosque!', [3], true],
			['EAEEEEEEE tudo numa nice??', [5], true],
			['Nada não cara.', ['exit'], true],
			['Sim, aqui está!', [4], false, 'beer'],
			['Sai pra lá, bebum!', ['exit'], true],
			['Sair', ['exit'], true],
			['Valeu!', ['exit', 'close','give', 'map'], true]
		]
	},


	//Pedro
	{
		speach: [
			['Bom dia, Senhor!', [0,1,2], true],
			['Já tem o cabo contigo?', [3,4], true],
			['Desculpe, mas tenho que dar aula agora.', [5], true],
			['Sei sim, mas estou precisando de uma ajuda primeiro. O cabo VGA da sala A09 estragou e preciso que troque. Pode fazer isso para mim?', [3, 4], true],
			['Então procure o Renato da administração que ele lhe dará um. Ele está do outro lado do pátio.', [5], true],
			['Pergunte para seus colegas.',[5], true],
			['Obrigado. Marquei o bosque no seu mapa!',[6], true]
		],
		answer: [
			['Professor, sabe me dizer onde é o bosque?', [3], true],
			['Sabe me dizer quanto é 10010101 mais 11100101?', [5], true],
			['Sua aula é melhor do que a do Paulo! Eu juro!(Saia correndo)', ['exit'], true],
			['Sim, é pra já! (10 min)', [6], false, 'cable'],
			['Não tenho o cabo!', [4], true],
			['Sair', ['exit', 'item'], true],
			['Valeu!', ['exit', 'close', 'give', 'map', 'timeLeft'], true]
		]
	},	


	//Neto
	{
		speach: [
			['Eae calouro, tudo em paz irmão?', [1,3,2], true],
			['E aí, ele já sumiu?', [5,6], true],
			['Quer comprar leite com pera?', [7, 8], true],
			['Sei sim, mas preciso que diga pra um vigilante que está me procurando que estou lá no Biológicas. Pode fazer isso?', [0,4], true],
			['Shoooow! Procura no 2º Andar, pergunta pra alguém por lá, talvez eles saibam!', [9], true],
			['Claro, to vendendo leite e pera! 5 pila!!',[7, 8], true]
		],
		answer: [
			['Claro cara. Sempre um prazer ajudar um irmão em apuros!', ['exit'], true],
			['Susse que nem musse! Cara você sabe onde tem sinal da Tim?', [3], true],
			['Cara, essa cabana me assusta. Fui!', ['exit'], true],
			['De boa na lagoa! Você tem algo pra me vender?', [5], true],
			['Tou fora dessa treta!', ['exit'], true],
			['Sim, ele foi te procurar na china!', [4], false, 'rat'],
			['Nada, Continua na espreita! Vou nessa, que não quero ser pego aqui!', ['exit'], true],
			['Opa, manda pra cá! (5 Dilmas)', ['exit', 'item', 'buy'], true],
			['Não, valeu!', ['exit'], true],
			['Valeu!', ['exit', 'close', 'map'], true]
		]
	},


	//Vigilante
	{
		speach: [
			['Diiiia!', [1,2], true],
			['Encontrou?', [5, 4, 6], true],
			['Tenho que apanhar, este rapaz. Depois nos falamos!', [7], true],
			['Talvez eu saiba, mas primeiro preciso encontrar alguém que está fazendo comércio ilegal nesse bosque. Pode me ajudar?!?!', [0,3], true],
			['Aqui, marquei no seu mapa o 2º Andar, pergunta pra alguem por lá, talvez eles saibam!', [7], true],
			['Vou lá procurar, se eu encontrá-lo, volto e te conto onde encontrar o sinal!', [8], true]
			
		],
		answer: [
			['Deixa comigo!', ['exit'], true],
			['Bom dia. O senhor sabe onde tem sinal da Tim?', [3], true],
			['Não dou papo pra milico! Falows!', ['exit'], true],
			['Não sou um maldito informante!!', ['exit'], true],
			['Sim, ele está dentro da cabana!', [4], false, 'badboy'],
			['Nem sinal dele por aqui!', ['exit'], true],
			['Fiquei sabendo que ele está lá no Biológicas!', ['exit', 'close', 'rat'], false, 'badboy'],
			['Valeu!', ['exit', 'close', 'map'], true],
			['Obrigado', ['exit', 'close'], true]
		]
		
	},

	//Nakamura
	{
		speach: [
			['Faaaaaaala calouro!!', [1,3,2], true],
			['Cade o rango? Preciso comer que hoje tem treino!', [0,4], true],
			['Cara, me deixa comer em paz!', [5], true],
			['Sei de um cara que um parça do meu parça conhece que diz que sabe!! Mas to com fome, tem algo ai?', [0,4], true],
			['Grande calouro!!! Marquei no seu mapa o ginásio. Procure pelo Russo! Ele sabe onde encontrar o parça do meu parça.', [7], true],
			['Eu tenho uma, 5 pila!!',[5, 6], true]
		],
		answer: [
			['Não tenho nada aqui! Vou procurar algo pra ti!', ['exit', 'naka'], true],
			['Cara você sabe onde tem sinal da Tim?', [3], true],
			['Nada não, to indo nessa japa!!!', ['exit', 'naka'], true],
			['Onde posso comprar uma bera?', [5], true],
			['Tenho leite com pêra!', [4], false, 'milk'],
			['Opa, manda pra cá!', ['exit', 'item', 'naka', 'buy'], true],
			['Não, valeu!', ['exit', 'naka'], true],
			['Valeu!', ['exit', 'close', 'map', 'naka', 'russo'], true]
		]
	},


	//Paulo
	{
		speach: [
			['Fala meu Querido!!', [1,2], true],
			['Achou o Japa?', [6,3], true],
			['Já achou o sinal?', [5], true],
			['Bobzinho do meu coração! Essa vida não é esse quik morango que você tá pensando. Se quiser ajuda, tem que se ajudar... me ajudando! Ajude a achar o Nakamura, que ele não pode perder essa aula e depois te digo o que precisa saber!', [0,3], true],
			['Maravilha! Eu não sei onde tem sinal, mas tem um cara chamado Google que tudo knows!!! Aqui, o oráculo Google diz: Procure pelo profeta Buiu em uma árvore cercada de cachorros no Ginásio! Ele saberá onde encontrar o sinal.', [5], true]
		],
		answer: [
			['Claro professor, xá comigo!', ['exit'], true],
			['Pô pssor, sabe onde tem sinal da TIM?? Não aguento mais procurar.', [3], true],
			['Fala Professor. Tchau!!', ['exit'], true],
			['Pô professor, deixa que o Naka se vire!', ['exit'], true],
			['Sair', ['exit'], true],
			['Valeu!', ['exit', 'close', 'map', 'buiu'], true],
			['Ele já tá vindo!', [4], false, 'naka']
		]
	},


	//Russo
	{
		speach: [
			['И почти всюду на первом курсе!', [1,3,2], true],
			['Obrrrrigado! Querrria tanto um alfajorrrr!', [6,4], true],
			['Saia daqui! Antes que me encorrrontrrem!', [7], true],
			['Me Corrmpe um alfajor que eu te passo a inforrrmaçon!', [0,4,5], true],
			['Falerr com o Porrrrofeta  Buiurrrrr! Ele está debarrrraixo da arrrvorre cerrrrcada de cachorrrrros!', [6], true],
			['Tenho munição parra basucas e grrrrranadas de mão… mas não posso venderr prra você.', [7], true],

		],
		answer: [
			['Toma aqui!', [4], false, 'choco'],
			['Ok, acho que isso foi um oi! Saberrree onde trrrem sinal da Tim??', [3], false, 'russo'],
			['Yourr noterr speakrrr brrrasileirrro!', ['exit'], true],
			['Tem algo para V-E-Nrrr-D-E-Rrrr ? Me entendeu?', [5], true],
			['Compra você, folgado!', ['exit'], true],
			['Tira o olho que esse é meu!', ['exit'], false, 'choco'],
			['Valeu!', ['exit', 'close', 'map', 'buiu'], true],
			['Sair', ['exit'], true]
		]
	},

	//Renato
	{
		speach: [
			['Bom dia aluno!', [0,1], true],
			['Ainda não terminei! Pode me ajudar?', [2,3], true],
			['Estou ocupado! Leve o cabo para o Professor.', [4], true],
			['Tenho sim. Só espere eu trocar essas lampadas. Pode me ajudar?', [2,3], true],
			['Obrigado, aqui está o cabo!', [4], true],
		],
		answer: [
			['Bom dia! O professor Pedro precisa de um cabo VGA, você tem?', [3], false, 'pedro'],
			['Você não era a pessoa que pensava!', ['exit'], true],
			['Sim! (25 min)', [4], true],
			['Desculpa, tenho medo de altura!', ['exit'], true],
			['Valeu!', ['exit',  'timeLeft', 'close', 'map'], true]
		]
	},

	//Buiu
	{
		speach: [
			['Bem vindo à casa do Senhor dos Cachorros, o oráculo Buiu!', [0], false, 'buiu'],
			['Eu sou o sinal! Deixe um de meus cachorros morder sua panturrilha e seu telefone funcionará!', [1,2], true],
		],
		answer: [
			['Me disseram que você é aquele que sabe onde há sinal!', [1], true],
			['Eu aceito! Qualquer coisa!', ['exit', 'final1'], true],
			['Não, de jeito nenhum!', ['exit', 'final2'], true]
		]
	},

	//Loja
	{

		speach: [
			['O que deseja comprar??', [0, 1, 2, 3], true],
			['O que deseja comprar??', [0, 1, 2, 3], true],
			['O que deseja comprar??', [0, 1, 2, 3], true]
		],
		answer: [
			['Alfajor (5 Dilmas)', ['exit', 'store'], true],
			['Cerveja (10 Dilmas)', ['exit', 'store'], true],
			['Leite com Pera (10 Dilmas)', ['exit', 'store'], true],
			['Tou de boa!', ['exit'], true]
		]


	}


];

var avatar = {

	Tempo: 100,
	Dinheiro: 100,

	first: [

	  	0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0

	]


};

var itens = {
	beer: false,
	cable: false,
	milk: false,
	choco: false,
	rat: false,
	badboy: false,
	coin: true,
	clock:true,
	pedro:false,
	buiu: false,
	naka:false,
	russo:false
};


var locations = {
	yard: true,
	woods: false,
	sec_floor: false,
	gym: false
};

var itemStore = [
	5, 10, 10
];








