GPSDetector-Plugin
==================

GPSDetector-Plugin for android.


Installation Automatically (CLI )
-----------------------------------

    $ cordova plugin add https://github.com/keshav-iitr/GPSDetector-Plugin.git

    $ cordova prepare
    
How to use
---------------

     document.addEventListener('deviceready', function() {
            if (!window.GPSDetector) return;
            window.GPSDetector(onGPSSuccess, onGPSError);
            function onGPSSuccess(enabled) {
                alert(enabled ? 'GPS is ON' : 'GPS is OFF');
                console.log(enabled ? 'GPS is ON' : 'GPS is OFF');
            }
            function onGPSError(e) {
                alert('GPSDetector is busted: ' + e);
                console.log('GPSDetector is busted: ' + e);
            }
        }, false);

