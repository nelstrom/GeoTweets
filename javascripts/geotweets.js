Ext.setup({
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	icon: 'icon.png',
	glossOnIcon: false,
	onReady: function() {

		var timeline = {
			title: "Timeline",
			html: "A list of local twits",
			cls: 'card1'
		}

		var map = {
			title: "Map",
			html: "Here be dragons",
			cls: 'card2'
		}

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
			handler: refresh	// leave this out until later?
		});

	}
});

