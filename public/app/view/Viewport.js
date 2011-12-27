Ext.define('GeoTweets.view.Viewport', {
    extend: 'Ext.TabPanel',
    
    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'timeline',
                store: Ext.create('GeoTweets.store.Tweets')
            },
            { xtype: 'localmap' },
        ]
    }
});
