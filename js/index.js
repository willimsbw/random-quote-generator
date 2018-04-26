var quote;
var author;

$('#new-quote-button').click(function() {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', 
    dataType: 'json',
    type: 'GET',
    success: function(json) {
      quote = json.quote;
      author = json.author;
      $('#quote-text').html('<span class="quotation-mark">"</span>' + quote + '<span class="quotation-mark">"</span>');
      $('#author-text').html(author);
      var tweet = '"' + quote + '" -' + author;
      $('#tweet-button').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(tweet))
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "1WRFaMVlwimshZgLcNbTbaODawOvp1p33zajsnaSNPjskY5bVb"); 
    }
  });
});