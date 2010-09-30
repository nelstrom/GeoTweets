Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
	onReady: function() {

		var timeline, map, panel, tabBar, refresh, addMarker, tweetBubble;

		timeline = new Ext.Component({
			title: 'Timeline',
			cls: 'timeline',
			scroll: 'vertical',
			tpl: [
				'<tpl for=".">',
					'<div class="tweet">',
							'<div class="avatar"><img src="{profile_image_url}" /></div>',
							'<div class="tweet-content">',
								'<h2>{from_user}</h2>',
								'<p>{text}</p>',
							'</div>',
					'</div>',
				'</tpl>'
			]
		});

		map = new Ext.Map({
			title: 'Map',
			getLocation: true,
			mapOptions: {
				zoom: 12
			}
		});

		panel = new Ext.TabPanel({
			fullscreen: true,
			animation: 'slide',
			items: [map, timeline]
		});

		tabBar = panel.getTabBar();
		tabBar.addDocked({
			xtype: 'button',
			ui: 'plain',
			iconMask: true,
			iconCls: 'refresh',
			dock: 'right',
			stretch: false,
			align: 'center',
			handler: refresh
		});

		refresh = function() {
			var coords = map.geo.coords;

			Ext.util.JSONP.request({
				url: 'http://search.twitter.com/search.json',
				callbackKey: 'callback',
				params: {
					geocode: coords.latitude + ',' + coords.longitude + ',' + '5mi',
					rpp: 30
				},
				callback: function(data) {
					var tweetList = data.results;
					timeline.update(tweetList);	// Update the tweets in timeline

					// Add points to the map
					for (var i = 0, ln = tweetList.length; i < ln; i++) {
						var tweet = tweetList[i];
						if (tweet.geo && tweet.geo.coordinates) {
							addMarker(tweet);
						}
					}
				}
			});
		};

		addMarker = function(tweet) {
			var position = new google.maps.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1]);

			var marker = new google.maps.Marker({
				map: map.map,
				position: position
			});

			google.maps.event.addListener(marker, "click", function() {
				tweetBubble.setContent(tweet.text);
				tweetBubble.open(map.map, marker);
			});
		};

		tweetBubble = new google.maps.InfoWindow({
			content: "lorem ipsum dolor sit amet"
		});

		map.geo.on('update', refresh);

	}
});
