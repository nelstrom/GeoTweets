Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
	onReady: function() {

		var timeline, mapPanel, panel, tabBar, refresh, addMarker, tweetBubble;

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

		mapPanel = new Ext.Map({
			title: 'Map',
			useCurrentLocation: true,
			mapOptions: {
				zoom: 12
			}
		});

		panel = new Ext.TabPanel({
			fullscreen: true,
			cardSwitchAnimation: 'slide',
			ui: 'light',
			items: [mapPanel, timeline]
		});

		panel.getTabBar().add([
			{xtype: 'spacer'},
			{
				xtype: 'button',
				iconMask: true,
				iconCls: 'refresh',
				ui: 'plain',
				style: 'margin:0;',
				handler: refresh
			}
		]);
		panel.getTabBar().doLayout();

		refresh = function() {
			var coords = mapPanel.geo.coords;

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
			var latLng = new google.maps.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1]);

			var marker = new google.maps.Marker({
				map: mapPanel.map,
				position: latLng
			});

			google.maps.event.addListener(marker, "click", function() {
				tweetBubble.setContent(tweet.text);
				tweetBubble.open(mapPanel.map, marker);
			});
		};

		tweetBubble = new google.maps.InfoWindow();

		mapPanel.geo.on('update', refresh);

	}
});
