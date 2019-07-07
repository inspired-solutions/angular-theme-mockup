'use strict';
var KTSessionTimeoutDemo = {
	init: function() {
		$.sessionTimeout({
			title: 'Session Timeout Notification',
			message: 'Your session is about to expire.',
			keepAliveUrl:
				'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/session-timeout/keepalive.php',
			redirUrl: '?p=page_user_lock_1',
			logoutUrl: '?p=page_user_login_1',
			warnAfter: 3e3,
			redirAfter: 35e3,
			ignoreUserActivity: !0,
			countdownMessage: 'Redirecting in {timer} seconds.',
			countdownBar: !0,
		});
	},
};
jQuery(document).ready(function() {
	KTSessionTimeoutDemo.init();
});
