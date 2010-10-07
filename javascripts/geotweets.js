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
			animation: 'slide',
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
			tweet_list = mockTwitterAPI.results;
			timeline.update(tweet_list);	// Update the tweets in timeline
		};

		refresh();
	}
});

var mockTwitterAPI = {
	"results": [
		{
			"profile_image_url": "http://a3.twimg.com/profile_images/740067459/my_square_head_640x480_normal.jpg",
			"from_user": "paulanthonywils",
			"text": "Had my Death Star for several weeks now. Verdict unchanged. Necessary as a tool of imperial oppression. No use to me as an everyday thing."
		},
		{
			"profile_image_url": "http://a2.twimg.com/profile_images/1101388618/avatar1_normal.JPG",
			"from_user": "aedison",
			"text": "We've all been talking about your paranoia."
		},
		{
			"profile_image_url": "http://a0.twimg.com/profile_images/598755044/faps-interro-twitavatar_normal.jpg",
			"from_user": "FakeAPStylebook",
			"text": "If you have a ladder first and then a farmer later, the ladder is the former and the farmer is the latter."
		},
		{
			"profile_image_url": "http://a3.twimg.com/profile_images/1104534595/kellyoxford21-300x300_normal.png",
			"from_user": "kellyoxford",
			"text": "Enrolling your daughter in Gymnastics: 1% chance she'll be an athlete. 100% chance she'll be the drunk girl doing backflips in a bikini."
		},
		{
			"profile_image_url": "http://a2.twimg.com/profile_images/421637246/Tim_normal.jpg",
			"from_user": "timbray",
			"text": "Variation: 'There are only two hard problems in Computer Science: cache invalidation, naming things, and off-by-one errors.'"
		}
	]
}
