'use strict';
var KTIdleTimerDemo = {
	init: function() {
		$(document).on('idle.idleTimer', function(t, e, l) {
			$('#docStatus')
				.val(function(t, e) {
					return e + 'Idle @ ' + moment().format() + ' \n';
				})
				.removeClass('alert-success')
				.addClass('alert-warning')
				.scrollTop($('#docStatus')[0].scrollHeight);
		}),
			$(document).on('active.idleTimer', function(t, e, l, s) {
				$('#docStatus')
					.val(function(t, e) {
						return e + 'Active [' + s.type + '] [' + s.target.nodeName + '] @ ' + moment().format() + ' \n';
					})
					.addClass('alert-success')
					.removeClass('alert-warning')
					.scrollTop($('#docStatus')[0].scrollHeight);
			}),
			$('#btPause').click(function() {
				return (
					$(document).idleTimer('pause'),
					$('#docStatus')
						.val(function(t, e) {
							return e + 'Paused @ ' + moment().format() + ' \n';
						})
						.scrollTop($('#docStatus')[0].scrollHeight),
					$(this).blur(),
					!1
				);
			}),
			$('#btResume').click(function() {
				return (
					$(document).idleTimer('resume'),
					$('#docStatus')
						.val(function(t, e) {
							return e + 'Resumed @ ' + moment().format() + ' \n';
						})
						.scrollTop($('#docStatus')[0].scrollHeight),
					$(this).blur(),
					!1
				);
			}),
			$('#btElapsed').click(function() {
				return (
					$('#docStatus')
						.val(function(t, e) {
							return e + 'Elapsed (since becoming active): ' + $(document).idleTimer('getElapsedTime') + ' \n';
						})
						.scrollTop($('#docStatus')[0].scrollHeight),
					$(this).blur(),
					!1
				);
			}),
			$('#btDestroy').click(function() {
				return (
					$(document).idleTimer('destroy'),
					$('#docStatus')
						.val(function(t, e) {
							return e + 'Destroyed: @ ' + moment().format() + ' \n';
						})
						.removeClass('alert-success')
						.removeClass('alert-warning')
						.scrollTop($('#docStatus')[0].scrollHeight),
					$(this).blur(),
					!1
				);
			}),
			$('#btInit').click(function() {
				return (
					$(document).idleTimer({ timeout: 5e3 }),
					$('#docStatus')
						.val(function(t, e) {
							return e + 'Init: @ ' + moment().format() + ' \n';
						})
						.scrollTop($('#docStatus')[0].scrollHeight),
					$(document).idleTimer('isIdle')
						? $('#docStatus')
								.removeClass('alert-success')
								.addClass('alert-warning')
						: $('#docStatus')
								.addClass('alert-success')
								.removeClass('alert-warning'),
					$(this).blur(),
					!1
				);
			}),
			$('#docStatus').val(''),
			$(document).idleTimer(5e3),
			$(document).idleTimer('isIdle')
				? $('#docStatus')
						.val(function(t, e) {
							return e + 'Initial Idle State @ ' + moment().format() + ' \n';
						})
						.removeClass('alert-success')
						.addClass('alert-warning')
						.scrollTop($('#docStatus')[0].scrollHeight)
				: $('#docStatus')
						.val(function(t, e) {
							return e + 'Initial Active State @ ' + moment().format() + ' \n';
						})
						.addClass('alert-success')
						.removeClass('alert-warning')
						.scrollTop($('#docStatus')[0].scrollHeight),
			$('#docTimeout').text(5),
			$('#elStatus').on('idle.idleTimer', function(t, e, l) {
				t.stopPropagation(),
					$('#elStatus')
						.val(function(t, e) {
							return e + 'Idle @ ' + moment().format() + ' \n';
						})
						.removeClass('alert-success')
						.addClass('alert-warning')
						.scrollTop($('#elStatus')[0].scrollHeight);
			}),
			$('#elStatus').on('active.idleTimer', function(t) {
				t.stopPropagation(),
					$('#elStatus')
						.val(function(t, e) {
							return e + 'Active @ ' + moment().format() + ' \n';
						})
						.addClass('alert-success')
						.removeClass('alert-warning')
						.scrollTop($('#elStatus')[0].scrollHeight);
			}),
			$('#btReset').click(function() {
				return (
					$('#elStatus')
						.idleTimer('reset')
						.val(function(t, e) {
							return e + 'Reset @ ' + moment().format() + ' \n';
						})
						.scrollTop($('#elStatus')[0].scrollHeight),
					$('#elStatus').idleTimer('isIdle')
						? $('#elStatus')
								.removeClass('alert-success')
								.addClass('alert-warning')
						: $('#elStatus')
								.addClass('alert-success')
								.removeClass('alert-warning'),
					$(this).blur(),
					!1
				);
			}),
			$('#btRemaining').click(function() {
				return (
					$('#elStatus')
						.val(function(t, e) {
							return e + 'Remaining: ' + $('#elStatus').idleTimer('getRemainingTime') + ' \n';
						})
						.scrollTop($('#elStatus')[0].scrollHeight),
					$(this).blur(),
					!1
				);
			}),
			$('#btLastActive').click(function() {
				return (
					$('#elStatus')
						.val(function(t, e) {
							return e + 'LastActive: ' + $('#elStatus').idleTimer('getLastActiveTime') + ' \n';
						})
						.scrollTop($('#elStatus')[0].scrollHeight),
					$(this).blur(),
					!1
				);
			}),
			$('#btState').click(function() {
				return (
					$('#elStatus')
						.val(function(t, e) {
							return e + 'State: ' + ($('#elStatus').idleTimer('isIdle') ? 'idle' : 'active') + ' \n';
						})
						.scrollTop($('#elStatus')[0].scrollHeight),
					$(this).blur(),
					!1
				);
			}),
			$('#elStatus')
				.val('')
				.idleTimer(3e3),
			$('#elStatus').idleTimer('isIdle')
				? $('#elStatus')
						.val(function(t, e) {
							return e + 'Initial Idle @ ' + moment().format() + ' \n';
						})
						.removeClass('alert-success')
						.addClass('alert-warning')
						.scrollTop($('#elStatus')[0].scrollHeight)
				: $('#elStatus')
						.val(function(t, e) {
							return e + 'Initial Active @ ' + moment().format() + ' \n';
						})
						.addClass('alert-success')
						.removeClass('alert-warning')
						.scrollTop($('#elStatus')[0].scrollHeight),
			$('#elTimeout').text(3);
	},
};
jQuery(document).ready(function() {
	KTIdleTimerDemo.init();
});
