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

        Pushwoosh.push(function(api) {

            //Set tags for the user
            /*api.setTags({
             'Tag Name 1' => 'value1',
             'Tag Name 2' => 'value2'
             });*/

            //Get tags for the user from server
            api.getTags();

            //Subscribe for push notifications. The method is called automatically upon the first visit to the website, once the user allows notifications
            api.registerDevice();

            //Unregister from notifications
            api.unregisterDevice();
        });
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