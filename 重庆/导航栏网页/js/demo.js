/*
 * blueimp Gallery Demo JS 2.11.1
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict';

    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
        {
            title: 'chaotiangme',
            href: 'images/77.mp4',
            type: 'video/mp4',
            poster: 'images/78.jpg'
        },
        {
            title: 'f规范化发过',
            href: 'images/222.mp4',
            type: 'video/mp4',
			poster: 'images/3.jpg'
        },
        {
            title: 'Elephants Dream',
            href: 'images/ZXC.mp4',
            type: 'video/mp4',
            poster: 'images/FF.jpg'
        }
     
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});
