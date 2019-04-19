'use strict';
var KTDatatablesExtensionsKeytable = {
	init: function() {
		var e;
		$('#kt_table_1').DataTable({
			responsive: !0,
			select: !0,
			columnDefs: [
				{
					targets: -1,
					title: 'Actions',
					orderable: !1,
					render: function(e, t, a, n) {
						return '\n                        <span class="dropdown">\n                            <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">\n                              <i class="la la-ellipsis-h"></i>\n                            </a>\n                            <div class="dropdown-menu dropdown-menu-right">\n                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\n                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\n                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\n                            </div>\n                        </span>\n                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">\n                          <i class="la la-edit"></i>\n                        </a>';
					},
				},
				{
					targets: 8,
					render: function(e, t, a, n) {
						var s = {
							1: { title: 'Pending', class: 'kt-badge--brand' },
							2: { title: 'Delivered', class: ' kt-badge--danger' },
							3: { title: 'Canceled', class: ' kt-badge--primary' },
							4: { title: 'Success', class: ' kt-badge--success' },
							5: { title: 'Info', class: ' kt-badge--info' },
							6: { title: 'Danger', class: ' kt-badge--danger' },
							7: { title: 'Warning', class: ' kt-badge--warning' },
						};
						return void 0 === s[e]
							? e
							: '<span class="kt-badge ' + s[e].class + ' kt-badge--inline kt-badge--pill">' + s[e].title + '</span>';
					},
				},
				{
					targets: 9,
					render: function(e, t, a, n) {
						var s = {
							1: { title: 'Online', state: 'danger' },
							2: { title: 'Retail', state: 'primary' },
							3: { title: 'Direct', state: 'success' },
						};
						return void 0 === s[e]
							? e
							: '<span class="kt-badge kt-badge--' +
									s[e].state +
									' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +
									s[e].state +
									'">' +
									s[e].title +
									'</span>';
					},
				},
			],
		}),
			(e = $('#kt_table_2').DataTable({
				responsive: !0,
				select: { style: 'multi', selector: 'td:first-child .kt-checkable' },
				headerCallback: function(e, t, a, n, s) {
					e.getElementsByTagName('th')[0].innerHTML =
						'\n                    <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid kt-checkbox--brand">\n                        <input type="checkbox" value="" class="m-group-checkable">\n                        <span></span>\n                    </label>';
				},
				columnDefs: [
					{
						targets: 0,
						orderable: !1,
						render: function(e, t, a, n) {
							return '\n                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid kt-checkbox--brand">\n                            <input type="checkbox" value="" class="m-checkable">\n                            <span></span>\n                        </label>';
						},
					},
					{
						targets: -1,
						title: 'Actions',
						orderable: !1,
						render: function(e, t, a, n) {
							return '\n                        <span class="dropdown">\n                            <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">\n                              <i class="la la-ellipsis-h"></i>\n                            </a>\n                            <div class="dropdown-menu dropdown-menu-right">\n                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\n                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\n                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\n                            </div>\n                        </span>\n                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">\n                          <i class="la la-edit"></i>\n                        </a>';
						},
					},
					{
						targets: 8,
						render: function(e, t, a, n) {
							var s = {
								1: { title: 'Pending', class: 'kt-badge--brand' },
								2: { title: 'Delivered', class: ' kt-badge--danger' },
								3: { title: 'Canceled', class: ' kt-badge--primary' },
								4: { title: 'Success', class: ' kt-badge--success' },
								5: { title: 'Info', class: ' kt-badge--info' },
								6: { title: 'Danger', class: ' kt-badge--danger' },
								7: { title: 'Warning', class: ' kt-badge--warning' },
							};
							return void 0 === s[e]
								? e
								: '<span class="kt-badge ' + s[e].class + ' kt-badge--inline kt-badge--pill">' + s[e].title + '</span>';
						},
					},
					{
						targets: 9,
						render: function(e, t, a, n) {
							var s = {
								1: { title: 'Online', state: 'danger' },
								2: { title: 'Retail', state: 'primary' },
								3: { title: 'Direct', state: 'success' },
							};
							return void 0 === s[e]
								? e
								: '<span class="kt-badge kt-badge--' +
										s[e].state +
										' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +
										s[e].state +
										'">' +
										s[e].title +
										'</span>';
						},
					},
				],
			})).on('change', '.kt-group-checkable', function() {
				var t = $(this)
						.closest('table')
						.find('td:first-child .kt-checkable'),
					a = $(this).is(':checked');
				$(t).each(function() {
					a
						? ($(this).prop('checked', !0), e.rows($(this).closest('tr')).select())
						: ($(this).prop('checked', !1), e.rows($(this).closest('tr')).deselect());
				});
			});
	},
};
jQuery(document).ready(function() {
	KTDatatablesExtensionsKeytable.init();
});
