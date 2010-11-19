Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
	onReady: function() {
		var timeline, map, panel, tabBar;

		timeline = {
			title: "Timeline",
			html: "A list of local twits",
			cls: 'card1'
		}

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
			align: 'center'
		});

	}
});

