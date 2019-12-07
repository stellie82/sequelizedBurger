$(document).ready(function () {

    var burgersList = [];

    function getBurgers() {
        $.get("/api/burgers", function (data) {
            burgersList = data;
            console.log(burgersList);
            for (i = 0; i < burgersList.length; i++) {
                $(".todo-list").append("<li>" + burgersList[i] + "</li>");
            }
        })
    };

    $(".devoured").on("click", function (event) {
        var burgerDevoured = $(this).data("isdevoured");
        updateBurger(burgerDevoured);
    });

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
            getBurgers();
        });
    });
});