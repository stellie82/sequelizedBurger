var burgersList = [];

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

function updateBurger(burgerState) {
    $.ajax({
        method: "PUT",
        url: "/api/burgers",
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