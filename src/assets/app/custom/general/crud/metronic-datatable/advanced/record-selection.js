'use strict';
var KTDatatableRecordSelectionDemo = (function() {
	var t = {
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
		layout: { scroll: !0, height: 350, footer: !1 },
		sortable: !0,
		pagination: !0,
		columns: [
			{
				field: 'RecordID',
				title: '#',
				sortable: !1,
				width: 20,
				selector: { class: 'kt-checkbox--solid' },
				textAlign: 'center',
			},
			{ field: 'OrderID', title: 'Order ID', template: '{{OrderID}}' },
			{
				field: 'Country',
				title: 'Country',
				template: function(t) {
					return t.Country + ' ' + t.ShipCountry;
				},
			},
			{ field: 'ShipAddress', title: 'Ship Address' },
			{ field: 'ShipDate', title: 'Ship Date', type: 'date', format: 'MM/DD/YYYY' },
			{
				field: 'Status',
				title: 'Status',
				template: function(t) {
					var e = {
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
						e[t.Status].class +
						' kt-badge--inline kt-badge--pill">' +
						e[t.Status].title +
						'</span>'
					);
				},
			},
			{
				field: 'Type',
				title: 'Type',
				autoHide: !1,
				template: function(t) {
					var e = {
						1: { title: 'Online', state: 'danger' },
						2: { title: 'Retail', state: 'primary' },
						3: { title: 'Direct', state: 'success' },
					};
					return (
						'<span class="kt-badge kt-badge--' +
						e[t.Type].state +
						' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +
						e[t.Type].state +
						'">' +
						e[t.Type].title +
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
				textAlign: 'left',
				autoHide: !1,
				template: function() {
					return '                    <div class="dropdown">                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-sm" data-toggle="dropdown">                            <i class="flaticon2-settings"></i>                        </a>                        <div class="dropdown-menu dropdown-menu-right">                            <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>                            <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>                            <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>                        </div>                    </div>                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-sm" title="Edit details">                        <i class="flaticon2-file"></i>                    </a>                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-sm" title="Delete">                        <i class="flaticon2-delete"></i>                    </a>                ';
				},
			},
		],
	};
	return {
		init: function() {
			!(function() {
				t.search = { input: $('#generalSearch') };
				var e = $('#local_record_selection').KTDatatable(t);
				$('#kt_form_status').on('change', function() {
					e.search(
						$(this)
							.val()
							.toLowerCase(),
						'Status',
					);
				}),
					$('#kt_form_type').on('change', function() {
						e.search(
							$(this)
								.val()
								.toLowerCase(),
							'Type',
						);
					}),
					$('#kt_form_status,#kt_form_type').selectpicker(),
					e.on('kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated', function(t) {
						var a = e.rows('.kt-datatable__row--active').nodes().length;
						$('#kt_datatable_selected_number').html(a),
							a > 0
								? $('#kt_datatable_group_action_form').collapse('show')
								: $('#kt_datatable_group_action_form').collapse('hide');
					}),
					$('#kt_modal_fetch_id')
						.on('show.bs.modal', function(t) {
							for (
								var a = e
										.rows('.kt-datatable__row--active')
										.nodes()
										.find('.kt-checkbox--single > [type="checkbox"]')
										.map(function(t, e) {
											return $(e).val();
										}),
									n = document.createDocumentFragment(),
									l = 0;
								l < a.length;
								l++
							) {
								var i = document.createElement('li');
								i.setAttribute('data-id', a[l]), (i.innerHTML = 'Selected record ID: ' + a[l]), n.appendChild(i);
							}
							$(t.target)
								.find('.kt-datatable_selected_ids')
								.append(n);
						})
						.on('hide.bs.modal', function(t) {
							$(t.target)
								.find('.kt-datatable_selected_ids')
								.empty();
						});
			})(),
				(function() {
					(t.extensions = { checkbox: {} }), (t.search = { input: $('#generalSearch1') });
					var e = $('#server_record_selection').KTDatatable(t);
					$('#kt_form_status1').on('change', function() {
						e.search(
							$(this)
								.val()
								.toLowerCase(),
							'Status',
						);
					}),
						$('#kt_form_type1').on('change', function() {
							e.search(
								$(this)
									.val()
									.toLowerCase(),
								'Type',
							);
						}),
						$('#kt_form_status1,#kt_form_type1').selectpicker(),
						e.on('kt-datatable--on-click-checkbox kt-datatable--on-layout-updated', function(t) {
							var a = e.checkbox().getSelectedId().length;
							$('#kt_datatable_selected_number1').html(a),
								a > 0
									? $('#kt_datatable_group_action_form1').collapse('show')
									: $('#kt_datatable_group_action_form1').collapse('hide');
						}),
						$('#kt_modal_fetch_id_server')
							.on('show.bs.modal', function(t) {
								for (
									var a = e.checkbox().getSelectedId(), n = document.createDocumentFragment(), l = 0;
									l < a.length;
									l++
								) {
									var i = document.createElement('li');
									i.setAttribute('data-id', a[l]), (i.innerHTML = 'Selected record ID: ' + a[l]), n.appendChild(i);
								}
								$(t.target)
									.find('.kt-datatable_selected_ids')
									.append(n);
							})
							.on('hide.bs.modal', function(t) {
								$(t.target)
									.find('.kt-datatable_selected_ids')
									.empty();
							});
				})();
		},
	};
})();
jQuery(document).ready(function() {
	KTDatatableRecordSelectionDemo.init();
});
