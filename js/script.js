$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "https://altynpool.com/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you! We`ll answer you shortly!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});