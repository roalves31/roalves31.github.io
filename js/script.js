$(function(){
	var flickrApi = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

	$.getJSON(flickrApi, {
		tags: "universe, stars",
		tagmode: "all",
		format: "json"
	}).done(function(data) {
		console.log(data);
		$.each(data.items, function(index, item) {
			console.log(item);
			$("<img>").attr("src", item.media.m).appendTo("#flickr");

			if(index == 5) {
				return false;
			}
		});
	}).fail(function() {
		alert("Falha Ajax.");
	});
});
