// Set up array to hold list of burgers user inputs
var burgersList = [];

// Create function to get the list of burgers
function getBurgers() {
    $.get("/api/burgers", function (data) {
        burgersList = data;
        console.log(burgersList);
        for (i = 0; i < burgersList.length; i++) {
            if (burgersList[i].devoured === "0") {
                $(".todo-list").append("<div class=todo-items>"
                    + "<li>" + burgersList[i].burger_name + "</li>"
                    + "<button class='devoured' id=" + burgersList[i].id
                    + " devoured=" + burgersList[i].devoured + ">Devour It!</button>"
                    + "</div>");
            } else {
                $(".done-list").append("<div class=done-items>"
                    + "<li>" + burgersList[i].burger_name + "</li>");
            };
        };
        devouredBurger();
    });
};

// Create a function to hold the stats of the clicked burger
function devouredBurger() {
    $(".devoured").on("click", function (event) {
        let id = $(this).attr("id");
        // var burgerDevoured = $(this).attr("devoured");

        let devouredState = {
            id: id,
            devoured: 1
        };

        console.log(devouredState);
        updateBurger(devouredState);
    });
};

// Create a function to update the status of the burger in the DB when the "devour" button is clicked
function updateBurger(burgerState) {
    $.ajax({
        method: "PUT",
        url: "/api/burgers",
        data: burgerState
    }).then(function () {
        location.reload();
    });
};

// Create a function to post a new burger to the DB
$("#submit").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("input.burger").val()
    };
    console.log(newBurger);

    $.ajax({
        type: "POST",
        url: "/api/burgers",
        data: newBurger
    }).then(function () {
        location.reload();
    });
});

$(document).ready(getBurgers);