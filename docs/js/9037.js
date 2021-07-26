<!DOCTYPE html>
<html class="avada-html-layout-wide avada-html-header-position-top avada-html-has-bg-image" lang="en-US" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"c5d39dde54",applicationID:"380065881"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(){}function i(t,e,n){return function(){return o(t,[u.now()].concat(f(arguments)),e?null:this,n),e?void 0:this}}var o=t("handle"),a=t(8),f=t(9),c=t("ee").get("tracer"),u=t("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){s[e]=i(p+e,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),e.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(l+"tracer",[u.now(),t,n],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(l+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),o("err",[t,u.now(),!1,e])}},{}],2:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],3:[function(t,e,n){function r(){return f.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,f=t(10);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],4:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],5:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?d("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&d("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||d("cls",[t])})}function a(t){if(t instanceof m&&!g){var e=Math.round(t.timeStamp),n={type:t.type};e<=p.now()?n.fid=p.now()-e:e>p.offset&&e<=Date.now()?(e-=p.offset,n.fid=p.now()-e):e=p.now(),g=!0,d("timing",["fi",e,n])}}function f(t){d("pageHide",[p.now(),t])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,u,s,d=t("handle"),p=t("loader"),l=t(7),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){c=new PerformanceObserver(r);try{c.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,h=["click","keydown","mousedown","pointerdown","touchstart"];h.forEach(function(t){document.addEventListener(t,a,!1)})}l(f)}},{}],6:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}e.exports={agent:i,version:o,match:r}},{}],7:[function(t,e,n){function r(t){function e(){t(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,e,!1)}e.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],8:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],9:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],10:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?u(t,c,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){t&&a&&t(n,r,i);for(var f=e(i),c=v(n),u=c.length,s=0;s<u;s++)c[s].apply(f,r);var p=d[w[n]];return p&&p.push([b,n,r,f]),f}}function o(t,e){y[t]=v(t).concat(e)}function m(t,e){var n=y[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function v(t){return y[t]||[]}function g(t){return p[t]=p[t]||i(n)}function h(t,e){l.aborted||s(t,function(t,n){e=e||"feature",w[n]=e,e in d||(d[e]=[])})}var y={},w={},b={on:o,addEventListener:o,removeEventListener:m,emit:n,get:g,listeners:v,context:e,buffer:h,abort:f,aborted:!1};return b}function o(t){return u(t,c,a)}function a(){return new r}function f(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",u=t("gos"),s=t(8),d={},p={},l=e.exports=i();e.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!R++){var t=M.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();c(E,function(e,n){t[e]||(t[e]=n)});var n=a();f("mark",["onload",n+M.offset],null,"api"),f("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===v.readyState&&o()}function o(){f("mark",["domContent",a()+M.offset],null,"api")}var a=t(3),f=t("handle"),c=t(8),u=t("ee"),s=t(6),d=t(4),p=t(2),l=p.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,g="addEventListener",h="attachEvent",y=m.XMLHttpRequest,w=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var x=""+location,E={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1209.min.js"},O=y&&w&&w[g]&&!/CriOS/.test(navigator.userAgent),M=e.exports={offset:a.getLastTimestamp(),now:a,origin:x,features:{},xhrWrappable:O,userAgent:s,disabled:b};if(!b){t(1),t(5),v[g]?(v[g]("DOMContentLoaded",o,!1),m[g]("load",r,!1)):(v[h]("onreadystatechange",i),m[h]("onload",r)),f("mark",["firstbyte",a.getLastTimestamp()],null,"api");var R=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,c],s],t)}f(n+"start",[o,a,c],s,u);try{return p=e.apply(a,o)}catch(m){throw f(n+"err",[o,a,m],s,u),m}finally{f(n+"end",[o,a,p],s,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var f,c,u,s="-"===r.charAt(0);for(u=0;u<e.length;u++)c=e[u],f=t[c],a(f)||(t[c]=n(f,s?c+r:r,i,c,o))}function f(n,r,o,a){if(!m||e){var f=m;m=!0;try{t.emit(n,r,o,e,a)}catch(c){i([c,n,r,o],t)}m=f}}return t||(t=s),n.inPlace=r,n.flag=p,n}function i(t,e){e||(e=s);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function f(t,e){var n=e(t);return n[p]=t,o(t,n,s),n}function c(t,e,n){var r=t[e];t[e]=f(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var s=t("ee"),d=t(9),p="nr@original",l=Object.prototype.hasOwnProperty,m=!1;e.exports=r,e.exports.wrapFunction=f,e.exports.wrapInPlace=c,e.exports.argsToArray=u},{}]},{},["loader"]);</script>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Computer Repair Chattanooga &#8211; iFixie &#8211; Closed after 12 years. </title>
<meta name='robots' content='max-image-preview:large' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Computer Repair Chattanooga - iFixie &raquo; Feed" href="https://ifixie.com/index.php/feed/" />
<link rel="alternate" type="application/rss+xml" title="Computer Repair Chattanooga - iFixie &raquo; Comments Feed" href="https://ifixie.com/index.php/comments/feed/" />
		
		
		
		
				
		<meta property="og:title" content="Thank You"/>
		<meta property="og:type" content="article"/>
		<meta property="og:url" content="https://ifixie.com/"/>
		<meta property="og:site_name" content="Computer Repair Chattanooga - iFixie"/>
		<meta property="og:description" content="Thank you for over 12 years of business in Chattanooga!I have decided to take a full time job, and I&#039;ll be closing my doors.I am so proud to have helped thousands of people in Chattanooga over the years. It wasn&#039;t an easy decision to make. If you"/>

									<meta property="og:image" content="https://ifixie.com/wp-content/uploads/2020/04/iFixie2x.png"/>
									<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/ifixie.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.7.2"}};
			!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='rs-plugin-settings-css'  href='https://ifixie.com/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.2.2' type='text/css' media='all' />
<style id='rs-plugin-settings-inline-css' type='text/css'>
#rs-demo-id {}
</style>
<link rel='stylesheet' id='avada-stylesheet-css'  href='https://ifixie.com/wp-content/themes/Avada/assets/css/style.min.css?ver=6.2.2' type='text/css' media='all' />
<!--[if IE]>
<link rel='stylesheet' id='avada-IE-css'  href='https://ifixie.com/wp-content/themes/Avada/assets/css/ie.min.css?ver=6.2.2' type='text/css' media='all' />
<style id='avada-IE-inline-css' type='text/css'>
.avada-select-parent .select-arrow{background-color:#f4f6f7}
.select-arrow{background-color:#f4f6f7}
</style>
<![endif]-->
<link rel='stylesheet' id='fusion-dynamic-css-css'  href='https://ifixie.com/wp-content/uploads/fusion-styles/41f956cb861eb0dca2d8a5f28f9b2841.min.css?ver=2.2.2' type='text/css' media='all' />
		<script>
			/* <![CDATA[ */
			var rcewpp = {
				"ajax_url":"https://ifixie.com/wp-admin/admin-ajax.php",
				"nonce": "318f811378",
				"home_url": "https://ifixie.com"
			};
			/* ]]\> */
		</script>
		<script type='text/javascript' src='https://ifixie.com/wp-includes/js/jquery/jquery.min.js?ver=3.5.1' id='jquery-core-js'></script>
<script type='text/javascript' src='https://ifixie.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script type='text/javascript' src='https://ifixie.com/wp-content/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.0' id='tp-tools-js'></script>
<script type='text/javascript' src='https://ifixie.com/wp-content/plugins/revslider/public/assets/js/rs6.min.js?ver=6.2.2' id='revmin-js'></script>
<link rel="https://api.w.org/" href="https://ifixie.com/index.php/wp-json/" /><link rel="alternate" type="application/json" href="https://ifixie.com/index.php/wp-json/wp/v2/pages/1126" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://ifixie.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://ifixie.com/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 5.7.2" />
<link rel="canonical" href="https://ifixie.com/" />
<link rel='shortlink' href='https://ifixie.com/' />
<link rel="alternate" type="application/json+oembed" href="https://ifixie.com/index.php/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fifixie.com%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://ifixie.com/index.php/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fifixie.com%2F&#038;format=xml" />
<style type="text/css" id="css-fb-visibility">@media screen and (max-width: 640px){body:not(.fusion-builder-ui-wireframe) .fusion-no-small-visibility{display:none !important;}}@media screen and (min-width: 641px) and (max-width: 1024px){body:not(.fusion-builder-ui-wireframe) .fusion-no-medium-visibility{display:none !important;}}@media screen and (min-width: 1025px){body:not(.fusion-builder-ui-wireframe) .fusion-no-large-visibility{display:none !important;}}</style><meta name="generator" content="Powered by Slider Revolution 6.2.2 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
<link rel="icon" href="https://ifixie.com/wp-content/uploads/2020/04/cropped-iFixie2x-32x32.png" sizes="32x32" />
<link rel="icon" href="https://ifixie.com/wp-content/uploads/2020/04/cropped-iFixie2x-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://ifixie.com/wp-content/uploads/2020/04/cropped-iFixie2x-180x180.png" />
<meta name="msapplication-TileImage" content="https://ifixie.com/wp-content/uploads/2020/04/cropped-iFixie2x-270x270.png" />
<script type="text/javascript">function setREVStartSize(e){			
			try {								
				var pw = document.getElementById(e.c).parentNode.offsetWidth,
					newh;
				pw = pw===0 || isNaN(pw) ? window.innerWidth : pw;
				e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
				e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
				e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
				e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
				e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
				e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
				e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);		
				if(e.layout==="fullscreen" || e.l==="fullscreen") 						
					newh = Math.max(e.mh,window.innerHeight);				
				else{					
					e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
					for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];					
					e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
					e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
					for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
										
					var nl = new Array(e.rl.length),
						ix = 0,						
						sl;					
					e.tabw = e.tabhide>=pw ? 0 : e.tabw;
					e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
					e.tabh = e.tabhide>=pw ? 0 : e.tabh;
					e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;					
					for (var i in e.rl) nl[i] = e.rl[i]<window.innerWidth ? 0 : e.rl[i];
					sl = nl[0];									
					for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}															
					var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);					

					newh =  (e.type==="carousel" && e.justify==="true" ? e.gh[ix] : (e.gh[ix] * m)) + (e.tabh + e.thumbh);
				}			
				
				if(window.rs_init_css===undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));					
				document.getElementById(e.c).height = newh;
				window.rs_init_css.innerHTML += "#"+e.c+"_wrapper { height: "+newh+"px }";				
			} catch(e){
				console.log("Failure at Presize of Slider:" + e)
			}					   
		  };</script>
		<script type="text/javascript">
			var doc = document.documentElement;
			doc.setAttribute( 'data-useragent', navigator.userAgent );
		</script>
		
	</head>

<body class="home page-template-default page page-id-1126 fusion-image-hovers fusion-pagination-sizing fusion-button_size-large fusion-button_type-flat fusion-button_span-no avada-image-rollover-circle-no avada-image-rollover-yes avada-image-rollover-direction-fade fusion-body ltr fusion-sticky-header no-tablet-sticky-header no-mobile-sticky-header no-mobile-totop avada-has-rev-slider-styles fusion-disable-outline fusion-sub-menu-fade mobile-logo-pos-left layout-wide-mode avada-has-boxed-modal-shadow-none layout-scroll-offset-full avada-has-zero-margin-offset-top fusion-top-header menu-text-align-center mobile-menu-design-modern fusion-show-pagination-text fusion-header-layout-v1 avada-responsive avada-footer-fx-none avada-menu-highlight-style-background fusion-search-form-classic fusion-main-menu-search-dropdown fusion-avatar-square avada-dropdown-styles avada-blog-layout-grid avada-blog-archive-layout-grid avada-header-shadow-no avada-menu-icon-position-left avada-has-megamenu-shadow avada-has-mainmenu-dropdown-divider avada-has-header-100-width avada-has-pagetitle-100-width avada-has-pagetitle-bg-full avada-has-breadcrumb-mobile-hidden avada-has-titlebar-hide avada-social-full-transparent avada-has-slidingbar-widgets avada-has-slidingbar-position-right avada-slidingbar-toggle-style-menu avada-has-bg-image-full avada-has-transparent-timeline_color avada-has-pagination-padding avada-flyout-menu-direction-fade avada-ec-views-v1" >
		<a class="skip-link screen-reader-text" href="#content">Skip to content</a>

	<div id="boxed-wrapper">
		<div class="fusion-sides-frame"></div>
		<div id="wrapper" class="fusion-wrapper">
			<div id="home" style="position:relative;top:-1px;"></div>
			
			<header class="fusion-header-wrapper">
				<div class="fusion-header-v1 fusion-logo-alignment fusion-logo-left fusion-sticky-menu- fusion-sticky-logo- fusion-mobile-logo-  fusion-mobile-menu-design-modern">
					<div class="fusion-header-sticky-height"></div>
<div class="fusion-header">
	<div class="fusion-row">
					<div class="fusion-logo" data-margin-top="20px" data-margin-bottom="10px" data-margin-left="0px" data-margin-right="0px">
			<a class="fusion-logo-link"  href="https://ifixie.com/" >

						<!-- standard logo -->
			<img src="https://ifixie.com/wp-content/uploads/2020/04/iFixie2x.png" srcset="https://ifixie.com/wp-content/uploads/2020/04/iFixie2x.png 1x, https://ifixie.com/wp-content/uploads/2020/04/iFixie2x.png 2x" width="290" height="76" style="max-height:76px;height:auto;" alt="Computer Repair Chattanooga &#8211; iFixie Logo" data-retina_logo_url="https://ifixie.com/wp-content/uploads/2020/04/iFixie2x.png" class="fusion-standard-logo" />

			
					</a>
		</div>		<nav class="fusion-main-menu" aria-label="Main Menu"></nav>
<nav class="fusion-mobile-nav-holder fusion-mobile-menu-text-align-left" aria-label="Main Menu Mobile"></nav>

					</div>
</div>
				</div>
				<div class="fusion-clearfix"></div>
			</header>
						
			
		<div id="sliders-container">
					</div>
				
			
			<div class="avada-page-titlebar-wrapper">
							</div>

						<main id="main" class="clearfix ">
				<div class="fusion-row" style="">
<section id="content" style="width: 100%;">
					<div id="post-1126" class="post-1126 page type-page status-publish hentry">
			<span class="entry-title rich-snippet-hidden">Thank You</span><span class="vcard rich-snippet-hidden"><span class="fn"><a href="https://ifixie.com/index.php/author/donald/" title="Posts by Donald" rel="author">Donald</a></span></span><span class="updated rich-snippet-hidden">2021-06-07T16:18:21+00:00</span>
			
			<div class="post-content">
				<div class="fusion-fullwidth fullwidth-box fusion-builder-row-1 nonhundred-percent-fullwidth non-hundred-percent-height-scrolling fusion-equal-height-columns"  style='background-color: #ffffff;background-position: center center;background-repeat: no-repeat;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;margin-bottom: 488px;margin-top: 0px;'><div class="fusion-builder-row fusion-row "><div  class="fusion-layout-column fusion_builder_column fusion_builder_column_1_3 fusion-builder-column-0 fusion-one-third fusion-column-first 1_3"  style='margin-top:0px;margin-bottom:0px;width:33.33%;width:calc(33.33% - ( ( 4% ) * 0.3333 ) );margin-right: 4%;'><div class="fusion-column-wrapper" style="padding: 0px 0px 0px 0px;background-position:left top;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;"   data-bg-url=""><div class="imageframe-align-center"><span style="border:20px solid #edeef2;" class="fusion-imageframe imageframe-none imageframe-1 hover-type-none fusion-no-small-visibility fusion-no-medium-visibility"><img loading="lazy" src="https://ifixie.com/wp-content/uploads/2021/05/20180308_120303-400x533.jpg" width="400" height="533" alt="" title="20180308_120303" class="img-responsive wp-image-1116" srcset="https://ifixie.com/wp-content/uploads/2021/05/20180308_120303-200x267.jpg 200w, https://ifixie.com/wp-content/uploads/2021/05/20180308_120303-400x533.jpg 400w, https://ifixie.com/wp-content/uploads/2021/05/20180308_120303-600x800.jpg 600w, https://ifixie.com/wp-content/uploads/2021/05/20180308_120303.jpg 733w" sizes="(max-width: 960px) 100vw, 400px" /></span></div><div class="fusion-clearfix"></div></div></div><div  class="fusion-layout-column fusion_builder_column fusion_builder_column_2_3 fusion-builder-column-1 fusion-two-third fusion-column-last 2_3"  style='margin-top:0px;margin-bottom:0px;width:66.66%;width:calc(66.66% - ( ( 4% ) * 0.6666 ) );'><div class="fusion-column-wrapper" style="padding: 0px 0px 0px 0px;background-position:left top;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;"   data-bg-url=""><div class="fusion-text"><h2 class="fusion-responsive-typography-calculated" style="--fontsize: 65; line-height: 1;" data-fontsize="65" data-lineheight="65px">Thank you for over 12 years of business in Chattanooga!</h2>
<p>I have decided to take a full time job, and I&#8217;ll be closing my doors.</p>
<p>I am so proud to have helped thousands of people in Chattanooga over the years. It wasn&#8217;t an easy decision to make. If you are a past customer and have my number and need anything feel free to text me. I’d be happy to point you in the right direction.</p>
<p>If you are interested in my other projects, check them out here.</p>
<div class="fusion-button-wrapper"><style type="text/css">.fusion-button.button-1 {border-radius:25px;}</style><a class="fusion-button button-flat fusion-button-default-size button-default button-1 fusion-button-default-span fusion-button-default-type" target="_self" href="http://donaldsayers.com"><span class="fusion-button-text">My Other Projects</span></a></div>
</div><div class="fusion-clearfix"></div></div></div></div></div><style type="text/css">.fusion-fullwidth.fusion-builder-row-1 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link) , .fusion-fullwidth.fusion-builder-row-1 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):before, .fusion-fullwidth.fusion-builder-row-1 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):after {color: #6239bd;}.fusion-fullwidth.fusion-builder-row-1 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):hover, .fusion-fullwidth.fusion-builder-row-1 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):hover:before, .fusion-fullwidth.fusion-builder-row-1 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):hover:after {color: #6239bd;}.fusion-fullwidth.fusion-builder-row-1 .pagination a.inactive:hover, .fusion-fullwidth.fusion-builder-row-1 .fusion-filters .fusion-filter.fusion-active a {border-color: #6239bd;}.fusion-fullwidth.fusion-builder-row-1 .pagination .current {border-color: #6239bd; background-color: #6239bd;}.fusion-fullwidth.fusion-builder-row-1 .fusion-filters .fusion-filter.fusion-active a, .fusion-fullwidth.fusion-builder-row-1 .fusion-date-and-formats .fusion-format-box, .fusion-fullwidth.fusion-builder-row-1 .fusion-popover, .fusion-fullwidth.fusion-builder-row-1 .tooltip-shortcode {color: #6239bd;}#main .fusion-fullwidth.fusion-builder-row-1 .post .blog-shortcode-post-title a:hover {color: #6239bd;}</style><div class="fusion-fullwidth fullwidth-box fusion-builder-row-2 nonhundred-percent-fullwidth non-hundred-percent-height-scrolling"  style='background-color: rgba(255,255,255,0);background-position: center center;background-repeat: no-repeat;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;'><div class="fusion-builder-row fusion-row "><div  class="fusion-layout-column fusion_builder_column fusion_builder_column_1_1 fusion-builder-column-2 fusion-one-full fusion-column-first fusion-column-last 1_1"  style='margin-top:0px;margin-bottom:0px;'><div class="fusion-column-wrapper" style="padding: 0px 0px 0px 0px;background-position:left top;background-repeat:no-repeat;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;"   data-bg-url=""><div class="fusion-clearfix"></div></div></div></div></div><style type="text/css">.fusion-fullwidth.fusion-builder-row-2 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link) , .fusion-fullwidth.fusion-builder-row-2 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):before, .fusion-fullwidth.fusion-builder-row-2 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):after {color: #6239bd;}.fusion-fullwidth.fusion-builder-row-2 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):hover, .fusion-fullwidth.fusion-builder-row-2 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):hover:before, .fusion-fullwidth.fusion-builder-row-2 a:not(.fusion-button):not(.fusion-builder-module-control):not(.fusion-social-network-icon):not(.fb-icon-element):not(.fusion-countdown-link):not(.fusion-rollover-link):not(.fusion-rollover-gallery):not(.fusion-button-bar):not(.add_to_cart_button):not(.show_details_button):not(.product_type_external):not(.fusion-quick-view):not(.fusion-rollover-title-link):not(.fusion-breadcrumb-link):hover:after {color: #6239bd;}.fusion-fullwidth.fusion-builder-row-2 .pagination a.inactive:hover, .fusion-fullwidth.fusion-builder-row-2 .fusion-filters .fusion-filter.fusion-active a {border-color: #6239bd;}.fusion-fullwidth.fusion-builder-row-2 .pagination .current {border-color: #6239bd; background-color: #6239bd;}.fusion-fullwidth.fusion-builder-row-2 .fusion-filters .fusion-filter.fusion-active a, .fusion-fullwidth.fusion-builder-row-2 .fusion-date-and-formats .fusion-format-box, .fusion-fullwidth.fusion-builder-row-2 .fusion-popover, .fusion-fullwidth.fusion-builder-row-2 .tooltip-shortcode {color: #6239bd;}#main .fusion-fullwidth.fusion-builder-row-2 .post .blog-shortcode-post-title a:hover {color: #6239bd;}</style>
							</div>
																													</div>
	</section>
						
					</div>  <!-- fusion-row -->
				</main>  <!-- #main -->
				
				
								
					
		<div class="fusion-footer">
				
		</div> <!-- fusion-footer -->

		
					<div class="fusion-sliding-bar-wrapper">
								<div id="slidingbar-area" class="slidingbar-area fusion-sliding-bar-area fusion-widget-area fusion-sliding-bar-position-right fusion-sliding-bar-text-align-left fusion-sliding-bar-toggle-menu fusion-sliding-bar-columns-stacked" data-breakpoint="960" data-toggle="menu">
		
		<div id="slidingbar" class="fusion-sliding-bar">
						<div class="fusion-sliding-bar-content-wrapper">
									<div class="fusion-sb-toggle-wrapper">
						<a class="fusion-sb-close" href="#"><span class="screen-reader-text">Close Sliding Bar Area</span></a>
					</div>
								<div class="fusion-sliding-bar-content">

																														<div class="fusion-column">
														</div>
																																																																							<div class="fusion-clearfix"></div>
				</div>
			</div>
		</div>
	</div>
						</div>

												</div> <!-- wrapper -->
		</div> <!-- #boxed-wrapper -->
		<div class="fusion-top-frame"></div>
		<div class="fusion-bottom-frame"></div>
		<div class="fusion-boxed-shadow"></div>
		<a class="fusion-one-page-text-link fusion-page-load-link"></a>

		<div class="avada-footer-scripts">
			<link rel='stylesheet' id='wp-block-library-css'  href='https://ifixie.com/wp-includes/css/dist/block-library/style.min.css?ver=5.7.2' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-theme-css'  href='https://ifixie.com/wp-includes/css/dist/block-library/theme.min.css?ver=5.7.2' type='text/css' media='all' />
<script type='text/javascript' src='https://ifixie.com/wp-content/uploads/fusion-scripts/a530bba1bc2d6df52dafe719b412b89f.min.js?ver=2.2.2' id='fusion-scripts-js'></script>
<script type='text/javascript' src='https://ifixie.com/wp-includes/js/wp-embed.min.js?ver=5.7.2' id='wp-embed-js'></script>
				<script type="text/javascript">
				jQuery( document ).ready( function() {
					var ajaxurl = 'https://ifixie.com/wp-admin/admin-ajax.php';
					if ( 0 < jQuery( '.fusion-login-nonce' ).length ) {
						jQuery.get( ajaxurl, { 'action': 'fusion_login_nonce' }, function( response ) {
							jQuery( '.fusion-login-nonce' ).html( response );
						});
					}
				});
				</script>
						</div>
	<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"c5d39dde54","applicationID":"380065881","transactionName":"bgQBYktRC0VWUBcKXFdOIlVNWQpYGEMCBFY=","queueTime":0,"applicationTime":3324,"atts":"QkMCFANLGEs=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */