'use strict';
var KTDemoPanel = (function() {
	var t,
		e = KTUtil.getByID('kt_demo_panel');
	return {
		init: function() {
			!(function() {
				t = new KTOffcanvas(e, {
					overlay: !0,
					baseClass: 'kt-demo-panel',
					closeBy: 'kt_demo_panel_close',
					toggleBy: 'kt_demo_panel_toggle',
				});
				var n = KTUtil.find(e, '.kt-demo-panel__head'),
					i = KTUtil.find(e, '.kt-demo-panel__body');
				KTUtil.scrollInit(i, {
					disableForMobile: !0,
					resetHeightOnDestroy: !0,
					handleWindowResize: !0,
					height: function() {
						var t = parseInt(KTUtil.getViewPort().height);
						return (
							n && ((t -= parseInt(KTUtil.actualHeight(n))), (t -= parseInt(KTUtil.css(n, 'marginBottom')))),
							(t -= parseInt(KTUtil.css(e, 'paddingTop'))),
							(t -= parseInt(KTUtil.css(e, 'paddingBottom')))
						);
					},
				}),
					void 0 !== t &&
						0 === t.length &&
						t.on('hide', function() {
							var t = new Date(new Date().getTime() + 36e5);
							Cookies.set('kt_demo_panel_shown', 1, { expires: t });
						});
			})(),
				('keenthemes.com' != encodeURI(window.location.hostname) &&
					'www.keenthemes.com' != encodeURI(window.location.hostname)) ||
					setTimeout(function() {
						if (!Cookies.get('kt_demo_panel_shown')) {
							var e = new Date(new Date().getTime() + 9e5);
							Cookies.set('kt_demo_panel_shown', 1, { expires: e }), t.show();
						}
					}, 4e3);
		},
	};
})();
$(document).ready(function() {
	KTDemoPanel.init();
});
var KTOffcanvasPanel = (function() {
	var t = KTUtil.get('kt_offcanvas_toolbar_notifications'),
		e = KTUtil.get('kt_offcanvas_toolbar_quick_actions'),
		n = KTUtil.get('kt_offcanvas_toolbar_profile'),
		i = KTUtil.get('kt_offcanvas_toolbar_search');
	return {
		init: function() {
			!(function() {
				var e = KTUtil.find(t, '.kt-offcanvas-panel__head'),
					n = KTUtil.find(t, '.kt-offcanvas-panel__body');
				new KTOffcanvas(t, {
					overlay: !0,
					baseClass: 'kt-offcanvas-panel',
					closeBy: 'kt_offcanvas_toolbar_notifications_close',
					toggleBy: 'kt_offcanvas_toolbar_notifications_toggler_btn',
				});
				KTUtil.scrollInit(n, {
					disableForMobile: !0,
					resetHeightOnDestroy: !0,
					handleWindowResize: !0,
					height: function() {
						var n = parseInt(KTUtil.getViewPort().height);
						return (
							e && ((n -= parseInt(KTUtil.actualHeight(e))), (n -= parseInt(KTUtil.css(e, 'marginBottom')))),
							(n -= parseInt(KTUtil.css(t, 'paddingTop'))),
							(n -= parseInt(KTUtil.css(t, 'paddingBottom')))
						);
					},
				});
			})(),
				(function() {
					var t = KTUtil.find(e, '.kt-offcanvas-panel__head'),
						n = KTUtil.find(e, '.kt-offcanvas-panel__body');
					new KTOffcanvas(e, {
						overlay: !0,
						baseClass: 'kt-offcanvas-panel',
						closeBy: 'kt_offcanvas_toolbar_quick_actions_close',
						toggleBy: 'kt_offcanvas_toolbar_quick_actions_toggler_btn',
					});
					KTUtil.scrollInit(n, {
						disableForMobile: !0,
						resetHeightOnDestroy: !0,
						handleWindowResize: !0,
						height: function() {
							var n = parseInt(KTUtil.getViewPort().height);
							return (
								t && ((n -= parseInt(KTUtil.actualHeight(t))), (n -= parseInt(KTUtil.css(t, 'marginBottom')))),
								(n -= parseInt(KTUtil.css(e, 'paddingTop'))),
								(n -= parseInt(KTUtil.css(e, 'paddingBottom')))
							);
						},
					});
				})(),
				(function() {
					var t = KTUtil.find(n, '.kt-offcanvas-panel__head'),
						e = KTUtil.find(n, '.kt-offcanvas-panel__body');
					new KTOffcanvas(n, {
						overlay: !0,
						baseClass: 'kt-offcanvas-panel',
						closeBy: 'kt_offcanvas_toolbar_profile_close',
						toggleBy: 'kt_offcanvas_toolbar_profile_toggler_btn',
					});
					KTUtil.scrollInit(e, {
						disableForMobile: !0,
						resetHeightOnDestroy: !0,
						handleWindowResize: !0,
						height: function() {
							var e = parseInt(KTUtil.getViewPort().height);
							return (
								t && ((e -= parseInt(KTUtil.actualHeight(t))), (e -= parseInt(KTUtil.css(t, 'marginBottom')))),
								(e -= parseInt(KTUtil.css(n, 'paddingTop'))),
								(e -= parseInt(KTUtil.css(n, 'paddingBottom')))
							);
						},
					});
				})(),
				(function() {
					var t = KTUtil.find(i, '.kt-offcanvas-panel__head'),
						e = KTUtil.find(i, '.kt-offcanvas-panel__body');
					new KTOffcanvas(i, {
						overlay: !0,
						baseClass: 'kt-offcanvas-panel',
						closeBy: 'kt_offcanvas_toolbar_search_close',
						toggleBy: 'kt_offcanvas_toolbar_search_toggler_btn',
					});
					KTUtil.scrollInit(e, {
						disableForMobile: !0,
						resetHeightOnDestroy: !0,
						handleWindowResize: !0,
						height: function() {
							var e = parseInt(KTUtil.getViewPort().height);
							return (
								t && ((e -= parseInt(KTUtil.actualHeight(t))), (e -= parseInt(KTUtil.css(t, 'marginBottom')))),
								(e -= parseInt(KTUtil.css(i, 'paddingTop'))),
								(e -= parseInt(KTUtil.css(i, 'paddingBottom')))
							);
						},
					});
				})();
		},
	};
})();
$(document).ready(function() {
	KTOffcanvasPanel.init();
});
var KTQuickPanel = (function() {
	var t = KTUtil.get('kt_quick_panel'),
		e = KTUtil.get('kt_quick_panel_tab_notifications'),
		n = KTUtil.get('kt_quick_panel_tab_logs'),
		i = KTUtil.get('kt_quick_panel_tab_settings'),
		a = function() {
			var e = KTUtil.find(t, '.kt-quick-panel__nav');
			KTUtil.find(t, '.kt-quick-panel__content');
			return (
				parseInt(KTUtil.getViewPort().height) -
				parseInt(KTUtil.actualHeight(e)) -
				2 * parseInt(KTUtil.css(e, 'padding-top')) -
				10
			);
		};
	return {
		init: function() {
			new KTOffcanvas(t, {
				overlay: !0,
				baseClass: 'kt-quick-panel',
				closeBy: 'kt_quick_panel_close_btn',
				toggleBy: 'kt_quick_panel_toggler_btn',
			}),
				KTUtil.scrollInit(e, {
					disableForMobile: !0,
					resetHeightOnDestroy: !0,
					handleWindowResize: !0,
					height: function() {
						return a();
					},
				}),
				KTUtil.scrollInit(n, {
					disableForMobile: !0,
					resetHeightOnDestroy: !0,
					handleWindowResize: !0,
					height: function() {
						return a();
					},
				}),
				KTUtil.scrollInit(i, {
					disableForMobile: !0,
					resetHeightOnDestroy: !0,
					handleWindowResize: !0,
					height: function() {
						return a();
					},
				}),
				$(t)
					.find('a[data-toggle="tab"]')
					.on('shown.bs.tab', function(t) {
						KTUtil.scrollUpdate(e), KTUtil.scrollUpdate(n), KTUtil.scrollUpdate(i);
					});
		},
	};
})();
$(document).ready(function() {
	KTQuickPanel.init();
});
var KTQuickSearch = function() {
		var t,
			e,
			n,
			i,
			a,
			o,
			l,
			s,
			r = '',
			c = !1,
			d = !1,
			f = !1,
			_ = 'kt-spinner kt-spinner--input kt-spinner--sm kt-spinner--brand kt-spinner--right',
			T = 'kt-quick-search--has-result',
			u = function() {
				(f = !1), KTUtil.removeClass(s, _), i && (n.value.length < 2 ? KTUtil.hide(i) : KTUtil.show(i, 'flex'));
			},
			p = function() {
				l && !KTUtil.hasClass(o, 'show') && ($(l).dropdown('toggle'), $(l).dropdown('update'));
			},
			g = function() {
				l && KTUtil.hasClass(o, 'show') && $(l).dropdown('toggle');
			},
			K = function() {
				if (c && r === n.value) return u(), KTUtil.addClass(t, T), p(), void KTUtil.scrollUpdate(a);
				(r = n.value),
					KTUtil.removeClass(t, T),
					(f = !0),
					KTUtil.addClass(s, _),
					i && KTUtil.hide(i),
					setTimeout(function() {
						$.ajax({
							url: 'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/quick_search.php',
							data: { query: r },
							dataType: 'html',
							success: function(e) {
								(c = !0), u(), KTUtil.addClass(t, T), KTUtil.setHTML(a, e), p(), KTUtil.scrollUpdate(a);
							},
							error: function(e) {
								(c = !1),
									u(),
									KTUtil.addClass(t, T),
									KTUtil.setHTML(
										a,
										'<span class="kt-quick-search__message">Connection error. Pleae try again later.</div>',
									),
									p(),
									KTUtil.scrollUpdate(a);
							},
						});
					}, 1e3);
			},
			h = function(e) {
				(n.value = ''), (r = ''), (c = !1), KTUtil.hide(i), KTUtil.removeClass(t, T), g();
			},
			U = function() {
				if (n.value.length < 2) return u(), void g();
				1 != f &&
					(d && clearTimeout(d),
					(d = setTimeout(function() {
						K();
					}, 200)));
			};
		return {
			init: function(r) {
				(t = r),
					(e = KTUtil.find(t, '.kt-quick-search__form')),
					(n = KTUtil.find(t, '.kt-quick-search__input')),
					(i = KTUtil.find(t, '.kt-quick-search__close')),
					(a = KTUtil.find(t, '.kt-quick-search__wrapper')),
					(o = KTUtil.find(t, '.dropdown-menu')),
					(l = KTUtil.find(t, '[data-toggle="dropdown"]')),
					(s = KTUtil.find(t, '.input-group')),
					KTUtil.addEvent(n, 'keyup', U),
					KTUtil.addEvent(n, 'focus', U),
					(e.onkeypress = function(t) {
						13 == (t.charCode || t.keyCode || 0) && t.preventDefault();
					}),
					KTUtil.addEvent(i, 'click', h);
				var c = KTUtil.getByID('kt_quick_search_toggle');
				c &&
					$(c).on('shown.bs.dropdown', function() {
						n.focus();
					});
			},
		};
	},
	KTQuickSearchMobile = KTQuickSearch;
$(document).ready(function() {
	KTUtil.get('kt_quick_search_default') && KTQuickSearch().init(KTUtil.get('kt_quick_search_default')),
		KTUtil.get('kt_quick_search_inline') && KTQuickSearchMobile().init(KTUtil.get('kt_quick_search_inline'));
});
