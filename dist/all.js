/*!
 * Text Animation v1.2.0
 * http://sideroad.secret.jp/
 *
 * Copyright (c) 2009 sideroad
 *
 * licensed under the MIT licenses.
 * Date: 2009-03-01
 */
//TextAnimation Plugin
(function($) {  
      
    $.fn.textAnimation = function(settings) {  
      
        var container = this;
        settings = $.extend({  
            mode : "roll"
        }, settings);
            
        function parse(e){
            if(e.hasClass("isTextAnimated")) return;
            var text = e.text();
            e.html("");
            for(var i=0;i< text.length;i++) {
                var span = $("<span></span>").text(text.charAt(i));
                e.append(span);
            }
            e.addClass("isTextAnimated");
        }
            
        function parseDiv(e,width,verticalAlign){
            if(e.hasClass("isTextAnimated")) return;
            var text = e.text();
            e.html("");
			
			//css setting
			var css = {position:"absolute"};
			verticalAlign = verticalAlign || "bottom";
			css[verticalAlign] = "0px";
            
			//width setting
			if(width === false) width = e.css("fontSize").replace(/px/,"")/1.25;
			
			for(var i=0;i< text.length;i++) {
				css.left = width*i;
                var div = $("<div></div>").text(text.charAt(i)).css(css);
				e.append(div);
            }
            e.addClass("isTextAnimated").css({position:"relative"});
        }
		
		function execute(options,start,finish){
			var time  = options.time;
			var interval = options.interval;
            var repeat = options.repeat;
            var startId;
			var amountInterval = interval + time;
			if(finish) amountInterval*=2;
			var e = options.e;
			
			if (options.onStart) {
				e.bind(options.onStart, function(){
					if (startId) return;
					start();
					if (repeat) {
						startId = setInterval(start, amountInterval);
						if (finish) {
							setTimeout(function(){
								finish();
								if (repeat) 
									setInterval(finish, amountInterval);
							}, amountInterval / 2);
						}
					}
				});
			} else {
                start();
                if(repeat) setInterval(start, amountInterval);
				if(finish) {
					setTimeout(function(){
                        finish();
                        if(repeat) setInterval(finish, amountInterval);
					},amountInterval/2);
				}
			}
			if (options.onFinish) {
                e.bind(options.onFinish, function(){
                    if (startId && repeat) {
						clearInterval(startId);
						startId = false;
					}
					if(finish) finish();
					
                });
			}
		}
			
        
		var f = {
			roll: function(e){
                var options = $.extend({
                    e : e,
					minsize : 15,
					magnification:15,
					delay : 30,
					interval : 0,
					repeat : true,
                    onStart : false,
					onFinish : false,
					onToggle : false,
					stuff : 1,
					fixed : "bottom",
					top : 1
                },settings);
                
                parseDiv(e,options.minsize/options.stuff,options.fixed);
				var i = 0;
                var minsize = options.minsize;
                var magnification = options.magnification;
                e.css({height:minsize+magnification+"px",textAlign:"center"});
				var elements = e.children();
				var de = options.delay;
                var duration = de * elements.length;
                var keepExec = false;
                var start = function(){
                    elements.each(function( i, elem ){
                        elem.style.width=minsize+"px";
                        $(elem).transition({ 
                                fontSize: minsize + magnification,
                                duration : duration,
                                easing : "in-out",
                                delay : de*i
                            })
                            .transition({ 
                                fontSize : minsize,
                                duration : duration,
                                easing : "in-out"
                            });
                    });
                }
				
                options.time = (duration*3);
                execute( options, start );
				
			},
			
			step : function(e) {
                var options = $.extend({
                    e : e,
                    minsize : 12,
                    maxsize :35,
					fixed : "bottom",
					upper : true,
					stuff: 2.0,
                    delay : 50,
                    interval : 3000,
                    duration : 300,
					repeat: true,
                    onStart : false,
                    onFinish : false
                },settings);
                
                parseDiv(e,options.minsize,options.fixed);
                e.css({height:options.maxsize+"px",textAlign:"center"});
				var elements = e.children().css({
					fontSize: "0px",
					width: "0px",
					left: "0px",
					opacity: 0
				});
				var length = elements.length;
				var m = (options.maxsize-options.minsize) / (length-1);
			    var ba = options.minsize;
				var upper = options.upper;
				if (!upper) {
					m *= -1;
					ba = options.maxsize;
				}
                var du = options.duration;
                var de = options.delay;
				var st = options.stuff;
				var interval = options.interval;
				
                var start = function(){
                    var left = 0;
                    elements.each(function( i, elem ){
                        
                        var fs = ba + (m * i);
                        $(elem).transition({
                            fontSize: fs+"px",
                            width : fs,
                            left: left,
                            opacity:1.0,
                            duration : du,
                            delay : de * i
                        });
                        left += (fs / st);
                    });
                };
                var finish = function(){
                    elements.each(function( i, elem ){
                        $(elem).transition({
                            fontSize: "0px",
                            width: 0,
                            left: 0,
                            opacity:0,
                            delay : de*i,
                            duration: du
                        });
                    });
                };
				
				options.time = (options.delay * length)+du;
				execute(options,start, finish);
			},
            
            highlight:function(e){
                var options = $.extend({
                    e : e,
                    baseColor : "#AAAAAA",
                    highlightColor : "#FDFF00",
                    delay : 50,
                    interval : 100,
                    duration : 300,
                    repeat: true,
                    onStart : false,
                    onFinish : false
                },settings);
                
                parse(e);
                var i = 0;
                var elements = e.children().css({color:options.baseColor});
                var length = elements.length;
                if(!options.interval && !options.delay) options.interval = 100;
                var hc = options.highlightColor;
                var bc = options.baseColor;
                var du = options.duration;
                var de = options.delay;
                
                var start = function(){
                    elements.each(function( i, elem ){
                        $(elem).transition({
                            color : hc,
                            delay : de*i,
                            duration : du
                        }).transition({
                            color : bc,
                            duration : du
                        });
                    });
                };
                
                options.time = (options.delay * length)+(du*3);
                execute(options,start);
            },
            
            jump:function(e){
                var options = $.extend({
                    e : e,
                    altitude : 30,
					bound : true,
                    delay : 400,
                    interval : 300,
                    duration : 600,
                    fixed : "bottom",
                    repeat: true,
                    onStart : false,
                    onFinish : false
                },settings);
                
                parseDiv(e,false,options.fixed);
                e.css({height:e.css("fontSize")});
                var i = 0;
                var elements = e.children();
                var length = elements.length;
                if(!options.interval && !options.delay) options.interval = 100;
                var al = options.altitude;
                var bo = options.bound;
                var du = options.duration;
                var de = options.delay;
				var ea = options.bound ? "in" : "in-out";
				var fi = options.fixed;
                
                var start = function(){
                    elements.each(function( i, elem ){
                        var cssleave = {
                            duration: du,
                            delay : de*i,
                            easing : "out"
                        };
                        cssleave[fi] = al;
                        var cssarrive = {
                            duration: du,
                            easing : ea
                        };
                        cssarrive[fi] = 0;
                        $(elem).transition(cssleave)
                               .transition(cssarrive);
                        
                    });
                };
                
                options.time = (options.delay * length)+(du*2);
                execute(options,start);
            } ,
            
            puff : function( e ) {
                var options = $.extend({
                    e : e,
                    duration : 600,
                    interval : 600,
                    onStart : false,
                    onFinish : false,
                    repeat : true,
                    percent : 300,
                    color : false,
					times : 1
                },settings);
                
                var start = function(){
					var position = e.position();
                    var css = {
                        "position": "absolute",
                        "left": position.left + "px",
                        "top": position.top + "px",
                        "z-index": -1000
                    };
                    
                    if (options.color) 
                        css.color = options.color;
                    if (options.backgroundColor) 
                        css.backgroundColor = options.backgroundColor;
					e.clone().attr("id", "").insertBefore(e).css(css).transition({
                        opacity: 0,
                        scale: 1.6,
                        duration : options.duration
                    }, function(){
                        $(this).remove();
                    });
					
                };
                options.time = options.duration;
                execute(options,start);
            }
		};
		
        return container.each(function(){  
            f[settings.mode]($(this));
        });
    };
  
})(jQuery);
(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});
//functions
function moveBackground(e, halfWidth, halfHeight, maxRotationX, maxRotationY) {
  var rotateY = ((-e.pageX+halfWidth)/halfWidth) * maxRotationY;
  var rotateX = ((e.pageY-halfHeight)/halfHeight) * maxRotationX;

  if(rotateY > maxRotationY)
    rotateY = maxRotationY;
  if(rotateY < -maxRotationY)
    rotateY = -maxRotationY;
  if(rotateX > maxRotationX)
    rotateX = maxRotationX;
  if(rotateX < -maxRotationX)
    rotateX = -maxRotationX;

  $('.parallaxBG').css({
    '-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    '-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
    'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
  });
}

function initBackground(halfWidth, halfHeight, maxRotationX, maxRotationY, aspectRatio) {
  var wrapperHeight = Math.ceil(halfWidth * 2 / aspectRatio);
  var proportions = ( maxRotationY > maxRotationX ) ? 
  	1.1 / (Math.sin(Math.PI / 2 - maxRotationY * Math.PI / 180)) :
  	1.1 / (Math.sin(Math.PI / 2 - maxRotationX * Math.PI / 180));
  var newImageWidth = Math.ceil(halfWidth * 1.75 * proportions); // originally halfWidth * 2
  var newImageHeight = Math.ceil(newImageWidth / aspectRatio);
  var newLeft = halfWidth - newImageWidth / 2;
  var newTop = (wrapperHeight - newImageHeight) / -2;

  //set an height for the .cd-background-wrapper
  $('.parallaxWrapper').css({
    'height' : $(window).height()
  });
  
  //set dimensions and position of the .cd-background-wrapper
  $('.parallaxBG').css({
    'left' : newLeft,
    'top' : newTop,
    'width' : newImageWidth,
    'max-width' : '100%'
  });

  // set dimensions for hover-effects div
  $('.hover-effects').css({
    'height' : $('.parallaxBG').height(),
    'left' : newLeft,
    'top' : newTop,
    'width' : newImageWidth,
    'max-width' : '100%'
  });
}

// js goes here
$(function() {
	// get css 'content' value + remove extra quotes
  var mediaQuery = window.getComputedStyle(document.querySelector('.parallaxWrapper'), ':before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
  
  // define initial variables
  var halfHeight = $(window).height() / 2,
      halfWidth = $(window).width() / 2;

  // define X-Y-axes max rotation
  var maxRotationX = 3,
      maxRotationY = 5,
      aspectRatio;

  var interval = 7000;
  var fadeSpeed = 500;
  var textIndex = 1;
  var textArray = $('.text');

  // set aspect ratio & first load background
  $('.parallaxBG').find('img').eq(0).load(function() {
  	aspectRatio = $(this).width() / $(this).height();

  	if (mediaQuery == 'web') {
  		initBackground(halfWidth, halfHeight, maxRotationX, maxRotationY, aspectRatio);
  	}
  });

  // animate text
  $('.text').not(':first').hide();
  setInterval(function() {
    $('#text' + textIndex).fadeOut(fadeSpeed);
    if (textIndex == $('.text').length) {
      textIndex = 1;
    } else {
      ++textIndex;
    }
    $('#text' + textIndex).delay(fadeSpeed).fadeIn(fadeSpeed);
  }, interval);

  // detect mouse movement
  $(window).on('mousemove', function(e) {
  	if (mediaQuery == 'web') {
  		window.requestAnimationFrame(function() {
  			moveBackground(e, halfWidth, halfHeight, maxRotationX, maxRotationY);
  		});
  	}
  });

  // on resize
  $(window).on('resize', function() {
  	// adjust image sizes
  	mediaQuery = window.getComputedStyle(document.querySelector('.parallaxWrapper'), ':before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
  	if (mediaQuery == 'web') {
  		window.requestAnimationFrame(function() {
  			halfWidth = $(window).width() * 0.5;
  			halfHeight = $(window).height() * 0.5;
  			aspectRatio = halfWidth*2 / halfHeight*2;
	  		initBackground(halfWidth, halfHeight, maxRotationX, maxRotationY, aspectRatio);
  		});
  	} else {
  		$('.parallaxWrapper').attr('style', '');
  	}
  });

  // original on hover
  $('#leftHover').mouseenter(function() {
    $(this).addClass('showing');
    $('#leftHover img').addClass('showing');
    $('#rightHover').addClass('step-out');
  }).mouseleave(function() {
    $(this).removeClass('showing');
    $('#leftHover img').removeClass('showing');
    setTimeout(function() {
      $('#rightHover').removeClass('step-out');
    }, 2000);
  });

  $('#topHover').mouseenter(function() {
    $(this).addClass('showing');
    $('#topHover img').addClass('showing');
    $('#contactHover').addClass('step-out');
  }).mouseleave(function() {
    $(this).removeClass('showing');
    $('#topHover img').removeClass('showing');
    setTimeout(function() {
      $('#contactHover').removeClass('step-out');
    }, 2000);
  });

  $('#rightHover').mouseenter(function() {
    $(this).addClass('showing');
    $('#rightHover img').addClass('showing');
    $('#leftHover').addClass('step-out');
  }).mouseleave(function() {
    $(this).removeClass('showing');
    $('#rightHover img').removeClass('showing');
    setTimeout(function() {
      $('#leftHover').removeClass('step-out');
    }, 2000);
  });

  $('#contactHover').mouseenter(function() {
    $(this).addClass('showing');
    $('#contactInfo').addClass('showing');
    $('#topHover').addClass('step-out');
  }).mouseleave(function() {
    $(this).removeClass('showing');
    $('#contactInfo').removeClass('showing');
    setTimeout(function() {
      $('#topHover').removeClass('step-out');
    }, 2000);
  });

});


