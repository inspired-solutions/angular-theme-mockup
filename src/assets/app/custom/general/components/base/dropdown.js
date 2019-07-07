'use strict';
var KTDropdownDemo = {
	init: function() {
		var e, o, n;
		(e = $('#kt_dropdown_api_output')),
			(o = new KTDropdown('kt_dropdown_api_1')),
			(n = new KTDropdown('kt_dropdown_api_2')),
			o.on('afterShow', function(o) {
				e.append('<p>Dropdown 1: afterShow event fired</p>');
			}),
			o.on('beforeShow', function(o) {
				e.append('<p>Dropdown 1: beforeShow event fired</p>');
			}),
			o.on('afterHide', function(o) {
				e.append('<p>Dropdown 1: afterHide event fired</p>');
			}),
			o.on('beforeHide', function(o) {
				e.append('<p>Dropdown 1: beforeHide event fired</p>');
			}),
			n.on('afterShow', function(o) {
				e.append('<p>Dropdown 2: afterShow event fired</p>');
			}),
			n.on('beforeShow', function(o) {
				e.append('<p>Dropdown 2: beforeShow event fired</p>');
			}),
			n.on('afterHide', function(o) {
				e.append('<p>Dropdown 2: afterHide event fired</p>');
			}),
			n.on('beforeHide', function(o) {
				e.append('<p>Dropdown 2: beforeHide event fired</p>');
			});
	},
};
jQuery(document).ready(function() {
	KTDropdownDemo.init();
});
