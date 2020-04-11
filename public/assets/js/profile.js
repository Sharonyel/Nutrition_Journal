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

    work.on("click", updateWeight);
    function grabWeight() {
        weight = document.querySelector(".weightInput").value
        console.log(weight);
        // console.log(whatever);
    }

    function updateWeight() {
        grabWeight()
        $.put('/api/users/:id', {
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
