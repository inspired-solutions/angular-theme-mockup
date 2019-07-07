'use strict';
var KTDatatablesSearchOptionsAdvancedSearch = (function() {
	$.fn.dataTable.Api.register('column().title()', function() {
		return $(this.header())
			.text()
			.trim();
	});
	return {
		init: function() {
			var t;
			(t = $('#kt_table_1').DataTable({
				responsive: !0,
				dom: "<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
				lengthMenu: [5, 10, 25, 50],
				pageLength: 10,
				language: { lengthMenu: 'Display _MENU_' },
				searchDelay: 500,
				processing: !0,
				serverSide: !0,
				ajax: {
					url:
						'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/datatables/demos/server.php',
					type: 'POST',
					data: {
						columnsDef: [
							'RecordID',
							'OrderID',
							'Country',
							'ShipCity',
							'CompanyAgent',
							'ShipDate',
							'Status',
							'Type',
							'Actions',
						],
					},
				},
				columns: [
					{ data: 'RecordID' },
					{ data: 'OrderID' },
					{ data: 'Country' },
					{ data: 'ShipCity' },
					{ data: 'CompanyAgent' },
					{ data: 'ShipDate' },
					{ data: 'Status' },
					{ data: 'Type' },
					{ data: 'Actions', responsivePriority: -1 },
				],
				initComplete: function() {
					this.api()
						.columns()
						.every(function() {
							switch (this.title()) {
								case 'Country':
									this.data()
										.unique()
										.sort()
										.each(function(t, a) {
											$('.kt-input[data-col-index="2"]').append('<option value="' + t + '">' + t + '</option>');
										});
									break;
								case 'Status':
									var t = {
										1: { title: 'Pending', class: 'kt-badge--brand' },
										2: { title: 'Delivered', class: ' kt-badge--danger' },
										3: { title: 'Canceled', class: ' kt-badge--primary' },
										4: { title: 'Success', class: ' kt-badge--success' },
										5: { title: 'Info', class: ' kt-badge--info' },
										6: { title: 'Danger', class: ' kt-badge--danger' },
										7: { title: 'Warning', class: ' kt-badge--warning' },
									};
									this.data()
										.unique()
										.sort()
										.each(function(a, e) {
											$('.kt-input[data-col-index="6"]').append(
												'<option value="' + a + '">' + t[a].title + '</option>',
											);
										});
									break;
								case 'Type':
									(t = {
										1: { title: 'Online', state: 'danger' },
										2: { title: 'Retail', state: 'primary' },
										3: { title: 'Direct', state: 'success' },
									}),
										this.data()
											.unique()
											.sort()
											.each(function(a, e) {
												$('.kt-input[data-col-index="7"]').append(
													'<option value="' + a + '">' + t[a].title + '</option>',
												);
											});
							}
						});
				},
				columnDefs: [
					{
						targets: -1,
						title: 'Actions',
						orderable: !1,
						render: function(t, a, e, n) {
							return '\n                        <span class="dropdown">\n                            <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">\n                              <i class="la la-ellipsis-h"></i>\n                            </a>\n                            <div class="dropdown-menu dropdown-menu-right">\n                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\n                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\n                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\n                            </div>\n                        </span>\n                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">\n                          <i class="la la-edit"></i>\n                        </a>';
						},
					},
					{
						targets: 6,
						render: function(t, a, e, n) {
							var i = {
								1: { title: 'Pending', class: 'kt-badge--brand' },
								2: { title: 'Delivered', class: ' kt-badge--danger' },
								3: { title: 'Canceled', class: ' kt-badge--primary' },
								4: { title: 'Success', class: ' kt-badge--success' },
								5: { title: 'Info', class: ' kt-badge--info' },
								6: { title: 'Danger', class: ' kt-badge--danger' },
								7: { title: 'Warning', class: ' kt-badge--warning' },
							};
							return void 0 === i[t]
								? t
								: '<span class="kt-badge ' + i[t].class + ' kt-badge--inline kt-badge--pill">' + i[t].title + '</span>';
						},
					},
					{
						targets: 7,
						render: function(t, a, e, n) {
							var i = {
								1: { title: 'Online', state: 'danger' },
								2: { title: 'Retail', state: 'primary' },
								3: { title: 'Direct', state: 'success' },
							};
							return void 0 === i[t]
								? t
								: '<span class="kt-badge kt-badge--' +
										i[t].state +
										' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +
										i[t].state +
										'">' +
										i[t].title +
										'</span>';
						},
					},
				],
			})),
				$('#kt_search').on('click', function(a) {
					a.preventDefault();
					var e = {};
					$('.kt-input').each(function() {
						var t = $(this).data('col-index');
						e[t] ? (e[t] += '|' + $(this).val()) : (e[t] = $(this).val());
					}),
						$.each(e, function(a, e) {
							t.column(a).search(e || '', !1, !1);
						}),
						t.table().draw();
				}),
				$('#kt_reset').on('click', function(a) {
					a.preventDefault(),
						$('.kt-input').each(function() {
							$(this).val(''), t.column($(this).data('col-index')).search('', !1, !1);
						}),
						t.table().draw();
				}),
				$('#kt_datepicker').datepicker({
					todayHighlight: !0,
					templates: { leftArrow: '<i class="la la-angle-left"></i>', rightArrow: '<i class="la la-angle-right"></i>' },
				});
		},
	};
})();
jQuery(document).ready(function() {
	KTDatatablesSearchOptionsAdvancedSearch.init();
});
