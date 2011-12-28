Ext.define('GeoTweets.view.Viewport', {
    extend: 'Ext.TabPanel',
    
    config: {
        fullscreen: true,
        tabBar: {
            ui: 'light'
        },
        items: [
            {
                xtype: 'localmap',
                id: 'localmap'
            },
            {
                xtype: 'timeline',
                id: 'timeline',
                store: Ext.create('GeoTweets.store.Tweets')
            },
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
