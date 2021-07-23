var myData = localStorage['objectToPass'];
var answersList = myData.split("break");

$(document).ready(function(){
    for (var i = 0; i < answersList.length; i++) {
        var question = JSON.parse(answersList[i]);
        console.log(question);
        $("p").append("<div style='color: blue'>" + question["question"] + "</div>");
        for (var key in question) {
            if (question[key] === true) {
                $("p").append("<div>" + key + "</div>");
            }
        }
    }    
  });