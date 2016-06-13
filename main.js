$(document).ready(init);

function init() {
    $('.getMovie').val("x-men")
    $('.movieInfo').on('click', passData)
    $('.movieSelection').on('click','.poster img', goToIMDB)
}

function passData() {
    $('.dangerous').hide()
    var movie = $('.getMovie').val()
    var year = $('.movieYear').val()
    var type = $('.selectSize').val()
    console.log(type);
    console.log("clicked");

    $.ajax(`http://www.omdbapi.com/?s=${movie}&y=${year}&type=${type}`)
        .done(data => {
          $('.movieSelection').empty()
            // $('.name').text(data.)
            // debugger;
            console.log(data);
            // $('.name').text(data.Search[0].Title)
            // $('.imdb').text("http://www.imdb.com/title/" + data.Search[0].imdbID)
            // $('.image').attr('src', data.Search[0].Poster)
            let $divs = createMulitpleMovies(data.Search)
            console.log($divs);
            $('.movieSelection').empty().append($divs)


        })
        .fail(function() {
            console.log("it failed");
            $('.dangerous').show()
            alert("Movie not Founds")
        })
}

function createMulitpleMovies (movies){
    return movies.map(movie =>{
      var $div = $('.template').clone();
      $div.removeClass('template')
      $div.addClass('poster')
      $div.find('.name').text(movie.Title)
      $div.find('.year').text('Released: ' + movie.Year)

      $div.find('.image').attr('src', movie.Poster)
      $div.find('#image').attr('href',`http://www.imdb.com/title/${movie.imdbID}/` )

      return $div;
    })

}

function 

function goToIMDB (){
    var url = $(this).data('url')
    console.log(url);

}
