/*
$(document).ready(function(){
	$.getJSON("http://www.youngo.it/json_test.php?tags=oppo&callback=?", function(data){
		var items = [];
		$.each(data, function(key, val) {
			items.push('<li id="' + key + '">' + val + '</li>');
		});
		$('<ul/>', {
			'class': 'my-new-list',
			html: items.join('')
		}).appendTo('body');
	});
});
*/

function pappo(data)
{
	var items = [];
	$.each(data, function(key, val) {
		items.push('<li id="' + key + '">' + val + '</li>');
	});
	$('<ul/>', {
		'class': 'my-new-list',
		html: items.join('')
	}).appendTo('body');
}

function pluto_old()
{
	var contatto = new Object();

	contatto.nome = document.form1.nome.value;
	contatto.cognome = document.form1.cognome.value;

	$.getJSON( "http://www.youngo.it/json_test.php?callback=?", contatto,function(data)
		{
			var items = [];
			$.each(data, function(key, val) {
				items.push('<li id="' + key + '">' + val + '</li>');
			});
			$('<ul/>', {
				'class': 'my-new-list',
				html: items.join('')
			}).appendTo('body');
		}
	);
}

function pluto()
{
	var contatto = new Object();

	contatto.nome = document.form1.nome.value;
	contatto.cognome = document.form1.cognome.value;

	var loader = document.getElementById('loader');
	loader.style.visibility = 'visible';
	window.scrollTo( 0, 0 );

	$.ajax({
		url: "http://www.youngo.it/json_test.php?callback=?",
		type: "GET",
		dataType: "json",
		data: contatto,
		timeout: 10000,
		complete: function(){
			loader.style.visibility = 'hidden'
		},
		success: function(data)
		{
			$('#tutto320').remove();
			var items = [];
			$.each(data, function(key, val) {
				items.push('<li id="' + key + '">' + val + '</li>');
			});
			$('<div/>', {
				'id': 'risultato320',
			}).appendTo('body');
			$('<ul/>', {
				'id': 'my-new-list',
				html: items.join('')
			}).prependTo('#risultato320');
			window.scrollTo( 0, 0 );
		},
		error: function(x, t, m) {
			if(t==="timeout") {
				alert("Nessuna risposta dal Server!\nControllare l'accesso ad Internet e riprovare più tardi, grazie!");
			} else {
				alert(t);
			}
		}
	});
}

function validate()
{
	if (document.form1.nome.value.length < 3)
	{
		alert("Errore: devi inserire il Nome !");
		document.form1.nome.focus();
		return;
	}

	if (document.form1.cognome.value.length < 3)
	{
		alert("Errore: devi inserire il Cognome !");
		document.form1.cognome.focus();
		return;
	}
/*
	if (document.form1.telefono.value.length < 5)
	{
		alert("Errore: devi inserire il Telefono !");
		document.form1.telefono.focus();
		return;
	}

	if (document.form1.email.value.length < 5)
	{
		alert("Errore: devi inserire l'email !");
		document.form1.email.focus();
		return;
	}

	if (document.form1.email.value.length > 0)
	{
		var str=document.form1.email.value;
		if (str.indexOf("@") == -1)
		{
			alert("Errore: indirizzo Email non corretto !");
			document.form1.email.focus();
			return;
		}
	}

	if (document.form1.nome_bambino_1.value.length < 3)
	{
		alert("Errore: devi inserire il Nome del Bambino !");
		document.form1.nome_bambino_1.focus();
		return;
	}
*/
	/*----------*/
/*
	var data = new Date();
	gg_act = data.getDate();
	mm_act = data.getMonth() + 1;
	aa_act = data.getFullYear();

	if (document.form1.giorno_nascita.value == 0)
	{
		alert("Errore: devi selezionare il Giorno di Nascita !");
		document.form1.giorno_nascita.focus();
		return;
	}

	if (document.form1.mese_nascita.value == 0)
	{
		alert("Errore: devi selezionare il Mese di Nascita !");
		document.form1.mese_nascita.focus();
		return;
	}

	if (document.form1.anno_nascita.value == 0)
	{
		alert("Errore: devi selezionare l'Anno di Nascita !");
		document.form1.anno_nascita.focus();
		return;
	}

	if (document.form1.anno_nascita.value > aa_act)
	{
		alert("Errore: la data di nascita è nel futuro !");
		document.form1.anno_nascita.focus();
		return;
	}

	if (document.form1.anno_nascita.value == aa_act)
	{
		if (document.form1.mese_nascita.value > mm_act)
		{
			alert("Errore: la data di nascita è nel futuro !");
			document.form1.mese_nascita.focus();
			return;
		}

		if (document.form1.mese_nascita.value == mm_act)
		{
			if (document.form1.giorno_nascita.value > gg_act)
			{
				alert("Errore: la data di nascita è nel futuro !");
				document.form1.giorno_nascita.focus();
				return;
			}
		}
	}
*/
	/*--------*/
/*
	if (document.form1.liberatoria.checked == false)
	{
		alert("Errore: devi accettare la Liberatoria !");
		document.form1.liberatoria.focus();
		return;
	}
*/
	pluto();
}
