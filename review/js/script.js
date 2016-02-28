(function() {

	var fakeSessionId = 'abcdefabcdef123456789';

	var starRating = 0;

    window.onload = function(){
    	initListeners();
    }

    function initListeners(){
    	$('#star1').click(function(){
    		addStars(['star1']);
    		removeStars(['star2','star3','star4','star5']);
    		starRating = 1;
    	});

    	$('#star2').click(function(){
    		addStars(['star1','star2']);
    		removeStars(['star3','star4','star5']);
    		starRating = 2;
    	});

    	$('#star3').click(function(){
    		addStars(['star1','star2','star3']);
    		removeStars(['star4','star5']);
    		starRating = 3;
    	});

    	$('#star4').click(function(){
    		addStars(['star1','star2','star3','star4']);
    		removeStars(['star5']);
    		starRating = 4;
    	});

    	$('#star5').click(function(){
    		addStars(['star1','star2','star3','star4','star5']);
    		starRating = 5;
    	});

    	$('#seeReceipt').click(function(){
    		sendReview();
    	});

    	$('#send').click(function(){
    		// No email is put
    		if($('#email').val() == ''){
    			$('#email').css('border','solid 2px red');
    			alert('Need to add email');
    		}
    		// valid email
    		else if(validateEmail($('#email').val())){
    			
    			sendReceipt($('#email').val());	
    		} else {
    		// invalid email
    			$('#email').css('border','solid 2px red');
    			alert('Invalid Email');
    		}
    	});
    }

    function sendReview(){
    	var review = $('#reviewText').val();

    	if(review == ''){
    		review = 'No Review';
    	}

    	var inputData = {'rating':starRating, 'text':review, 'sessionID': fakeSessionId};

		$.ajax({
		  type: "POST",
		  url: 'http://52.36.228.83:8000/reviews/send',
		  data: inputData,
		  success: nextReceipt
		});    	

		function nextReceipt(result,status){
			console.log(result);
    		console.log(status);
		}

		$('.ratingSection').css('display','none');
    		$('.sendSection').css('display','inherit');
    }

    function sendReceipt(email){
    	var inputData = {'email': email, 'sessionID': fakeSessionId};

    	$.ajax({
		  type: "POST",
		  url: 'http://52.36.228.83:8000/receipts/send',
		  data: inputData,
		  success: sentReceipt
		});    	

		function sentReceipt(result,status){
			console.log(result);
    		console.log(status);
		}

		$('.sendSection').css('display','none');
    	$('.finishPage').css('display','inherit');
    }

    function addStars(ids){
    	for(var i = 0; i < ids.length; i++){
    		var targetID = "#" + ids[i];
    		$(targetID).removeClass('fa-star-o');
    		$(targetID).addClass('fa-star');
    	}
    }

    function removeStars(ids){
    	for(var i = 0; i < ids.length; i++){
    		var targetID = "#" + ids[i];
    		$(targetID).removeClass('fa-star');
    		$(targetID).addClass('fa-star-o');
    	}
    }

    function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

})();