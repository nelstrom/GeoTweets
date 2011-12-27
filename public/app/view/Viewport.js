Ext.define('GeoTweets.view.Viewport', {
    extend: 'Ext.TabPanel',
    
    config: {
        fullscreen: true,
        tabBar: {
            ui: 'light'
        },
        items: [
            {
                xtype: 'timeline',
                store: Ext.create('GeoTweets.store.Tweets')
            },
            { xtype: 'localmap' },
        ]
    },

    constructor: function() {
        this.callParent();

        this.getTabBar().add([
            {xtype: 'spacer'},
            {
                xtype: 'button',
                action: 'refresh',
                iconMask: true,
                iconCls: 'refresh',
                ui: 'plain'
            }
        ]);
    }

});
