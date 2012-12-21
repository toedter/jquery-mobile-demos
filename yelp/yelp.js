(function(window) {

    var yelp = this, yelpKey = 'BzkG0eKlTgxErtaJyIxQCA'

    yelp.test = function() {
	console.log("test");
    };

    yelp.callYelp = function(lat, long) {
	$.ajax({
	    type : 'GET',
	    Accept : "application/json",
	    url : 'http://api.yelp.com/business_review_search?ywsid=' + yelpKey
		    + '&term=Bars&lat=' + lat + '&long=' + long,
	    crossDomain : true,
	    dataType : 'jsonp',

	    error : function(msg) {
		console.log('got error: ' + msg.statusText);
	    },
	    success : function(msg) {
		if (msg.message.text == 'OK') {
		    var list = "";
		    $.each(msg.businesses, function(i, item) {
			list += '<li><a href="' + item.url + '">';
			list += '<img src="' + item.photo_url + '" />';
			list += '<img src="' + item.rating_img_url + '" />';
			list += "<h3>" +  item.name + "</h3>";
			list += "<p>" +  item.address1 +", " + item.city + "</p>";
			list += '</a></li>';
		    });
		    $("ul:jqmData(role='listview')").append(list).listview("refresh");
		}
	    }
	});
    }

    window.yelp = this;
}(window));