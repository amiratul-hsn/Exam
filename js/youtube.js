const youtubeplaylist = document.getElementById('youtubeplaylist')

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=UUbdiovrPX0spsJLbEisvAgQ&key=AIzaSyDDrmqfm--hCLRhw_tWIi16XW6SbyJ4NeA')
.then(res => res.json())
.then(data => {
    console.log(data);
    data.items.forEach(el => {
        youtubeplaylist.innerHTML += `
         <div class="col-md-3">
              <div class="card">
                <iframe class="card-img-top" src="https://www.youtube.com/embed/${el.snippet.resourceId.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="card-body">
                  <p>${el.snippet.title}</p>
                  <small>${el.snippet.publishedAt}</small>
                </div>
              </div>
            </div>
        `
        

    })
})