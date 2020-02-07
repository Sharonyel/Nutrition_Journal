$(document).ready(function(){
    var quoteSource=[
    {
        quote: "Let food be thy medicine and medicine be thy food.",
        name:"Hippocrates"
    },
    {
        quote:"To eat is a necessity, but to eat intelligently is an art.",
        name:"Francois de la Rochefoucauld"
    },
    {
        quote:"Our bodies are our gardens, to which our willis are our gardeners",
        name:"William Shakespeare"
    },
    {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        name:"Thomas A. Edison"
    },
    {
        quote:"The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not.",
        name:"Mark Twain"
    },
    {
        quote:"Even in this high-tech age, the low-tech plant continues to be the key to nutrition and health.",
        name:"Jack Weatherford"
    },
    {
        quote:"Exercise is king. Nutrition is queen. Put them together and you've got a kingdom.",
        name:"Jack Lalanne"
    },
    {
        quote:"When in doubt, use nutrition first",
        name:"Roger Williams"
    },
    {
        quote:"If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have the safest way to health.",
        name:"Hippocrates"
    },    
    {
        quote:"Exercise is a celebration of what your body can do. Not a punishment for what you ate.",
        name:"Anonymous"
    },
    {
        quote:"The reason I exercise is for the quality of life I enjoy.",
        name:"Kenneth H. Cooper"
    }

];

    setInterval(quotes,7000);
    $(document).ready(quotes);
    function quotes() {
        var sourceLength = quoteSource.length;
        var randomNumber= Math.floor(Math.random()*sourceLength);
        var newQuoteText = quoteSource[randomNumber].quote;
        var newQuoteGenius = quoteSource[randomNumber].name;
        var timeAnimation = 500;
        var quoteContainer = $('#quoteContainer');
        //fade out animation with callback
        quoteContainer.fadeOut(timeAnimation, function(){
          quoteContainer.html('');
                  quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
          //fadein animation.
          quoteContainer.fadeIn(timeAnimation);
      


    // console.log( "window loaded" );
        });
    }

    $('#quoteButton').click(function(event){
        event.preventDefault();
        //getting a new random number to attach to a quote and setting a limit
        var sourceLength = quoteSource.length;
        var randomNumber= Math.floor(Math.random()*sourceLength);
        //set a new quote
        for(i=0;i<=sourceLength;i+=1){
        var newQuoteText = quoteSource[randomNumber].quote;
        var newQuoteGenius = quoteSource[randomNumber].name;
        //console.log(newQuoteText,newQuoteGenius);
  var timeAnimation = 500;
  var quoteContainer = $('#quoteContainer');
  //fade out animation with callback
  quoteContainer.fadeOut(timeAnimation, function(){
    quoteContainer.html('');
            quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
    //fadein animation.
    quoteContainer.fadeIn(timeAnimation);
  });  
        
        break;
    };//end for loop

});//end quoteButton function
    
    
});//end document ready

