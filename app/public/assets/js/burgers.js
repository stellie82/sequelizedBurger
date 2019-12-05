// Make sure to wait to attach handlers until the DOM is fully loaded
$(function () {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        var burgerDevoured = $(this).data("isdevoured");

        var devouredState = {
            devoured: burgerDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed devoured to", burgerDevoured);
                // Reload page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload page to get the updated list
                location.reload();
            }
        );
    });
});


