Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
	onReady: function() {
		var timeline, map, panel, tabBar, refresh;

		timeline = new Ext.Component({
			title: 'Timeline',
			cls: 'timeline',
			scroll: 'vertical',
			tpl: [
				'<tpl for=".">',
				'	<div class="tweet">',
				'			<div class="avatar"><img src="{profile_image_url}" /></div>',
				'			<div class="tweet-content">',
				'				<h2>{from_user}</h2>',
				'				<p>{text}</p>',
				'			</div>',
				'	</div>',
				'</tpl>'
			]
		});

		map = {
			title: "Map",
			html: "Here be dragons",
			cls: 'card2'
		}

		panel = new Ext.TabPanel({
			fullscreen: true,
			cardSwitchAnimation: 'slide',
			items: [timeline, map]
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
			var tweet = {
				text: "Lorem ipsum dolor sit amet",
				from_user: "nelstrom",
				profile_image_url: "http://bit.ly/nelstrom-avatar"
			};
			var tweets = [tweet,tweet,tweet,tweet,tweet,tweet,tweet]
			timeline.update(tweet_list);	// Update the tweets in timeline
		};

		refresh();
	}
});
