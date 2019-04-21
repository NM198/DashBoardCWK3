

$(document).ready(function(){
    const key = 'AIzaSyAknoInMbxEVGmJfV_X6-gE6qtwHlM7N8M';
    const playlistId = 'PLwfbQRP-OTv-0SIScy9R5NN9zxHemjrce';
    const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    const options = {
          part: 'snippet',
          key:key,
          maxResults: 20,
          playlistId:playlistId
    }
    loadVideo();


function loadVideo(){
		$.getJSON(URL, options, function(data){
			console.log(data);
			const id = data.items[1].snippet.resourceId.videoId;

			mainVideo(id);

		});
	}

function mainVideo(id){
		$('#video').html(`
		<iframe width="560" height="315" src="https://www.youtube.com/embed/l-ZBMC7at6A?autoplay=1&mute=1&controls=0&loop=1&playlist=8HSr8BjcufM&amp;showinfo=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		`);
	}

});
