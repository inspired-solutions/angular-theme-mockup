'use strict';
var KTDatatablesAdvancedColumnRendering = {
	init: function() {
		$('#kt_table_1').DataTable({
			responsive: !0,
			paging: !0,
			columnDefs: [
				{
					targets: 0,
					title: 'Agent',
					render: function(a, t, e, n) {
						var s = KTUtil.getRandomInt(1, 14);
						return s > 8
							? '\n                                <div class="kt-user-card-v2">\n                                    <div class="kt-user-card-v2__pic">\n                                        <img src="https://keenthemes.com/metronic/preview/assets/media/users/100_' +
									s +
									'.jpg" class="m-img-rounded kt-marginless" alt="photo">\n                                    </div>\n                                    <div class="kt-user-card-v2__details">\n                                        <span class="kt-user-card-v2__name">' +
									e[2] +
									'</span>\n                                        <a href="#" class="kt-user-card-v2__email kt-link">' +
									e[3] +
									'</a>\n                                    </div>\n                                </div>'
							: '\n                                <div class="kt-user-card-v2">\n                                    <div class="kt-user-card-v2__pic">\n                                        <div class="kt-badge kt-badge--xl kt-badge--' +
									['success', 'brand', 'danger', 'success', 'warning', 'dark', 'primary', 'info'][
										KTUtil.getRandomInt(0, 7)
									] +
									'"><span>' +
									e[2].substring(0, 1) +
									'</div>\n                                    </div>\n                                    <div class="kt-user-card-v2__details">\n                                        <span class="kt-user-card-v2__name">' +
									e[2] +
									'</span>\n                                        <a href="#" class="kt-user-card-v2__email kt-link">' +
									e[3] +
									'</a>\n                                    </div>\n                                </div>';
					},
				},
				{
					targets: 1,
					render: function(a, t, e, n) {
						return '<a class="kt-link" href="mailto:' + a + '">' + a + '</a>';
					},
				},
				{
					targets: -1,
					title: 'Actions',
					orderable: !1,
					render: function(a, t, e, n) {
						return '\n                        <span class="dropdown">\n                            <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">\n                              <i class="la la-ellipsis-h"></i>\n                            </a>\n                            <div class="dropdown-menu dropdown-menu-right">\n                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\n                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\n                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\n                            </div>\n                        </span>\n                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">\n                          <i class="la la-edit"></i>\n                        </a>';
					},
				},
				{
					targets: 4,
					render: function(a, t, e, n) {
						var s = {
							1: { title: 'Pending', class: 'kt-badge--brand' },
							2: { title: 'Delivered', class: ' kt-badge--danger' },
							3: { title: 'Canceled', class: ' kt-badge--primary' },
							4: { title: 'Success', class: ' kt-badge--success' },
							5: { title: 'Info', class: ' kt-badge--info' },
							6: { title: 'Danger', class: ' kt-badge--danger' },
							7: { title: 'Warning', class: ' kt-badge--warning' },
						};
						return void 0 === s[a]
							? a
							: '<span class="kt-badge ' + s[a].class + ' kt-badge--inline kt-badge--pill">' + s[a].title + '</span>';
					},
				},
				{
					targets: 5,
					render: function(a, t, e, n) {
						var s = {
							1: { title: 'Online', state: 'danger' },
							2: { title: 'Retail', state: 'primary' },
							3: { title: 'Direct', state: 'success' },
						};
						return void 0 === s[a]
							? a
							: '<span class="kt-badge kt-badge--' +
									s[a].state +
									' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-' +
									s[a].state +
									'">' +
									s[a].title +
									'</span>';
					},
				},
			],
		});
	},
};
jQuery(document).ready(function() {
	KTDatatablesAdvancedColumnRendering.init();
});
