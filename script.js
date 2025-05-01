let query = '';
let shownCount = 0;
let nextPageToken = '';

function searchYouTube() {
  query = document.getElementById('search-input').value;
  shownCount = 0;
  nextPageToken = '';
  document.getElementById('video-results').innerHTML = '';
  document.getElementById('modal').classList.remove('hidden');
  loadEmbed();
}

function getRecommended() {
  // For now, we'll use a fixed search for "recommended" videos
  query = 'recommended';
  shownCount = 0;
  nextPageToken = '';
  document.getElementById('video-results').innerHTML = '';
  document.getElementById('modal').classList.remove('hidden');
  loadEmbed();
}

function loadEmbed() {
  const iframe = document.getElementById('video-frame');
  
  // Use YouTube's search URL to load a page with search results
  const searchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

  // Load the search results page directly inside the iframe
  iframe.src = searchURL;
}

function loadMore() {
  // In case you want to implement pagination (use nextPageToken, etc.)
  console.log('Load More');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}
