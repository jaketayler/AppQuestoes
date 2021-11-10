var gabarito = [{
		questao: 'question1',
		resposta: 'A',
		peso: 2

	},
	{
		questao: 'question2',
		resposta: 'A',
		peso: 2

	},
	{
		questao: 'question3',
		resposta: 'A',
		peso: 2

	},
	{
		questao: 'question4',
		resposta: 'A',
		peso: 2

	},
	{
		questao: 'question5',
		resposta: 'A',
		peso: 2

	},
	{
		questao: 'question6',
		resposta: 'A',
		peso: 1.5

	},
	{
		questao: 'question7',
		resposta: 'A',
		peso: 0.5

	},
	{
		questao: 'question8',
		resposta: 'A',
		peso: 0.5

	},
	{
		questao: 'question9',
		resposta: 'A',
		peso: 1.5

	},
	{
		questao: 'question10',
		resposta: 'A',
		peso: 0.5

	},
	{
		questao: 'question11',
		resposta: 'A',
		peso: 0.5

	},
	{
		questao: 'question12',
		resposta: 'A',
		peso: 0.5

	},
	{
		questao: 'question13',
		resposta: 'A',
		peso: 0.5

	},
	{
		questao: 'question14',
		resposta: 'A',
		peso: 0.5

	},
	{
		questao: 'question15',
		resposta: 'A',
		peso: 0.5

	}
];

function catureQuestions() {
	var selectedQuestion = [];
	for (var qtdQuestion = 0; qtdQuestion < 15; qtdQuestion++) {
		var nameQuestion = "question" + (qtdQuestion + 1);

		for (var i = 0; i < document.getElementsByName(nameQuestion).length; i++) {
			var radioButton = document.getElementsByName(nameQuestion)[i];
			if (radioButton.checked)
				selectedQuestion.push({
					question: nameQuestion,
					selected: radioButton.value
				});
		}
	}
	return selectedQuestion;
}

function corretion() {
	var questions = catureQuestions();

	var nota = 0;

	for (let i = 0; i < questions.length; i++) {
		for (let g = 0; g < gabarito.length; g++) {
			var question = questions[i];
			var questionGabarito = gabarito[g];
			if (question.question == questionGabarito.questao && question.selected == questionGabarito.resposta) {
				nota = nota + questionGabarito.peso;
			}
		}
	}

	for (let i = 0; i < gabarito.length; i++) {
		let alt = document.getElementsByName(gabarito[i].questao);
		for (let opt = 0; opt < alt.length; opt++) {
			let correct = alt[opt].value;
			if (correct == gabarito[i].resposta){
				alt[opt].className = "correct";
			}else{
				alt[opt].className = "error";
			}		
		}		
	}

	if (nota >= 7) {
		var div = document.getElementById("result");
		div.innerHTML = "<p class='success' > Resultado da prova é: " + nota + " <br> <b>Parabéns você está aprovado</b></p>";
	} else {
		var div = document.getElementById("result");
		div.innerHTML = "<p class='danger' > Resultado da prova é: " + nota + " <br> <b>Infelizmente você está respovado</b></p>";

	}
}