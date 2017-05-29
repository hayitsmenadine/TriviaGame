
var count = 30;

var counter = setInterval(timer, 1000);




function timer() {
	count= count-1;
	if (count <= 0) {
		clearInterval(counter);
		alert("times up!");
	}
	document.getElementById("timer").innerHTML = "Time Remaining: "+ count + " secs";
	checkAnswers();
};



function checkAnswers () {
	var q1 = document.forms["form"]["q1"].value;
	var q2 = document.forms["form"]["q2"].value;
	var q3 = document.forms["form"]["q3"].value;
	var q4 = document.forms["form"]["q4"].value;
	var q5 = document.forms["form"]["q5"].value;
	
	var questions = [q1, q2, q3, q4, q5];
	var answers = ["1", "1", "1", "1", "1"];

	var points = 0;
	var total = 5;

	for (var i =0; i<total; i++) {
		if (questions[i] === answers[i]) {
			document.getElementById("correctAnswer").innerHTML += "Ok";	
		} else {
			document.getElementById("wrongAnswer").innerHTML += " WRONG";
		}
	}
};
