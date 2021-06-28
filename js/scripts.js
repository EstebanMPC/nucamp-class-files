// const { Modal } = require("bootstrap");

src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"

$(function () {
        $(".carousel").carousel({ interval: 2000 });
        $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
        } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause");
        }
        });

        $("#reserveButton").click(function () {
                $('#reserveModal').modal('show')
        });
        
        $("#loginButton").click(function () {
                $('#loginModal').modal('show')
        });
});