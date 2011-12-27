Ext.define('GeoTweets.model.Tweet', {
    extend: 'Ext.data.Model',
    fields: [
        'from_user',
        'profile_image_url',
        'text',
        'geo'
    ]
})