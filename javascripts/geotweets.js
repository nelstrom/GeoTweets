Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
	onReady: function() {

		var timeline = new Ext.Component({
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

		var map = new Ext.Map({
			title: 'Map',
			getLocation: true,
			mapOptions: {
				zoom: 12
			}
		});

		var panel = new Ext.TabPanel({
			fullscreen: true,
			animation: 'slide',
			items: [timeline, map]
		});

		var tabBar = panel.getTabBar();
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

		var refresh = function() {
			var coords = map.geo.coords;

			Ext.util.JSONP.request({
				url: 'http://search.twitter.com/search.json',
				callbackKey: 'callback',
				params: {
					geocode: coords.latitude + ',' + coords.longitude + ',' + '5mi',
					rpp: 30
				},
				callback: function(data) {
					tweet_list = data.results;
					timeline.update(tweet_list);	// Update the tweets in timeline
				}
			});
		};

		refresh();
	}
});
