Ext.define('GeoTweets.store.Tweets', {
    extend: 'Ext.data.Store',
    model: 'GeoTweets.model.Tweet',
    data: [
        {
            text: "Lorem ipsum dolor sit amet",
            from_user: "nelstrom",
            profile_image_url: "http://bit.ly/nelstrom-avatar"
        },
    ]
});
