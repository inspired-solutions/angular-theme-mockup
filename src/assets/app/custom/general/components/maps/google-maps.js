'use strict';
var KTGoogleMapsDemo = {
	init: function() {
		var t;
		new GMaps({ div: '#kt_gmap_1', lat: -12.043333, lng: -77.028333 }),
			new GMaps({
				div: '#kt_gmap_2',
				zoom: 16,
				lat: -12.043333,
				lng: -77.028333,
				click: function(t) {
					alert('click');
				},
				dragend: function(t) {
					alert('dragend');
				},
			}),
			(t = new GMaps({ div: '#kt_gmap_3', lat: -51.38739, lng: -6.187181 })).addMarker({
				lat: -51.38739,
				lng: -6.187181,
				title: 'Lima',
				details: { database_id: 42, author: 'HPNeo' },
				click: function(t) {
					console.log && console.log(t), alert('You clicked in this marker');
				},
			}),
			t.addMarker({
				lat: -12.042,
				lng: -77.028333,
				title: 'Marker with InfoWindow',
				infoWindow: { content: '<span style="color:#000">HTML Content!</span>' },
			}),
			t.setZoom(5),
			(function() {
				var t = new GMaps({ div: '#kt_gmap_4', lat: -12.043333, lng: -77.028333 });
				GMaps.geolocate({
					success: function(e) {
						t.setCenter(e.coords.latitude, e.coords.longitude);
					},
					error: function(t) {
						alert('Geolocation failed: ' + t.message);
					},
					not_supported: function() {
						alert('Your browser does not support geolocation');
					},
					always: function() {},
				});
			})(),
			new GMaps({
				div: '#kt_gmap_5',
				lat: -12.043333,
				lng: -77.028333,
				click: function(t) {
					console.log(t);
				},
			}).drawPolyline({
				path: [
					[-12.044012922866312, -77.02470665341184],
					[-12.05449279282314, -77.03024273281858],
					[-12.055122327623378, -77.03039293652341],
					[-12.075917129727586, -77.02764635449216],
					[-12.07635776902266, -77.02792530422971],
					[-12.076819390363665, -77.02893381481931],
					[-12.088527520066453, -77.0241058385925],
					[-12.090814532191756, -77.02271108990476],
				],
				strokeColor: '#131540',
				strokeOpacity: 0.6,
				strokeWeight: 6,
			}),
			new GMaps({ div: '#kt_gmap_6', lat: -12.043333, lng: -77.028333 }).drawPolygon({
				paths: [
					[-12.040397656836609, -77.03373871559225],
					[-12.040248585302038, -77.03993927003302],
					[-12.050047116528843, -77.02448169303511],
					[-12.044804866577001, -77.02154422636042],
				],
				strokeColor: '#BBD8E9',
				strokeOpacity: 1,
				strokeWeight: 3,
				fillColor: '#BBD8E9',
				fillOpacity: 0.6,
			}),
			(function() {
				var t = new GMaps({ div: '#kt_gmap_7', lat: -12.043333, lng: -77.028333 });
				$('#kt_gmap_7_btn').click(function(e) {
					e.preventDefault(),
						KTUtil.scrollTo('kt_gmap_7_btn', 400),
						t.travelRoute({
							origin: [-12.044012922866312, -77.02470665341184],
							destination: [-12.090814532191756, -77.02271108990476],
							travelMode: 'driving',
							step: function(e) {
								$('#kt_gmap_7_routes').append('<li>' + e.instructions + '</li>'),
									$('#kt_gmap_7_routes li:eq(' + e.step_number + ')')
										.delay(800 * e.step_number)
										.fadeIn(500, function() {
											t.setCenter(e.end_location.lat(), e.end_location.lng()),
												t.drawPolyline({ path: e.path, strokeColor: '#131540', strokeOpacity: 0.6, strokeWeight: 6 });
										});
							},
						});
				});
			})(),
			(function() {
				var t = new GMaps({ div: '#kt_gmap_8', lat: -12.043333, lng: -77.028333 }),
					e = function() {
						var e = $.trim($('#kt_gmap_8_address').val());
						GMaps.geocode({
							address: e,
							callback: function(e, o) {
								if ('OK' == o) {
									var n = e[0].geometry.location;
									t.setCenter(n.lat(), n.lng()),
										t.addMarker({ lat: n.lat(), lng: n.lng() }),
										KTUtil.scrollTo('kt_gmap_8');
								}
							},
						});
					};
				$('#kt_gmap_8_btn').click(function(t) {
					t.preventDefault(), e();
				}),
					$('#kt_gmap_8_address').keypress(function(t) {
						'13' == (t.keyCode ? t.keyCode : t.which) && (t.preventDefault(), e());
					});
			})();
	},
};
jQuery(document).ready(function() {
	KTGoogleMapsDemo.init();
});
