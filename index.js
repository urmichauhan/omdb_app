$(document).ready(() => {

        $('#displaymovie').hide();
    
        $('#sbtn').click((event) => {
            let title = $('#searchtitle').val();
            let year = $('#searchyear').val();
            let id = $('#searchid').val();
            if(year.length == 0 && id.length == 0)
            {
                bytitle(title);
            }
            else if(year.length != 0 && id.length == 0)
            {
                byyear(title,year);
            }
            else if(year.length == 0 && id.length != 0)
            {
                byid(id);
            }
            else if(year.length != 0 && id.length != 0)
            {
    
                byall(title,year,id);
            }
            else 
            {
                alert("Please fill Required input ID or Title !");
            }
            
            event.preventDefault();
        });
        $("#rbtn").click((e)=>{
           
           e.preventDefault();
        });
        
});


//Search movie by their Title
function bytitle(title) {
      $.ajax({
            type: 'GET', // request type GET, POST, PUT
            dataType: 'json', // requesting datatype
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a70f9d0a'+'&t='+title, 
            success: (data) => { // in case of success response
            
                   console.log(data); 

                   let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>${data.Title}</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);

                    if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#mPoster').attr("src","images (2).jpeg");
                    }
                    else 
                    {
                        $('#mPoster').attr("src",data.Poster);
                    }

                   
                    $('#mTitle').append("Title : ",data.Title);
                    $('#mReleased').append("Released : ",data.Released);
                    $('#mYear').append("Year : ",data.Year);
                    $('#mActors').append("Actors : ",data.Actors);
                    $('#mDirector').append("Director : ",data.Director);
                    $('#mWriter').append("Writer : ",data.Writer);
                    $('#mGenre').append("Genre : ",data.Genre);
                    $('#mRated').append("Rated : ",data.Rated);
                    $('#mProduction').append("Production : ",data.Production);
                    $('#mRuntime').append("Runtime : ",data.Runtime);
                    $('#mLanguage').append("Language : ",data.Language);
                    $('#mCountry').append("Country : ",data.Country);
                    $('#mAwards').append("Awards : ",data.Awards);
                    $('#mPlot').append("Plot : ",data.Plot);
                    $('#mimdbRating').append("IMDBRating : ",data.imdbRating);
                    $('#mimdbVotes').append("IMDBVotes : ",data.imdbVotes);
                    $('#mimdbID').append("IMDB-id : ",data.imdbID);
                    $('#mType').append("Type : ",data.Type);
                    $('#mDVD').append("DVD : ",data.DVD);

                    $('#mWebsite').append("Website : ",data.Website);

                    $('#mRatings').append("Ratings : ");
                    let l = data.Ratings;
                    for(let j=0;j<l.length;j++)
                    {
                        for(i in l[j])
                        {
                            $('#mRatings').append(`${i} : ${l[j][i]}</br>`);
                            console.log(i);
                        }
                    }
                    
                    $('#mBoxOffice').append("BoxOffice : ",data.BoxOffice);
                    $('#mResponse').append("Response : ",data.Response);
                    $('#mMetascore').append("Metascore : ",data.Metascore);

                    
                    $('#displaymovie').show();

                    console.log("done");


                    
                
               
            },
            error: (data) => { // in case of error response

                alert("some error occured")

            },

            beforeSend: () => { // while request is processing.

                // you can use loader here.
                alert("request is being made. please wait")

            },
            complete: () => {

                // what you want to do while request is completed
                alert("data fetched success")

            },
            timeout:3000
        }); // end of AJAX request
 }


//Search Movie by Their Year
function byyear(title,year) {
      $.ajax({
            type: 'GET', // request type GET, POST, PUT
            dataType: 'json', // requesting datatype
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a70f9d0a'+'&t='+title, 
            success: (data) => { // in case of success response
                
                if(data.Year == year)
                {
                     let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>${data.Title}</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);
                   console.log(data); 

                   if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#mPoster').attr("src","images (2).jpeg");
                    }
                    else 
                    {
                        $('#mPoster').attr("src",data.Poster);
                    }

                    $('#mTitle').append("Title : ",data.Title);
                    $('#mReleased').append("Released : ",data.Released);
                    $('#mYear').append("Year : ",data.Year);
                    $('#mActors').append("Actors : ",data.Actors);
                    $('#mDirector').append("Director : ",data.Director);
                    $('#mWriter').append("Writer : ",data.Writer);
                    $('#mGenre').append("Genre : ",data.Genre);
                    $('#mRated').append("Rated : ",data.Rated);
                    $('#mProduction').append("Production : ",data.Production);
                    $('#mRuntime').append("Runtime : ",data.Runtime);
                    $('#mLanguage').append("Language : ",data.Language);
                    $('#mCountry').append("Country : ",data.Country);
                    $('#mAwards').append("Awards : ",data.Awards);
                    $('#mPlot').append("Plot : ",data.Plot);
                    $('#mimdbRating').append("IMDBRating : ",data.imdbRating);
                    $('#mimdbVotes').append("IMDBVotes : ",data.imdbVotes);
                    $('#mimdbID').append("IMDB-id : ",data.imdbID);
                    $('#mType').append("Type : ",data.Type);
                    $('#mDVD').append("DVD : ",data.DVD);

                    $('#mWebsite').append("Website : ",data.Website);

                    $('#mRatings').append("Ratings : ");
                    let l = data.Ratings;
                    for(let j=0;j<l.length;j++)
                    {
                        for(i in l[j])
                        {
                            $('#mRatings').append(`${i} : ${l[j][i]}</br>`);
                            console.log(i);
                        }
                    }
                    
                    $('#mBoxOffice').append("BoxOffice : ",data.BoxOffice);
                    $('#mResponse').append("Response : ",data.Response);
                    $('#mMetascore').append("Metascore : ",data.Metascore);

                    
                    $('#displaymovie').show();

                    console.log("done");
                }
                else
                {
                    let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>Please Enter valid year of this movie !</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);
                }
               
            },
            error: (data) => { // in case of error response

                alert("some error occured")

            },

            beforeSend: () => { // while request is processing.

                // you can use loader here.
                alert("request is being made. please wait")

            },
            complete: () => {

                // what you want to do while request is completed
                alert("data fetched success")

            },
            timeout:3000
        }); // end of AJAX request
}


//Search movie by ID 
function byid(id) {
  
      $.ajax({
            type: 'GET', // request type GET, POST, PUT
            dataType: 'json', // requesting datatype
            async: true,
            url: 'http://www.omdbapi.com/?&apikey=a70f9d0a'+'&i='+id, 
            success: (data) => { // in case of success response
                
                    
                   console.log(data); 
                    let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>${data.Title}</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);

                   if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#mPoster').attr("src","images (2).jpeg");
                    }
                    else 
                    {
                        $('#mPoster').attr("src",data.Poster);
                    }

                    $('#mTitle').append("Title : ",data.Title);
                    $('#mReleased').append("Released : ",data.Released);
                    $('#mYear').append("Year : ",data.Year);
                    $('#mActors').append("Actors : ",data.Actors);
                    $('#mDirector').append("Director : ",data.Director);
                    $('#mWriter').append("Writer : ",data.Writer);
                    $('#mGenre').append("Genre : ",data.Genre);
                    $('#mRated').append("Rated : ",data.Rated);
                    $('#mProduction').append("Production : ",data.Production);
                    $('#mRuntime').append("Runtime : ",data.Runtime);
                    $('#mLanguage').append("Language : ",data.Language);
                    $('#mCountry').append("Country : ",data.Country);
                    $('#mAwards').append("Awards : ",data.Awards);
                    $('#mPlot').append("Plot : ",data.Plot);
                    $('#mimdbRating').append("IMDBRating : ",data.imdbRating);
                    $('#mimdbVotes').append("IMDBVotes : ",data.imdbVotes);
                    $('#mimdbID').append("IMDB-id : ",data.imdbID);
                    $('#mType').append("Type : ",data.Type);
                    $('#mDVD').append("DVD : ",data.DVD);

                    $('#mWebsite').append("Website : ",data.Website);

                    $('#mRatings').append("Ratings : ");
                    let l = data.Ratings;
                    for(let ar=0;ar<l.length;ar++)
                    {
                        for(i in l[ar])
                        {
                            $('#mRatings').append(`${i} : ${l[ar][i]}</br>`);
                            console.log(i);
                        }
                    }
                    
                    $('#mBoxOffice').append("BoxOffice : ",data.BoxOffice);
                    $('#mResponse').append("Response : ",data.Response);
                    $('#mMetascore').append("Metascore : ",data.Metascore);

                    
                    $('#displaymovie').show();

                    console.log("done");


                    
                
               
            },
            error: (data) => { // in case of error response

                alert("some error occured")

            },

            beforeSend: () => { // while request is processing.

                // you can use loader here.
                alert("request is being made. please wait")

            },
            complete: () => {

                // what you want to do while request is completed
                alert("data fetched success")

            },
            timeout:3000
        }); // end of AJAX request
 }


//Search movie by all inputs
function byall(title,year,id) {
  // console.log(searchText);
      $.ajax({
            type: 'GET', // request type GET, POST, PUT
            dataType: 'json', // requesting datatype
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a70f9d0a'+'&t='+title, 
            success: (data) => { // in case of success response
                
                if(data.Year == year && data.imdbID == id)
                {
                   console.log(data); 
                    let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>${data.Title}</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);

                   if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#mPoster').attr("src","images (2).jpeg");
                    }
                    else 
                    {
                        $('#mPoster').attr("src",data.Poster);
                    }

                    $('#mTitle').append("Title : ",data.Title);
                    $('#mReleased').append("Released : ",data.Released);
                    $('#mYear').append("Year : ",data.Year);
                    $('#mActors').append("Actors : ",data.Actors);
                    $('#mDirector').append("Director : ",data.Director);
                    $('#mWriter').append("Writer : ",data.Writer);
                    $('#mGenre').append("Genre : ",data.Genre);
                    $('#mRated').append("Rated : ",data.Rated);
                    $('#mProduction').append("Production : ",data.Production);
                    $('#mRuntime').append("Runtime : ",data.Runtime);
                    $('#mLanguage').append("Language : ",data.Language);
                    $('#mCountry').append("Country : ",data.Country);
                    $('#mAwards').append("Awards : ",data.Awards);
                    $('#mPlot').append("Plot : ",data.Plot);
                    $('#mimdbRating').append("IMDBRating : ",data.imdbRating);
                    $('#mimdbVotes').append("IMDBVotes : ",data.imdbVotes);
                    $('#mimdbID').append("IMDB-id : ",data.imdbID);
                    $('#mType').append("Type : ",data.Type);
                    $('#mDVD').append("DVD : ",data.DVD);

                    $('#mWebsite').append("Website : ",data.Website);

                    $('#mRatings').append("Ratings : ");
                    let l = data.Ratings;
                    for(let j=0;j<l.length;j++)
                    {
                        for(i in l[j])
                        {
                            $('#mRatings').append(`${i} : ${l[j][i]}</br>`);
                            console.log(i);
                        }
                    }
                    
                    $('#mBoxOffice').append("BoxOffice : ",data.BoxOffice);
                    $('#mResponse').append("Response : ",data.Response);
                    $('#mMetascore').append("Metascore : ",data.Metascore);

                    
                    $('#displaymovie').show();

                    console.log("done");
                }
                else
                {
                    let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>Please Enter valid year and ID !</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);
                    

                }
               
            },
            error: (data) => { // in case of error response

                alert("some error occured")

            },

            beforeSend: () => { // while request is processing.

                // you can use loader here.
                alert("request is being made. please wait")

            },
            complete: () => {

                // what you want to do while request is completed
                alert("data fetched success")

            },
            timeout:3000
        }); // end of AJAX request
}
