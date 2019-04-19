'use strict';
var KTDatatableColumnRenderingDemo = {
	init: function() {
		var t;
		(t = $('.kt-datatable').KTDatatable({
			data: {
				type: 'remote',
				source: {
					read: {
						url:
							'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/datatables/demos/default.php',
					},
				},
				pageSize: 10,
				serverPaging: !0,
				serverFiltering: !0,
				serverSorting: !0,
			},
			layout: { scroll: !1, footer: !1 },
			sortable: !0,
			pagination: !0,
			search: { input: $('#generalSearch'), delay: 400 },
			columns: [
				{
					field: 'RecordID',
					title: '#',
					sortable: 'asc',
					width: 30,
					type: 'number',
					selector: !1,
					textAlign: 'center',
				},
				{
					field: 'OrderID',
					title: 'Order ID',
					template: function(t) {
						var a = KTUtil.getRandomInt(1, 14);
						return a > 8
							? '<div class="kt-user-card-v2">\t\t\t\t\t\t\t\t<div class="kt-user-card-v2__pic">\t\t\t\t\t\t\t\t\t<img src="assets/media/users/100_' +
									a +
									'.jpg" alt="photo">\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="kt-user-card-v2__details">\t\t\t\t\t\t\t\t\t<span class="kt-user-card-v2__name">' +
									t.CompanyAgent +
									'</span>\t\t\t\t\t\t\t\t\t<a href="#" class="kt-user-card-v2__email kt-link">' +
									t.CompanyEmail +
									'</a>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>'
							: '<div class="kt-user-card-v2">\t\t\t\t\t\t\t\t<div class="kt-user-card-v2__pic">\t\t\t\t\t\t\t\t\t<div class="kt-badge kt-badge--xl kt-badge--' +
									['success', 'brand', 'danger', 'success', 'warning', 'dark', 'primary', 'info'][
										KTUtil.getRandomInt(0, 7)
									] +
									'">' +
									t.CompanyAgent.substring(0, 1) +
									'</div>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<div class="kt-user-card-v2__details">\t\t\t\t\t\t\t\t\t<span class="kt-user-card-v2__name">' +
									t.CompanyAgent +
									'</span>\t\t\t\t\t\t\t\t\t<a href="#" class="kt-user-card-v2__email kt-link">' +
									t.CompanyEmail +
									'</a>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>';
					},
				},
				{
					field: 'Country',
					title: 'Country',
					template: function(t) {
						return t.Country + ' ' + t.ShipCountry;
					},
				},
				{ field: 'ShipDate', title: 'Ship Date', type: 'date', format: 'MM/DD/YYYY' },
				{ field: 'CompanyName', title: 'Company Name' },
				{
					field: 'Status',
					title: 'Status',
					template: function(t) {
						var a = {
							1: { title: 'Pending', class: 'kt-badge--brand' },
							2: { title: 'Delivered', class: ' kt-badge--danger' },
							3: { title: 'Canceled', class: ' kt-badge--primary' },
							4: { title: 'Success', class: ' kt-badge--success' },
							5: { title: 'Info', class: ' kt-badge--info' },
							6: { title: 'Danger', class: ' kt-badge--danger' },
							7: { title: 'Warning', class: ' kt-badge--warning' },
						};
						return (
							'<span class="kt-badge ' +
							a[t.Status].class +
							' kt-badge--inline kt-badge--pill">' +
							a[t.Status].title +
							'</span>'
						);
					},
				},
				{
					field: 'Type',
					title: 'Type',
					autoHide: !1,
					template: function(t) {
						var a = {
							1: { title: 'Online', state: 'danger' },
							2: { title: 'Retail', state: 'primary' },
							3: { title: 'Direct', state: 'success' },
						};
						return (
							'<span class="kt-badge kt-badge--' +
							a[t.Type].state +
							' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +
							a[t.Type].state +
							'">' +
							a[t.Type].title +
							'</span>'
						);
					},
				},
				{
					field: 'Actions',
					title: 'Actions',
					sortable: !1,
					width: 110,
					overflow: 'visible',
					autoHide: !1,
					template: function() {
						return '\t\t\t\t\t\t\t<div class="dropdown">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\t                                <i class="la la-ellipsis-h"></i>\t                            </a>\t\t\t\t\t\t\t    <div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t\t        <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t\t        <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\t\t\t\t\t\t\t        <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\t\t\t\t\t\t\t    </div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">\t\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">\t\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t';
					},
				},
			],
		})),
			$('#kt_form_status').on('change', function() {
				t.search(
					$(this)
						.val()
						.toLowerCase(),
					'Status',
				);
			}),
			$('#kt_form_type').on('change', function() {
				t.search(
					$(this)
						.val()
						.toLowerCase(),
					'Type',
				);
			}),
			$('#kt_form_status,#kt_form_type').selectpicker();
	},
};
jQuery(document).ready(function() {
	KTDatatableColumnRenderingDemo.init();
});
