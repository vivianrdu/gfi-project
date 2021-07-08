var page = 0;
var answers = [
    {
        question: "Do you have any food allergies?",
        "Wheat-free": false,
        "Dairy-free": false,
        "Peanut-free": false,
        "Tree nut-free": false,
        "Sulfite-free": false,
        "Soy-free": false,
        "Sesame-free": false,
        "Egg-free": false,
        "Gluten-free": false

    },
    {
        question: "Do you have any food allergies?",
        "Vegan": false,
        "Paleo": false,
        "Ketogenic": false,
        "Low Fodmap": false
    },
    {
        question: "Placeholder question",
        "a": false,
        "b": false,
        "c": false
    }
]

var pages = [
    {
        question: "Do you have any food allergies?",
        options: ["Wheat-free", "Dairy-free", "Peanut-free", "Tree nut-free", "Sulfite-free", "Soy-free", "Sesame-free", "Egg-free", "Gluten-free"] 
    },
    {
        question: "Do you follow any of these diets?",
        options: ["Vegan", "Paleo", "Ketogenic", "Low Fodmap"]
    },
    {
        question: "Placeholder question",
        options: ["a", "b", "c"]
    }
]

$(document).ready(function(){
    var container = $(".options-container");
    change_buttons();

    $("#next").click(function(){
        //container.append( "<p>Test</p>");
        page+=1;
        change_page();
      }); 
    $("#prev").click(function(){
        page-=1;
        change_page();
    }); 

    $(".btn").click(change_buttons);

    $(".options").click(function(){
        $(this).toggleClass("options-dark");
        var text = $(this).text();
        answers[page][text] = !answers[page][text];
    });
      
  });


function change_buttons(){
    if (page === 0) {
        $("#prev").hide();
    }
    else {
        $("#prev").show();
    }
    if (page === pages.length - 1) {
        $("#next").hide();
    }
    else {
        $("#next").show();
    }
    if (page === pages.length - 1) {
        $("#submit").show();
    }
    else {
        $("#submit").hide();
    }
}

function change_page() {
    var container = $(".options-container");
    $("#question").text(pages[page].question);
    container.empty();
    
    var newOptions = pages[page].options;
    
    for (let i = 0; i < newOptions.length; i++) {
        if (answers[page][newOptions[i]]) {
            container.append("<div class = 'options options-dark'>" + newOptions[i] + "</div>");
        }
        else {
            container.append("<div class = 'options'>" + newOptions[i] + "</div>");
        }
        
    }
    $(".options").click(function(){
        $(this).toggleClass("options-dark");
        var text = $(this).text();
        answers[page][text] = !answers[page][text];
    });
}