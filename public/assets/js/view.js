var burgersList = [];

function getBurgers() {
    $.get("/api/burgers", function (data) {
        burgersList = data;
        console.log(burgersList);
        for (i = 0; i < burgersList.length; i++) {
            $(".todo-list").append("<div class=todo-items>"
                + "<li>" + burgersList[i].burger_name + "</li>"
                + "<button class='devoured'>Devour It!</button>"
                + "</div>");
        }
    })
};

$(".devoured").on("click", function (event) {
    console.log("I clicked the devoured button");
    var id = $(this).data("id");
    console.log(id);
    // var burgerDevoured = $(this).data("isdevoured");
    
    var devouredState = {
        id: id,
        devoured: true
    };

    console.log(devouredState);
    updateBurger(devouredState);
});

function updateBurger(burgerState) {
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id,
        data: burgerState
    }).then(function () {
        location.reload();
    });
};

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