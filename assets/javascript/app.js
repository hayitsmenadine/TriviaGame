
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
	var q1 = document.forms[0]["q1"].value;
	var q2 = document.forms[1]["q2"].value;
	var q3 = document.forms[2]["q3"].value;
	var q4 = document.forms[3]["q4"].value;
	var q5 = document.forms[4]["q5"].value;
	
	var questions = [q1, q2, q3, q4, q5];
	var answers = ["1", "1", "1", "1", "1"];

	var points = 0;
	var total = 5;

	for (var i =0; i<total.length; i++) {
		if (questions[i] === answers[i]) {
			document.getElementById("correctAnswer").innerHTML = "Number of Correct Answers: ";	
		} else {
			document.getElementById("wrongAnswer").innerHTML = "Number of Wrong Answers: ";
		}
	}
};
