var phrases = [
'Un hombre solo debería bailar cuando otro le dispara a los pies',
'Si pides que llueva, tendrás que soportar el barro',
'Si quieres que todo el mundo se entere de algo, cuentaselo a una persona y dile que no lo cuente'
];

function getRandomPhrase(){
	//console.log(phrases);
	return phrases[Math.floor(Math.random()*phrases.length)];
}

function addPhrase(phrase){
	console.log("In function: " + phrase);
	console.log(phrases);
	phrases.push(phrase);
}


$("button").click(function(){
	$('.phrase').text(getRandomPhrase());
});

$("#form").on('submit', function(event){
	event.preventDefault();
	var keydown = jQuery.Event('keydown', {keyCode: 13});
	var focus = jQuery.Event('focus');
	if(keydown && focus){
		var phrase = $('#add-phrase').val();
		addPhrase(phrase);
	}
	$('#add-phrase').prop('value', '');
});

