'use strict';
var KTWizard4 = (function() {
	var e, r, t;
	return {
		init: function() {
			var i;
			KTUtil.get('kt_wizard_v4'),
				(e = $('#kt_form')),
				(t = new KTWizard('kt_wizard_v4', { startStep: 1 })).on('beforeNext', function(e) {
					!0 !== r.form() && e.stop();
				}),
				t.on('change', function(e) {
					KTUtil.scrollTop();
				}),
				(r = e.validate({
					ignore: ':hidden',
					rules: {
						fname: { required: !0 },
						lname: { required: !0 },
						phone: { required: !0 },
						emaul: { required: !0, email: !0 },
						address1: { required: !0 },
						postcode: { required: !0 },
						city: { required: !0 },
						state: { required: !0 },
						country: { required: !0 },
						ccname: { required: !0 },
						ccnumber: { required: !0, creditcard: !0 },
						ccmonth: { required: !0 },
						ccyear: { required: !0 },
						cccvv: { required: !0, minlength: 2, maxlength: 3 },
					},
					invalidHandler: function(e, r) {
						KTUtil.scrollTop(),
							swal.fire({
								title: '',
								text: 'There are some errors in your submission. Please correct them.',
								type: 'error',
								confirmButtonClass: 'btn btn-secondary',
							});
					},
					submitHandler: function(e) {},
				})),
				(i = e.find('[data-ktwizard-type="action-submit"]')).on('click', function(t) {
					t.preventDefault(),
						r.form() &&
							(KTApp.progress(i),
							e.ajaxSubmit({
								success: function() {
									KTApp.unprogress(i),
										swal.fire({
											title: '',
											text: 'The application has been successfully submitted!',
											type: 'success',
											confirmButtonClass: 'btn btn-secondary',
										});
								},
							}));
				});
		},
	};
})();
jQuery(document).ready(function() {
	KTWizard4.init();
});
