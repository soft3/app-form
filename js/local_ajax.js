/* questa funzione salva i dati obbligatori nel DB e ritorna l'id del record salvato */

function pluto()
{
	var contatto = new Object();

	contatto.nome = document.form1.nome.value;
	contatto.cognome = document.form1.cognome.value;
	contatto.data_nascita = document.form1.anno_nascita.value + "/" + document.form1.mese_nascita.value + "/" + document.form1.giorno_nascita.value;
	contatto.email = document.form1.email.value;
	contatto.telefono = document.form1.telefono.value;
	contatto.nome_b1 = document.form1.nome_b1.value;
	contatto.nascita_b1 = document.form1.anno_b1.value + "/" + document.form1.mese_b1.value + "/" + document.form1.giorno_b1.value;
	contatto.liberatoria = document.form1.liberatoria.checked;
	contatto.deviceos = document.form1.deviceos.value;
	contatto.deviceosversion = document.form1.deviceosversion.value;
	contatto.uuid = document.form1.uuid.value;
	contatto.lat = document.form1.lat.value;
	contatto.longi = document.form1.longi.value;

	var loader = document.getElementById('loader');
	loader.style.visibility = 'visible';
	window.scrollTo( 0, 0 );

	$.ajax({
		url: "http://www.youngo.it/json_insert.php?callback=?",
		type: "GET",
		dataType: "json",
		data: contatto,
		timeout: 15000,
		complete: function(){
			loader.style.visibility = 'hidden'
		},
		success: function(data)
		{
			window.scrollTo( 0, 0 );
			window.location="form2-320.html?id="+data.id;
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

function pluto2()
{
	var contatto = new Object();

	contatto.id = document.form2.id.value;
	contatto.nome_b2 = document.form2.nome_b2.value;
	contatto.nascita_b2 = document.form2.anno_b2.value + "/" + document.form2.mese_b2.value + "/" + document.form2.giorno_b2.value;
	contatto.nome_b3 = document.form2.nome_b3.value;
	contatto.nascita_b3 = document.form2.anno_b3.value + "/" + document.form2.mese_b3.value + "/" + document.form2.giorno_b3.value;
	contatto.nome_b4 = document.form2.nome_b4.value;
	contatto.nascita_b4 = document.form2.anno_b4.value + "/" + document.form2.mese_b4.value + "/" + document.form2.giorno_b4.value;

	var loader = document.getElementById('loader');
	loader.style.visibility = 'visible';
	window.scrollTo( 0, 0 );

	$.ajax({
		url: "http://www.youngo.it/json_update.php?callback=?",
		type: "GET",
		dataType: "json",
		data: contatto,
		timeout: 15000,
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

			setTimeout(function(){window.location="anim.html"},5000);
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

	/*--------*/

	if (document.form1.liberatoria.checked == false)
	{
		alert("Errore: devi accettare la Liberatoria !");
		document.form1.liberatoria.focus();
		return;
	}

	pluto();
}
