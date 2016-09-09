/*!
 * 回到顶部 - v1.0.x (2016-09-09)
 * Author leo
 * Copyright 2016 qf.com.cn
 */
define(function(require, exports) {
	'use strict';

    var $ = require('dom/1.0.x/');

    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;
    var $toTopBtn;

    var toTop = {
        init: function() {
            $('body').append('<a href="javascript:;" id="toTopBtn" title="回到顶部"></a>');
            this.getTags();
            this.registerEvents();
        },
        getTags: function() {
            $toTopBtn = $('#toTopBtn');
        },
        registerEvents: function() {
            window.onscroll = function() {
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (osTop >= clientHeight) {
                    $toTopBtn.css('display', 'block');
                } else {
                    $toTopBtn.css('display', 'none');
                }
                if (!isTop) {
                    clearInterval(timer);
                }
                isTop = false;
            }

            $toTopBtn.on('click', function() {
                timer = setInterval(function() {
                    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                    var isPeed = Math.floor(-osTop / 6);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + isPeed;
                    isTop = true;
                    if (osTop == 0) {
                        clearInterval(timer);
                    }

                },30);
            });
        }
    };

    return toTop;
});
