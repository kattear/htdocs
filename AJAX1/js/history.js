  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>balupton/history.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="qQry6ObzajDYdtM8IiXScjB+LOVEoIFx8zUShZJNgFw=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-053ef9e31e0948b442ab7b687f967814a7d7f000.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-f5fdcb1d2e599664c34142dd912464640ce459d4.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-5dcdaf734c8092261f37e6534c8f114696d913a9.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-c45736bc9622ede1d9e87034c4341cda7f90bed5.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/balupton/history.js/tree/e84ad0034db245c9326f4988a1962a94e7cdbdf2'>
    <meta property="og:title" content="history.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/balupton/history.js"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/9400cb5aeb155ccec614652542fd274d?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="history.js - History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="balupton/history.js"/>

    <meta name="description" content="history.js - History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality." />

  <link href="https://github.com/balupton/history.js/commits/master.atom" rel="alternate" title="Recent Commits to history.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  macintosh vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/organizations/maca2800">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              <div class="topsearch command-bar-activated ">
      <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="kattear" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
  <ul class="top-nav">
      <li class="explore"><a href="https://github.com/explore">Explore</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
    <li><a href="http://help.github.com">Help</a></li>
  </ul>
</div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/kattear" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/9a2a47609d5571a5d7af3b2c4b8484da?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> kattear
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="qQry6ObzajDYdtM8IiXScjB+LOVEoIFx8zUShZJNgFw=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1274749" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container js-select-menu-pane">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/balupton/history.js/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/balupton/history.js/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/balupton/history.js/stargazers">4,218</a>
    </li>

        <li>
          <a href="/balupton/history.js/fork_select" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/balupton/history.js/network" class="social-count">412</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/balupton" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">balupton</span>
                  </a></span> /
                <strong><a href="/balupton/history.js" class="js-current-repository">history.js</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/balupton/history.js" class="selected" highlight="[:repo_source, :repo_downloads, :repo_commits, :repo_tags, :repo_branches]">Code</a></li>
    <li><a href="/balupton/history.js/network" highlight="[:repo_network]">Network</a></li>
    <li><a href="/balupton/history.js/pulls" highlight="[:repo_pulls]">Pull Requests <span class='counter'>27</span></a></li>

      <li><a href="/balupton/history.js/issues" highlight="[:repo_issues]">Issues <span class='counter'>165</span></a></li>

      <li><a href="/balupton/history.js/wiki" highlight="[:repo_wiki]">Wiki</a></li>


    <li><a href="/balupton/history.js/graphs" highlight="[:repo_graphs, :repo_contributors]">Graphs</a></li>


  </ul>
  
  <div id="repo_details" class="metabox clearfix
        not-editable">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <div class="repo-desc-homepage">
          
    <div class="repository-lang-stats">
      <div class="repository-lang-stats-graph">
      <span class="language-color" style="width:91.5%; background-color:#f15501;" itemprop="keywords">JavaScript</span><span class="language-color" style="width:5.4%; background-color:#244776;" itemprop="keywords">CoffeeScript</span><span class="language-color" style="width:3.1%; background-color:#6e03c1;" itemprop="keywords">PHP</span>
      </div>
      <ol class="list-tip">
        <li>
            <a href="/languages/JavaScript">
              <span class="color-block language-color" style="background-color:#f15501;"></span>
              <span class="lang">JavaScript</span>
              <span class="percent">91.5%</span>
            </a>
        </li>
        <li>
            <a href="/languages/CoffeeScript">
              <span class="color-block language-color" style="background-color:#244776;"></span>
              <span class="lang">CoffeeScript</span>
              <span class="percent">5.4%</span>
            </a>
        </li>
        <li>
            <a href="/languages/PHP">
              <span class="color-block language-color" style="background-color:#6e03c1;"></span>
              <span class="lang">PHP</span>
              <span class="percent">3.1%</span>
            </a>
        </li>
      </ol>
    </div>

<div id="repository_description" class="repository-description">
    <p>History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality.
      <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
    </p>
</div>


<div class="repository-homepage" id="repository_homepage">
  <p><a href="http://balupton.github.com/history.js/demo/" rel="nofollow">http://balupton.github.com/history.js/demo/</a></p>
</div>


        </div>

      <div class="edit-repo-desc-homepage" style="display:none">
        <form accept-charset="UTF-8" action="/balupton/history.js/settings/update_meta" id="js-update-repo-meta-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="qQry6ObzajDYdtM8IiXScjB+LOVEoIFx8zUShZJNgFw=" /></div>
          <p class="error" style="display:none">Sorry, but there was a problem saving your changes.</p>
          <input type="text" id="repository-description-field" class="description-field" name="repo_description" value="History.js gracefully supports the HTML5 History/State APIs (pushState, replaceState, onPopState) in all browsers. Including continued support for data, titles, replaceState. Supports jQuery, MooTools and Prototype.  For HTML5 browsers this means that you can modify the URL directly, without needing to use hashes anymore. For HTML4 browsers it will revert back to using the old onhashchange functionality." placeholder="Add a description to this repository">
          <input type="text" id="repository-homepage-field" class="homepage-field" name="repo_homepage" value="http://balupton.github.com/history.js/demo/" placeholder="Add a website to this repository">

          <div class="edit-repo-actions">
            <button type="submit" class="button save-button">Save changes</button>
            <span class="cancel">
              <a href="#" class="button danger">Cancel</a>
            </span>
          </div>
</form>      </div>

      
<div class="url-box js-url-box">
  <ul class="native-clones">
      <li><a href="github-mac://openRepo/https://github.com/balupton/history.js" class="button minibutton " icon_class="mini-icon-apple"><span class="mini-icon mini-icon-apple"></span>Clone in Mac</a></li>
      <li><a href="/balupton/history.js/archive/master.zip" class="button minibutton " icon_class="mini-icon-download" rel="nofollow" title="Download this repository as a zip file"><span class="mini-icon mini-icon-download"></span>ZIP</a>
  </ul>

  <div class="clone-urls js-clone-urls ">
    <span class="http_clone_url clone-url-button js-clone-url-button selected"><a href="https://github.com/balupton/history.js.git" class="js-git-protocol-selector" data-permission="Read-Only" data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">HTTP</a></span>
<span class="public_clone_url clone-url-button js-clone-url-button"><a href="git@github.com:balupton/history.js.git" class="js-git-protocol-selector" data-permission="Read-Only" data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">SSH</a></span>
<span class="public_clone_url clone-url-button js-clone-url-button"><a href="git://github.com/balupton/history.js.git" class="js-git-protocol-selector" data-permission="Read-Only" data-url="/users/set_protocol?protocol_selector=gitweb&amp;protocol_type=clone">Git Read-Only</a></span>
    <span class="clone-url">
      <input type="text" readonly spellcheck="false" class="url-field js-url-field" value="https://github.com/balupton/history.js.git" >
    </span>
    <span class="clone-url-button">
      <span class="js-zeroclipboard url-box-clippy zeroclipboard-button" data-clipboard-text="https://github.com/balupton/history.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
    </span>
  </div>
  <p class="url-description"><span class="bold js-clone-url-permission">Read-Only</span> access</p>
</div>

        </div>

<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/balupton/history.js/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/dev" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="dev" rel="nofollow" title="dev">dev</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/gh-pages" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/master" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.0" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0" rel="nofollow" title="v1.0">v1.0</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.1" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1" rel="nofollow" title="v1.1">v1.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.2" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2" rel="nofollow" title="v1.2">v1.2</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.3" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3" rel="nofollow" title="v1.3">v1.3</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.4" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.4" rel="nofollow" title="v1.4">v1.4</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.5" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5" rel="nofollow" title="v1.5">v1.5</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.6" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.6" rel="nofollow" title="v1.6">v1.6</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.7" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.7" rel="nofollow" title="v1.7">v1.7</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/balupton/history.js/tree/v1.7-dev" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.7-dev" rel="nofollow" title="v1.7-dev">v1.7-dev</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/balupton/history.js" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/balupton/history.js/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/balupton/history.js/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">12</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- tree commit key: views10/v8/tree:v21:58525300186df2d78fdbb2758c407ad5 -->

  <div id="slider">
      <div class="frame-meta">
          



          <p class="history-link js-history-link-replace">
<a href="/balupton/history.js/commits/master">                <span class="mini-icon mini-icon-history tooltipped" title="Browse commits for this branch"></span>
                147 commits
</a>          </p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/balupton/history.js" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">history.js</span></a></span></span> / <form action="/balupton/history.js/new/master" class="js-new-blob-form tooltipped rightwards new-file-link" method="post" title="Fork this project and create a new file"><span class="js-new-blob-submit mini-icon mini-icon-new-file"></span></form>
        </div>

        <a href="/balupton/history.js/find/master"
           class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

      </div><!-- ./.frame-meta -->

      

  <div class="frames">
    <div class="frame" data-permalink-url="/balupton/history.js/tree/e84ad0034db245c9326f4988a1962a94e7cdbdf2" data-title="balupton/history.js · GitHub" data-type="tree">

      <div class="bubble tree-browser-wrapper">

      <table class="tree-browser css-truncate" cellpadding="0" cellspacing="0">
        <thead>
            
  <div class="commit commit-tease js-details-container">
    <p class="commit-title ">
        <a href="/balupton/history.js/commit/e84ad0034db245c9326f4988a1962a94e7cdbdf2" class="message">typo in readme</a>
        
    </p>
    <div class="commit-meta">
      <span class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="e84ad0034db245c9326f4988a1962a94e7cdbdf2" data-copied-hint="copied!" title="Copy SHA"><span class="mini-icon mini-icon-clipboard"></span></span>
      <a href="/balupton/history.js/commit/e84ad0034db245c9326f4988a1962a94e7cdbdf2" class="sha-block">latest commit <span class="sha">e84ad0034d</span></a>

      <div class="authorship">
        <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/9400cb5aeb155ccec614652542fd274d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" />
        <span class="author-name"><a href="/balupton" rel="author">balupton</a></span>
        authored <time class="js-relative-date updated" datetime="2012-04-30T19:22:03-07:00" title="2012-04-30 19:22:03">April 30, 2012</time>

      </div>
    </div>
  </div>

        </thead>

        

<tbody class="tree-entries js-deferred-content"
    data-url="/balupton/history.js/tree-commits/master">


    <tr>
      <td class="icon"><span class="mini-icon mini-icon-directory"></span></td>
      <td class="content"><a href="/balupton/history.js/tree/master/demo" class="js-directory-link js-slide-to css-truncate-target" id="fe01ce2a7fbac8fafaed7c982a04e229-48ebcdb6d5b09f7c1dbfac2a6fb6091b6262b3e3" title="demo">demo</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-10-03T20:38:42-07:00" title="2011-10-03 20:38:42">October 03, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/d0e4565048ae35ac08aebe1ef6be5c067717df1e" class="message">v1.7.1. Added a new native adapter. Provided bundled files. Added ses…</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-directory"></span></td>
      <td class="content"><a href="/balupton/history.js/tree/master/scripts" class="js-directory-link js-slide-to css-truncate-target" id="d6c5855a62cf32a4dadbc2831f0f295f-c45156b8d55675e3751c3094c349a4e7a7f407ff" title="scripts">scripts</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-10-05T05:16:13-07:00" title="2011-10-05 05:16:13">October 05, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/e9c506f13badb689fa8ef51f498e27a7b730795f" class="message">v1.7.1-r2. Forgot to compress the files in the compressed directory. …</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-directory"></span></td>
      <td class="content"><a href="/balupton/history.js/tree/master/tests.src" class="js-directory-link js-slide-to css-truncate-target" id="24646ec8032c7b816701213ab104641a-54e274a7077a5dd6a13adf9c733ace7caf7a9f86" title="tests.src">tests.src</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-10-03T20:38:42-07:00" title="2011-10-03 20:38:42">October 03, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/d0e4565048ae35ac08aebe1ef6be5c067717df1e" class="message">v1.7.1. Added a new native adapter. Provided bundled files. Added ses…</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-directory"></span></td>
      <td class="content"><a href="/balupton/history.js/tree/master/tests" class="js-directory-link js-slide-to css-truncate-target" id="b61a6d542f9036550ba9c401c80f00ef-e9a6dfaeecb1f0cf28ed1996e34511afd36e1d82" title="tests">tests</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-10-03T20:38:42-07:00" title="2011-10-03 20:38:42">October 03, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/d0e4565048ae35ac08aebe1ef6be5c067717df1e" class="message">v1.7.1. Added a new native adapter. Provided bundled files. Added ses…</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-directory"></span></td>
      <td class="content"><a href="/balupton/history.js/tree/master/vendor" class="js-directory-link js-slide-to css-truncate-target" id="7c3613dba5171cb6027c67835dd3b9d4-f5d61c1f5aed374f7bc8352a6a3048245be8c9a5" title="vendor">vendor</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-10-03T20:38:42-07:00" title="2011-10-03 20:38:42">October 03, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/d0e4565048ae35ac08aebe1ef6be5c067717df1e" class="message">v1.7.1. Added a new native adapter. Provided bundled files. Added ses…</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="/balupton/history.js/blob/master/.gitignore" class="js-directory-link js-slide-to css-truncate-target" id="a084b794bc0759e7a6b77810e01874f2-b7f13992f4fc68d846dd9806f564788f3d2b6d15" title=".gitignore">.gitignore</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-01-20T23:22:52-08:00" title="2011-01-20 23:22:52">January 20, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/f2651bdc6ed30635ac4b307543b5ded75572d8ec" class="message">Added compressed version, added basic cli.</a>
          [<span rel="author">Benjamin &quot;balupton&quot; Lupton</span>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="/balupton/history.js/blob/master/History.md" class="js-directory-link js-slide-to css-truncate-target" id="e1bbd4f15e3b63427b4261e05b948ea8-7a2d9ff46c6ce0cd8f69ca59d15e211283e33d26" title="History.md">History.md</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-04-30T15:29:56-07:00" title="2012-04-30 15:29:56">April 30, 2012</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/3263e7ef81becd07ed45f7729d73b2a4694e68d6" class="message">Moved the changelog into the History.md file</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="/balupton/history.js/blob/master/README.md" class="js-directory-link js-slide-to css-truncate-target" id="04c6e90faac2675aa89e2176d2eec7d8-05678c5647938c2c4dad321ebb4e90f9ee11151f" title="README.md">README.md</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-04-30T19:22:03-07:00" title="2012-04-30 19:22:03">April 30, 2012</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/e84ad0034db245c9326f4988a1962a94e7cdbdf2" class="message">typo in readme</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="/balupton/history.js/blob/master/buildr.coffee" class="js-directory-link js-slide-to css-truncate-target" id="374a132d5ec15bd0199a03cdd55ae8c3-60910ae75a5255133e477699911c498511d3e3cd" title="buildr.coffee">buildr.coffee</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-10-05T05:16:13-07:00" title="2011-10-05 05:16:13">October 05, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/e9c506f13badb689fa8ef51f498e27a7b730795f" class="message">v1.7.1-r2. Forgot to compress the files in the compressed directory. …</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="/balupton/history.js/blob/master/license.txt" class="js-directory-link js-slide-to css-truncate-target" id="98cd14c95bb22f9d397da0603a77d950-647bfd26d49af47498654f0faba22db644165cff" title="license.txt">license.txt</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-03-30T09:54:15-07:00" title="2011-03-30 09:54:15">March 30, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/bfa0b4a82d0b9e01f1fbbdabb6a97cceaa5dada5" class="message">Add a license file so people who use this are BSD compliant.</a>
          [<a href="/markjaquith" rel="author">markjaquith</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="/balupton/history.js/blob/master/package.json" class="js-directory-link js-slide-to css-truncate-target" id="b9cfc7f2cdf78a7f4b91a753d10865a2-ce50c66b9dcc513c5ba9c7bed8d02d225a636b19" title="package.json">package.json</a></td>
      <td class="age"><time class="js-relative-date" datetime="2011-10-05T05:16:13-07:00" title="2011-10-05 05:16:13">October 05, 2011</time></td>

      <td class="message">
          <a href="/balupton/history.js/commit/e9c506f13badb689fa8ef51f498e27a7b730795f" class="message">v1.7.1-r2. Forgot to compress the files in the compressed directory. …</a>
          [<a href="/balupton" rel="author">balupton</a>]

      </td>
    </tr>
</tbody>

      </table>
      </div>

        <div id="readme" class="clearfix announce instapaper_body md">
          <span class="name"><span class="mini-icon mini-icon-readme"></span> README.md</span><article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="welcome-to-historyjs-v171---october-4-2011" class="anchor" href="#welcome-to-historyjs-v171---october-4-2011"><span class="mini-icon mini-icon-link"></span></a>Welcome to History.js (v1.7.1 - October 4 2011)</h1>

<p><a href="https://flattr.com/submit/auto?user_id=balupton&amp;url=https://github.com/balupton/history.js&amp;title=History.js&amp;language=&amp;tags=github&amp;category=software"><img src="https://a248.e.akamai.net/camo.github.com/739a757846f69c1cc10163619eec008e871b591b/687474703a2f2f6170692e666c617474722e636f6d2f627574746f6e2f666c617474722d62616467652d6c617267652e706e67" alt="Flattr this project" style="max-width:100%;"></a></p>

<p>This project is the successor of <a href="http://balupton.com/projects/jquery-history">jQuery History</a>, it aims to:</p>

<ul>
<li>Follow the <a href="https://developer.mozilla.org/en/DOM/Manipulating_the_browser_history">HTML5 History API</a> as much as possible</li>
<li>Provide a cross-compatible experience for all HTML5 Browsers (they all implement the HTML5 History API a little bit differently causing different behaviours and sometimes bugs - History.js fixes this ensuring the experience is as expected / the same / great throughout the HTML5 browsers)</li>
<li>Provide a backwards-compatible experience for all HTML4 Browsers using a hash-fallback (including continued support for the HTML5 History API's <code>data</code>, <code>title</code>, <code>pushState</code> and <code>replaceState</code>) with the option to <a href="https://github.com/balupton/history.js/wiki/Intelligent-State-Handling">remove HTML4 support if it is not right for your application</a>
</li>
<li>Provide a forwards-compatible experience for HTML4 States to HTML5 States (so if a hash-fallbacked url is accessed by a HTML5 browser it is naturally transformed into its non-hashed url equivalent)</li>
<li>Provide support for as many javascript frameworks as possible via adapters; especially <a href="http://jquery.com/">jQuery</a>, <a href="http://mootools.net/">MooTools</a>, <a href="http://www.prototypejs.org/">Prototype</a> and <a href="http://zeptojs.com/">Zepto</a>
</li>
</ul><h2>
<a name="usage" class="anchor" href="#usage"><span class="mini-icon mini-icon-link"></span></a>Usage</h2>

<h3>
<a name="working-with-historyjs" class="anchor" href="#working-with-historyjs"><span class="mini-icon mini-icon-link"></span></a>Working with History.js:</h3>

<div class="highlight"><pre><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span><span class="kc">undefined</span><span class="p">){</span>

    <span class="c1">// Prepare</span>
    <span class="kd">var</span> <span class="nx">History</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">History</span><span class="p">;</span> <span class="c1">// Note: We are using a capital H instead of a lower h</span>
    <span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">History</span><span class="p">.</span><span class="nx">enabled</span> <span class="p">)</span> <span class="p">{</span>
         <span class="c1">// History.js is disabled for this browser.</span>
         <span class="c1">// This is because we can optionally choose to support HTML4 browsers or not.</span>
        <span class="k">return</span> <span class="kc">false</span><span class="p">;</span>
    <span class="p">}</span>

    <span class="c1">// Bind to StateChange Event</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">Adapter</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span><span class="s1">'statechange'</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span> <span class="c1">// Note: We are using statechange instead of popstate</span>
        <span class="kd">var</span> <span class="nx">State</span> <span class="o">=</span> <span class="nx">History</span><span class="p">.</span><span class="nx">getState</span><span class="p">();</span> <span class="c1">// Note: We are using History.getState() instead of event.state</span>
        <span class="nx">History</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">State</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="nx">State</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span> <span class="nx">State</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span>
    <span class="p">});</span>

    <span class="c1">// Change our States</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">pushState</span><span class="p">({</span><span class="nx">state</span><span class="o">:</span><span class="mi">1</span><span class="p">},</span> <span class="s2">"State 1"</span><span class="p">,</span> <span class="s2">"?state=1"</span><span class="p">);</span> <span class="c1">// logs {state:1}, "State 1", "?state=1"</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">pushState</span><span class="p">({</span><span class="nx">state</span><span class="o">:</span><span class="mi">2</span><span class="p">},</span> <span class="s2">"State 2"</span><span class="p">,</span> <span class="s2">"?state=2"</span><span class="p">);</span> <span class="c1">// logs {state:2}, "State 2", "?state=2"</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">replaceState</span><span class="p">({</span><span class="nx">state</span><span class="o">:</span><span class="mi">3</span><span class="p">},</span> <span class="s2">"State 3"</span><span class="p">,</span> <span class="s2">"?state=3"</span><span class="p">);</span> <span class="c1">// logs {state:3}, "State 3", "?state=3"</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">pushState</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="s2">"?state=4"</span><span class="p">);</span> <span class="c1">// logs {}, '', "?state=4"</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">back</span><span class="p">();</span> <span class="c1">// logs {state:3}, "State 3", "?state=3"</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">back</span><span class="p">();</span> <span class="c1">// logs {state:1}, "State 1", "?state=1"</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">back</span><span class="p">();</span> <span class="c1">// logs {}, "Home Page", "?"</span>
    <span class="nx">History</span><span class="p">.</span><span class="nx">go</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span> <span class="c1">// logs {state:3}, "State 3", "?state=3"</span>

<span class="p">})(</span><span class="nb">window</span><span class="p">);</span>
</pre></div>

<p>To ajaxify your entire website with the HTML5 History API, History.js and jQuery <a href="https://gist.github.com/854622">this snippet of code</a> is all you need. It's that easy.</p>

<h3>
<a name="how-would-the-above-operations-look-in-a-html5-browser" class="anchor" href="#how-would-the-above-operations-look-in-a-html5-browser"><span class="mini-icon mini-icon-link"></span></a>How would the above operations look in a HTML5 Browser?</h3>

<ol>
<li><a href="http://www.mysite.com">www.mysite.com</a></li>
<li><a href="http://www.mysite.com/?state=1">www.mysite.com/?state=1</a></li>
<li><a href="http://www.mysite.com/?state=2">www.mysite.com/?state=2</a></li>
<li><a href="http://www.mysite.com/?state=3">www.mysite.com/?state=3</a></li>
<li><a href="http://www.mysite.com/?state=4">www.mysite.com/?state=4</a></li>
<li><a href="http://www.mysite.com/?state=3">www.mysite.com/?state=3</a></li>
<li><a href="http://www.mysite.com/?state=1">www.mysite.com/?state=1</a></li>
<li><a href="http://www.mysite.com">www.mysite.com</a></li>
<li><a href="http://www.mysite.com/?state=3">www.mysite.com/?state=3</a></li>
</ol><blockquote>
<p>Note: These urls also work in HTML4 browsers and Search Engines. So no need for the hashbang (<code>#!</code>) fragment-identifier that google <a href="https://github.com/balupton/history.js/wiki/Intelligent-State-Handling">"recommends"</a>.</p>
</blockquote>

<h3>
<a name="how-would-they-look-in-a-html4-browser" class="anchor" href="#how-would-they-look-in-a-html4-browser"><span class="mini-icon mini-icon-link"></span></a>How would they look in a HTML4 Browser?</h3>

<ol>
<li><a href="http://www.mysite.com">www.mysite.com</a></li>
<li><a href="http://www.mysite.com/#?state=1&amp;_suid=1">www.mysite.com/#?state=1&amp;_suid=1</a></li>
<li><a href="http://www.mysite.com/#?state=2&amp;_suid=2">www.mysite.com/#?state=2&amp;_suid=2</a></li>
<li><a href="http://www.mysite.com/#?state=3&amp;_suid=3">www.mysite.com/#?state=3&amp;_suid=3</a></li>
<li><a href="http://www.mysite.com/#?state=4">www.mysite.com/#?state=4</a></li>
<li><a href="http://www.mysite.com/#?state=3&amp;_suid=3">www.mysite.com/#?state=3&amp;_suid=3</a></li>
<li><a href="http://www.mysite.com/#?state=1&amp;_suid=1">www.mysite.com/#?state=1&amp;_suid=1</a></li>
<li><a href="http://www.mysite.com">www.mysite.com</a></li>
<li><a href="http://www.mysite.com/#?state=3&amp;_suid=3">www.mysite.com/#?state=3&amp;_suid=3</a></li>
</ol><blockquote>
<p>Note 1: These urls also work in HTML5 browsers - we use <code>replaceState</code> to transform these HTML4 states into their HTML5 equivalents so the user won't even notice :-)</p>

<p>Note 2: These urls will be automatically url-encoded in IE6 to prevent certain browser-specific bugs.</p>

<p>Note 3: Support for HTML4 browsers (this hash fallback) is optional <a href="https://github.com/balupton/history.js/wiki/Intelligent-State-Handling">- why supporting HTML4 browsers could be either good or bad based on my app's use cases</a></p>
</blockquote>

<h3>
<a name="whats-the-deal-with-the-suids-used-in-the-html4-states" class="anchor" href="#whats-the-deal-with-the-suids-used-in-the-html4-states"><span class="mini-icon mini-icon-link"></span></a>What's the deal with the SUIDs used in the HTML4 States?</h3>

<ul>
<li>SUIDs (State Unique Identifiers) are used when we utilise a <code>title</code> and/or <code>data</code> in our state. Adding a SUID allows us to associate particular states with data and titles while keeping the urls as simple as possible (don't worry it's all tested, working and a lot smarter than I'm making it out to be).</li>
<li>If you aren't utilising <code>title</code> or <code>data</code> then we don't even include a SUID (as there is no need for it) - as seen by State 4 above :-)</li>
<li>We also shrink the urls to make sure that the smallest url will be used. For instance we will adjust <code>http://www.mysite.com/#http://www.mysite.com/projects/History.js</code> to become <code>http://www.mysite.com/#/projects/History.js</code> automatically. (again tested, working, and smarter).</li>
<li>It works with domains, subdomains, subdirectories, whatever - doesn't matter where you put it. It's smart.</li>
<li>Safari 5 will also have a SUID appended to the URL, it is entirely transparent but just a visible side-effect. It is required to fix a bug with Safari 5.</li>
</ul><h3>
<a name="is-there-a-working-demo" class="anchor" href="#is-there-a-working-demo"><span class="mini-icon mini-icon-link"></span></a>Is there a working demo?</h3>

<ul>
<li>Sure is, give it a download and navigate to the demo directory in your browser :-)</li>
<li>If you are after something a bit more adventurous than a end-user demo, open up the tests directory in your browser and editor - it'll rock your world and show all the vast use cases that History.js supports.</li>
</ul><h2>
<a name="download--installation" class="anchor" href="#download--installation"><span class="mini-icon mini-icon-link"></span></a>Download &amp; Installation</h2>

<ul>
<li><p>Download History.js and upload it to your webserver. Download links: <a href="https://github.com/balupton/history.js/tarball/master">tar.gz</a> or <a href="https://github.com/balupton/history.js/zipball/master">zip</a></p></li>
<li>
<p>Include History.js</p>

<ul>
<li>
<p>For <a href="http://jquery.com/">jQuery</a> v1.3+</p>

<div class="highlight"><pre><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.yourwebsite.com/history.js/scripts/bundled/html4+html5/jquery.history.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</pre></div>
</li>
<li>
<p>For <a href="http://mootools.net/">Mootools</a> v1.3+</p>

<div class="highlight"><pre><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.yourwebsite.com/history.js/scripts/bundled/html4+html5/mootools.history.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</pre></div>
</li>
<li>
<p>For <a href="http://rightjs.org/">Right.js</a> v2.2+</p>

<div class="highlight"><pre><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.yourwebsite.com/history.js/scripts/bundled/html4+html5/right.history.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</pre></div>
</li>
<li>
<p>For <a href="http://zeptojs.com/">Zepto</a> v0.5+</p>

<div class="highlight"><pre><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.yourwebsite.com/history.js/scripts/bundled/html4+html5/zepto.history.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</pre></div>
</li>
<li>
<p>For everything else</p>

<div class="highlight"><pre><span class="nt">&lt;script </span><span class="na">src=</span><span class="s">"http://www.yourwebsite.com/history.js/scripts/bundled/html4+html5/native.history.js"</span><span class="nt">&gt;&lt;/script&gt;</span>
</pre></div>
</li>
</ul>
</li>
</ul><blockquote>
<p>Note: If you want to only support HTML5 Browsers and not HTML4 Browsers (so no hash fallback support) then just change the <code>/html4+html5/</code> part in the urls to just <code>/html5/</code>. <a href="https://github.com/balupton/history.js/wiki/Intelligent-State-Handling">Why supporting HTML4 browsers could be either good or bad based on my app's use cases</a></p>
</blockquote>

<h2>
<a name="get-updates" class="anchor" href="#get-updates"><span class="mini-icon mini-icon-link"></span></a>Get Updates</h2>

<ul>
<li>For Commit RSS/Atom Updates:

<ul>
<li>You can subscribe via the <a href="http://feeds.feedburner.com/historyjs">GitHub Commit Atom Feed</a>
</li>
</ul>
</li>
<li>For GitHub News Feed Updates:

<ul>
<li>You can click the "watch" button up the top right of History.js's <a href="https://github.com/balupton/history.js">GitHub Project Page</a>
</li>
</ul>
</li>
</ul><h2>
<a name="get-support" class="anchor" href="#get-support"><span class="mini-icon mini-icon-link"></span></a>Get Support</h2>

<ul>
<li><p>History.js is maintained by people like you. If you find a bug, report it to the <a href="https://github.com/balupton/history.js/issues">GitHub Issue Tracker</a>. If you've fixed a bug submit a <a href="https://github.com/balupton/history.js/pulls">Pull Request</a> and add your fork to the <a href="https://github.com/balupton/history.js/wiki/Network">Network Wiki Page</a>.</p></li>
<li><p>If you would like paid support and trainings, or have job offers, then refer to the <a href="https://github.com/balupton/history.js/wiki/Network">Network Wiki Page</a>. If you are qualified with History.js, then be sure to add your details to that page too.</p></li>
<li><p>If your company uses History.js on your projects, and would like to see it grow and prosper (better documentation, bugfixes, upgrades, maintenance, etc.) and would love to become a corporate sponsor then do email <a href="mailto:sponsor@bevry.me">sponsor@bevry.me</a></p></li>
<li><p>If you would like free support for History.js, then <a href="http://stackoverflow.com/questions/ask">post your question</a> on <a href="http://stackoverflow.com/about">Stackoverflow</a> and be sure to use the <code>history.js</code> tag when asking your question.</p></li>
<li><p>If you've created a website that uses History.js, or know of one. Then be sure to add it to the <a href="https://github.com/balupton/history.js/wiki/Showcase">Showcase Wiki Page</a>.</p></li>
<li><p>If you'd love to +1 or like this project, then be sure to tweet about it and click the "watch" button up the top of its <a href="https://github.com/balupton/history.js">Project Page</a>.</p></li>
<li><p>For anything else, refer to the <a href="https://github.com/balupton/history.js/wiki">History.js GitHub Wiki Site</a>.</p></li>
</ul><p>Thanks! every bit of help really does make a difference!</p>

<h2>
<a name="browsers-tested-and-working-in" class="anchor" href="#browsers-tested-and-working-in"><span class="mini-icon mini-icon-link"></span></a>Browsers: Tested and Working In</h2>

<h3>
<a name="html5-browsers" class="anchor" href="#html5-browsers"><span class="mini-icon mini-icon-link"></span></a>HTML5 Browsers</h3>

<ul>
<li>Firefox 4+</li>
<li>Chrome 8+</li>
<li>Opera 11.5</li>
<li>Safari 5.0+</li>
<li>Safari iOS 4.3+</li>
</ul><h3>
<a name="html4-browsers" class="anchor" href="#html4-browsers"><span class="mini-icon mini-icon-link"></span></a>HTML4 Browsers</h3>

<ul>
<li>IE 6, 7, 8, 9</li>
<li>Firefox 3</li>
<li>Opera 10, 11.0</li>
<li>Safari 4</li>
<li>Safari iOS 4.2, 4.1, 4.0, 3.2</li>
</ul><h2>
<a name="exposed-api" class="anchor" href="#exposed-api"><span class="mini-icon mini-icon-link"></span></a>Exposed API</h2>

<h3>
<a name="functions" class="anchor" href="#functions"><span class="mini-icon mini-icon-link"></span></a>Functions</h3>

<ul>
<li>
<code>History.pushState(data,title,url)</code> <br> Pushes a new state to the browser; <code>data</code> can be null or an object, <code>title</code> can be null or a string, <code>url</code> must be a string</li>
<li>
<code>History.replaceState(data,title,url)</code> <br> Replaces the existing state with a new state to the browser; <code>data</code> can be null or an object, <code>title</code> can be null or a string, <code>url</code> must be a string</li>
<li>
<code>History.getState()</code> <br> Gets the current state of the browser, returns an object with <code>data</code>, <code>title</code> and <code>url</code>
</li>
<li>
<code>History.getHash()</code> <br> Gets the current hash of the browser</li>
<li>
<code>History.Adapter.bind(element,event,callback)</code> <br> A framework independent event binder, you may either use this or your framework's native event binder.</li>
<li>
<code>History.Adapter.trigger(element,event)</code> <br> A framework independent event trigger, you may either use this or your framework's native event trigger.</li>
<li>
<code>History.Adapter.onDomLoad(callback)</code> <br> A framework independent onDomLoad binder, you may either use this or your framework's native onDomLoad binder.</li>
<li>
<code>History.back()</code> <br> Go back once through the history (same as hitting the browser's back button)</li>
<li>
<code>History.forward()</code> <br> Go forward once through the history (same as hitting the browser's forward button)</li>
<li>
<code>History.go(X)</code> <br> If X is negative go back through history X times, if X is positive go forwards through history X times</li>
<li>
<code>History.log(...)</code> <br> Logs messages to the console, the log element, and fallbacks to alert if neither of those two exist</li>
<li>
<code>History.debug(...)</code> <br> Same as <code>History.log</code> but only runs if <code>History.debug.enable === true</code>
</li>
</ul><h3>
<a name="events" class="anchor" href="#events"><span class="mini-icon mini-icon-link"></span></a>Events</h3>

<ul>
<li>
<code>window.onstatechange</code> <br> Fired when the state of the page changes (does not include hash changes)</li>
<li>
<code>window.onanchorchange</code> <br> Fired when the anchor of the page changes (does not include state hashes)</li>
</ul><h2>
<a name="notes-on-compatibility" class="anchor" href="#notes-on-compatibility"><span class="mini-icon mini-icon-link"></span></a>Notes on Compatibility</h2>

<ul>
<li>History.js <strong>solves</strong> the following browser bugs:

<ul>
<li>HTML5 Browsers

<ul>
<li>Chrome 8 sometimes does not contain the correct state data when traversing back to the initial state</li>
<li>Safari 5, Safari iOS 4 and Firefox 3 and 4 do not fire the <code>onhashchange</code> event when the page is loaded with a hash</li>
<li>Safari 5 and Safari iOS 4 do not fire the <code>onpopstate</code> event when the hash has changed unlike the other browsers</li>
<li>Safari 5 and Safari iOS 4 fail to return to the correct state once a hash is replaced by a <code>replaceState</code> call / <a href="https://bugs.webkit.org/show_bug.cgi?id=56249">bug report</a>
</li>
<li>Safari 5 and Safari iOS 4 sometimes fail to apply the state change under busy conditions / <a href="https://bugs.webkit.org/show_bug.cgi?id=42940">bug report</a>
</li>
<li>Google Chrome 8,9,10 and Firefox 4 prior to the RC will always fire <code>onpopstate</code> once the page has loaded / <a href="http://hacks.mozilla.org/2011/03/history-api-changes-in-firefox-4/">change recommendation</a>
</li>
<li>Safari iOS 4.0, 4.1, 4.2 have a working HTML5 History API - although the actual back buttons of the browsers do not work, therefore we treat them as HTML4 browsers</li>
<li>None of the HTML5 browsers actually utilise the <code>title</code> argument to the <code>pushState</code> and <code>replaceState</code> calls</li>
</ul>
</li>
<li>HTML4 Browsers

<ul>
<li>Old browsers like MSIE 6,7 and Firefox 2 do not have a <code>onhashchange</code> event</li>
<li>MSIE 6 and 7 sometimes do not apply a hash even it was told to (requiring a second call to the apply function)</li>
<li>Non-Opera HTML4 browsers sometimes do not apply the hash when the hash is not <code>urlencoded</code>
</li>
</ul>
</li>
<li>All Browsers

<ul>
<li>State data and titles do not persist once the site is left and then returned (includes page refreshes)</li>
<li>State titles are never applied to the <code>document.title</code>
</li>
</ul>
</li>
</ul>
</li>
<li>ReplaceState functionality is emulated in HTML4 browsers by discarding the replaced state, so when the discarded state is accessed it is skipped using the appropriate <code>History.back()</code> / <code>History.forward()</code> call</li>
<li>Data persistance and synchronisation works like so: Every second or so, the SUIDs and URLs of the states will synchronise between the store and the local session. When a new session opens a familiar state (via the SUID or the URL) and it is not found locally then it will attempt to load the last known stored state with that information.</li>
<li>URLs will be unescaped to the maximum, so for instance the URL <code>?key=a%20b%252c</code> will become <code>?key=a b c</code>. This is to ensure consistency between browser url encodings.</li>
<li>Changing the hash of the page causes <code>onpopstate</code> to fire (this is expected/standard functionality). To ensure correct compatibility between HTML5 and HTML4 browsers the following events have been created:

<ul>
<li>
<code>window.onstatechange</code>: this is the same as the <code>onpopstate</code> event except it does not fire for traditional anchors</li>
<li>
<code>window.onanchorchange</code>: this is the same as the <code>onhashchange</code> event except it does not fire for states</li>
</ul>
</li>
<li>Known Issues

<ul>
<li>Opera 11 fails to create history entries when under stressful loads (events fire perfectly, just the history events fail) - there is nothing we can do about this</li>
<li>Mercury iOS fails to apply url changes (hashes and HTML5 History API states) - there is nothing we can do about this</li>
</ul>
</li>
</ul><h2>
<a name="history" class="anchor" href="#history"><span class="mini-icon mini-icon-link"></span></a>History</h2>

<p>You can discover the history inside the <a href="https://github.com/balupton/history.js/blob/master/History.md#files">History.md</a> file</p>

<h2>
<a name="license" class="anchor" href="#license"><span class="mini-icon mini-icon-link"></span></a>License</h2>

<p>Licensed under the <a href="http://opensource.org/licenses/BSD-3-Clause">New BSD License</a>
<br>Copyright ©  2011-2012 <a href="http://balupton.com">Benjamin Arthur Lupton</a></p></article>
        </div>
    </div>
  </div>
  <br style="clear:both;">


<br style="clear:both;">

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>


  </div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.10826s from fe1.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/balupton/history.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.10885' data-host='fe1'></span>
    
  </body>
</html>

