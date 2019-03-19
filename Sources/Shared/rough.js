





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-G5IW3QX9jLeIufJaob0LkBXhXTZSiWUoXGNTvU9KgK4dfhMjKB3hfAy9hjsk5YYoN0GA3b0yekVqlMA5EYlDDA==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-c567bfeb1cb9f4ac89533a5e03dbe623.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-5v4G7h0D7l4LzJAV5ZDxzCmB2bqr6u6GwZOBuLnpxLeh5tzwgG4JHHfIW05l3333JLycXT05cHmTgkwC9I4fNQ==" rel="stylesheet" href="https://github.githubassets.com/assets/github-89642c25e1c39ca29fd1d22a91c65558.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>rough/rough.js at master · pshihn/rough</title>
    <meta name="description" content="Create graphics with a hand-drawn, sketchy, appearance - pshihn/rough">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/833927?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="pshihn/rough" /><meta property="og:url" content="https://github.com/pshihn/rough" /><meta property="og:description" content="Create graphics with a hand-drawn, sketchy, appearance - pshihn/rough" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6Mzc5ODM0ODkwOmQyYWUzMzNjMjA1Y2IzOGFlOGFkNjM5NWY3OTk5MzA4MzQ0MDNmMmIxODM4NGNmOTZiZDcyNzgzMDExYzY3ZGQ=--b43125779fc09b2412bd3eaa907b412bd7221223">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="DBF9:47827:412261C:6138A9B:5C90C3FF" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="DBF9:47827:412261C:6138A9B:5C90C3FF" /><meta name="octolytics-dimension-region_edge" content="ams" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="2284279" /><meta name="octolytics-actor-login" content="onmyway133" /><meta name="octolytics-actor-hash" content="900c63d3f65f38ec682f1d1c700e5b39d82106561897c38570bd0addd1e5f254" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="5aac236159d2a5ccc53eebc213eeaf63">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="onmyway133">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NTQ2ODBjNjRjNDExNWU1NDRhMDk2MDBiMTgyOWEzZmE0NTBmYWNhYzE0NzYxNTRkN2QzMmYyYmJlYjU4NDljZnx7InJlbW90ZV9hZGRyZXNzIjoiMTA5Ljc0LjE5MC4xNTgiLCJyZXF1ZXN0X2lkIjoiREJGOTo0NzgyNzo0MTIyNjFDOjYxMzhBOUI6NUM5MEMzRkYiLCJ0aW1lc3RhbXAiOjE1NTI5OTEyMzUsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,LAUNCH_PROJECT,MARKETPLACE_SOCIAL_PROOF,MARKETPLACE_PLAN_RESTRICTION_EDITOR,NOTIFY_ON_BLOCK,RELATED_ISSUES">

  <meta name="html-safe-nonce" content="088a2c8928440ece3fd9ff02cb510307b0e1ec74">

  <meta http-equiv="x-pjax-version" content="654cdaf3b791c3b18a14dc0a447dceb4">
  

      <link href="https://github.com/pshihn/rough/commits/master.atom" rel="alternate" title="Recent Commits to rough:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/pshihn/rough git https://github.com/pshihn/rough.git">

  <meta name="octolytics-dimension-user_id" content="833927" /><meta name="octolytics-dimension-user_login" content="pshihn" /><meta name="octolytics-dimension-repository_id" content="76342242" /><meta name="octolytics-dimension-repository_nwo" content="pshihn/rough" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="76342242" /><meta name="octolytics-dimension-repository_network_root_nwo" content="pshihn/rough" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/pshihn/rough/blob/master/dist/rough.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production emoji-size-boost page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 ">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d"
  aria-label=&quot;Home page&quot;
  data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <nav class="d-flex" aria-label="Global">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="76342242" data-scoped-search-url="/pshihn/rough/search" data-unscoped-search-url="/search" action="/pshihn/rough/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=18jp0NytkPDBFTAw91QRO2x/2E9BHKcmNJyX3rSzGJy0C/3tPhuR8UpwsFR+pEwBd4VebBOrEsrA+5xTKYXv9g=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
              <li class="position-relative">
                <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
                   Marketplace
</a>                  
              </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </nav>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-inline-block  px-2">
      
    <a aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:unread" data-channel="notification-changed:2284279" href="/notifications">
        <span class="mail-status unread"></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown">
    <details class="details-overlay details-reset d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="pshihn/rough">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/pshihn/rough/issues/new" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


      </details-menu>
    </details>
  </li>

  <li class="dropdown">

    <details class="details-overlay details-reset d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@onmyway133" class="avatar float-left mr-1" src="https://avatars0.githubusercontent.com/u/2284279?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/onmyway133" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">onmyway133</strong></a></div>
        <div role="none" class="dropdown-divider"></div>

        <div class="px-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
          
<div class="js-user-status-container user-status-compact" data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link no-underline js-toggle-user-status-edit toggle-user-status-edit width-full" aria-haspopup="dialog" role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:833927,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:2284279,&quot;client_id&quot;:&quot;1510442723.1551732022&quot;,&quot;originating_request_id&quot;:&quot;DBF9:47827:412261C:6138A9B:5C90C3FF&quot;,&quot;originating_url&quot;:&quot;https://github.com/pshihn/rough/blob/master/dist/rough.js&quot;}}" data-hydro-click-hmac="4ecc441a823afac4b24517393a906dcaccd93fa584aaa6bbf2ad48a7b51950f1">
      <div class="f6 d-inline-block v-align-middle  user-status-emoji-only-header  circle lh-condensed user-status-header " style="max-width: 29px">
        <div class="user-status-emoji-container flex-shrink-0 mr-1">
          <div><g-emoji class="g-emoji" alias="innocent" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f607.png">😇</g-emoji></div>
        </div>
      </div>
      <div class="d-inline-block v-align-middle user-status-message-wrapper f6 lh-condensed ws-normal pt-1">
            What you don't know is what you haven…
      </div>
</summary>    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="jNproWWpsUsKxJ3O548o+g5QotI0cIG1ic0eyCcLGucqGbrKV3u7SfGBgeFXBrbS85QWBiTs1qDRjY29hM/eGQ==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value=":innocent:">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container js-suggester-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker bg-white btn-open-emoji-picker">
                  <span class="js-user-status-original-emoji" hidden><div><g-emoji class="g-emoji" alias="innocent" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f607.png">😇</g-emoji></div></span>
                  <span class="js-user-status-custom-emoji"><div><g-emoji class="g-emoji" alias="innocent" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f607.png">😇</g-emoji></div></span>
                  <span class="js-user-status-no-emoji-icon" hidden>
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <input type="text" autocomplete="off" data-maxlength="80" class="js-suggester-field d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field" placeholder="What's happening?" name="message" required value="What you don&#39;t know is what you haven&#39;t learned" aria-label="What is your current status?">
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div class="suggester-container">
              <div class="suggester js-suggester js-navigation-container" data-url="/autocomplete/user-suggestions" data-no-org-url="/autocomplete/user-suggestions" data-org-url="/suggestions" hidden>
              </div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto border-bottom ml-n3 mr-n3 px-3" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true" id="limited-availability-truncate-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit"  class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button"  class="width-full js-clear-user-status-button btn ml-2 js-user-status-exists">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

        </div>
        <div role="none" class="dropdown-divider"></div>

        <a role="menuitem" class="dropdown-item" href="/onmyway133" data-ga-click="Header, go to profile, text:your profile">Your profile</a>
        <a role="menuitem" class="dropdown-item" href="/onmyway133?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

        <a role="menuitem" class="dropdown-item" href="/onmyway133?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

        <a role="menuitem" class="dropdown-item" href="/onmyway133?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
          <a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a>

        <div role="none" class="dropdown-divider"></div>
        <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="CyB4HmOOdQtptrfPLxaExG/KpJhq9ytgFtnvCBnxASNlq3kEWaRkGFEuD2L1cYsaFpDPnBwrXaR+kbnBQYMGUQ==" />
          
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
            Sign out
          </button>
</form>      </details-menu>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="33WdWGeSEt71IoQDVNaYetrPZrRf6agSntOkOzuLF6mx/pxCXbgDzc26PK6OsZeko5UNsCk13tb2m/LyY/kQ2w==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container >
      


  






  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">



  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Q2SAH14PMi/BOrblg3/mnQvxoVOH8b3MMK89MnwdDOiYzORHFgwNSZymNDZJlo7/AjCW/FOb/Z3ycM1/dfRkcQ==" />      <input type="hidden" name="repository_id" id="repository_id" value="76342242" class="form-control" />

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="btn btn-sm btn-with-count select-menu-button" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:76342242,&quot;client_id&quot;:&quot;1510442723.1551732022&quot;,&quot;originating_request_id&quot;:&quot;DBF9:47827:412261C:6138A9B:5C90C3FF&quot;,&quot;originating_url&quot;:&quot;https://github.com/pshihn/rough/blob/master/dist/rough.js&quot;,&quot;user_id&quot;:2284279}}" data-hydro-click-hmac="3058ade995876e4d472afa46de1705b998e1bc74570700282edfba1bb0af9cd4" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu class="select-menu-modal position-absolute mt-5" style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
      <a class="social-count js-social-count"
        href="/pshihn/rough/watchers"
        aria-label="146 users are watching this repository">
        146
      </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/pshihn/rough/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="hcNfIDavCrxZXnqdGzfOjdfV7rLZw08WAxurCx42s1lAg2q+K8jA+ZBxlBcaEIZZpaibf1NEC7fWu7F8un0h4w==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar pshihn/rough" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:76342242,&quot;client_id&quot;:&quot;1510442723.1551732022&quot;,&quot;originating_request_id&quot;:&quot;DBF9:47827:412261C:6138A9B:5C90C3FF&quot;,&quot;originating_url&quot;:&quot;https://github.com/pshihn/rough/blob/master/dist/rough.js&quot;,&quot;user_id&quot;:2284279}}" data-hydro-click-hmac="f7e4fb2ce6ea128e6c6b47a54ee26004a2815d07917d65c85cbc368d2062389d" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/pshihn/rough/stargazers"
           aria-label="10383 users starred this repository">
          10,383
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/pshihn/rough/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="RSy76d+LI/lXeAf/qYQxAyJwIs0WR46swQkiOY8Ph8evCuwg3GOCja/p87ZVqP5WKRWwRUWV5FxAN0Gqdqxeeg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star pshihn/rough" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:76342242,&quot;client_id&quot;:&quot;1510442723.1551732022&quot;,&quot;originating_request_id&quot;:&quot;DBF9:47827:412261C:6138A9B:5C90C3FF&quot;,&quot;originating_url&quot;:&quot;https://github.com/pshihn/rough/blob/master/dist/rough.js&quot;,&quot;user_id&quot;:2284279}}" data-hydro-click-hmac="899da980bb1e7d0bf65edbcc173aec3f9b4ed957ca40f2d77c686fc6824c1e9f" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
</button>        <a class="social-count js-social-count" href="/pshihn/rough/stargazers"
           aria-label="10383 users starred this repository">
          10,383
        </a>
</form>  </div>

  </li>

  <li>
          <details class="details-reset details-overlay details-overlay-dark d-inline-block float-left"
            data-deferred-details-content-url="/pshihn/rough/fork?fragment=1">
            <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:76342242,&quot;client_id&quot;:&quot;1510442723.1551732022&quot;,&quot;originating_request_id&quot;:&quot;DBF9:47827:412261C:6138A9B:5C90C3FF&quot;,&quot;originating_url&quot;:&quot;https://github.com/pshihn/rough/blob/master/dist/rough.js&quot;,&quot;user_id&quot;:2284279}}" data-hydro-click-hmac="82e7ebe34b7cf7e1406e936ba269e803d9fca939fc4e8246bd2ecb3f1032a67b" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of pshihn/rough to your account" aria-label="Fork your own copy of pshihn/rough to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</summary>            <details-dialog class="anim-fade-in fast Box Box--overlay d-flex flex-column">
              <div class="Box-header">
                <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
                  <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
                </button>
                <h3 class="Box-title">Fork rough</h3>
              </div>
              <div class="overflow-auto text-center">
                <include-fragment>
                  <div class="octocat-spinner my-3" aria-label="Loading..."></div>
                  <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/pshihn/rough/fork">the fork page</a> directly.</p>
                </include-fragment>
              </div>
            </details-dialog>
          </details>

    <a href="/pshihn/rough/network/members" class="social-count"
       aria-label="316 users forked this repository">
      316
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=833927" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/pshihn">pshihn</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/pshihn/rough">rough</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /pshihn/rough" href="/pshihn/rough">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /pshihn/rough/issues" href="/pshihn/rough/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">10</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /pshihn/rough/pulls" href="/pshihn/rough/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">3</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /pshihn/rough/projects" href="/pshihn/rough/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /pshihn/rough/wiki" href="/pshihn/rough/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts security people /pshihn/rough/pulse" href="/pshihn/rough/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>


  </div>
<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
    



  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/pshihn/rough/blob/3b212e9d681f3c42d1fbde6fdab4357a662471fe/dist/rough.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:2eaa7829bd22db5e71bfa5d15dae2c38 -->

    

    <div class="file-navigation">
      
<details class="details-reset details-overlay select-menu branch-select-menu float-left">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target">master</span>
  </summary>

  <details-menu class="select-menu-modal position-absolute" style="z-index: 99;" src="/pshihn/rough/ref-list/master/dist/rough.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

      <div class="BtnGroup float-right">
        <a href="/pshihn/rough/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
      <div id="blob-path" class="breadcrumb">
        <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/pshihn/rough"><span>rough</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/pshihn/rough/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">rough.js</strong>
      </div>
    </div>



    
  <div class="commit-tease d-flex flex-column flex-shrink-0">
      <div class="d-flex flex-justify-between ">
        <span class="pr-md-4">
          <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=833927" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/pshihn"><img class="avatar" src="https://avatars0.githubusercontent.com/u/833927?s=40&amp;v=4" width="20" height="20" alt="@pshihn" /></a>
          <a class="user-mention" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=833927" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/pshihn">pshihn</a>
            <a data-pjax="true" title="rebuild" class="message" href="/pshihn/rough/commit/60d3d01409fb93ad720190d525ae3cb61e33fbd7">rebuild</a>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom ">
          <a class="commit-tease-sha pr-2" href="/pshihn/rough/commit/60d3d01409fb93ad720190d525ae3cb61e33fbd7" data-pjax>
            60d3d01
          </a>
          <relative-time datetime="2019-03-14T06:48:41Z">Mar 14, 2019</relative-time>
        </span>
      </div>

    <div class="commit-tease-contributors flex-auto">
      
<details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
  <summary
      class="btn-link"
      aria-haspopup="dialog"
      
      
      >
    
    <span><strong>1</strong> contributor</span>
  </summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast " aria-label="Users who have contributed to this file">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <h3 class="Box-title">Users who have contributed to this file</h3>
    </div>
    
        <ul class="list-style-none overflow-auto">
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/pshihn">
                <img class="avatar mr-2" alt="" src="https://avatars0.githubusercontent.com/u/833927?s=40&amp;v=4" width="20" height="20" />
                pshihn
</a>            </li>
        </ul>

  </details-dialog>
</details>
      
    </div>
  </div>





    <div class="file ">
      
<div class="file-header ">

  <div class="file-info float-left ">
      2 lines (1 sloc)
      <span class="file-info-divider"></span>
    34.9 KB
  </div>

  <div class="file-actions d-flex ">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/pshihn/rough/raw/master/dist/rough.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/pshihn/rough/blame/master/dist/rough.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/pshihn/rough/commits/master/dist/rough.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw"
               href="github-mac://openRepo/https://github.com/pshihn/rough?branch=master&amp;filepath=dist%2Frough.js"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:mac">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/pshihn/rough/edit/master/dist/rough.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="5zZJHQyZYuIXkB6+C6RxZAYrv0JUzm/hLOSyv4dxAInII9jOw3KcNh5pp31uptUF87f7kInpQzhc+wXjdHTMeQ==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/pshihn/rough/delete/master/dist/rough.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="4fDhc2AErz1wj0D64/3r+7Z9wdtdQh0wrp3OKKUJCaGPbtEqNvOxlRMpkm+OuFiUWPimXvyzMBDasx4p/gmVJg==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>

      

  <div itemprop="text" class="blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">var rough=function(){&quot;use strict&quot;;const t=&quot;undefined&quot;!=typeof self;class e{constructor(t,e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:&quot;#000&quot;,strokeWidth:1,curveTightness:0,curveStepCount:9,fillStyle:&quot;hachure&quot;,fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1},this.config=t||{},this.surface=e,this.config.options&amp;&amp;(this.defaultOptions=this._options(this.config.options))}_options(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_drawable(t,e,s){return{shape:t,sets:e||[],options:s||this.defaultOptions}}getCanvasSize(){const t=t=&gt;t&amp;&amp;&quot;object&quot;==typeof t&amp;&amp;t.baseVal&amp;&amp;t.baseVal.value?t.baseVal.value:t||100;return this.surface?[t(this.surface.width),t(this.surface.height)]:[100,100]}computePolygonSize(t){if(t.length){let e=t[0][0],s=t[0][0],i=t[0][1],h=t[0][1];for(let n=1;n&lt;t.length;n++)e=Math.min(e,t[n][0]),s=Math.max(s,t[n][0]),i=Math.min(i,t[n][1]),h=Math.max(h,t[n][1]);return[s-e,h-i]}return[0,0]}polygonPath(t){let e=&quot;&quot;;if(t.length){e=`M${t[0][0]},${t[0][1]}`;for(let s=1;s&lt;t.length;s++)e=`${e} L${t[s][0]},${t[s][1]}`}return e}computePathSize(e){let s=[0,0];if(t&amp;&amp;self.document)try{const t=&quot;http://www.w3.org/2000/svg&quot;,i=self.document.createElementNS(t,&quot;svg&quot;);i.setAttribute(&quot;width&quot;,&quot;0&quot;),i.setAttribute(&quot;height&quot;,&quot;0&quot;);const h=self.document.createElementNS(t,&quot;path&quot;);h.setAttribute(&quot;d&quot;,e),i.appendChild(h),self.document.body.appendChild(i);const n=h.getBBox();n&amp;&amp;(s[0]=n.width||0,s[1]=n.height||0),self.document.body.removeChild(i)}catch(t){}const i=this.getCanvasSize();return s[0]*s[1]||(s=i),s}toPaths(t){const e=t.sets||[],s=t.options||this.defaultOptions,i=[];for(const t of e){let e=null;switch(t.type){case&quot;path&quot;:e={d:this.opsToPath(t),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:&quot;none&quot;};break;case&quot;fillPath&quot;:e={d:this.opsToPath(t),stroke:&quot;none&quot;,strokeWidth:0,fill:s.fill||&quot;none&quot;};break;case&quot;fillSketch&quot;:e=this.fillSketch(t,s);break;case&quot;path2Dfill&quot;:e={d:t.path||&quot;&quot;,stroke:&quot;none&quot;,strokeWidth:0,fill:s.fill||&quot;none&quot;};break;case&quot;path2Dpattern&quot;:{const i=t.size,h={x:0,y:0,width:1,height:1,viewBox:`0 0 ${Math.round(i[0])} ${Math.round(i[1])}`,patternUnits:&quot;objectBoundingBox&quot;,path:this.fillSketch(t,s)};e={d:t.path,stroke:&quot;none&quot;,strokeWidth:0,pattern:h};break}}e&amp;&amp;i.push(e)}return i}fillSketch(t,e){let s=e.fillWeight;return s&lt;0&amp;&amp;(s=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||&quot;none&quot;,strokeWidth:s,fill:&quot;none&quot;}}opsToPath(t){let e=&quot;&quot;;for(const s of t.ops){const t=s.data;switch(s.op){case&quot;move&quot;:e+=`M${t[0]} ${t[1]} `;break;case&quot;bcurveTo&quot;:e+=`C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;break;case&quot;qcurveTo&quot;:e+=`Q${t[0]} ${t[1]}, ${t[2]} ${t[3]} `;break;case&quot;lineTo&quot;:e+=`L${t[0]} ${t[1]} `}}return e.trim()}}function s(t,e){return t.type===e}const i={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:4,t:2,V:1,v:1,Z:0,z:0};class h{constructor(t){this.COMMAND=0,this.NUMBER=1,this.EOD=2,this.segments=[],this.parseData(t),this.processPoints()}tokenize(t){const e=new Array;for(;&quot;&quot;!==t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:this.COMMAND,text:RegExp.$1},t=t.substr(RegExp.$1.length);else{if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return console.error(&quot;Unrecognized segment command: &quot;+t),[];e[e.length]={type:this.NUMBER,text:`${parseFloat(RegExp.$1)}`},t=t.substr(RegExp.$1.length)}return e[e.length]={type:this.EOD,text:&quot;&quot;},e}parseData(t){const e=this.tokenize(t);let h=0,n=e[h],a=&quot;BOD&quot;;for(this.segments=new Array;!s(n,this.EOD);){let o;const r=new Array;if(&quot;BOD&quot;===a){if(&quot;M&quot;!==n.text&amp;&amp;&quot;m&quot;!==n.text)return void this.parseData(&quot;M0,0&quot;+t);h++,o=i[n.text],a=n.text}else s(n,this.NUMBER)?o=i[a]:(h++,o=i[n.text],a=n.text);if(h+o&lt;e.length){for(let t=h;t&lt;h+o;t++){const i=e[t];if(!s(i,this.NUMBER))return void console.error(&quot;Parameter type is not a number: &quot;+a+&quot;,&quot;+i.text);r[r.length]=+i.text}if(&quot;number&quot;!=typeof i[a])return void console.error(&quot;Unsupported segment type: &quot;+a);{const t={key:a,data:r};this.segments.push(t),n=e[h+=o],&quot;M&quot;===a&amp;&amp;(a=&quot;L&quot;),&quot;m&quot;===a&amp;&amp;(a=&quot;l&quot;)}}else console.error(&quot;Path data ended before all parameters were found&quot;)}}get closed(){if(void 0===this._closed){this._closed=!1;for(const t of this.segments)&quot;z&quot;===t.key.toLowerCase()&amp;&amp;(this._closed=!0)}return this._closed}processPoints(){let t=null,e=[0,0];for(let s=0;s&lt;this.segments.length;s++){const i=this.segments[s];switch(i.key){case&quot;M&quot;:case&quot;L&quot;:case&quot;T&quot;:i.point=[i.data[0],i.data[1]];break;case&quot;m&quot;:case&quot;l&quot;:case&quot;t&quot;:i.point=[i.data[0]+e[0],i.data[1]+e[1]];break;case&quot;H&quot;:i.point=[i.data[0],e[1]];break;case&quot;h&quot;:i.point=[i.data[0]+e[0],e[1]];break;case&quot;V&quot;:i.point=[e[0],i.data[0]];break;case&quot;v&quot;:i.point=[e[0],i.data[0]+e[1]];break;case&quot;z&quot;:case&quot;Z&quot;:t&amp;&amp;(i.point=[t[0],t[1]]);break;case&quot;C&quot;:i.point=[i.data[4],i.data[5]];break;case&quot;c&quot;:i.point=[i.data[4]+e[0],i.data[5]+e[1]];break;case&quot;S&quot;:i.point=[i.data[2],i.data[3]];break;case&quot;s&quot;:i.point=[i.data[2]+e[0],i.data[3]+e[1]];break;case&quot;Q&quot;:i.point=[i.data[2],i.data[3]];break;case&quot;q&quot;:i.point=[i.data[2]+e[0],i.data[3]+e[1]];break;case&quot;A&quot;:i.point=[i.data[5],i.data[6]];break;case&quot;a&quot;:i.point=[i.data[5]+e[0],i.data[6]+e[1]]}&quot;m&quot;!==i.key&amp;&amp;&quot;M&quot;!==i.key||(t=null),i.point&amp;&amp;(e=i.point,t||(t=i.point)),&quot;z&quot;!==i.key&amp;&amp;&quot;Z&quot;!==i.key||(t=null)}}}class n{constructor(t){this._position=[0,0],this._first=null,this.bezierReflectionPoint=null,this.quadReflectionPoint=null,this.parsed=new h(t)}get segments(){return this.parsed.segments}get closed(){return this.parsed.closed}get linearPoints(){if(!this._linearPoints){const t=[];let e=[];for(const s of this.parsed.segments){const i=s.key.toLowerCase();(&quot;m&quot;!==i&amp;&amp;&quot;z&quot;!==i||(e.length&amp;&amp;(t.push(e),e=[]),&quot;z&quot;!==i))&amp;&amp;(s.point&amp;&amp;e.push(s.point))}e.length&amp;&amp;(t.push(e),e=[]),this._linearPoints=t}return this._linearPoints}get first(){return this._first}set first(t){this._first=t}setPosition(t,e){this._position=[t,e],this._first||(this._first=[t,e])}get position(){return this._position}get x(){return this._position[0]}get y(){return this._position[1]}}class a{constructor(t,e,s,i,h,n){if(this._segIndex=0,this._numSegs=0,this._rx=0,this._ry=0,this._sinPhi=0,this._cosPhi=0,this._C=[0,0],this._theta=0,this._delta=0,this._T=0,this._from=t,t[0]===e[0]&amp;&amp;t[1]===e[1])return;const a=Math.PI/180;this._rx=Math.abs(s[0]),this._ry=Math.abs(s[1]),this._sinPhi=Math.sin(i*a),this._cosPhi=Math.cos(i*a);const o=this._cosPhi*(t[0]-e[0])/2+this._sinPhi*(t[1]-e[1])/2,r=-this._sinPhi*(t[0]-e[0])/2+this._cosPhi*(t[1]-e[1])/2;let l=0;const c=this._rx*this._rx*this._ry*this._ry-this._rx*this._rx*r*r-this._ry*this._ry*o*o;if(c&lt;0){const t=Math.sqrt(1-c/(this._rx*this._rx*this._ry*this._ry));this._rx=this._rx*t,this._ry=this._ry*t,l=0}else l=(h===n?-1:1)*Math.sqrt(c/(this._rx*this._rx*r*r+this._ry*this._ry*o*o));const p=l*this._rx*r/this._ry,u=-l*this._ry*o/this._rx;this._C=[0,0],this._C[0]=this._cosPhi*p-this._sinPhi*u+(t[0]+e[0])/2,this._C[1]=this._sinPhi*p+this._cosPhi*u+(t[1]+e[1])/2,this._theta=this.calculateVectorAngle(1,0,(o-p)/this._rx,(r-u)/this._ry);let f=this.calculateVectorAngle((o-p)/this._rx,(r-u)/this._ry,(-o-p)/this._rx,(-r-u)/this._ry);!n&amp;&amp;f&gt;0?f-=2*Math.PI:n&amp;&amp;f&lt;0&amp;&amp;(f+=2*Math.PI),this._numSegs=Math.ceil(Math.abs(f/(Math.PI/2))),this._delta=f/this._numSegs,this._T=8/3*Math.sin(this._delta/4)*Math.sin(this._delta/4)/Math.sin(this._delta/2)}getNextSegment(){if(this._segIndex===this._numSegs)return null;const t=Math.cos(this._theta),e=Math.sin(this._theta),s=this._theta+this._delta,i=Math.cos(s),h=Math.sin(s),n=[this._cosPhi*this._rx*i-this._sinPhi*this._ry*h+this._C[0],this._sinPhi*this._rx*i+this._cosPhi*this._ry*h+this._C[1]],a=[this._from[0]+this._T*(-this._cosPhi*this._rx*e-this._sinPhi*this._ry*t),this._from[1]+this._T*(-this._sinPhi*this._rx*e+this._cosPhi*this._ry*t)],o=[n[0]+this._T*(this._cosPhi*this._rx*h+this._sinPhi*this._ry*i),n[1]+this._T*(this._sinPhi*this._rx*h-this._cosPhi*this._ry*i)];return this._theta=s,this._from=[n[0],n[1]],this._segIndex++,{cp1:a,cp2:o,to:n}}calculateVectorAngle(t,e,s,i){const h=Math.atan2(e,t),n=Math.atan2(i,s);return n&gt;=h?n-h:2*Math.PI-(h-n)}}class o{constructor(t,e){this.sets=t,this.closed=e}fit(t){const e=[];for(const s of this.sets){const i=s.length;let h=Math.floor(t*i);if(h&lt;5){if(i&lt;=5)continue;h=5}e.push(this.reduce(s,h))}let s=&quot;&quot;;for(const t of e){for(let e=0;e&lt;t.length;e++){const i=t[e];s+=0===e?&quot;M&quot;+i[0]+&quot;,&quot;+i[1]:&quot;L&quot;+i[0]+&quot;,&quot;+i[1]}this.closed&amp;&amp;(s+=&quot;z &quot;)}return s}distance(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}reduce(t,e){if(t.length&lt;=e)return t;const s=t.slice(0);for(;s.length&gt;e;){let t=-1,e=-1;for(let i=1;i&lt;s.length-1;i++){const h=this.distance(s[i-1],s[i]),n=this.distance(s[i],s[i+1]),a=this.distance(s[i-1],s[i+1]),o=(h+n+a)/2,r=Math.sqrt(o*(o-h)*(o-n)*(o-a));(t&lt;0||r&lt;t)&amp;&amp;(t=r,e=i)}if(!(e&gt;0))break;s.splice(e,1)}return s}}class r{constructor(t,e){this.xi=Number.MAX_VALUE,this.yi=Number.MAX_VALUE,this.px1=t[0],this.py1=t[1],this.px2=e[0],this.py2=e[1],this.a=this.py2-this.py1,this.b=this.px1-this.px2,this.c=this.px2*this.py1-this.px1*this.py2,this._undefined=0===this.a&amp;&amp;0===this.b&amp;&amp;0===this.c}isUndefined(){return this._undefined}intersects(t){if(this.isUndefined()||t.isUndefined())return!1;let e=Number.MAX_VALUE,s=Number.MAX_VALUE,i=0,h=0;const n=this.a,a=this.b,o=this.c;return Math.abs(a)&gt;1e-5&amp;&amp;(e=-n/a,i=-o/a),Math.abs(t.b)&gt;1e-5&amp;&amp;(s=-t.a/t.b,h=-t.c/t.b),e===Number.MAX_VALUE?s===Number.MAX_VALUE?-o/n==-t.c/t.a&amp;&amp;(this.py1&gt;=Math.min(t.py1,t.py2)&amp;&amp;this.py1&lt;=Math.max(t.py1,t.py2)?(this.xi=this.px1,this.yi=this.py1,!0):this.py2&gt;=Math.min(t.py1,t.py2)&amp;&amp;this.py2&lt;=Math.max(t.py1,t.py2)&amp;&amp;(this.xi=this.px2,this.yi=this.py2,!0)):(this.xi=this.px1,this.yi=s*this.xi+h,!((this.py1-this.yi)*(this.yi-this.py2)&lt;-1e-5||(t.py1-this.yi)*(this.yi-t.py2)&lt;-1e-5)&amp;&amp;(!(Math.abs(t.a)&lt;1e-5)||!((t.px1-this.xi)*(this.xi-t.px2)&lt;-1e-5))):s===Number.MAX_VALUE?(this.xi=t.px1,this.yi=e*this.xi+i,!((t.py1-this.yi)*(this.yi-t.py2)&lt;-1e-5||(this.py1-this.yi)*(this.yi-this.py2)&lt;-1e-5)&amp;&amp;(!(Math.abs(n)&lt;1e-5)||!((this.px1-this.xi)*(this.xi-this.px2)&lt;-1e-5))):e===s?i===h&amp;&amp;(this.px1&gt;=Math.min(t.px1,t.px2)&amp;&amp;this.px1&lt;=Math.max(t.py1,t.py2)?(this.xi=this.px1,this.yi=this.py1,!0):this.px2&gt;=Math.min(t.px1,t.px2)&amp;&amp;this.px2&lt;=Math.max(t.px1,t.px2)&amp;&amp;(this.xi=this.px2,this.yi=this.py2,!0)):(this.xi=(h-i)/(e-s),this.yi=e*this.xi+i,!((this.px1-this.xi)*(this.xi-this.px2)&lt;-1e-5||(t.px1-this.xi)*(this.xi-t.px2)&lt;-1e-5))}}function l(t,e){const s=t[1][1]-t[0][1],i=t[0][0]-t[1][0],h=s*t[0][0]+i*t[0][1],n=e[1][1]-e[0][1],a=e[0][0]-e[1][0],o=n*e[0][0]+a*e[0][1],r=s*a-n*i;return r?[Math.round((a*h-i*o)/r),Math.round((s*o-n*h)/r)]:null}class c{constructor(t,e,s,i,h,n,a,o){this.deltaX=0,this.hGap=0,this.top=t,this.bottom=e,this.left=s,this.right=i,this.gap=h,this.sinAngle=n,this.tanAngle=o,Math.abs(n)&lt;1e-4?this.pos=s+h:Math.abs(n)&gt;.9999?this.pos=t+h:(this.deltaX=(e-t)*Math.abs(o),this.pos=s-Math.abs(this.deltaX),this.hGap=Math.abs(h/a),this.sLeft=new r([s,e],[s,t]),this.sRight=new r([i,e],[i,t]))}nextLine(){if(Math.abs(this.sinAngle)&lt;1e-4){if(this.pos&lt;this.right){const t=[this.pos,this.top,this.pos,this.bottom];return this.pos+=this.gap,t}}else if(Math.abs(this.sinAngle)&gt;.9999){if(this.pos&lt;this.bottom){const t=[this.left,this.pos,this.right,this.pos];return this.pos+=this.gap,t}}else{let t=this.pos-this.deltaX/2,e=this.pos+this.deltaX/2,s=this.bottom,i=this.top;if(this.pos&lt;this.right+this.deltaX){for(;t&lt;this.left&amp;&amp;e&lt;this.left||t&gt;this.right&amp;&amp;e&gt;this.right;)if(this.pos+=this.hGap,t=this.pos-this.deltaX/2,e=this.pos+this.deltaX/2,this.pos&gt;this.right+this.deltaX)return null;const h=new r([t,s],[e,i]);this.sLeft&amp;&amp;h.intersects(this.sLeft)&amp;&amp;(t=h.xi,s=h.yi),this.sRight&amp;&amp;h.intersects(this.sRight)&amp;&amp;(e=h.xi,i=h.yi),this.tanAngle&gt;0&amp;&amp;(t=this.right-(t-this.left),e=this.right-(e-this.left));const n=[t,s,e,i];return this.pos+=this.hGap,n}}return null}}function p(t){const e=t[0],s=t[1];return Math.sqrt(Math.pow(e[0]-s[0],2)+Math.pow(e[1]-s[1],2))}function u(t,e){const s=[],i=new r([t[0],t[1]],[t[2],t[3]]);for(let t=0;t&lt;e.length;t++){const h=new r(e[t],e[(t+1)%e.length]);i.intersects(h)&amp;&amp;s.push([i.xi,i.yi])}return s}function f(t,e,s,i,h,n,a){return[-s*n-i*h+s+n*t+h*e,a*(s*h-i*n)+i+-a*h*t+a*n*e]}function d(t,e){const s=[];if(t&amp;&amp;t.length){let i=t[0][0],h=t[0][0],n=t[0][1],a=t[0][1];for(let e=1;e&lt;t.length;e++)i=Math.min(i,t[e][0]),h=Math.max(h,t[e][0]),n=Math.min(n,t[e][1]),a=Math.max(a,t[e][1]);const o=e.hachureAngle;let r=e.hachureGap;r&lt;0&amp;&amp;(r=4*e.strokeWidth),r=Math.max(r,.1);const l=o%180*(Math.PI/180),p=Math.cos(l),f=Math.sin(l),d=Math.tan(l),g=new c(n-1,a+1,i-1,h+1,r,f,p,d);let y;for(;null!=(y=g.nextLine());){const e=u(y,t);for(let t=0;t&lt;e.length;t++)if(t&lt;e.length-1){const i=e[t],h=e[t+1];s.push([i,h])}}}return s}function g(t,e,s,i,h,n){const a=[];let o=Math.abs(i/2),r=Math.abs(h/2);o+=t.randOffset(.05*o,n),r+=t.randOffset(.05*r,n);const l=n.hachureAngle;let c=n.hachureGap;c&lt;=0&amp;&amp;(c=4*n.strokeWidth);let p=n.fillWeight;p&lt;0&amp;&amp;(p=n.strokeWidth/2);const u=l%180*(Math.PI/180),d=Math.tan(u),g=r/o,y=Math.sqrt(g*d*g*d+1),M=g*d/y,x=1/y,_=c/(o*r/Math.sqrt(r*x*(r*x)+o*M*(o*M))/o);let b=Math.sqrt(o*o-(e-o+_)*(e-o+_));for(let t=e-o+_;t&lt;e+o;t+=_){const i=f(t,s-(b=Math.sqrt(o*o-(e-t)*(e-t))),e,s,M,x,g),h=f(t,s+b,e,s,M,x,g);a.push([i,h])}return a}class y{constructor(t){this.helper=t}fillPolygon(t,e){return this._fillPolygon(t,e)}fillEllipse(t,e,s,i,h){return this._fillEllipse(t,e,s,i,h)}fillArc(t,e,s,i,h,n,a){return null}_fillPolygon(t,e,s=!1){const i=d(t,e);return{type:&quot;fillSketch&quot;,ops:this.renderLines(i,e,s)}}_fillEllipse(t,e,s,i,h,n=!1){const a=g(this.helper,t,e,s,i,h);return{type:&quot;fillSketch&quot;,ops:this.renderLines(a,h,n)}}renderLines(t,e,s){let i=[],h=null;for(const n of t)i=i.concat(this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e)),s&amp;&amp;h&amp;&amp;(i=i.concat(this.helper.doubleLineOps(h[0],h[1],n[0][0],n[0][1],e))),h=n[1];return i}}class M extends y{fillPolygon(t,e){return this._fillPolygon(t,e,!0)}fillEllipse(t,e,s,i,h){return this._fillEllipse(t,e,s,i,h,!0)}}class x extends y{fillPolygon(t,e){const s=this._fillPolygon(t,e),i=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),h=this._fillPolygon(t,i);return s.ops=s.ops.concat(h.ops),s}fillEllipse(t,e,s,i,h){const n=this._fillEllipse(t,e,s,i,h),a=Object.assign({},h,{hachureAngle:h.hachureAngle+90}),o=this._fillEllipse(t,e,s,i,a);return n.ops=n.ops.concat(o.ops),n}}class _{constructor(t){this.helper=t}fillPolygon(t,e){const s=d(t,e=Object.assign({},e,{curveStepCount:4,hachureAngle:0}));return this.dotsOnLines(s,e)}fillEllipse(t,e,s,i,h){h=Object.assign({},h,{curveStepCount:4,hachureAngle:0});const n=g(this.helper,t,e,s,i,h);return this.dotsOnLines(n,h)}fillArc(t,e,s,i,h,n,a){return null}dotsOnLines(t,e){let s=[],i=e.hachureGap;i&lt;0&amp;&amp;(i=4*e.strokeWidth),i=Math.max(i,.1);let h=e.fillWeight;h&lt;0&amp;&amp;(h=e.strokeWidth/2);for(const n of t){const t=p(n)/i,a=Math.ceil(t)-1,o=Math.atan((n[1][1]-n[0][1])/(n[1][0]-n[0][0]));for(let t=0;t&lt;a;t++){const a=i*(t+1),r=a*Math.sin(o),l=a*Math.cos(o),c=[n[0][0]-l,n[0][1]+r],p=this.helper.randOffsetWithRange(c[0]-i/4,c[0]+i/4,e),u=this.helper.randOffsetWithRange(c[1]-i/4,c[1]+i/4,e),f=this.helper.ellipse(p,u,h,h,e);s=s.concat(f.ops)}}return{type:&quot;fillSketch&quot;,ops:s}}}class b{constructor(t){this.helper=t}fillPolygon(t,e){const s=[Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER],i=[Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];t.forEach(t=&gt;{s[0]=Math.min(s[0],t[0]),s[1]=Math.max(s[1],t[0]),i[0]=Math.min(i[0],t[1]),i[1]=Math.max(i[1],t[1])});const h=function(t){let e=0,s=0,i=0;for(let s=0;s&lt;t.length;s++){const i=t[s],h=s===t.length-1?t[0]:t[s+1];e+=i[0]*h[1]-h[0]*i[1]}e/=2;for(let e=0;e&lt;t.length;e++){const h=t[e],n=e===t.length-1?t[0]:t[e+1];s+=(h[0]+n[0])*(h[0]*n[1]-n[0]*h[1]),i+=(h[1]+n[1])*(h[0]*n[1]-n[0]*h[1])}return[s/(6*e),i/(6*e)]}(t),n=Math.max(Math.sqrt(Math.pow(h[0]-s[0],2)+Math.pow(h[1]-i[0],2)),Math.sqrt(Math.pow(h[0]-s[1],2)+Math.pow(h[1]-i[1],2))),a=e.hachureGap&gt;0?e.hachureGap:4*e.strokeWidth,o=[];if(t.length&gt;2)for(let e=0;e&lt;t.length;e++)e===t.length-1?o.push([t[e],t[0]]):o.push([t[e],t[e+1]]);let r=[];const c=Math.max(1,Math.PI*n/a);for(let t=0;t&lt;c;t++){const e=t*Math.PI/c,a=[h,[h[0]+n*Math.cos(e),h[1]+n*Math.sin(e)]];o.forEach(t=&gt;{const e=l(t,a);e&amp;&amp;e[0]&gt;=s[0]&amp;&amp;e[0]&lt;=s[1]&amp;&amp;e[1]&gt;=i[0]&amp;&amp;e[1]&lt;=i[1]&amp;&amp;r.push(e)})}r=this.removeDuplocatePoints(r);const p=this.createLinesFromCenter(h,r);return{type:&quot;fillSketch&quot;,ops:this.drawLines(p,e)}}fillEllipse(t,e,s,i,h){return this.fillArcSegment(t,e,s,i,0,2*Math.PI,h)}fillArc(t,e,s,i,h,n,a){return this.fillArcSegment(t,e,s,i,h,n,a)}fillArcSegment(t,e,s,i,h,n,a){const o=[t,e],r=s/2,l=i/2,c=Math.max(s/2,i/2);let p=a.hachureGap;p&lt;0&amp;&amp;(p=4*a.strokeWidth);const u=Math.max(1,Math.abs(n-h)*c/p);let f=[];for(let t=0;t&lt;u;t++){const e=t*((n-h)/u)+h,s=c*Math.cos(e),i=c*Math.sin(e),a=Math.sqrt(r*r*i*i+l*l*s*s),p=r*l*s/a,d=r*l*i/a;f.push([o[0]+p,o[1]+d])}f=this.removeDuplocatePoints(f);const d=this.createLinesFromCenter(o,f);return{type:&quot;fillSketch&quot;,ops:this.drawLines(d,a)}}drawLines(t,e){let s=[];return t.forEach(t=&gt;{const i=t[0],h=t[1];s=s.concat(this.helper.doubleLineOps(i[0],i[1],h[0],h[1],e))}),s}createLinesFromCenter(t,e){return e.map(e=&gt;[t,e])}removeDuplocatePoints(t){const e=new Set;return t.filter(t=&gt;{const s=t.join(&quot;,&quot;);return!e.has(s)&amp;&amp;(e.add(s),!0)})}}class m{constructor(t){this.helper=t}fillPolygon(t,e){const s=d(t,e);return{type:&quot;fillSketch&quot;,ops:this.dashedLine(s,e)}}fillEllipse(t,e,s,i,h){const n=g(this.helper,t,e,s,i,h);return{type:&quot;fillSketch&quot;,ops:this.dashedLine(n,h)}}fillArc(t,e,s,i,h,n,a){return null}dashedLine(t,e){const s=e.dashOffset&lt;0?e.hachureGap&lt;0?4*e.strokeWidth:e.hachureGap:e.dashOffset,i=e.dashGap&lt;0?e.hachureGap&lt;0?4*e.strokeWidth:e.hachureGap:e.dashGap;let h=[];return t.forEach(t=&gt;{const n=p(t),a=Math.floor(n/(s+i)),o=(n+i-a*(s+i))/2;let r=t[0],l=t[1];r[0]&gt;l[0]&amp;&amp;(r=t[1],l=t[0]);const c=Math.atan((l[1]-r[1])/(l[0]-r[0]));for(let t=0;t&lt;a;t++){const n=t*(s+i),a=n+s,l=[r[0]+n*Math.cos(c)+o*Math.cos(c),r[1]+n*Math.sin(c)+o*Math.sin(c)],p=[r[0]+a*Math.cos(c)+o*Math.cos(c),r[1]+a*Math.sin(c)+o*Math.sin(c)];h=h.concat(this.helper.doubleLineOps(l[0],l[1],p[0],p[1],e))}}),h}}class w{constructor(t){this.helper=t}fillPolygon(t,e){const s=e.hachureGap&lt;0?4*e.strokeWidth:e.hachureGap,i=e.zigzagOffset&lt;0?s:e.zigzagOffset,h=d(t,e=Object.assign({},e,{hachureGap:s+i}));return{type:&quot;fillSketch&quot;,ops:this.zigzagLines(h,i,e)}}fillEllipse(t,e,s,i,h){const n=h.hachureGap&lt;0?4*h.strokeWidth:h.hachureGap,a=h.zigzagOffset&lt;0?n:h.zigzagOffset;h=Object.assign({},h,{hachureGap:n+a});const o=g(this.helper,t,e,s,i,h);return{type:&quot;fillSketch&quot;,ops:this.zigzagLines(o,a,h)}}fillArc(t,e,s,i,h,n,a){return null}zigzagLines(t,e,s){let i=[];return t.forEach(t=&gt;{const h=p(t),n=Math.round(h/(2*e));let a=t[0],o=t[1];a[0]&gt;o[0]&amp;&amp;(a=t[1],o=t[0]);const r=Math.atan((o[1]-a[1])/(o[0]-a[0]));for(let t=0;t&lt;n;t++){const h=2*t*e,n=2*(t+1)*e,o=Math.sqrt(2*Math.pow(e,2)),l=[a[0]+h*Math.cos(r),a[1]+h*Math.sin(r)],c=[a[0]+n*Math.cos(r),a[1]+n*Math.sin(r)],p=[l[0]+o*Math.cos(r+Math.PI/4),l[1]+o*Math.sin(r+Math.PI/4)];i=(i=i.concat(this.helper.doubleLineOps(l[0],l[1],p[0],p[1],s))).concat(this.helper.doubleLineOps(p[0],p[1],c[0],c[1],s))}}),i}}const k={};function P(t,e){let s=t.fillStyle||&quot;hachure&quot;;if(!k[s])switch(s){case&quot;zigzag&quot;:k[s]||(k[s]=new M(e));break;case&quot;cross-hatch&quot;:k[s]||(k[s]=new x(e));break;case&quot;dots&quot;:k[s]||(k[s]=new _(e));break;case&quot;starburst&quot;:k[s]||(k[s]=new b(e));break;case&quot;dashed&quot;:k[s]||(k[s]=new m(e));break;case&quot;zigzag-line&quot;:k[s]||(k[s]=new w(e));break;case&quot;hachure&quot;:default:k[s=&quot;hachure&quot;]||(k[s]=new y(e))}return k[s]}const v={randOffset:function(t,e){return W(t,e)},randOffsetWithRange:function(t,e,s){return N(t,e,s)},ellipse:T,doubleLineOps:function(t,e,s,i,h){return R(t,e,s,i,h)}};function S(t,e,s,i,h){return{type:&quot;path&quot;,ops:R(t,e,s,i,h)}}function A(t,e,s){const i=(t||[]).length;if(i&gt;2){let h=[];for(let e=0;e&lt;i-1;e++)h=h.concat(R(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&amp;&amp;(h=h.concat(R(t[i-1][0],t[i-1][1],t[0][0],t[0][1],s))),{type:&quot;path&quot;,ops:h}}return 2===i?S(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:&quot;path&quot;,ops:[]}}function E(t,e,s,i,h){return function(t,e){return A(t,!0,e)}([[t,e],[t+s,e],[t+s,e+i],[t,e+i]],h)}function O(t,e){const s=D(t,1*(1+.2*e.roughness),e),i=D(t,1.5*(1+.22*e.roughness),e);return{type:&quot;path&quot;,ops:s.concat(i)}}function T(t,e,s,i,h){const n=2*Math.PI/h.curveStepCount;let a=Math.abs(s/2),o=Math.abs(i/2);const r=$(n,t,e,a+=W(.05*a,h),o+=W(.05*o,h),1,n*N(.1,N(.4,1,h),h),h),l=$(n,t,e,a,o,1.5,0,h);return{type:&quot;path&quot;,ops:r.concat(l)}}function C(t,e,s,i,h,n,a,o,r){const l=t,c=e;let p=Math.abs(s/2),u=Math.abs(i/2);p+=W(.01*p,r),u+=W(.01*u,r);let f=h,d=n;for(;f&lt;0;)f+=2*Math.PI,d+=2*Math.PI;d-f&gt;2*Math.PI&amp;&amp;(f=0,d=2*Math.PI);const g=2*Math.PI/r.curveStepCount,y=Math.min(g/2,(d-f)/2),M=G(y,l,c,p,u,f,d,1,r),x=G(y,l,c,p,u,f,d,1.5,r);let _=M.concat(x);return a&amp;&amp;(o?_=(_=_.concat(R(l,c,l+p*Math.cos(f),c+u*Math.sin(f),r))).concat(R(l,c,l+p*Math.cos(d),c+u*Math.sin(d),r)):(_.push({op:&quot;lineTo&quot;,data:[l,c]}),_.push({op:&quot;lineTo&quot;,data:[l+p*Math.cos(f),c+u*Math.sin(f)]}))),{type:&quot;path&quot;,ops:_}}function z(t,e){const s=[];if(t.length){const i=e.maxRandomnessOffset||0,h=t.length;if(h&gt;2){s.push({op:&quot;move&quot;,data:[t[0][0]+W(i,e),t[0][1]+W(i,e)]});for(let n=1;n&lt;h;n++)s.push({op:&quot;lineTo&quot;,data:[t[n][0]+W(i,e),t[n][1]+W(i,e)]})}}return{type:&quot;fillPath&quot;,ops:s}}function L(t,e){return P(e,v).fillPolygon(t,e)}function N(t,e,s){return s.roughness*(Math.random()*(e-t)+t)}function W(t,e){return N(-t,t,e)}function R(t,e,s,i,h){const n=I(t,e,s,i,h,!0,!1),a=I(t,e,s,i,h,!0,!0);return n.concat(a)}function I(t,e,s,i,h,n,a){const o=Math.pow(t-s,2)+Math.pow(e-i,2);let r=h.maxRandomnessOffset||0;r*r*100&gt;o&amp;&amp;(r=Math.sqrt(o)/10);const l=r/2,c=.2+.2*Math.random();let p=h.bowing*h.maxRandomnessOffset*(i-e)/200,u=h.bowing*h.maxRandomnessOffset*(t-s)/200;p=W(p,h),u=W(u,h);const f=[],d=()=&gt;W(l,h),g=()=&gt;W(r,h);return n&amp;&amp;(a?f.push({op:&quot;move&quot;,data:[t+d(),e+d()]}):f.push({op:&quot;move&quot;,data:[t+W(r,h),e+W(r,h)]})),a?f.push({op:&quot;bcurveTo&quot;,data:[p+t+(s-t)*c+d(),u+e+(i-e)*c+d(),p+t+2*(s-t)*c+d(),u+e+2*(i-e)*c+d(),s+d(),i+d()]}):f.push({op:&quot;bcurveTo&quot;,data:[p+t+(s-t)*c+g(),u+e+(i-e)*c+g(),p+t+2*(s-t)*c+g(),u+e+2*(i-e)*c+g(),s+g(),i+g()]}),f}function D(t,e,s){const i=[];i.push([t[0][0]+W(e,s),t[0][1]+W(e,s)]),i.push([t[0][0]+W(e,s),t[0][1]+W(e,s)]);for(let h=1;h&lt;t.length;h++)i.push([t[h][0]+W(e,s),t[h][1]+W(e,s)]),h===t.length-1&amp;&amp;i.push([t[h][0]+W(e,s),t[h][1]+W(e,s)]);return q(i,null,s)}function q(t,e,s){const i=t.length;let h=[];if(i&gt;3){const n=[],a=1-s.curveTightness;h.push({op:&quot;move&quot;,data:[t[1][0],t[1][1]]});for(let e=1;e+2&lt;i;e++){const s=t[e];n[0]=[s[0],s[1]],n[1]=[s[0]+(a*t[e+1][0]-a*t[e-1][0])/6,s[1]+(a*t[e+1][1]-a*t[e-1][1])/6],n[2]=[t[e+1][0]+(a*t[e][0]-a*t[e+2][0])/6,t[e+1][1]+(a*t[e][1]-a*t[e+2][1])/6],n[3]=[t[e+1][0],t[e+1][1]],h.push({op:&quot;bcurveTo&quot;,data:[n[1][0],n[1][1],n[2][0],n[2][1],n[3][0],n[3][1]]})}if(e&amp;&amp;2===e.length){const t=s.maxRandomnessOffset;h.push({op:&quot;lineTo&quot;,data:[e[0]+W(t,s),e[1]+W(t,s)]})}}else 3===i?(h.push({op:&quot;move&quot;,data:[t[1][0],t[1][1]]}),h.push({op:&quot;bcurveTo&quot;,data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===i&amp;&amp;(h=h.concat(R(t[0][0],t[0][1],t[1][0],t[1][1],s)));return h}function $(t,e,s,i,h,n,a,o){const r=W(.5,o)-Math.PI/2,l=[];l.push([W(n,o)+e+.9*i*Math.cos(r-t),W(n,o)+s+.9*h*Math.sin(r-t)]);for(let a=r;a&lt;2*Math.PI+r-.01;a+=t)l.push([W(n,o)+e+i*Math.cos(a),W(n,o)+s+h*Math.sin(a)]);return l.push([W(n,o)+e+i*Math.cos(r+2*Math.PI+.5*a),W(n,o)+s+h*Math.sin(r+2*Math.PI+.5*a)]),l.push([W(n,o)+e+.98*i*Math.cos(r+a),W(n,o)+s+.98*h*Math.sin(r+a)]),l.push([W(n,o)+e+.9*i*Math.cos(r+.5*a),W(n,o)+s+.9*h*Math.sin(r+.5*a)]),q(l,null,o)}function G(t,e,s,i,h,n,a,o,r){const l=n+W(.1,r),c=[];c.push([W(o,r)+e+.9*i*Math.cos(l-t),W(o,r)+s+.9*h*Math.sin(l-t)]);for(let n=l;n&lt;=a;n+=t)c.push([W(o,r)+e+i*Math.cos(n),W(o,r)+s+h*Math.sin(n)]);return c.push([e+i*Math.cos(a),s+h*Math.sin(a)]),c.push([e+i*Math.cos(a),s+h*Math.sin(a)]),q(c,null,r)}function B(t,e,s,i,h,n,a,o){const r=[],l=[o.maxRandomnessOffset||1,(o.maxRandomnessOffset||1)+.5];let c=[0,0];for(let p=0;p&lt;2;p++)0===p?r.push({op:&quot;move&quot;,data:[a.x,a.y]}):r.push({op:&quot;move&quot;,data:[a.x+W(l[0],o),a.y+W(l[0],o)]}),c=[h+W(l[p],o),n+W(l[p],o)],r.push({op:&quot;bcurveTo&quot;,data:[t+W(l[p],o),e+W(l[p],o),s+W(l[p],o),i+W(l[p],o),c[0],c[1]]});return a.setPosition(c[0],c[1]),r}function X(t,e,s,i){let h=[];switch(e.key){case&quot;M&quot;:case&quot;m&quot;:{const s=&quot;m&quot;===e.key;if(e.data.length&gt;=2){let n=+e.data[0],a=+e.data[1];s&amp;&amp;(n+=t.x,a+=t.y);const o=1*(i.maxRandomnessOffset||0);n+=W(o,i),a+=W(o,i),t.setPosition(n,a),h.push({op:&quot;move&quot;,data:[n,a]})}break}case&quot;L&quot;:case&quot;l&quot;:{const s=&quot;l&quot;===e.key;if(e.data.length&gt;=2){let n=+e.data[0],a=+e.data[1];s&amp;&amp;(n+=t.x,a+=t.y),h=h.concat(R(t.x,t.y,n,a,i)),t.setPosition(n,a)}break}case&quot;H&quot;:case&quot;h&quot;:{const s=&quot;h&quot;===e.key;if(e.data.length){let n=+e.data[0];s&amp;&amp;(n+=t.x),h=h.concat(R(t.x,t.y,n,t.y,i)),t.setPosition(n,t.y)}break}case&quot;V&quot;:case&quot;v&quot;:{const s=&quot;v&quot;===e.key;if(e.data.length){let n=+e.data[0];s&amp;&amp;(n+=t.y),h=h.concat(R(t.x,t.y,t.x,n,i)),t.setPosition(t.x,n)}break}case&quot;Z&quot;:case&quot;z&quot;:t.first&amp;&amp;(h=h.concat(R(t.x,t.y,t.first[0],t.first[1],i)),t.setPosition(t.first[0],t.first[1]),t.first=null);break;case&quot;C&quot;:case&quot;c&quot;:{const s=&quot;c&quot;===e.key;if(e.data.length&gt;=6){let n=+e.data[0],a=+e.data[1],o=+e.data[2],r=+e.data[3],l=+e.data[4],c=+e.data[5];s&amp;&amp;(n+=t.x,o+=t.x,l+=t.x,a+=t.y,r+=t.y,c+=t.y);const p=B(n,a,o,r,l,c,t,i);h=h.concat(p),t.bezierReflectionPoint=[l+(l-o),c+(c-r)]}break}case&quot;S&quot;:case&quot;s&quot;:{const n=&quot;s&quot;===e.key;if(e.data.length&gt;=4){let a=+e.data[0],o=+e.data[1],r=+e.data[2],l=+e.data[3];n&amp;&amp;(a+=t.x,r+=t.x,o+=t.y,l+=t.y);let c=a,p=o;const u=s?s.key:&quot;&quot;;let f=null;&quot;c&quot;!==u&amp;&amp;&quot;C&quot;!==u&amp;&amp;&quot;s&quot;!==u&amp;&amp;&quot;S&quot;!==u||(f=t.bezierReflectionPoint),f&amp;&amp;(c=f[0],p=f[1]);const d=B(c,p,a,o,r,l,t,i);h=h.concat(d),t.bezierReflectionPoint=[r+(r-a),l+(l-o)]}break}case&quot;Q&quot;:case&quot;q&quot;:{const s=&quot;q&quot;===e.key;if(e.data.length&gt;=4){let n=+e.data[0],a=+e.data[1],o=+e.data[2],r=+e.data[3];s&amp;&amp;(n+=t.x,o+=t.x,a+=t.y,r+=t.y);const l=1*(1+.2*i.roughness),c=1.5*(1+.22*i.roughness);h.push({op:&quot;move&quot;,data:[t.x+W(l,i),t.y+W(l,i)]});let p=[o+W(l,i),r+W(l,i)];h.push({op:&quot;qcurveTo&quot;,data:[n+W(l,i),a+W(l,i),p[0],p[1]]}),h.push({op:&quot;move&quot;,data:[t.x+W(c,i),t.y+W(c,i)]}),p=[o+W(c,i),r+W(c,i)],h.push({op:&quot;qcurveTo&quot;,data:[n+W(c,i),a+W(c,i),p[0],p[1]]}),t.setPosition(p[0],p[1]),t.quadReflectionPoint=[o+(o-n),r+(r-a)]}break}case&quot;T&quot;:case&quot;t&quot;:{const n=&quot;t&quot;===e.key;if(e.data.length&gt;=2){let a=+e.data[0],o=+e.data[1];n&amp;&amp;(a+=t.x,o+=t.y);let r=a,l=o;const c=s?s.key:&quot;&quot;;let p=null;&quot;q&quot;!==c&amp;&amp;&quot;Q&quot;!==c&amp;&amp;&quot;t&quot;!==c&amp;&amp;&quot;T&quot;!==c||(p=t.quadReflectionPoint),p&amp;&amp;(r=p[0],l=p[1]);const u=1*(1+.2*i.roughness),f=1.5*(1+.22*i.roughness);h.push({op:&quot;move&quot;,data:[t.x+W(u,i),t.y+W(u,i)]});let d=[a+W(u,i),o+W(u,i)];h.push({op:&quot;qcurveTo&quot;,data:[r+W(u,i),l+W(u,i),d[0],d[1]]}),h.push({op:&quot;move&quot;,data:[t.x+W(f,i),t.y+W(f,i)]}),d=[a+W(f,i),o+W(f,i)],h.push({op:&quot;qcurveTo&quot;,data:[r+W(f,i),l+W(f,i),d[0],d[1]]}),t.setPosition(d[0],d[1]),t.quadReflectionPoint=[a+(a-r),o+(o-l)]}break}case&quot;A&quot;:case&quot;a&quot;:{const s=&quot;a&quot;===e.key;if(e.data.length&gt;=7){const n=+e.data[0],o=+e.data[1],r=+e.data[2],l=+e.data[3],c=+e.data[4];let p=+e.data[5],u=+e.data[6];if(s&amp;&amp;(p+=t.x,u+=t.y),p===t.x&amp;&amp;u===t.y)break;if(0===n||0===o)h=h.concat(R(t.x,t.y,p,u,i)),t.setPosition(p,u);else for(let e=0;e&lt;1;e++){const e=new a([t.x,t.y],[p,u],[n,o],r,!!l,!!c);let s=e.getNextSegment();for(;s;){const n=B(s.cp1[0],s.cp1[1],s.cp2[0],s.cp2[1],s.to[0],s.to[1],t,i);h=h.concat(n),s=e.getNextSegment()}}}break}}return h}class U extends e{line(t,e,s,i,h){const n=this._options(h);return this._drawable(&quot;line&quot;,[S(t,e,s,i,n)],n)}rectangle(t,e,s,i,h){const n=this._options(h),a=[];if(n.fill){const h=[[t,e],[t+s,e],[t+s,e+i],[t,e+i]];&quot;solid&quot;===n.fillStyle?a.push(z(h,n)):a.push(L(h,n))}return a.push(E(t,e,s,i,n)),this._drawable(&quot;rectangle&quot;,a,n)}ellipse(t,e,s,i,h){const n=this._options(h),a=[];if(n.fill)if(&quot;solid&quot;===n.fillStyle){const h=T(t,e,s,i,n);h.type=&quot;fillPath&quot;,a.push(h)}else a.push(function(t,e,s,i,h){return P(h,v).fillEllipse(t,e,s,i,h)}(t,e,s,i,n));return a.push(T(t,e,s,i,n)),this._drawable(&quot;ellipse&quot;,a,n)}circle(t,e,s,i){const h=this.ellipse(t,e,s,s,i);return h.shape=&quot;circle&quot;,h}linearPath(t,e){const s=this._options(e);return this._drawable(&quot;linearPath&quot;,[A(t,!1,s)],s)}arc(t,e,s,i,h,n,a=!1,o){const r=this._options(o),l=[];if(a&amp;&amp;r.fill)if(&quot;solid&quot;===r.fillStyle){const a=C(t,e,s,i,h,n,!0,!1,r);a.type=&quot;fillPath&quot;,l.push(a)}else l.push(function(t,e,s,i,h,n,a){const o=P(a,v).fillArc(t,e,s,i,h,n,a);if(o)return o;const r=t,l=e;let c=Math.abs(s/2),p=Math.abs(i/2);c+=W(.01*c,a),p+=W(.01*p,a);let u=h,f=n;for(;u&lt;0;)u+=2*Math.PI,f+=2*Math.PI;f-u&gt;2*Math.PI&amp;&amp;(u=0,f=2*Math.PI);const d=(f-u)/a.curveStepCount,g=[];for(let t=u;t&lt;=f;t+=d)g.push([r+c*Math.cos(t),l+p*Math.sin(t)]);return g.push([r+c*Math.cos(f),l+p*Math.sin(f)]),g.push([r,l]),L(g,a)}(t,e,s,i,h,n,r));return l.push(C(t,e,s,i,h,n,a,!0,r)),this._drawable(&quot;arc&quot;,l,r)}curve(t,e){const s=this._options(e);return this._drawable(&quot;curve&quot;,[O(t,s)],s)}polygon(t,e){const s=this._options(e),i=[];if(s.fill)if(&quot;solid&quot;===s.fillStyle)i.push(z(t,s));else{const e=this.computePolygonSize(t),h=L([[0,0],[e[0],0],[e[0],e[1]],[0,e[1]]],s);h.type=&quot;path2Dpattern&quot;,h.size=e,h.path=this.polygonPath(t),i.push(h)}return i.push(A(t,!0,s)),this._drawable(&quot;polygon&quot;,i,s)}path(t,e){const s=this._options(e),i=[];if(!t)return this._drawable(&quot;path&quot;,i,s);if(s.fill)if(&quot;solid&quot;===s.fillStyle){const e={type:&quot;path2Dfill&quot;,path:t,ops:[]};i.push(e)}else{const e=this.computePathSize(t),h=L([[0,0],[e[0],0],[e[0],e[1]],[0,e[1]]],s);h.type=&quot;path2Dpattern&quot;,h.size=e,h.path=t,i.push(h)}return i.push(function(t,e){t=(t||&quot;&quot;).replace(/\n/g,&quot; &quot;).replace(/(-\s)/g,&quot;-&quot;).replace(&quot;/(ss)/g&quot;,&quot; &quot;);let s=new n(t);if(e.simplification){const t=new o(s.linearPoints,s.closed).fit(e.simplification);s=new n(t)}let i=[];const h=s.segments||[];for(let t=0;t&lt;h.length;t++){const n=X(s,h[t],t&gt;0?h[t-1]:null,e);n&amp;&amp;n.length&amp;&amp;(i=i.concat(n))}return{type:&quot;path&quot;,ops:i}}(t,s)),this._drawable(&quot;path&quot;,i,s)}}const V=&quot;undefined&quot;!=typeof document;class j{constructor(t){this.canvas=t,this.ctx=this.canvas.getContext(&quot;2d&quot;)}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),i=this.ctx;for(const t of e)switch(t.type){case&quot;path&quot;:i.save(),i.strokeStyle=s.stroke,i.lineWidth=s.strokeWidth,this._drawToContext(i,t),i.restore();break;case&quot;fillPath&quot;:i.save(),i.fillStyle=s.fill||&quot;&quot;,this._drawToContext(i,t),i.restore();break;case&quot;fillSketch&quot;:this.fillSketch(i,t,s);break;case&quot;path2Dfill&quot;:{this.ctx.save(),this.ctx.fillStyle=s.fill||&quot;&quot;;const e=new Path2D(t.path);this.ctx.fill(e),this.ctx.restore();break}case&quot;path2Dpattern&quot;:{const e=this.canvas.ownerDocument||V&amp;&amp;document;if(e){const i=t.size,h=e.createElement(&quot;canvas&quot;),n=h.getContext(&quot;2d&quot;),a=this.computeBBox(t.path);a&amp;&amp;(a.width||a.height)?(h.width=this.canvas.width,h.height=this.canvas.height,n.translate(a.x||0,a.y||0)):(h.width=i[0],h.height=i[1]),this.fillSketch(n,t,s),this.ctx.save(),this.ctx.fillStyle=this.ctx.createPattern(h,&quot;repeat&quot;);const o=new Path2D(t.path);this.ctx.fill(o),this.ctx.restore()}else console.error(&quot;Cannot render path2Dpattern. No defs/document defined.&quot;);break}}}computeBBox(t){if(V)try{const e=&quot;http://www.w3.org/2000/svg&quot;,s=document.createElementNS(e,&quot;svg&quot;);s.setAttribute(&quot;width&quot;,&quot;0&quot;),s.setAttribute(&quot;height&quot;,&quot;0&quot;);const i=self.document.createElementNS(e,&quot;path&quot;);i.setAttribute(&quot;d&quot;,t),s.appendChild(i),document.body.appendChild(s);const h=i.getBBox();return document.body.removeChild(s),h}catch(t){}return null}fillSketch(t,e,s){let i=s.fillWeight;i&lt;0&amp;&amp;(i=s.strokeWidth/2),t.save(),t.strokeStyle=s.fill||&quot;&quot;,t.lineWidth=i,this._drawToContext(t,e),t.restore()}_drawToContext(t,e){t.beginPath();for(const s of e.ops){const e=s.data;switch(s.op){case&quot;move&quot;:t.moveTo(e[0],e[1]);break;case&quot;bcurveTo&quot;:t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5]);break;case&quot;qcurveTo&quot;:t.quadraticCurveTo(e[0],e[1],e[2],e[3]);break;case&quot;lineTo&quot;:t.lineTo(e[0],e[1])}}&quot;fillPath&quot;===e.type?t.fill():t.stroke()}}class F extends j{constructor(t,e){super(t),this.gen=new U(e||null,this.canvas)}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,s,i,h){const n=this.gen.line(t,e,s,i,h);return this.draw(n),n}rectangle(t,e,s,i,h){const n=this.gen.rectangle(t,e,s,i,h);return this.draw(n),n}ellipse(t,e,s,i,h){const n=this.gen.ellipse(t,e,s,i,h);return this.draw(n),n}circle(t,e,s,i){const h=this.gen.circle(t,e,s,i);return this.draw(h),h}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s),s}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s),s}arc(t,e,s,i,h,n,a=!1,o){const r=this.gen.arc(t,e,s,i,h,n,a,o);return this.draw(r),r}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s),s}path(t,e){const s=this.gen.path(t,e);return this.draw(s),s}}const Q=&quot;undefined&quot;!=typeof document;class Z{constructor(t){this.svg=t}get defs(){const t=this.svg.ownerDocument||Q&amp;&amp;document;if(t&amp;&amp;!this._defs){const e=t.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;defs&quot;);this.svg.firstChild?this.svg.insertBefore(e,this.svg.firstChild):this.svg.appendChild(e),this._defs=e}return this._defs||null}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),i=this.svg.ownerDocument||window.document,h=i.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;g&quot;);for(const t of e){let e=null;switch(t.type){case&quot;path&quot;:(e=i.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;path&quot;)).setAttribute(&quot;d&quot;,this.opsToPath(t)),e.style.stroke=s.stroke,e.style.strokeWidth=s.strokeWidth+&quot;&quot;,e.style.fill=&quot;none&quot;;break;case&quot;fillPath&quot;:(e=i.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;path&quot;)).setAttribute(&quot;d&quot;,this.opsToPath(t)),e.style.stroke=&quot;none&quot;,e.style.strokeWidth=&quot;0&quot;,e.style.fill=s.fill||null;break;case&quot;fillSketch&quot;:e=this.fillSketch(i,t,s);break;case&quot;path2Dfill&quot;:(e=i.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;path&quot;)).setAttribute(&quot;d&quot;,t.path||&quot;&quot;),e.style.stroke=&quot;none&quot;,e.style.strokeWidth=&quot;0&quot;,e.style.fill=s.fill||null;break;case&quot;path2Dpattern&quot;:if(this.defs){const h=t.size,n=i.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;pattern&quot;),a=`rough-${Math.floor(Math.random()*(Number.MAX_SAFE_INTEGER||999999))}`;n.setAttribute(&quot;id&quot;,a),n.setAttribute(&quot;x&quot;,&quot;0&quot;),n.setAttribute(&quot;y&quot;,&quot;0&quot;),n.setAttribute(&quot;width&quot;,&quot;1&quot;),n.setAttribute(&quot;height&quot;,&quot;1&quot;),n.setAttribute(&quot;height&quot;,&quot;1&quot;),n.setAttribute(&quot;viewBox&quot;,`0 0 ${Math.round(h[0])} ${Math.round(h[1])}`),n.setAttribute(&quot;patternUnits&quot;,&quot;objectBoundingBox&quot;);const o=this.fillSketch(i,t,s);n.appendChild(o),this.defs.appendChild(n),(e=i.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;path&quot;)).setAttribute(&quot;d&quot;,t.path||&quot;&quot;),e.style.stroke=&quot;none&quot;,e.style.strokeWidth=&quot;0&quot;,e.style.fill=`url(#${a})`}else console.error(&quot;Cannot render path2Dpattern. No defs/document defined.&quot;)}e&amp;&amp;h.appendChild(e)}return h}fillSketch(t,e,s){let i=s.fillWeight;i&lt;0&amp;&amp;(i=s.strokeWidth/2);const h=t.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,&quot;path&quot;);return h.setAttribute(&quot;d&quot;,this.opsToPath(e)),h.style.stroke=s.fill||null,h.style.strokeWidth=i+&quot;&quot;,h.style.fill=&quot;none&quot;,h}}class H extends Z{constructor(t,e){super(t),this.gen=new U(e||null,this.svg)}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t){return this.gen.opsToPath(t)}line(t,e,s,i,h){const n=this.gen.line(t,e,s,i,h);return this.draw(n)}rectangle(t,e,s,i,h){const n=this.gen.rectangle(t,e,s,i,h);return this.draw(n)}ellipse(t,e,s,i,h){const n=this.gen.ellipse(t,e,s,i,h);return this.draw(n)}circle(t,e,s,i){const h=this.gen.circle(t,e,s,i);return this.draw(h)}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s)}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s)}arc(t,e,s,i,h,n,a=!1,o){const r=this.gen.arc(t,e,s,i,h,n,a,o);return this.draw(r)}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s)}path(t,e){const s=this.gen.path(t,e);return this.draw(s)}}return{canvas:(t,e)=&gt;new F(t,e),svg:(t,e)=&gt;new H(t,e),generator:(t,e)=&gt;new U(t,e)}}();</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/pshihn/rough/blame/3b212e9d681f3c42d1fbde6fdab4357a662471fe/dist/rough.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/pshihn/rough/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 <span title="0.34331s from unicorn-5cb4ccb587-wcvjd">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-IZCdsT3BCdoe3zLHNBvhGH1FjbGHtj+WInKlc6pqAwOglygvSKUfOPyxxtJco1AAVsVk1ldvDmCJyuIYNZhy7g==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-b805de66.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-ScnmScO/jzVnXySogyQfC0UfuKIFipm/GKpRDt4RKKbBxPR3jAkAULvg73h21bbY7MUZyhP5Ti6Amcbd9fH4Gw==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-0179ec3c.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

