$('#tombol').on('click', function(){
    $('#daftar-film').html('')
    $.ajax({
        url: 'http://www.omdbapi.com',
        typ: 'get',
        dataType: 'json',
        data:{
            'apikey': 'a5ea8c6a',
            's': $('#cari').val()
        },
        success: function (hasil) {
            if (hasil.Response == 'True') {
                let film = hasil.Search
                console.log(film);
                $.each(film, function(i, data) {
                    $('#daftar-film').append(`
                          <div class="col-md-4 my=3">
                        <div class="card" style="width: 18rem;">
                            <img src="${data.Poster}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title"> ${data.Title} </h5>
                            <p class="card-text"> ${data.Year}</p>
                            <a href="#" class="btn btn-primary detail" data-id="${data.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</a>
                            </div>
                        </div>
                    </div>    
                    `)
                })
            }else{
                $('daftar-film').html(`
                    <div class="col">
                        <h5 class="text-center text-danger"> ${hasil.Error} </h5>
                    </div>  
                    `)
            }
        }
    })
});

// event budling
$('#daftar-film').on('click', '.detail', function() {
    $.ajax({
        url: 'http://www.omdbapi.com',
        typ: 'get',
        dataType: 'json',
        data:{
            'apikey': 'a5ea8c6a',
            'i':$(this).data('id')
        },
        success: function (hasil) {
            if (hasil.Response == 'True') {
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${hasil.Poster}" class="card-img" alt="">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item">${hasil.Title}</li>
                                    <li class="list-group-item">Released: ${hasil.Released}</li>
                                    <li class="list-group-item">Actors: ${hasil.Actors}</li>
                                    <li class="list-group-item">Award: ${hasil.Awards}</li>
                                    <li class="list-group-item">Director: ${hasil.Director}</li>
                                </ul>
                            </div>
                        </div>
                    </div>    
                `)
            }
        }
    })
})