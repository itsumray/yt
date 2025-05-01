let nextPageToken = '';
let query = '';
let shownCount = 0;

function searchYouTube() {
  query = document.getElementById('search-input').value;
  shownCount = 0;
  nextPageToken = '';
  document.getElementById('video-results').innerHTML = '';
  document.getElementById('popup').classList.remove('hidden');
  fetchVideos();
}

function loadMore() {
  fetchVideos();
}

function fetchVideos() {
  const apiKey = 'AIzaSyC_O58TFr5rI-UibHnTS-oZoRzNGONQGAw';
  const maxResults = 10;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=${maxResults}&pageToken=${nextPageToken}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      nextPageToken = data.nextPageToken || '';
      const results = data.items.slice(shownCount, shownCount + 4);
      shownCount += 4;

      results.forEach(item => {
        const videoId = item.id.videoId;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        iframe.width = "560";
        iframe.height = "315";
        document.getElementById('video-results').appendChild(iframe);
      });

      if (shownCount >= data.items.length && !nextPageToken) {
        document.getElementById('load-more').style.display = 'none';
      } else {
        document.getElementById('load-more').style.display = 'block';
      }
    })
    .catch(err => {
      console.error('API error:', err);
      alert('Error fetching videos');
    });
}
