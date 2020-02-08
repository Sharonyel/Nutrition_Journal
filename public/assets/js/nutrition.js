let foodSearch = $('#input').val()
let gender = "male"
let weight = 150
let weightKg = weight / 2.205
let height = 72
let heightCm = height * 2.54
let age = 45
let workout = $('#workout').val().trim()
let time = $('#time').val().trim();
let exeInput = (time + workout);
let today
let calories
let inverseToday 
let amount

$(document).on("change", "input.unitQuantityBox", function(event){
    event.stopPropagation();
    console.log($(this).val());
    console.log("calories ", calories);
    var cal = parseFloat(calories);
    amount = parseFloat($(this).val());
    document.querySelector("#calories1").textContent = (cal * amount).toFixed(2);
    console.log("cal ", cal);
    console.log("amount ", amount);
    document.querySelector("#quantity").textContent = (amount * serving);
   
})

// function test() {

//     $.ajax({
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.nutritionix.com/v1_1/search/subway?results=0%3A20&cal_min=0&cal_max=1000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories&appId=b04916a8&appKey=a0297706ab50712f995e4ad30909ae42",
//         "method": "GET",
//         "processData": true,

//     }).then(function (response) {
//         console.log(response);
//     })
// }

// test();
function picture() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://trackapi.nutritionix.com/v2/search/instant?query=" + foodSearch + "&detailed=true",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "x-app-id": "b04916a8",
            "x-app-key": "a0297706ab50712f995e4ad30909ae42",
            "x-remote-user-id": "0",
            "cache-control": "no-cache",


        },
        "processData": false,

    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        document.querySelector("#img2").setAttribute("src", response.common[0].photo.thumb)
        
    });
}

function foodAjax() {
    var settings2 = {
        "async": true,
        "crossDomain": true,
        "url": "https://trackapi.nutritionix.com/v2/natural/nutrients",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "x-app-id": "b95385e2",
            "x-app-key": "497185225a39b61421f6f0e7fb75a0d5",
            "x-remote-user-id": "0",
            "cache-control": "no-cache",
            "postman-token": "fa71a67a-c306-e015-1ccb-f9e7b4dd2424"
        },
        "processData": false,
        "data":
            `{"query": "${foodSearch}",
        "num_servings": 1,
        "aggregate": "string",
        "line_delimited": false,
        "use_raw_foods": false,
        "include_subrecipe": false,
        "timezone": "US/Eastern",
        "consumed_at": null,
        "lat": null,
        "lng": null,
        "meal_type": 0,
        "use_branded_foods": false,
        "locale": "en_US"}`

        // "data": "{\n \"query\": \"yogurt\",\n \"num_servings\": 1,\n \"aggregate\": \"string\",\n \"line_delimited\": false,\n \"use_raw_foods\": false,\n \"include_subrecipe\": false,\n \"timezone\": \"US/Eastern\",\n \"consumed_at\": null,\n \"lat\": null,\n \"lng\": null,\n \"meal_type\": 0,\n \"use_branded_foods\": false,\n \"locale\": \"en_US\"\n }"
    }

    $.ajax(settings2).done(function (response) {
        console.log(response);
        today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = mm + '/' + dd + '/' + yyyy;
        inverseToday = yyyy + '-' + mm + '-' + dd

        calories = response.foods[0].nf_calories;
        let totalCarb = response.foods[0].nf_total_carbohydrate;
        let cholesterol = response.foods[0].nf_cholesterol;
        let fiber = response.foods[0].nf_dietary_fiber;
        let sugar = response.foods[0].nf_sugars;
        let protein = response.foods[0].nf_protein;
        let fat = response.foods[0].nf_total_fat;
        let sat = response.foods[0].nf_saturated_fat;
        let sodium = response.foods[0].nf_sodium;
        serving = response.foods[0].serving_qty;

        document.querySelector("#name").textContent = foodSearch;
        document.querySelector("#calories1").textContent = calories;
        document.querySelector("#quantity").textContent = serving;
        document.querySelector(".foodSubmit").classList.add('hidden');


        $('#img1').nutritionLabel({
            calorieIntake: 2000,
            showServingUnitQuantity: false,
            itemName: foodSearch,
            showIngredients: false,

            decimalPlacesForQuantityTextbox: 2,
            valueServingUnitQuantity: 1,

            allowFDARounding: true,
            decimalPlacesForNutrition: 2,


            showPolyFat: false,
            showMonoFat: false,
            showTransFat: false,
            showVitaminA: false,
            showVitaminC: false,
            showCalcium: false,
            showIron: false,
            showFatCalories: false,

            valueCalories: calories,

            valueTotalFat: fat,
            valueSatFat: sat,
            // valueTransFat: 0,
            valueCholesterol: cholesterol,
            valueSodium: sodium,
            valueTotalCarb: totalCarb,
            valueFibers: fiber,
            valueSugars: sugar,
            valueProteins: protein,

        });

    });
}

function workoutInfo() {
    let data = `{"query": "${exeInput}",
        "gender": "${gender}",
        "weight_kg": ${weightKg},
        "height_cm": ${heightCm},
        "age": ${age}}`;
    // console.log(data)
    let exercise = {
        "async": true,
        "crossDomain": true,
        "url": "https://trackapi.nutritionix.com/v2/natural/exercise",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "x-app-id": "b04916a8",
            "x-app-key": "a0297706ab50712f995e4ad30909ae42",
            "x-remote-user-id": "0",
            "cache-control": "no-cache",
            "postman-token": "fa71a67a-c306-e015-1ccb-f9e7b4dd2424"
        },
        "processData": false,
        // "data": `{
        //         "query": "20 minute run",
        //         "gender": "female",
        //         "weight_kg": 72.5,
        //         "height_cm": 167.64,
        //         "age": 30
        //     }`

        "data": data

        // "data": "{\n \"query\": \"toe touches 10 min\",\n \"\gender\": \"female\",\n \"weight_kg\":72.5,\n \"height_cm\":167.64,\n \"age\":30}"

    }


    $.ajax(exercise).done(function (response) {
        console.log(response);
        today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        calories = response.exercises[0].nf_calories
        today = mm + '/' + dd + '/' + yyyy;
        inverseToday = yyyy + '-' + mm + '-' + dd
        // document.write(today);

        document.querySelector("#date").textContent=  today
        document.querySelector("#workoutLength").textContent = time + " minutes"
        document.querySelector("#workoutInfo").textContent = workout
        document.querySelector("#calories").textContent = response.exercises[0].nf_calories
        document.querySelector(".exerciseInfo").classList.remove('hidden');
        document.querySelector(".exerciseSubmit").classList.add('hidden');
    });
}
