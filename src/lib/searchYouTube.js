var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: function(data) {
      callback(data);
    },
    dataType: 'json'
  });
};

window.searchYouTube = searchYouTube;
