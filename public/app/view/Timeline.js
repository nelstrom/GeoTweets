Ext.define('GeoTweets.view.Timeline', {
    extend: 'Ext.List',
    xtype: 'timeline',
    config: {
        title: 'Timeline',
        scroll: 'vertical',
        tpl: [
           '<tpl for=".">',
           '    <div class="tweet">',
           '        <div class="avatar"><img src="{profile_image_url}" /></div>',
           '        <div class="tweet-content">',
           '            <h2>{from_user}</h2>',
           '            <p>{text}</p>',
           '        </div>',
           '     </div>',
           '</tpl>'
        ]
    }
});
