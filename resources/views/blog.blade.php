<!DOCTYPE html>
<html lang="en">
<head>

    <!-- Meta -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

    <!-- Title -->
    <title>I am Shahrukh - Blog | {{$result->title}}</title>

    <!-- Favicons -->
    <link rel="shortcut icon" href="/assets/img/favicon.png">
    <link rel="apple-touch-icon" href="/assets/img/favicon_60x60.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/favicon_76x76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicon_120x120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicon_152x152.png">

    <!-- Google Web Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500,300,100' rel='stylesheet' type='text/css'>

    <!-- CSS Styles -->
    <link rel="stylesheet" href="/assets/css/styles.css" />

    <!-- CSS Template -->
    <link rel="stylesheet" href="/assets/css/theme.min.css" />
    <link rel="stylesheet" href="/assets/css/color/blue-beige.css" id="color" />

</head>

<body>

<!-- Loader -->
<div id="page-loader" class="bg-white"></div>
<!-- Loader / End -->

<!-- Content -->
<div id="content" class="bg-grey">

    <!-- Section - Post -->
    <section id="post" class="section bg-grey padding-t-20 padding-b-60">

        <!-- Content -->
        <div class="container container-wide">

            <nav class="text-center margin-b-20">
                <a href="/blog" class="icon icon-circle icon-hover icon-sm icon-primary"><i class="ti-arrow-left"></i></a>
            </nav>

            <div class="row">
                <!-- Post -->
                <article class="post col-lg-10 col-lg-push-1">
                    <div class="post-photo">
                        <img src="{{$result->picture}}" alt="...">
                    </div>
                    <div class="post-content">
                        <div class="meta">
                            <span><i class="fa fa-user"></i><a href="#">Shahrukh Khan</a></span>

                            @foreach($result->tags as $tag)
                            <span><i class="fa fa-tag"></i><a href="/tag/{{\Illuminate\Support\Str::slug($tag['value']->name)}}">{{$tag['value']->name}}</a></span>
                                @endforeach
                        </div>
                        <div class="date">{{$result->created_at->format('l jS \\of F Y')}}</div>
                        <h1>{{$result->title}}</h1>
                        {!! $result->story !!}
                    </div>

                    <div class="row">
                        <div class="col-sm-10 col-sm-push-1">
                            <!-- Comments -->
                            <div id="disqus_thread"></div>
                            <script type="text/javascript">
                                /* * * CONFIGURATION VARIABLES * * */
                                var disqus_shortname = 'iamshahrukh';

                                /* * * DON'T EDIT BELOW THIS LINE * * */
                                (function() {
                                    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                                    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                                })();
                            </script>
                            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a>
                                </noscript>
                        </div>

                    </div>
                    </div>


                </article>
            </div>

        </div>

    </section>
    <!-- Section - Latest Posts / End -->

</div>
<!-- Content / End -->

<!-- Messanger -->
<a href="#" id="messenger-toggle" data-target="messenger" class="icon icon-sm icon-circle animated" data-animation="bounceIn" data-animation-delay="300"><i class="fa fa-comments"></i></a>
<div id="messenger" class="dark">
    <div id="messenger-box">
        <div class="messenger-box-content">
            <!-- Close -->
            <a href="#" class="messenger-close icon icon-hover icon-xs icon-circle icon-white" data-target="messenger"><i class="fa fa-times"></i></a>
            <!-- Avatar -->
            <img src="/2.jpg" alt="..." class="img-circle margin-b-30">
            <h3>Please fill the <strong>form</strong> - I will response as fast as I can!</h3>
            <!-- Contact Form -->
            <form id="contact-form">
                <div class="form-alert"></div>
                <div class="form-error alert alert-default"><ul></ul></div>
                <div class="form-group">
                    <label>Name:</label>
                    <input id="name" class="form-control" type="text" name="name">
                </div>
                <div class="form-group">
                    <label>Addres e-mail:</label>
                    <input id="email" class="form-control" type="text" name="email">
                </div>
                <div class="form-group">
                    <label>Message:</label>
                    <textarea id="message" class="form-control" name="message" rows="4"></textarea>
                </div>
                <button type="submit" class="btn btn-secondary"><span>Send a message!</span><i class="ti-email"></i></button>
            </form>
        </div>
    </div>
</div>

@include('navbar')

<!-- Ajax Wrapper & Loader -->
<div id="ajax-modal"></div>
<div id="ajax-loader"><i class="fa fa-spinner fa-spin"></i></div>

<!-- FB Like -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

<!-- JS Libraries -->
<script src="/assets/js/jquery-1.11.3.min.js"></script>

<!-- JS Plugins -->
<script>
    window.paceOptions = {
        target: '#page-loader',
        ajax: false
    };
</script>
<script src="/assets/js/plugins.js"></script>

<!-- JS Core -->
<script src="/assets/js/core.min.js"></script>

<!-- Google Map API -->
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>

<!-- Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. -->
<!--
<script>
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-XXXXX-X']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>
-->

</body>

</html>