function test() {

    $.ajax({
        'async': true,
        'crossDomain': true,
        'url': 'https://api.nutritionix.com/v1_1/search/subway?results=0%3A20&cal_min=0&cal_max=1000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories&appId=b04916a8&appKey=a0297706ab50712f995e4ad30909ae42',
        'method': 'GET',
        'processData': true,

    }).then(function (response) {
        console.log(response);
    })
}

test();

var settings = {
    'async': true,
    'crossDomain': true,
    'url': 'https://trackapi.nutritionix.com/v2/search/instant?query=bacon&detailed=true',
    'method': 'GET',
    'headers': {
        'content-type': 'application/json',
        'accept': 'application/json',
        'x-app-id': 'b04916a8',
        'x-app-key': 'a0297706ab50712f995e4ad30909ae42',
        'x-remote-user-id': '0',
        'cache-control': 'no-cache',


    },
    'processData': false,

}

$.ajax(settings).done(function (response) {
    console.log(response);
});

var settings2 = {
    'async': true,
    'crossDomain': true,
    'url': 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    'method': 'POST',
    'headers': {
        'content-type': 'application/json',
        'accept': 'application/json',
        'x-app-id': 'b04916a8',
        'x-app-key': 'a0297706ab50712f995e4ad30909ae42',
        'x-remote-user-id': '0',
        'cache-control': 'no-cache',
        'postman-token': 'fa71a67a-c306-e015-1ccb-f9e7b4dd2424'
    },
    'processData': false,
    'data': '{\n \'query\': \'orange\',\n \'num_servings\': 1,\n \'aggregate\': \'string\',\n \'line_delimited\': false,\n \'use_raw_foods\': false,\n \'include_subrecipe\': false,\n \'timezone\': \'US/Eastern\',\n \'consumed_at\': null,\n \'lat\': null,\n \'lng\': null,\n \'meal_type\': 0,\n \'use_branded_foods\': false,\n \'locale\': \'en_US\'\n }'
}

$.ajax(settings2).done(function (response) {
    console.log(response);
});

var exercise = {
    'async': true,
    'crossDomain': true,
    'url': 'https://trackapi.nutritionix.com/v2/natural/exercise',
    'method': 'POST',
    'headers': {
        'content-type': 'application/json',
        'accept': 'application/json',
        'x-app-id': 'b04916a8',
        'x-app-key': 'a0297706ab50712f995e4ad30909ae42',
        'x-remote-user-id': '0',
        'cache-control': 'no-cache',
        'postman-token': 'fa71a67a-c306-e015-1ccb-f9e7b4dd2424'
    },
    'processData': false,
    // 'data': {
    //     'query': 'ran 3 miles','+
    //     'gender': 'female',
    //     'weight_kg': 72.5,
    //     'height_cm': 167.64,
    //     'age': 30
    // }

    'data': '{\n \'query\': \'toe touches 10 min\',\n \'\gender\': \'female\',\n \'weight_kg\':72.5,\n \'height_cm\':167.64,\n \'age\':30}'

}


$.ajax(exercise).done(function (response) {
    console.log(response);
    // document.querySelector('#img1').setAttribute('src', response.foods[0].photo.thumb)
});