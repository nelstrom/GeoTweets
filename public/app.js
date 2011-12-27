Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'GeoTweets',
    
    controllers: ['Main'],
    
    launch: function() {
        Ext.create('GeoTweets.view.Viewport');
    }
});
