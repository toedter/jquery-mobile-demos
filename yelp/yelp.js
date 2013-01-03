(function(window) {

    var yelp = this, yelpKey = 'BzkG0eKlTgxErtaJyIxQCA';

    yelp.log = function(msg) {
	console.log(msg);
    };

    yelp.callLatLong = function(lat, long) {
	var params = '&lat=' + lat + '&long=' + long;
	callWithParams(params);
    };

    yelp.callAddress = function(address) {
	var params = '&location=' + address;
	callWithParams(params);
    };

    callWithParams = function(params) {
	$("ul:jqmData(role='listview')").empty();
	$.mobile.loading('show');
	$
		.ajax({
		    type : 'GET',
		    url : 'http://api.yelp.com/business_review_search?ywsid=' + yelpKey + '&term=Bars' + params
			    + '&radius=2.0',
		    crossDomain : true,
		    dataType : 'jsonp',

		    error : function(msg) {
			console.log('got error: ' + msg.statusText);
			$.mobile.loading('hide');
		    },
		    success : function(msg) {
			$.mobile.loading('hide');

			// console.log(msg.message);
			if (msg.message.text == 'OK') {
			    var list = "";
			    $.each(msg.businesses, function(i, item) {
				list += '<li><a href="' + item.url + '">';
				list += '<img src="' + item.photo_url + '" />';
				list += '<img src="' + item.rating_img_url + '" />';
				list += "<h3>" + item.name + "</h3>";
				list += "<p>" + item.address1 + ", " + item.city + "</p>";
				list += '</a></li>';
			    });
			    $("ul:jqmData(role='listview')").append(list).listview("refresh");
			}
		    }
		});
    }

    window.yelp = yelp;
}(window));