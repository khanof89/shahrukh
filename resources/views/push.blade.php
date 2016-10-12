<html>
<head>
    <title>
        Testing Push Notification
    </title>

    <link rel="manifest" href="/manifest.json">
    <script type="text/javascript" src="//cdn.pushwoosh.com/webpush/pushwoosh-web-notifications.js" async></script>
    <script type="text/javascript">
        var Pushwoosh = Pushwoosh || [];
        Pushwoosh.push(['init', {
            logLevel: 'info', // or debug
            applicationCode: '5FB14-BB89E',
            defaultNotificationTitle: 'I am Shahrukh',
            defaultNotificationImage: 'https://cp.pushwoosh.com/img/logo-medium.png'
        }]);
    </script>


    <script language="text/javascript">
        Pushwoosh.push(function(api) {
            api.getTags().then(function(result) {
                if (!result.result['My Tag']) {
                    return api.setTags({'My Tag': 'value'}).then(function(r) {
                        console.log('setTags result', r);
                    });
                }
            }).catch(function(e) {
                console.log('error', e);
            });
        })
    </script>
    {{--<script type="text/javascript">
        (function(p,u,s,h){
            p._pcq=p._pcq||[];
            p._pcq.push(['_currentTime',Date.now()]);
            s=u.createElement('script');
            s.type='text/javascript';
            s.async=true;
            s.src='https://cdn.pushcrew.com/js/e5535feef89168ea8a8a24f04eea3e1a.js';
            h=u.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s,h);
        })(window,document);
    </script>--}}
</head>
</html>