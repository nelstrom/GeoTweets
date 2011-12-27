Ext.define('GeoTweets.view.Viewport', {
    extend: 'Ext.TabPanel',
    
    config: {
        fullscreen: true,
        items: [
            { xtype: 'timeline' },
            { xtype: 'map' },
        ]
    }
});
