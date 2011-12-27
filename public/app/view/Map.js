Ext.define('GeoTweets.view.Map', {
    extend: 'Ext.Map',
    xtype: 'localmap',
    config: {
        title: 'Map',
        useCurrentLocation: true
    }
})