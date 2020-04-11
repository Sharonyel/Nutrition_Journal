function weightChange() {
    document.querySelector(".modal").classList.add("is-active")
}

function closeWeightChange() {
    document.querySelector(".modal").classList.remove("is-active")
}

function saveWeight() {
    weight = document.querySelector(".weightInput").value
    // console.log(weight);

}

function updateWeight(weight) {
    // console.log(weight);
    // $.get('/api/users/:id', {
    //     weight: weight
    // })
    //     .then(function () {
    //         // window.location.replace("/welcome");
    //         // If there's an error, log the error
    //     })
    //     .catch(function (err) {
    //         errmess = err.responseText;
    //         console.log(errmess);
    //         getError();

    //     });
}

$(document).ready(function () {
    var work = $(".weightBtn")

    work.on("click", working);
    function updateWeight2() {
        weight = document.querySelector(".weightInput").value
        console.log(weight);
    }

    function working(weight) {
        updateWeight2()
        $.post('/api/users/:id', {
            weight: weight
        })
            .then(function () {
                // window.location.replace("/welcome");
                // If there's an error, log the error
            })
            .catch(function (err) {
                errmess = err.responseText;
                console.log(errmess);


            });
    }
})
