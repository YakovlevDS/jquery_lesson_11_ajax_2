jQuery(function($) {
	
	
	$('#ajax').ajaxSend(function(e, XHR, obj) { alert('send')});
	$('#ajax').ajaxComplete(function(e, XHR, obj) { alert('coplete')});
	$('#ajax').ajaxSuccess(function(e, XHR, obj) { alert('success')});
	$('#ajax').ajaxError(function(e, XHR, obj) { alert('error')});
	
	
	$('#btn').click(function(e) {
		
		e.preventDefault();
		
		$('#ajax').html('<span>Отправка!</span>').fadeIn(1000,function() {
			
			
			//var result = 'name='+ $('input[name=name]').val() +'email=' +$('input[name=email]').val() +'subject='+ $('input[name=subject]').val() +'text='+$('textarea[name=text]').val();
			
			var result = $('#contact-form').serializeArray();
			
			//alert($.param(result));
			
			var res = $('#contact-form').serialize();
			
			//alert(res);
			$.ajaxSetup({
				
				
				url : 'server.php',
				type : 'POST',
				dataType : 'html',// xml script html
				context : document.getElementById('ajax'),
				
				beforeSend : function (jqXHR) {
					//done() fail()  then() always()
				},
				cache : true,
				complete : function (jqXHR, status) {
					//alert(status);	
				},
				
				//contentType : 'multipart/form-data',//'application/x-www-form-urlencoded; charset=UTF-8',//'text/plain', //'application/x-www-form-urlencoded',
				
				headers : {
					'header' : 'some text'
				},
				
				processData : false,
				
				timeOut : 2000,
				
				success : function (data, status, jqXHR) {
					
					///$('.grid_5').append(data);
					
					$(this).find('span').fadeOut(300,function() {
						
						$(this).text('Добавлено!').fadeIn(300);
						
					});
					
					$(this).delay(1000).fadeOut(1000,function() {
						
						$('.grid_5').append('<h3>' + data.name + '</h3>' + '<p>' + data.text + '</p>');
						
					});
				},
				
				error : function() {
					//alert('ERROR');
				}
				
				
			});
			
			
			$.ajax({
				
				data : result
				
			});
			
			
			
			
			/*var jqXHR = $.get('server.php',result,function(data, status, jqXHR) {	
			}, 'json');*/
			
			/*var jqXHR = $.post('server.php',result,function(data, status, jqXHR) {	
			}, 'json');*/
			
			/*var jqXHR = $.getJSON('server.php',result,function(data, status, jqXHR) {	
			});*/
			
			/*var jqXHR = $.getScript('server.php', function(data, status, jqXHR) {	
			});*/
			
			
		/*	$('.grid_5').load('server.php',result, function() {
				
			}, 'json');*/
			
			
			/*jqXHR.done(function() {
				
				alert('done')
				
			});
			
			jqXHR.fail(function () {
				alert('fail');
			});
			
			jqXHR.always(function () {
				alert('always');
			});
			
			jqXHR.then(function () {
				alert('done');
			},
			
			function() {
				alert('fail');
			});*/
			
			
			
		});
		
	});
	
});

