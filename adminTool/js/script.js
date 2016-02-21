(function() {

	var newTutorClassList = {};

    window.onload = function(){
    	initListeners();
    }

    function initListeners(){
    	$('.submitAddClass').click(function(){
    		addClass();
    		console.log(newTutorClassList);
    	});

    	$('#qy').bind("enterKey",function(e){
		   $('.submitAddClass').trigger('click');
		});

		$('#qy').keyup(function(e){
		    if(e.keyCode == 13)
		    {
		        $(this).trigger("enterKey");
		    }
		});

		$('.submitButton').click(function(){
			addNewTutor();
		});
    }

    function addClass(){
    	var classObj = {};

		// Get all the typed info
		var courseID = $('#classSelect option:selected').attr('data-cID');
		var courseName = $('#classSelect option:selected').text();
		var gpa = $("#classGPA").val();
		var instructor = $("#classInstructor").val();
		var qy = $("#qy").val();

		// Creates the class object and adds to list
		classObj['gpa'] = gpa;
		classObj['instructor'] = instructor;
		classObj['qy'] = qy;

		newTutorClassList[courseID] = classObj;

		// Renders and adds class to list
		var classString = '<div class="addedClass"><p>' + courseName + ' / ' + gpa + ' / ' + instructor + ' / ' + qy + '</p></div>'
		$('.listOfClasses').append(classString);

		// Clears the fields for next entry
		$('.addClassForm input').val('');
		$("#classSelect").val($("#classSelect option:first").val());
    }

    function addNewTutor(){
    	var inputData = getTutorInfo();
    	console.log(inputData);

    	$.ajax({
		  type: "POST",
		  url: 'http://52.36.228.83:8000/tutors/create',
		  data: inputData,
		  success: logNewTutor
		});

    	function getTutorInfo(){
    		var newTutorObj = {};
    		newTutorObj['firstname'] = $('#fName').val();
    		newTutorObj['lastname'] = $('#lName').val();
    		newTutorObj['email'] = $('#email').val();
    		newTutorObj['cell'] = $('#phone').val();
    		newTutorObj['desc'] = $('#desc').val();
    		newTutorObj['takenClasses'] = JSON.stringify(newTutorClassList);

    		return newTutorObj;
    	}

    	function logNewTutor(result,status){
    		console.log(result);
    		console.log(status);
    	}
    }

})();