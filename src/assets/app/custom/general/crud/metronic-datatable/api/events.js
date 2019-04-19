'use strict';
var KTDefaultDatatableDemo = (function() {
	var t = function(t) {
		var a = $('#kt_datatable_console').append(t + '\t\n');
		$(a).scrollTop(a[0].scrollHeight - $(a).height());
	};
	return {
		init: function() {
			var a;
			(a = $('.kt-datatable').KTDatatable({
				data: {
					type: 'remote',
					source: {
						read: {
							url:
								'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/datatables/demos/default.php',
						},
					},
					pageSize: 5,
					serverPaging: !0,
					serverFiltering: !0,
					serverSorting: !0,
				},
				layout: { scroll: !0, height: 'auto', footer: !1 },
				sortable: !0,
				toolbar: { placement: ['bottom'], items: { pagination: { pageSizeSelect: [5, 10, 20, 30, 50] } } },
				search: { input: $('#generalSearch') },
				columns: [
					{
						field: 'RecordID',
						title: '#',
						sortable: !1,
						width: 30,
						type: 'number',
						selector: { class: 'kt-checkbox--solid' },
						textAlign: 'center',
					},
					{ field: 'OrderID', title: 'Order ID' },
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
							return '\t\t\t\t\t\t<div class="dropdown">\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t';
						},
					},
				],
			})),
				$('#kt_datatable_clear').on('click', function() {
					$('#kt_datatable_console').html('');
				}),
				$('#kt_datatable_reload').on('click', function() {
					a.reload();
				}),
				$('#kt_form_status,#kt_form_type').selectpicker(),
				$('.kt-datatable')
					.on('kt-datatable--on-init', function() {
						t('Datatable init');
					})
					.on('kt-datatable--on-layout-updated', function() {
						t('Layout render updated');
					})
					.on('kt-datatable--on-ajax-done', function() {
						t('Ajax data successfully updated');
					})
					.on('kt-datatable--on-ajax-fail', function(a, e) {
						t('Ajax error');
					})
					.on('kt-datatable--on-goto-page', function(a, e) {
						t('Goto to pagination: ' + e.page);
					})
					.on('kt-datatable--on-update-perpage', function(a, e) {
						t('Update page size: ' + e.perpage);
					})
					.on('kt-datatable--on-reloaded', function(a) {
						t('Datatable reloaded');
					})
					.on('kt-datatable--on-check', function(a, e) {
						t('Checkbox active: ' + e.toString());
					})
					.on('kt-datatable--on-uncheck', function(a, e) {
						t('Checkbox inactive: ' + e.toString());
					})
					.on('kt-datatable--on-sort', function(a, e) {
						t('Datatable sorted by ' + e.field + ' ' + e.sort);
					});
		},
	};
})();
jQuery(document).ready(function() {
	KTDefaultDatatableDemo.init();
});
