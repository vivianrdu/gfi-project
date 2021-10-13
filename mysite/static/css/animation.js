var page = 0;
var pages = [
    {
        question: "Do you eat meat?",
        options: ["Yes", "Vegetarian", "Vegan", "Pescetarian", "Halal"]
    },
    {
        question: "Do you have any food allergies?",
        options: ["Wheat-free", "Dairy-free", "Peanut-free", "Tree nut-free", "Sulfite-free", "Soy-free", "Sesame-free", "Egg-free", "Gluten-free"] 
    },
    {
        question: "Do you follow any of these diets?",
        options: ["Vegan", "Paleo", "Ketogenic", "Low Fodmap"]
    },
    {
        question: "What stores do you shop from?",
        options: ["Costco", "Trader Joe's", "Safeway", "Whole Foods", "Target", "Walmart", "Publix"]
    },
    {
        question: "What is your price point?",
        options: ["$1", "$2", "$3", "$idk"]
    },
    {
        question: "What foods do you like?",
        // get this from a dataset lol
        options: ["Broccoli", "Apple", "Banana","Bruscetta","bacon", "black beans", "bagels", "baked beans", "BBQ", "bison","barley", "beer", "bisque",
                    "bluefish", "bread", "broccoli", "buritto", "babaganoosh"]
    }
]

const answers = [];
for (var i = 0; i < pages.length; i++) {
    var p = pages[i];
    var a = {};
    a.question = p.question;
    for (var j = 0; j < p.options.length; j++) {
        a[p.options[j]] = false;
    }
    answers.push(a);
}




$(document).ready(function(){
    var container = $(".options-container");
    change_buttons();
    change_page();

    $("#next").click(function(){
        //container.append( "<p>Test</p>");
        page+=1;
        change_page();
      }); 
    $("#prev").click(function(){
        page-=1;
        change_page();
    }); 

    $("#submit").click(function(){
        var answersString = ""
        for (var i = 0; i < answers.length; i++) {
            answersString += JSON.stringify(answers[i]);
            answersString += "break";
        }
        localStorage.setItem('objectToPass', answersString);
        location.href = "file:///Users/isabella/Desktop/gfi-project/mysite/recipes/templates/recipes/results.html";
    })

    $(".btn").click(change_buttons);

    /*$(".options").click(function(){
        console.log(answers);
        $(this).toggleClass("options-dark");
        var text = $(this).text();
        answers[page][text] = !answers[page][text];
    });*/

    


      
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

    if (newOptions.length < 10){
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
    //makes drop down menu if too many items
    else {
        container.append("<select id='selectBox' multiple></select> ");
        var selectMenu = $('#selectBox');
        for (let i = 0; i < newOptions.length; i++) {
            if (answers[page][newOptions[i]]) {
                selectMenu.append("<option class='dropdownoption'>" + newOptions[i] + "</option>");
            }
            else {
                selectMenu.append("<option class = 'dropdownoption'>" + newOptions[i] + "</option>");
            }
            
        }
        $("#selectBox").click(function(){
            var foodName = $('#selectBox').find(":selected").text();
            console.log(foodName);
            for (var key in answers[page]) {
                console.log(key);
                if (foodName.includes(key)) {
                    answers[page][key] = true;
                }
                else if (key === "question") {

                }
                else {
                    answers[page][key] = false;
                }
            }
            //$(this).toggleClass("dropdownoption-dark");
            //var text = $(this).text();
            //answers[page][text] = !answers[page][text];
        });
    }
    
    
}