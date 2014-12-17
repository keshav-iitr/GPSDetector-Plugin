module.exports = function(successCallback, failureCallback) {
	cordova.exec(successCallback, failureCallback, 'GPSDetector', 'gpsDetection', []);
};

