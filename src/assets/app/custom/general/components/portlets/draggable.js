'use strict';
var KTPortletDraggable = {
	init: function() {
		$('#kt_sortable_portlets').sortable({
			connectWith: '.kt-portlet__head',
			items: '.kt-portlet',
			opacity: 0.8,
			handle: '.kt-portlet__head',
			coneHelperSize: !0,
			placeholder: 'kt-portlet--sortable-placeholder',
			forcePlaceholderSize: !0,
			tolerance: 'pointer',
			helper: 'clone',
			tolerance: 'pointer',
			forcePlaceholderSize: !0,
			helper: 'clone',
			cancel: '.kt-portlet--sortable-empty',
			revert: 250,
			update: function(e, t) {
				t.item.prev().hasClass('kt-portlet--sortable-empty') && t.item.prev().before(t.item);
			},
		});
	},
};
jQuery(document).ready(function() {
	KTPortletDraggable.init();
});
