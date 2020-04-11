function weightChange() {
    document.querySelector(".modal").classList.add("is-active")
}

function closeWeightChange() {
    document.querySelector(".modal").classList.remove("is-active")
}

function saveWeight() {
    // weight = document.querySelector(".weightInput").value
    // console.log(weight);
}


$(document).ready(function () {
    $.put = function(url, data, callback, type){
 
        if ( $.isFunction(data) ){
          type = type || callback,
          callback = data,
          data = {}
        }
       
        return $.ajax({
          url: url,
          type: 'PUT',
          success: callback,
          data: data,
          contentType: type
        });
      }

    var work = $(".weightBtn")
    // weight = document.querySelector(".weightInput").value
    work.on("click", updateWeight);
    // function grabWeight() {
    //     weight = document.querySelector(".weightInput").value
    //     // console.log(weight);
    //     // console.log(whatever);
    // }

    // function updateWeight(user){
    //     weight = document.querySelector(".weightInput").value
    // $.ajax({
    //     method: "PUT",
    //     url: "/api/users",
    //     data: user
    //   })
    //     .then(function() {
    //     //   window.location.href = "/blog";
    //     });
    // }


    function updateWeight(user) {
        // grabWeight()
        weight = document.querySelector(".weightInput").value
        console.log(weight)
        // console.log(user);
        $.put('/api/users', {
            data: user
            
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
