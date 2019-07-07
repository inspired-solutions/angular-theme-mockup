!(function(t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define(e)
		: (t.Popper = e());
})(this, function() {
	'use strict';
	for (
		var t = 'undefined' != typeof window && 'undefined' != typeof document,
			e = ['Edge', 'Trident', 'Firefox'],
			n = 0,
			i = 0;
		i < e.length;
		i += 1
	)
		if (t && navigator.userAgent.indexOf(e[i]) >= 0) {
			n = 1;
			break;
		}
	var o =
		t && window.Promise
			? function(t) {
					var e = !1;
					return function() {
						e ||
							((e = !0),
							window.Promise.resolve().then(function() {
								(e = !1), t();
							}));
					};
			  }
			: function(t) {
					var e = !1;
					return function() {
						e ||
							((e = !0),
							setTimeout(function() {
								(e = !1), t();
							}, n));
					};
			  };
	function r(t) {
		return t && '[object Function]' === {}.toString.call(t);
	}
	function s(t, e) {
		if (1 !== t.nodeType) return [];
		var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
		return e ? n[e] : n;
	}
	function l(t) {
		return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
	}
	function a(t) {
		if (!t) return document.body;
		switch (t.nodeName) {
			case 'HTML':
			case 'BODY':
				return t.ownerDocument.body;
			case '#document':
				return t.body;
		}
		var e = s(t),
			n = e.overflow,
			i = e.overflowX,
			o = e.overflowY;
		return /(auto|scroll|overlay)/.test(n + o + i) ? t : a(l(t));
	}
	var c = t && !(!window.MSInputMethodContext || !document.documentMode),
		h = t && /MSIE 10/.test(navigator.userAgent);
	function f(t) {
		return 11 === t ? c : 10 === t ? h : c || h;
	}
	function p(t) {
		if (!t) return document.documentElement;
		for (var e = f(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; )
			n = (t = t.nextElementSibling).offsetParent;
		var i = n && n.nodeName;
		return i && 'BODY' !== i && 'HTML' !== i
			? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === s(n, 'position')
				? p(n)
				: n
			: t
			? t.ownerDocument.documentElement
			: document.documentElement;
	}
	function u(t) {
		return null !== t.parentNode ? u(t.parentNode) : t;
	}
	function d(t, e) {
		if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
		var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
			i = n ? t : e,
			o = n ? e : t,
			r = document.createRange();
		r.setStart(i, 0), r.setEnd(o, 0);
		var s,
			l,
			a = r.commonAncestorContainer;
		if ((t !== a && e !== a) || i.contains(o))
			return 'BODY' === (l = (s = a).nodeName) || ('HTML' !== l && p(s.firstElementChild) !== s) ? p(a) : a;
		var c = u(t);
		return c.host ? d(c.host, e) : d(t, u(e).host);
	}
	function m(t) {
		var e =
				'top' === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top') ? 'scrollTop' : 'scrollLeft',
			n = t.nodeName;
		if ('BODY' === n || 'HTML' === n) {
			var i = t.ownerDocument.documentElement;
			return (t.ownerDocument.scrollingElement || i)[e];
		}
		return t[e];
	}
	function v(t, e) {
		var n = 'x' === e ? 'Left' : 'Top',
			i = 'Left' === n ? 'Right' : 'Bottom';
		return parseFloat(t['border' + n + 'Width'], 10) + parseFloat(t['border' + i + 'Width'], 10);
	}
	function g(t, e, n, i) {
		return Math.max(
			e['offset' + t],
			e['scroll' + t],
			n['client' + t],
			n['offset' + t],
			n['scroll' + t],
			f(10)
				? parseInt(n['offset' + t]) +
						parseInt(i['margin' + ('Height' === t ? 'Top' : 'Left')]) +
						parseInt(i['margin' + ('Height' === t ? 'Bottom' : 'Right')])
				: 0,
		);
	}
	function b(t) {
		var e = t.body,
			n = t.documentElement,
			i = f(10) && getComputedStyle(n);
		return { height: g('Height', e, n, i), width: g('Width', e, n, i) };
	}
	var w = function(t, e) {
			if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
		},
		y = (function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					(i.enumerable = i.enumerable || !1),
						(i.configurable = !0),
						'value' in i && (i.writable = !0),
						Object.defineProperty(t, i.key, i);
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e;
			};
		})(),
		E = function(t, e, n) {
			return (
				e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
				t
			);
		},
		L =
			Object.assign ||
			function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
				}
				return t;
			};
	function T(t) {
		return L({}, t, { right: t.left + t.width, bottom: t.top + t.height });
	}
	function Y(t) {
		var e = {};
		try {
			if (f(10)) {
				e = t.getBoundingClientRect();
				var n = m(t, 'top'),
					i = m(t, 'left');
				(e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
			} else e = t.getBoundingClientRect();
		} catch (t) {}
		var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
			r = 'HTML' === t.nodeName ? b(t.ownerDocument) : {},
			l = r.width || t.clientWidth || o.right - o.left,
			a = r.height || t.clientHeight || o.bottom - o.top,
			c = t.offsetWidth - l,
			h = t.offsetHeight - a;
		if (c || h) {
			var p = s(t);
			(c -= v(p, 'x')), (h -= v(p, 'y')), (o.width -= c), (o.height -= h);
		}
		return T(o);
	}
	function W(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = f(10),
			o = 'HTML' === e.nodeName,
			r = Y(t),
			l = Y(e),
			c = a(t),
			h = s(e),
			p = parseFloat(h.borderTopWidth, 10),
			u = parseFloat(h.borderLeftWidth, 10);
		n && o && ((l.top = Math.max(l.top, 0)), (l.left = Math.max(l.left, 0)));
		var d = T({ top: r.top - l.top - p, left: r.left - l.left - u, width: r.width, height: r.height });
		if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
			var v = parseFloat(h.marginTop, 10),
				g = parseFloat(h.marginLeft, 10);
			(d.top -= p - v),
				(d.bottom -= p - v),
				(d.left -= u - g),
				(d.right -= u - g),
				(d.marginTop = v),
				(d.marginLeft = g);
		}
		return (
			(i && !n ? e.contains(c) : e === c && 'BODY' !== c.nodeName) &&
				(d = (function(t, e) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						i = m(e, 'top'),
						o = m(e, 'left'),
						r = n ? -1 : 1;
					return (t.top += i * r), (t.bottom += i * r), (t.left += o * r), (t.right += o * r), t;
				})(d, e)),
			d
		);
	}
	function O(t) {
		if (!t || !t.parentElement || f()) return document.documentElement;
		for (var e = t.parentElement; e && 'none' === s(e, 'transform'); ) e = e.parentElement;
		return e || document.documentElement;
	}
	function x(t, e, n, i) {
		var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
			r = { top: 0, left: 0 },
			c = o ? O(t) : d(t, e);
		if ('viewport' === i)
			r = (function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = t.ownerDocument.documentElement,
					i = W(t, n),
					o = Math.max(n.clientWidth, window.innerWidth || 0),
					r = Math.max(n.clientHeight, window.innerHeight || 0),
					s = e ? 0 : m(n),
					l = e ? 0 : m(n, 'left');
				return T({ top: s - i.top + i.marginTop, left: l - i.left + i.marginLeft, width: o, height: r });
			})(c, o);
		else {
			var h = void 0;
			'scrollParent' === i
				? 'BODY' === (h = a(l(e))).nodeName && (h = t.ownerDocument.documentElement)
				: (h = 'window' === i ? t.ownerDocument.documentElement : i);
			var f = W(h, c, o);
			if (
				'HTML' !== h.nodeName ||
				(function t(e) {
					var n = e.nodeName;
					if ('BODY' === n || 'HTML' === n) return !1;
					if ('fixed' === s(e, 'position')) return !0;
					var i = l(e);
					return !!i && t(i);
				})(c)
			)
				r = f;
			else {
				var p = b(t.ownerDocument),
					u = p.height,
					v = p.width;
				(r.top += f.top - f.marginTop),
					(r.bottom = u + f.top),
					(r.left += f.left - f.marginLeft),
					(r.right = v + f.left);
			}
		}
		var g = 'number' == typeof (n = n || 0);
		return (
			(r.left += g ? n : n.left || 0),
			(r.top += g ? n : n.top || 0),
			(r.right -= g ? n : n.right || 0),
			(r.bottom -= g ? n : n.bottom || 0),
			r
		);
	}
	function X(t, e, n, i, o) {
		var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
		if (-1 === t.indexOf('auto')) return t;
		var s = x(n, i, r, o),
			l = {
				top: { width: s.width, height: e.top - s.top },
				right: { width: s.right - e.right, height: s.height },
				bottom: { width: s.width, height: s.bottom - e.bottom },
				left: { width: e.left - s.left, height: s.height },
			},
			a = Object.keys(l)
				.map(function(t) {
					return L({ key: t }, l[t], { area: ((e = l[t]), e.width * e.height) });
					var e;
				})
				.sort(function(t, e) {
					return e.area - t.area;
				}),
			c = a.filter(function(t) {
				var e = t.width,
					i = t.height;
				return e >= n.clientWidth && i >= n.clientHeight;
			}),
			h = c.length > 0 ? c[0].key : a[0].key,
			f = t.split('-')[1];
		return h + (f ? '-' + f : '');
	}
	function S(t, e, n) {
		var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
		return W(n, i ? O(e) : d(e, n), i);
	}
	function H(t) {
		var e = t.ownerDocument.defaultView.getComputedStyle(t),
			n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
			i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
		return { width: t.offsetWidth + i, height: t.offsetHeight + n };
	}
	function _(t) {
		var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
		return t.replace(/left|right|bottom|top/g, function(t) {
			return e[t];
		});
	}
	function R(t, e, n) {
		n = n.split('-')[0];
		var i = H(t),
			o = { width: i.width, height: i.height },
			r = -1 !== ['right', 'left'].indexOf(n),
			s = r ? 'top' : 'left',
			l = r ? 'left' : 'top',
			a = r ? 'height' : 'width',
			c = r ? 'width' : 'height';
		return (o[s] = e[s] + e[a] / 2 - i[a] / 2), (o[l] = n === l ? e[l] - i[c] : e[_(l)]), o;
	}
	function M(t, e) {
		return Array.prototype.find ? t.find(e) : t.filter(e)[0];
	}
	function N(t, e, n) {
		return (
			(void 0 === n
				? t
				: t.slice(
						0,
						(function(t, e, n) {
							if (Array.prototype.findIndex)
								return t.findIndex(function(t) {
									return t[e] === n;
								});
							var i = M(t, function(t) {
								return t[e] === n;
							});
							return t.indexOf(i);
						})(t, 'name', n),
				  )
			).forEach(function(t) {
				t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
				var n = t.function || t.fn;
				t.enabled &&
					r(n) &&
					((e.offsets.popper = T(e.offsets.popper)), (e.offsets.reference = T(e.offsets.reference)), (e = n(e, t)));
			}),
			e
		);
	}
	function k(t, e) {
		return t.some(function(t) {
			var n = t.name;
			return t.enabled && n === e;
		});
	}
	function C(t) {
		for (
			var e = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0;
			i < e.length;
			i++
		) {
			var o = e[i],
				r = o ? '' + o + n : t;
			if (void 0 !== document.body.style[r]) return r;
		}
		return null;
	}
	function A(t) {
		var e = t.ownerDocument;
		return e ? e.defaultView : window;
	}
	function D(t, e, n, i) {
		(n.updateBound = i), A(t).addEventListener('resize', n.updateBound, { passive: !0 });
		var o = a(t);
		return (
			(function t(e, n, i, o) {
				var r = 'BODY' === e.nodeName,
					s = r ? e.ownerDocument.defaultView : e;
				s.addEventListener(n, i, { passive: !0 }), r || t(a(s.parentNode), n, i, o), o.push(s);
			})(o, 'scroll', n.updateBound, n.scrollParents),
			(n.scrollElement = o),
			(n.eventsEnabled = !0),
			n
		);
	}
	function P() {
		var t, e;
		this.state.eventsEnabled &&
			(cancelAnimationFrame(this.scheduleUpdate),
			(this.state = ((t = this.reference),
			(e = this.state),
			A(t).removeEventListener('resize', e.updateBound),
			e.scrollParents.forEach(function(t) {
				t.removeEventListener('scroll', e.updateBound);
			}),
			(e.updateBound = null),
			(e.scrollParents = []),
			(e.scrollElement = null),
			(e.eventsEnabled = !1),
			e)));
	}
	function B(t) {
		return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
	}
	function I(t, e) {
		Object.keys(e).forEach(function(n) {
			var i = '';
			-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && B(e[n]) && (i = 'px'),
				(t.style[n] = e[n] + i);
		});
	}
	var j = t && /Firefox/i.test(navigator.userAgent);
	function F(t, e, n) {
		var i = M(t, function(t) {
				return t.name === e;
			}),
			o =
				!!i &&
				t.some(function(t) {
					return t.name === n && t.enabled && t.order < i.order;
				});
		if (!o) {
			var r = '`' + e + '`',
				s = '`' + n + '`';
			console.warn(
				s + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!',
			);
		}
		return o;
	}
	var U = [
			'auto-start',
			'auto',
			'auto-end',
			'top-start',
			'top',
			'top-end',
			'right-start',
			'right',
			'right-end',
			'bottom-end',
			'bottom',
			'bottom-start',
			'left-end',
			'left',
			'left-start',
		],
		K = U.slice(3);
	function q(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = K.indexOf(t),
			i = K.slice(n + 1).concat(K.slice(0, n));
		return e ? i.reverse() : i;
	}
	var z = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' };
	function V(t, e, n, i) {
		var o = [0, 0],
			r = -1 !== ['right', 'left'].indexOf(i),
			s = t.split(/(\+|\-)/).map(function(t) {
				return t.trim();
			}),
			l = s.indexOf(
				M(s, function(t) {
					return -1 !== t.search(/,|\s/);
				}),
			);
		s[l] &&
			-1 === s[l].indexOf(',') &&
			console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
		var a = /\s*,\s*|\s+/,
			c = -1 !== l ? [s.slice(0, l).concat([s[l].split(a)[0]]), [s[l].split(a)[1]].concat(s.slice(l + 1))] : [s];
		return (
			(c = c.map(function(t, i) {
				var o = (1 === i ? !r : r) ? 'height' : 'width',
					s = !1;
				return t
					.reduce(function(t, e) {
						return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e)
							? ((t[t.length - 1] = e), (s = !0), t)
							: s
							? ((t[t.length - 1] += e), (s = !1), t)
							: t.concat(e);
					}, [])
					.map(function(t) {
						return (function(t, e, n, i) {
							var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
								r = +o[1],
								s = o[2];
							if (!r) return t;
							if (0 === s.indexOf('%')) {
								var l = void 0;
								switch (s) {
									case '%p':
										l = n;
										break;
									case '%':
									case '%r':
									default:
										l = i;
								}
								return (T(l)[e] / 100) * r;
							}
							if ('vh' === s || 'vw' === s)
								return (
									(('vh' === s
										? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
										: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) /
										100) *
									r
								);
							return r;
						})(t, o, e, n);
					});
			})).forEach(function(t, e) {
				t.forEach(function(n, i) {
					B(n) && (o[e] += n * ('-' === t[i - 1] ? -1 : 1));
				});
			}),
			o
		);
	}
	var G = {
			placement: 'bottom',
			positionFixed: !1,
			eventsEnabled: !0,
			removeOnDestroy: !1,
			onCreate: function() {},
			onUpdate: function() {},
			modifiers: {
				shift: {
					order: 100,
					enabled: !0,
					fn: function(t) {
						var e = t.placement,
							n = e.split('-')[0],
							i = e.split('-')[1];
						if (i) {
							var o = t.offsets,
								r = o.reference,
								s = o.popper,
								l = -1 !== ['bottom', 'top'].indexOf(n),
								a = l ? 'left' : 'top',
								c = l ? 'width' : 'height',
								h = { start: E({}, a, r[a]), end: E({}, a, r[a] + r[c] - s[c]) };
							t.offsets.popper = L({}, s, h[i]);
						}
						return t;
					},
				},
				offset: {
					order: 200,
					enabled: !0,
					fn: function(t, e) {
						var n = e.offset,
							i = t.placement,
							o = t.offsets,
							r = o.popper,
							s = o.reference,
							l = i.split('-')[0],
							a = void 0;
						return (
							(a = B(+n) ? [+n, 0] : V(n, r, s, l)),
							'left' === l
								? ((r.top += a[0]), (r.left -= a[1]))
								: 'right' === l
								? ((r.top += a[0]), (r.left += a[1]))
								: 'top' === l
								? ((r.left += a[0]), (r.top -= a[1]))
								: 'bottom' === l && ((r.left += a[0]), (r.top += a[1])),
							(t.popper = r),
							t
						);
					},
					offset: 0,
				},
				preventOverflow: {
					order: 300,
					enabled: !0,
					fn: function(t, e) {
						var n = e.boundariesElement || p(t.instance.popper);
						t.instance.reference === n && (n = p(n));
						var i = C('transform'),
							o = t.instance.popper.style,
							r = o.top,
							s = o.left,
							l = o[i];
						(o.top = ''), (o.left = ''), (o[i] = '');
						var a = x(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
						(o.top = r), (o.left = s), (o[i] = l), (e.boundaries = a);
						var c = e.priority,
							h = t.offsets.popper,
							f = {
								primary: function(t) {
									var n = h[t];
									return h[t] < a[t] && !e.escapeWithReference && (n = Math.max(h[t], a[t])), E({}, t, n);
								},
								secondary: function(t) {
									var n = 'right' === t ? 'left' : 'top',
										i = h[n];
									return (
										h[t] > a[t] &&
											!e.escapeWithReference &&
											(i = Math.min(h[n], a[t] - ('right' === t ? h.width : h.height))),
										E({}, n, i)
									);
								},
							};
						return (
							c.forEach(function(t) {
								var e = -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary';
								h = L({}, h, f[e](t));
							}),
							(t.offsets.popper = h),
							t
						);
					},
					priority: ['left', 'right', 'top', 'bottom'],
					padding: 5,
					boundariesElement: 'scrollParent',
				},
				keepTogether: {
					order: 400,
					enabled: !0,
					fn: function(t) {
						var e = t.offsets,
							n = e.popper,
							i = e.reference,
							o = t.placement.split('-')[0],
							r = Math.floor,
							s = -1 !== ['top', 'bottom'].indexOf(o),
							l = s ? 'right' : 'bottom',
							a = s ? 'left' : 'top',
							c = s ? 'width' : 'height';
						return (
							n[l] < r(i[a]) && (t.offsets.popper[a] = r(i[a]) - n[c]),
							n[a] > r(i[l]) && (t.offsets.popper[a] = r(i[l])),
							t
						);
					},
				},
				arrow: {
					order: 500,
					enabled: !0,
					fn: function(t, e) {
						var n;
						if (!F(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
						var i = e.element;
						if ('string' == typeof i) {
							if (!(i = t.instance.popper.querySelector(i))) return t;
						} else if (!t.instance.popper.contains(i))
							return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t;
						var o = t.placement.split('-')[0],
							r = t.offsets,
							l = r.popper,
							a = r.reference,
							c = -1 !== ['left', 'right'].indexOf(o),
							h = c ? 'height' : 'width',
							f = c ? 'Top' : 'Left',
							p = f.toLowerCase(),
							u = c ? 'left' : 'top',
							d = c ? 'bottom' : 'right',
							m = H(i)[h];
						a[d] - m < l[p] && (t.offsets.popper[p] -= l[p] - (a[d] - m)),
							a[p] + m > l[d] && (t.offsets.popper[p] += a[p] + m - l[d]),
							(t.offsets.popper = T(t.offsets.popper));
						var v = a[p] + a[h] / 2 - m / 2,
							g = s(t.instance.popper),
							b = parseFloat(g['margin' + f], 10),
							w = parseFloat(g['border' + f + 'Width'], 10),
							y = v - t.offsets.popper[p] - b - w;
						return (
							(y = Math.max(Math.min(l[h] - m, y), 0)),
							(t.arrowElement = i),
							(t.offsets.arrow = (E((n = {}), p, Math.round(y)), E(n, u, ''), n)),
							t
						);
					},
					element: '[x-arrow]',
				},
				flip: {
					order: 600,
					enabled: !0,
					fn: function(t, e) {
						if (k(t.instance.modifiers, 'inner')) return t;
						if (t.flipped && t.placement === t.originalPlacement) return t;
						var n = x(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
							i = t.placement.split('-')[0],
							o = _(i),
							r = t.placement.split('-')[1] || '',
							s = [];
						switch (e.behavior) {
							case z.FLIP:
								s = [i, o];
								break;
							case z.CLOCKWISE:
								s = q(i);
								break;
							case z.COUNTERCLOCKWISE:
								s = q(i, !0);
								break;
							default:
								s = e.behavior;
						}
						return (
							s.forEach(function(l, a) {
								if (i !== l || s.length === a + 1) return t;
								(i = t.placement.split('-')[0]), (o = _(i));
								var c = t.offsets.popper,
									h = t.offsets.reference,
									f = Math.floor,
									p =
										('left' === i && f(c.right) > f(h.left)) ||
										('right' === i && f(c.left) < f(h.right)) ||
										('top' === i && f(c.bottom) > f(h.top)) ||
										('bottom' === i && f(c.top) < f(h.bottom)),
									u = f(c.left) < f(n.left),
									d = f(c.right) > f(n.right),
									m = f(c.top) < f(n.top),
									v = f(c.bottom) > f(n.bottom),
									g = ('left' === i && u) || ('right' === i && d) || ('top' === i && m) || ('bottom' === i && v),
									b = -1 !== ['top', 'bottom'].indexOf(i),
									w =
										!!e.flipVariations &&
										((b && 'start' === r && u) ||
											(b && 'end' === r && d) ||
											(!b && 'start' === r && m) ||
											(!b && 'end' === r && v));
								(p || g || w) &&
									((t.flipped = !0),
									(p || g) && (i = s[a + 1]),
									w &&
										(r = (function(t) {
											return 'end' === t ? 'start' : 'start' === t ? 'end' : t;
										})(r)),
									(t.placement = i + (r ? '-' + r : '')),
									(t.offsets.popper = L({}, t.offsets.popper, R(t.instance.popper, t.offsets.reference, t.placement))),
									(t = N(t.instance.modifiers, t, 'flip')));
							}),
							t
						);
					},
					behavior: 'flip',
					padding: 5,
					boundariesElement: 'viewport',
				},
				inner: {
					order: 700,
					enabled: !1,
					fn: function(t) {
						var e = t.placement,
							n = e.split('-')[0],
							i = t.offsets,
							o = i.popper,
							r = i.reference,
							s = -1 !== ['left', 'right'].indexOf(n),
							l = -1 === ['top', 'left'].indexOf(n);
						return (
							(o[s ? 'left' : 'top'] = r[n] - (l ? o[s ? 'width' : 'height'] : 0)),
							(t.placement = _(e)),
							(t.offsets.popper = T(o)),
							t
						);
					},
				},
				hide: {
					order: 800,
					enabled: !0,
					fn: function(t) {
						if (!F(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
						var e = t.offsets.reference,
							n = M(t.instance.modifiers, function(t) {
								return 'preventOverflow' === t.name;
							}).boundaries;
						if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
							if (!0 === t.hide) return t;
							(t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
						} else {
							if (!1 === t.hide) return t;
							(t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
						}
						return t;
					},
				},
				computeStyle: {
					order: 850,
					enabled: !0,
					fn: function(t, e) {
						var n = e.x,
							i = e.y,
							o = t.offsets.popper,
							r = M(t.instance.modifiers, function(t) {
								return 'applyStyle' === t.name;
							}).gpuAcceleration;
						void 0 !== r &&
							console.warn(
								'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
							);
						var s = void 0 !== r ? r : e.gpuAcceleration,
							l = p(t.instance.popper),
							a = Y(l),
							c = { position: o.position },
							h = (function(t, e) {
								var n = t.offsets,
									i = n.popper,
									o = n.reference,
									r = Math.round,
									s = Math.floor,
									l = function(t) {
										return t;
									},
									a = r(o.width),
									c = r(i.width),
									h = -1 !== ['left', 'right'].indexOf(t.placement),
									f = -1 !== t.placement.indexOf('-'),
									p = e ? (h || f || a % 2 == c % 2 ? r : s) : l,
									u = e ? r : l;
								return {
									left: p(a % 2 == 1 && c % 2 == 1 && !f && e ? i.left - 1 : i.left),
									top: u(i.top),
									bottom: u(i.bottom),
									right: p(i.right),
								};
							})(t, window.devicePixelRatio < 2 || !j),
							f = 'bottom' === n ? 'top' : 'bottom',
							u = 'right' === i ? 'left' : 'right',
							d = C('transform'),
							m = void 0,
							v = void 0;
						if (
							((v =
								'bottom' === f ? ('HTML' === l.nodeName ? -l.clientHeight + h.bottom : -a.height + h.bottom) : h.top),
							(m = 'right' === u ? ('HTML' === l.nodeName ? -l.clientWidth + h.right : -a.width + h.right) : h.left),
							s && d)
						)
							(c[d] = 'translate3d(' + m + 'px, ' + v + 'px, 0)'), (c[f] = 0), (c[u] = 0), (c.willChange = 'transform');
						else {
							var g = 'bottom' === f ? -1 : 1,
								b = 'right' === u ? -1 : 1;
							(c[f] = v * g), (c[u] = m * b), (c.willChange = f + ', ' + u);
						}
						var w = { 'x-placement': t.placement };
						return (
							(t.attributes = L({}, w, t.attributes)),
							(t.styles = L({}, c, t.styles)),
							(t.arrowStyles = L({}, t.offsets.arrow, t.arrowStyles)),
							t
						);
					},
					gpuAcceleration: !0,
					x: 'bottom',
					y: 'right',
				},
				applyStyle: {
					order: 900,
					enabled: !0,
					fn: function(t) {
						var e, n;
						return (
							I(t.instance.popper, t.styles),
							(e = t.instance.popper),
							(n = t.attributes),
							Object.keys(n).forEach(function(t) {
								!1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
							}),
							t.arrowElement && Object.keys(t.arrowStyles).length && I(t.arrowElement, t.arrowStyles),
							t
						);
					},
					onLoad: function(t, e, n, i, o) {
						var r = S(o, e, t, n.positionFixed),
							s = X(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
						return e.setAttribute('x-placement', s), I(e, { position: n.positionFixed ? 'fixed' : 'absolute' }), n;
					},
					gpuAcceleration: void 0,
				},
			},
		},
		$ = (function() {
			function t(e, n) {
				var i = this,
					s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				w(this, t),
					(this.scheduleUpdate = function() {
						return requestAnimationFrame(i.update);
					}),
					(this.update = o(this.update.bind(this))),
					(this.options = L({}, t.Defaults, s)),
					(this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
					(this.reference = e && e.jquery ? e[0] : e),
					(this.popper = n && n.jquery ? n[0] : n),
					(this.options.modifiers = {}),
					Object.keys(L({}, t.Defaults.modifiers, s.modifiers)).forEach(function(e) {
						i.options.modifiers[e] = L({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {});
					}),
					(this.modifiers = Object.keys(this.options.modifiers)
						.map(function(t) {
							return L({ name: t }, i.options.modifiers[t]);
						})
						.sort(function(t, e) {
							return t.order - e.order;
						})),
					this.modifiers.forEach(function(t) {
						t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
					}),
					this.update();
				var l = this.options.eventsEnabled;
				l && this.enableEventListeners(), (this.state.eventsEnabled = l);
			}
			return (
				y(t, [
					{
						key: 'update',
						value: function() {
							return function() {
								if (!this.state.isDestroyed) {
									var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
									(t.offsets.reference = S(this.state, this.popper, this.reference, this.options.positionFixed)),
										(t.placement = X(
											this.options.placement,
											t.offsets.reference,
											this.popper,
											this.reference,
											this.options.modifiers.flip.boundariesElement,
											this.options.modifiers.flip.padding,
										)),
										(t.originalPlacement = t.placement),
										(t.positionFixed = this.options.positionFixed),
										(t.offsets.popper = R(this.popper, t.offsets.reference, t.placement)),
										(t.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
										(t = N(this.modifiers, t)),
										this.state.isCreated
											? this.options.onUpdate(t)
											: ((this.state.isCreated = !0), this.options.onCreate(t));
								}
							}.call(this);
						},
					},
					{
						key: 'destroy',
						value: function() {
							return function() {
								return (
									(this.state.isDestroyed = !0),
									k(this.modifiers, 'applyStyle') &&
										(this.popper.removeAttribute('x-placement'),
										(this.popper.style.position = ''),
										(this.popper.style.top = ''),
										(this.popper.style.left = ''),
										(this.popper.style.right = ''),
										(this.popper.style.bottom = ''),
										(this.popper.style.willChange = ''),
										(this.popper.style[C('transform')] = '')),
									this.disableEventListeners(),
									this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
									this
								);
							}.call(this);
						},
					},
					{
						key: 'enableEventListeners',
						value: function() {
							return function() {
								this.state.eventsEnabled ||
									(this.state = D(this.reference, this.options, this.state, this.scheduleUpdate));
							}.call(this);
						},
					},
					{
						key: 'disableEventListeners',
						value: function() {
							return P.call(this);
						},
					},
				]),
				t
			);
		})();
	return (
		($.Utils = ('undefined' != typeof window ? window : global).PopperUtils), ($.placements = U), ($.Defaults = G), $
	);
}),
	(function(t, e) {
		'object' == typeof exports && 'undefined' != typeof module
			? (module.exports = e(require('popper.js')))
			: 'function' == typeof define && define.amd
			? define(['popper.js'], e)
			: (t.Tooltip = e(t.Popper));
	})(this, function(t) {
		'use strict';
		t = t && t.hasOwnProperty('default') ? t.default : t;
		var e = function(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
			},
			n = (function() {
				function t(t, e) {
					for (var n, i = 0; i < e.length; i++)
						((n = e[i]).enumerable = n.enumerable || !1),
							(n.configurable = !0),
							'value' in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n);
				}
				return function(e, n, i) {
					return n && t(e.prototype, n), i && t(e, i), e;
				};
			})(),
			i =
				Object.assign ||
				function(t) {
					for (var e, n = 1; n < arguments.length; n++)
						for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
					return t;
				},
			o = {
				container: !1,
				delay: 0,
				html: !1,
				placement: 'top',
				title: '',
				template:
					'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: 'hover focus',
				offset: 0,
				arrowSelector: '.tooltip-arrow, .tooltip__arrow',
				innerSelector: '.tooltip-inner, .tooltip__inner',
			},
			r = (function() {
				function r(t, n) {
					e(this, r), s.call(this), (n = i({}, o, n)), t.jquery && (t = t[0]), (this.reference = t), (this.options = n);
					var l =
						'string' == typeof n.trigger
							? n.trigger.split(' ').filter(function(t) {
									return -1 !== ['click', 'hover', 'focus'].indexOf(t);
							  })
							: [];
					(this._isOpen = !1), (this._popperOptions = {}), this._setEventListeners(t, l, n);
				}
				return (
					n(r, [
						{
							key: '_create',
							value: function(t, e, n, i) {
								var o = window.document.createElement('div');
								o.innerHTML = e.trim();
								var r = o.childNodes[0];
								(r.id =
									'tooltip_' +
									Math.random()
										.toString(36)
										.substr(2, 10)),
									r.setAttribute('aria-hidden', 'false');
								var s = o.querySelector(this.options.innerSelector);
								return this._addTitleContent(t, n, i, s), r;
							},
						},
						{
							key: '_addTitleContent',
							value: function(t, e, n, i) {
								if (1 === e.nodeType || 11 === e.nodeType) n && i.appendChild(e);
								else if (
									(function(t) {
										return t && '[object Function]' === {}.toString.call(t);
									})(e)
								) {
									var o = e.call(t);
									n ? (i.innerHTML = o) : (i.textContent = o);
								} else n ? (i.innerHTML = e) : (i.textContent = e);
							},
						},
						{
							key: '_show',
							value: function(e, n) {
								if (this._isOpen && !this._isOpening) return this;
								if (((this._isOpen = !0), this._tooltipNode))
									return (
										(this._tooltipNode.style.visibility = 'visible'),
										this._tooltipNode.setAttribute('aria-hidden', 'false'),
										this.popperInstance.update(),
										this
									);
								var o = e.getAttribute('title') || n.title;
								if (!o) return this;
								var r = this._create(e, n.template, o, n.html);
								e.setAttribute('aria-describedby', r.id);
								var s = this._findContainer(n.container, e);
								return (
									this._append(r, s),
									(this._popperOptions = i({}, n.popperOptions, { placement: n.placement })),
									(this._popperOptions.modifiers = i({}, this._popperOptions.modifiers, {
										arrow: { element: this.options.arrowSelector },
										offset: { offset: n.offset },
									})),
									n.boundariesElement &&
										(this._popperOptions.modifiers.preventOverflow = { boundariesElement: n.boundariesElement }),
									(this.popperInstance = new t(e, r, this._popperOptions)),
									(this._tooltipNode = r),
									this
								);
							},
						},
						{
							key: '_hide',
							value: function() {
								return this._isOpen
									? ((this._isOpen = !1),
									  (this._tooltipNode.style.visibility = 'hidden'),
									  this._tooltipNode.setAttribute('aria-hidden', 'true'),
									  this)
									: this;
							},
						},
						{
							key: '_dispose',
							value: function() {
								var t = this;
								return (
									this._events.forEach(function(e) {
										var n = e.func,
											i = e.event;
										t.reference.removeEventListener(i, n);
									}),
									(this._events = []),
									this._tooltipNode &&
										(this._hide(),
										this.popperInstance.destroy(),
										!this.popperInstance.options.removeOnDestroy &&
											(this._tooltipNode.parentNode.removeChild(this._tooltipNode), (this._tooltipNode = null))),
									this
								);
							},
						},
						{
							key: '_findContainer',
							value: function(t, e) {
								return (
									'string' == typeof t ? (t = window.document.querySelector(t)) : !1 === t && (t = e.parentNode), t
								);
							},
						},
						{
							key: '_append',
							value: function(t, e) {
								e.appendChild(t);
							},
						},
						{
							key: '_setEventListeners',
							value: function(t, e, n) {
								var i = this,
									o = [],
									r = [];
								e.forEach(function(t) {
									'hover' === t
										? (o.push('mouseenter'), r.push('mouseleave'))
										: 'focus' === t
										? (o.push('focus'), r.push('blur'))
										: 'click' === t && (o.push('click'), r.push('click'));
								}),
									o.forEach(function(e) {
										var o = function(e) {
											!0 === i._isOpening || ((e.usedByTooltip = !0), i._scheduleShow(t, n.delay, n, e));
										};
										i._events.push({ event: e, func: o }), t.addEventListener(e, o);
									}),
									r.forEach(function(e) {
										var o = function(e) {
											!0 === e.usedByTooltip || i._scheduleHide(t, n.delay, n, e);
										};
										i._events.push({ event: e, func: o }),
											t.addEventListener(e, o),
											'click' === e &&
												n.closeOnClickOutside &&
												document.addEventListener(
													'mousedown',
													function(e) {
														if (i._isOpening) {
															var n = i.popperInstance.popper;
															t.contains(e.target) || n.contains(e.target) || o(e);
														}
													},
													!0,
												);
									});
							},
						},
						{
							key: '_scheduleShow',
							value: function(t, e, n) {
								var i = this;
								this._isOpening = !0;
								var o = (e && e.show) || e || 0;
								this._showTimeout = window.setTimeout(function() {
									return i._show(t, n);
								}, o);
							},
						},
						{
							key: '_scheduleHide',
							value: function(t, e, n, i) {
								var o = this;
								this._isOpening = !1;
								var r = (e && e.hide) || e || 0;
								window.setTimeout(function() {
									if (
										(window.clearTimeout(o._showTimeout), !1 !== o._isOpen && document.body.contains(o._tooltipNode))
									) {
										if ('mouseleave' === i.type) if (o._setTooltipNodeEvent(i, t, e, n)) return;
										o._hide(t, n);
									}
								}, r);
							},
						},
						{
							key: '_updateTitleContent',
							value: function(t) {
								if (void 0 !== this._tooltipNode) {
									var e = this._tooltipNode.parentNode.querySelector(this.options.innerSelector);
									this._clearTitleContent(
										e,
										this.options.html,
										this.reference.getAttribute('title') || this.options.title,
									),
										this._addTitleContent(this.reference, t, this.options.html, e),
										(this.options.title = t),
										this.popperInstance.update();
								} else void 0 !== this.options.title && (this.options.title = t);
							},
						},
						{
							key: '_clearTitleContent',
							value: function(t, e, n) {
								1 === n.nodeType || 11 === n.nodeType
									? e && t.removeChild(n)
									: e
									? (t.innerHTML = '')
									: (t.textContent = '');
							},
						},
					]),
					r
				);
			})(),
			s = function() {
				var t = this;
				(this.show = function() {
					return t._show(t.reference, t.options);
				}),
					(this.hide = function() {
						return t._hide();
					}),
					(this.dispose = function() {
						return t._dispose();
					}),
					(this.toggle = function() {
						return t._isOpen ? t.hide() : t.show();
					}),
					(this.updateTitleContent = function(e) {
						return t._updateTitleContent(e);
					}),
					(this._events = []),
					(this._setTooltipNodeEvent = function(e, n, i, o) {
						var r = e.relatedreference || e.toElement || e.relatedTarget;
						return (
							!!t._tooltipNode.contains(r) &&
							(t._tooltipNode.addEventListener(e.type, function i(r) {
								var s = r.relatedreference || r.toElement || r.relatedTarget;
								t._tooltipNode.removeEventListener(e.type, i), n.contains(s) || t._scheduleHide(n, o.delay, o, r);
							}),
							!0)
						);
					});
			};
		return r;
	}),
	(function(t, e) {
		'object' == typeof exports && 'undefined' != typeof module
			? (module.exports = e())
			: 'function' == typeof define && define.amd
			? define(e)
			: (t.PerfectScrollbar = e());
	})(this, function() {
		'use strict';
		function t(t) {
			return getComputedStyle(t);
		}
		function e(t, e) {
			for (var n in e) {
				var i = e[n];
				'number' == typeof i && (i += 'px'), (t.style[n] = i);
			}
			return t;
		}
		function n(t) {
			var e = document.createElement('div');
			return (e.className = t), e;
		}
		var i =
			'undefined' != typeof Element &&
			(Element.prototype.matches ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector);
		function o(t, e) {
			if (!i) throw new Error('No element matching method supported');
			return i.call(t, e);
		}
		function r(t) {
			t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
		}
		function s(t, e) {
			return Array.prototype.filter.call(t.children, function(t) {
				return o(t, e);
			});
		}
		var l = {
				main: 'ps',
				element: {
					thumb: function(t) {
						return 'ps__thumb-' + t;
					},
					rail: function(t) {
						return 'ps__rail-' + t;
					},
					consuming: 'ps__child--consume',
				},
				state: {
					focus: 'ps--focus',
					clicking: 'ps--clicking',
					active: function(t) {
						return 'ps--active-' + t;
					},
					scrolling: function(t) {
						return 'ps--scrolling-' + t;
					},
				},
			},
			a = { x: null, y: null };
		function c(t, e) {
			var n = t.element.classList,
				i = l.state.scrolling(e);
			n.contains(i) ? clearTimeout(a[e]) : n.add(i);
		}
		function h(t, e) {
			a[e] = setTimeout(function() {
				return t.isAlive && t.element.classList.remove(l.state.scrolling(e));
			}, t.settings.scrollingThreshold);
		}
		var f = function(t) {
				(this.element = t), (this.handlers = {});
			},
			p = { isEmpty: { configurable: !0 } };
		(f.prototype.bind = function(t, e) {
			void 0 === this.handlers[t] && (this.handlers[t] = []),
				this.handlers[t].push(e),
				this.element.addEventListener(t, e, !1);
		}),
			(f.prototype.unbind = function(t, e) {
				var n = this;
				this.handlers[t] = this.handlers[t].filter(function(i) {
					return !(!e || i === e) || (n.element.removeEventListener(t, i, !1), !1);
				});
			}),
			(f.prototype.unbindAll = function() {
				for (var t in this.handlers) this.unbind(t);
			}),
			(p.isEmpty.get = function() {
				var t = this;
				return Object.keys(this.handlers).every(function(e) {
					return 0 === t.handlers[e].length;
				});
			}),
			Object.defineProperties(f.prototype, p);
		var u = function() {
			this.eventElements = [];
		};
		function d(t) {
			if ('function' == typeof window.CustomEvent) return new CustomEvent(t);
			var e = document.createEvent('CustomEvent');
			return e.initCustomEvent(t, !1, !1, void 0), e;
		}
		(u.prototype.eventElement = function(t) {
			var e = this.eventElements.filter(function(e) {
				return e.element === t;
			})[0];
			return e || ((e = new f(t)), this.eventElements.push(e)), e;
		}),
			(u.prototype.bind = function(t, e, n) {
				this.eventElement(t).bind(e, n);
			}),
			(u.prototype.unbind = function(t, e, n) {
				var i = this.eventElement(t);
				i.unbind(e, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1);
			}),
			(u.prototype.unbindAll = function() {
				this.eventElements.forEach(function(t) {
					return t.unbindAll();
				}),
					(this.eventElements = []);
			}),
			(u.prototype.once = function(t, e, n) {
				var i = this.eventElement(t),
					o = function(t) {
						i.unbind(e, o), n(t);
					};
				i.bind(e, o);
			});
		var m = function(t, e, n, i, o) {
			var r;
			if ((void 0 === i && (i = !0), void 0 === o && (o = !1), 'top' === e))
				r = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
			else {
				if ('left' !== e) throw new Error('A proper axis should be provided');
				r = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
			}
			!(function(t, e, n, i, o) {
				var r = n[0],
					s = n[1],
					l = n[2],
					a = n[3],
					f = n[4],
					p = n[5];
				void 0 === i && (i = !0);
				void 0 === o && (o = !1);
				var u = t.element;
				(t.reach[a] = null), u[l] < 1 && (t.reach[a] = 'start');
				u[l] > t[r] - t[s] - 1 && (t.reach[a] = 'end');
				e &&
					(u.dispatchEvent(d('ps-scroll-' + a)),
					e < 0 ? u.dispatchEvent(d('ps-scroll-' + f)) : e > 0 && u.dispatchEvent(d('ps-scroll-' + p)),
					i &&
						(function(t, e) {
							c(t, e), h(t, e);
						})(t, a));
				t.reach[a] && (e || o) && u.dispatchEvent(d('ps-' + a + '-reach-' + t.reach[a]));
			})(t, n, r, i, o);
		};
		function v(t) {
			return parseInt(t, 10) || 0;
		}
		var g = {
				isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
				supportsTouch:
					'undefined' != typeof window &&
					('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
				supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
				isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
			},
			b = function(t) {
				var n = t.element,
					i = Math.floor(n.scrollTop);
				(t.containerWidth = n.clientWidth),
					(t.containerHeight = n.clientHeight),
					(t.contentWidth = n.scrollWidth),
					(t.contentHeight = n.scrollHeight),
					n.contains(t.scrollbarXRail) ||
						(s(n, l.element.rail('x')).forEach(function(t) {
							return r(t);
						}),
						n.appendChild(t.scrollbarXRail)),
					n.contains(t.scrollbarYRail) ||
						(s(n, l.element.rail('y')).forEach(function(t) {
							return r(t);
						}),
						n.appendChild(t.scrollbarYRail)),
					!t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
						? ((t.scrollbarXActive = !0),
						  (t.railXWidth = t.containerWidth - t.railXMarginWidth),
						  (t.railXRatio = t.containerWidth / t.railXWidth),
						  (t.scrollbarXWidth = w(t, v((t.railXWidth * t.containerWidth) / t.contentWidth))),
						  (t.scrollbarXLeft = v(
								((t.negativeScrollAdjustment + n.scrollLeft) * (t.railXWidth - t.scrollbarXWidth)) /
									(t.contentWidth - t.containerWidth),
						  )))
						: (t.scrollbarXActive = !1),
					!t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
						? ((t.scrollbarYActive = !0),
						  (t.railYHeight = t.containerHeight - t.railYMarginHeight),
						  (t.railYRatio = t.containerHeight / t.railYHeight),
						  (t.scrollbarYHeight = w(t, v((t.railYHeight * t.containerHeight) / t.contentHeight))),
						  (t.scrollbarYTop = v((i * (t.railYHeight - t.scrollbarYHeight)) / (t.contentHeight - t.containerHeight))))
						: (t.scrollbarYActive = !1),
					t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
					t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
						(t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
					(function(t, n) {
						var i = { width: n.railXWidth },
							o = Math.floor(t.scrollTop);
						n.isRtl
							? (i.left = n.negativeScrollAdjustment + t.scrollLeft + n.containerWidth - n.contentWidth)
							: (i.left = t.scrollLeft);
						n.isScrollbarXUsingBottom ? (i.bottom = n.scrollbarXBottom - o) : (i.top = n.scrollbarXTop + o);
						e(n.scrollbarXRail, i);
						var r = { top: o, height: n.railYHeight };
						n.isScrollbarYUsingRight
							? n.isRtl
								? (r.right =
										n.contentWidth -
										(n.negativeScrollAdjustment + t.scrollLeft) -
										n.scrollbarYRight -
										n.scrollbarYOuterWidth)
								: (r.right = n.scrollbarYRight - t.scrollLeft)
							: n.isRtl
							? (r.left =
									n.negativeScrollAdjustment +
									t.scrollLeft +
									2 * n.containerWidth -
									n.contentWidth -
									n.scrollbarYLeft -
									n.scrollbarYOuterWidth)
							: (r.left = n.scrollbarYLeft + t.scrollLeft);
						e(n.scrollbarYRail, r),
							e(n.scrollbarX, { left: n.scrollbarXLeft, width: n.scrollbarXWidth - n.railBorderXWidth }),
							e(n.scrollbarY, { top: n.scrollbarYTop, height: n.scrollbarYHeight - n.railBorderYWidth });
					})(n, t),
					t.scrollbarXActive
						? n.classList.add(l.state.active('x'))
						: (n.classList.remove(l.state.active('x')),
						  (t.scrollbarXWidth = 0),
						  (t.scrollbarXLeft = 0),
						  (n.scrollLeft = 0)),
					t.scrollbarYActive
						? n.classList.add(l.state.active('y'))
						: (n.classList.remove(l.state.active('y')),
						  (t.scrollbarYHeight = 0),
						  (t.scrollbarYTop = 0),
						  (n.scrollTop = 0));
			};
		function w(t, e) {
			return (
				t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)),
				t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)),
				e
			);
		}
		function y(t, e) {
			var n = e[0],
				i = e[1],
				o = e[2],
				r = e[3],
				s = e[4],
				a = e[5],
				f = e[6],
				p = e[7],
				u = e[8],
				d = t.element,
				m = null,
				v = null,
				g = null;
			function w(e) {
				(d[f] = m + g * (e[o] - v)), c(t, p), b(t), e.stopPropagation(), e.preventDefault();
			}
			function y() {
				h(t, p), t[u].classList.remove(l.state.clicking), t.event.unbind(t.ownerDocument, 'mousemove', w);
			}
			t.event.bind(t[s], 'mousedown', function(e) {
				(m = d[f]),
					(v = e[o]),
					(g = (t[i] - t[n]) / (t[r] - t[a])),
					t.event.bind(t.ownerDocument, 'mousemove', w),
					t.event.once(t.ownerDocument, 'mouseup', y),
					t[u].classList.add(l.state.clicking),
					e.stopPropagation(),
					e.preventDefault();
			});
		}
		var E = {
				'click-rail': function(t) {
					t.event.bind(t.scrollbarY, 'mousedown', function(t) {
						return t.stopPropagation();
					}),
						t.event.bind(t.scrollbarYRail, 'mousedown', function(e) {
							var n =
								e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
							(t.element.scrollTop += n * t.containerHeight), b(t), e.stopPropagation();
						}),
						t.event.bind(t.scrollbarX, 'mousedown', function(t) {
							return t.stopPropagation();
						}),
						t.event.bind(t.scrollbarXRail, 'mousedown', function(e) {
							var n =
								e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft
									? 1
									: -1;
							(t.element.scrollLeft += n * t.containerWidth), b(t), e.stopPropagation();
						});
				},
				'drag-thumb': function(t) {
					y(t, [
						'containerWidth',
						'contentWidth',
						'pageX',
						'railXWidth',
						'scrollbarX',
						'scrollbarXWidth',
						'scrollLeft',
						'x',
						'scrollbarXRail',
					]),
						y(t, [
							'containerHeight',
							'contentHeight',
							'pageY',
							'railYHeight',
							'scrollbarY',
							'scrollbarYHeight',
							'scrollTop',
							'y',
							'scrollbarYRail',
						]);
				},
				keyboard: function(t) {
					var e = t.element;
					t.event.bind(t.ownerDocument, 'keydown', function(n) {
						if (
							!((n.isDefaultPrevented && n.isDefaultPrevented()) || n.defaultPrevented) &&
							(o(e, ':hover') || o(t.scrollbarX, ':focus') || o(t.scrollbarY, ':focus'))
						) {
							var i,
								r = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
							if (r) {
								if ('IFRAME' === r.tagName) r = r.contentDocument.activeElement;
								else for (; r.shadowRoot; ) r = r.shadowRoot.activeElement;
								if (
									o((i = r), 'input,[contenteditable]') ||
									o(i, 'select,[contenteditable]') ||
									o(i, 'textarea,[contenteditable]') ||
									o(i, 'button,[contenteditable]')
								)
									return;
							}
							var s = 0,
								l = 0;
							switch (n.which) {
								case 37:
									s = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
									break;
								case 38:
									l = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
									break;
								case 39:
									s = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
									break;
								case 40:
									l = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
									break;
								case 32:
									l = n.shiftKey ? t.containerHeight : -t.containerHeight;
									break;
								case 33:
									l = t.containerHeight;
									break;
								case 34:
									l = -t.containerHeight;
									break;
								case 36:
									l = t.contentHeight;
									break;
								case 35:
									l = -t.contentHeight;
									break;
								default:
									return;
							}
							(t.settings.suppressScrollX && 0 !== s) ||
								(t.settings.suppressScrollY && 0 !== l) ||
								((e.scrollTop -= l),
								(e.scrollLeft += s),
								b(t),
								(function(n, i) {
									var o = Math.floor(e.scrollTop);
									if (0 === n) {
										if (!t.scrollbarYActive) return !1;
										if ((0 === o && i > 0) || (o >= t.contentHeight - t.containerHeight && i < 0))
											return !t.settings.wheelPropagation;
									}
									var r = e.scrollLeft;
									if (0 === i) {
										if (!t.scrollbarXActive) return !1;
										if ((0 === r && n < 0) || (r >= t.contentWidth - t.containerWidth && n > 0))
											return !t.settings.wheelPropagation;
									}
									return !0;
								})(s, l) && n.preventDefault());
						}
					});
				},
				wheel: function(e) {
					var n = e.element;
					function i(i) {
						var o = (function(t) {
								var e = t.deltaX,
									n = -1 * t.deltaY;
								return (
									(void 0 !== e && void 0 !== n) || ((e = (-1 * t.wheelDeltaX) / 6), (n = t.wheelDeltaY / 6)),
									t.deltaMode && 1 === t.deltaMode && ((e *= 10), (n *= 10)),
									e != e && n != n && ((e = 0), (n = t.wheelDelta)),
									t.shiftKey ? [-n, -e] : [e, n]
								);
							})(i),
							r = o[0],
							s = o[1];
						if (
							!(function(e, i, o) {
								if (!g.isWebKit && n.querySelector('select:focus')) return !0;
								if (!n.contains(e)) return !1;
								for (var r = e; r && r !== n; ) {
									if (r.classList.contains(l.element.consuming)) return !0;
									var s = t(r);
									if ([s.overflow, s.overflowX, s.overflowY].join('').match(/(scroll|auto)/)) {
										var a = r.scrollHeight - r.clientHeight;
										if (a > 0 && !((0 === r.scrollTop && o > 0) || (r.scrollTop === a && o < 0))) return !0;
										var c = r.scrollWidth - r.clientWidth;
										if (c > 0 && !((0 === r.scrollLeft && i < 0) || (r.scrollLeft === c && i > 0))) return !0;
									}
									r = r.parentNode;
								}
								return !1;
							})(i.target, r, s)
						) {
							var a = !1;
							e.settings.useBothWheelAxes
								? e.scrollbarYActive && !e.scrollbarXActive
									? (s ? (n.scrollTop -= s * e.settings.wheelSpeed) : (n.scrollTop += r * e.settings.wheelSpeed),
									  (a = !0))
									: e.scrollbarXActive &&
									  !e.scrollbarYActive &&
									  (r ? (n.scrollLeft += r * e.settings.wheelSpeed) : (n.scrollLeft -= s * e.settings.wheelSpeed),
									  (a = !0))
								: ((n.scrollTop -= s * e.settings.wheelSpeed), (n.scrollLeft += r * e.settings.wheelSpeed)),
								b(e),
								(a =
									a ||
									(function(t, i) {
										var o = Math.floor(n.scrollTop),
											r = 0 === n.scrollTop,
											s = o + n.offsetHeight === n.scrollHeight,
											l = 0 === n.scrollLeft,
											a = n.scrollLeft + n.offsetWidth === n.scrollWidth;
										return !(Math.abs(i) > Math.abs(t) ? r || s : l || a) || !e.settings.wheelPropagation;
									})(r, s)) &&
									!i.ctrlKey &&
									(i.stopPropagation(), i.preventDefault());
						}
					}
					void 0 !== window.onwheel
						? e.event.bind(n, 'wheel', i)
						: void 0 !== window.onmousewheel && e.event.bind(n, 'mousewheel', i);
				},
				touch: function(e) {
					if (g.supportsTouch || g.supportsIePointer) {
						var n = e.element,
							i = {},
							o = 0,
							r = {},
							s = null;
						g.supportsTouch
							? (e.event.bind(n, 'touchstart', f), e.event.bind(n, 'touchmove', p), e.event.bind(n, 'touchend', u))
							: g.supportsIePointer &&
							  (window.PointerEvent
									? (e.event.bind(n, 'pointerdown', f),
									  e.event.bind(n, 'pointermove', p),
									  e.event.bind(n, 'pointerup', u))
									: window.MSPointerEvent &&
									  (e.event.bind(n, 'MSPointerDown', f),
									  e.event.bind(n, 'MSPointerMove', p),
									  e.event.bind(n, 'MSPointerUp', u)));
					}
					function a(t, i) {
						(n.scrollTop -= i), (n.scrollLeft -= t), b(e);
					}
					function c(t) {
						return t.targetTouches ? t.targetTouches[0] : t;
					}
					function h(t) {
						return !(
							(t.pointerType && 'pen' === t.pointerType && 0 === t.buttons) ||
							((!t.targetTouches || 1 !== t.targetTouches.length) &&
								(!t.pointerType || 'mouse' === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
						);
					}
					function f(t) {
						if (h(t)) {
							var e = c(t);
							(i.pageX = e.pageX), (i.pageY = e.pageY), (o = new Date().getTime()), null !== s && clearInterval(s);
						}
					}
					function p(s) {
						if (h(s)) {
							var f = c(s),
								p = { pageX: f.pageX, pageY: f.pageY },
								u = p.pageX - i.pageX,
								d = p.pageY - i.pageY;
							if (
								(function(e, i, o) {
									if (!n.contains(e)) return !1;
									for (var r = e; r && r !== n; ) {
										if (r.classList.contains(l.element.consuming)) return !0;
										var s = t(r);
										if ([s.overflow, s.overflowX, s.overflowY].join('').match(/(scroll|auto)/)) {
											var a = r.scrollHeight - r.clientHeight;
											if (a > 0 && !((0 === r.scrollTop && o > 0) || (r.scrollTop === a && o < 0))) return !0;
											var c = r.scrollLeft - r.clientWidth;
											if (c > 0 && !((0 === r.scrollLeft && i < 0) || (r.scrollLeft === c && i > 0))) return !0;
										}
										r = r.parentNode;
									}
									return !1;
								})(s.target, u, d)
							)
								return;
							a(u, d), (i = p);
							var m = new Date().getTime(),
								v = m - o;
							v > 0 && ((r.x = u / v), (r.y = d / v), (o = m)),
								(function(t, i) {
									var o = Math.floor(n.scrollTop),
										r = n.scrollLeft,
										s = Math.abs(t),
										l = Math.abs(i);
									if (l > s) {
										if ((i < 0 && o === e.contentHeight - e.containerHeight) || (i > 0 && 0 === o))
											return 0 === window.scrollY && i > 0 && g.isChrome;
									} else if (s > l && ((t < 0 && r === e.contentWidth - e.containerWidth) || (t > 0 && 0 === r)))
										return !0;
									return !0;
								})(u, d) && s.preventDefault();
						}
					}
					function u() {
						e.settings.swipeEasing &&
							(clearInterval(s),
							(s = setInterval(function() {
								e.isInitialized
									? clearInterval(s)
									: r.x || r.y
									? Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01
										? clearInterval(s)
										: (a(30 * r.x, 30 * r.y), (r.x *= 0.8), (r.y *= 0.8))
									: clearInterval(s);
							}, 10)));
					}
				},
			},
			L = function(i, o) {
				var r = this;
				if ((void 0 === o && (o = {}), 'string' == typeof i && (i = document.querySelector(i)), !i || !i.nodeName))
					throw new Error('no element is specified to initialize PerfectScrollbar');
				for (var s in ((this.element = i),
				i.classList.add(l.main),
				(this.settings = {
					handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
					maxScrollbarLength: null,
					minScrollbarLength: null,
					scrollingThreshold: 1e3,
					scrollXMarginOffset: 0,
					scrollYMarginOffset: 0,
					suppressScrollX: !1,
					suppressScrollY: !1,
					swipeEasing: !0,
					useBothWheelAxes: !1,
					wheelPropagation: !0,
					wheelSpeed: 1,
				}),
				o))
					r.settings[s] = o[s];
				(this.containerWidth = null),
					(this.containerHeight = null),
					(this.contentWidth = null),
					(this.contentHeight = null);
				var a,
					c,
					h = function() {
						return i.classList.add(l.state.focus);
					},
					f = function() {
						return i.classList.remove(l.state.focus);
					};
				(this.isRtl = 'rtl' === t(i).direction),
					(this.isNegativeScroll = ((c = i.scrollLeft),
					(i.scrollLeft = -1),
					(a = i.scrollLeft < 0),
					(i.scrollLeft = c),
					a)),
					(this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0),
					(this.event = new u()),
					(this.ownerDocument = i.ownerDocument || document),
					(this.scrollbarXRail = n(l.element.rail('x'))),
					i.appendChild(this.scrollbarXRail),
					(this.scrollbarX = n(l.element.thumb('x'))),
					this.scrollbarXRail.appendChild(this.scrollbarX),
					this.scrollbarX.setAttribute('tabindex', 0),
					this.event.bind(this.scrollbarX, 'focus', h),
					this.event.bind(this.scrollbarX, 'blur', f),
					(this.scrollbarXActive = null),
					(this.scrollbarXWidth = null),
					(this.scrollbarXLeft = null);
				var p = t(this.scrollbarXRail);
				(this.scrollbarXBottom = parseInt(p.bottom, 10)),
					isNaN(this.scrollbarXBottom)
						? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = v(p.top)))
						: (this.isScrollbarXUsingBottom = !0),
					(this.railBorderXWidth = v(p.borderLeftWidth) + v(p.borderRightWidth)),
					e(this.scrollbarXRail, { display: 'block' }),
					(this.railXMarginWidth = v(p.marginLeft) + v(p.marginRight)),
					e(this.scrollbarXRail, { display: '' }),
					(this.railXWidth = null),
					(this.railXRatio = null),
					(this.scrollbarYRail = n(l.element.rail('y'))),
					i.appendChild(this.scrollbarYRail),
					(this.scrollbarY = n(l.element.thumb('y'))),
					this.scrollbarYRail.appendChild(this.scrollbarY),
					this.scrollbarY.setAttribute('tabindex', 0),
					this.event.bind(this.scrollbarY, 'focus', h),
					this.event.bind(this.scrollbarY, 'blur', f),
					(this.scrollbarYActive = null),
					(this.scrollbarYHeight = null),
					(this.scrollbarYTop = null);
				var d = t(this.scrollbarYRail);
				(this.scrollbarYRight = parseInt(d.right, 10)),
					isNaN(this.scrollbarYRight)
						? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = v(d.left)))
						: (this.isScrollbarYUsingRight = !0),
					(this.scrollbarYOuterWidth = this.isRtl
						? (function(e) {
								var n = t(e);
								return v(n.width) + v(n.paddingLeft) + v(n.paddingRight) + v(n.borderLeftWidth) + v(n.borderRightWidth);
						  })(this.scrollbarY)
						: null),
					(this.railBorderYWidth = v(d.borderTopWidth) + v(d.borderBottomWidth)),
					e(this.scrollbarYRail, { display: 'block' }),
					(this.railYMarginHeight = v(d.marginTop) + v(d.marginBottom)),
					e(this.scrollbarYRail, { display: '' }),
					(this.railYHeight = null),
					(this.railYRatio = null),
					(this.reach = {
						x: i.scrollLeft <= 0 ? 'start' : i.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
						y: i.scrollTop <= 0 ? 'start' : i.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null,
					}),
					(this.isAlive = !0),
					this.settings.handlers.forEach(function(t) {
						return E[t](r);
					}),
					(this.lastScrollTop = Math.floor(i.scrollTop)),
					(this.lastScrollLeft = i.scrollLeft),
					this.event.bind(this.element, 'scroll', function(t) {
						return r.onScroll(t);
					}),
					b(this);
			};
		return (
			(L.prototype.update = function() {
				this.isAlive &&
					((this.negativeScrollAdjustment = this.isNegativeScroll
						? this.element.scrollWidth - this.element.clientWidth
						: 0),
					e(this.scrollbarXRail, { display: 'block' }),
					e(this.scrollbarYRail, { display: 'block' }),
					(this.railXMarginWidth = v(t(this.scrollbarXRail).marginLeft) + v(t(this.scrollbarXRail).marginRight)),
					(this.railYMarginHeight = v(t(this.scrollbarYRail).marginTop) + v(t(this.scrollbarYRail).marginBottom)),
					e(this.scrollbarXRail, { display: 'none' }),
					e(this.scrollbarYRail, { display: 'none' }),
					b(this),
					m(this, 'top', 0, !1, !0),
					m(this, 'left', 0, !1, !0),
					e(this.scrollbarXRail, { display: '' }),
					e(this.scrollbarYRail, { display: '' }));
			}),
			(L.prototype.onScroll = function(t) {
				this.isAlive &&
					(b(this),
					m(this, 'top', this.element.scrollTop - this.lastScrollTop),
					m(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
					(this.lastScrollTop = Math.floor(this.element.scrollTop)),
					(this.lastScrollLeft = this.element.scrollLeft));
			}),
			(L.prototype.destroy = function() {
				this.isAlive &&
					(this.event.unbindAll(),
					r(this.scrollbarX),
					r(this.scrollbarY),
					r(this.scrollbarXRail),
					r(this.scrollbarYRail),
					this.removePsClasses(),
					(this.element = null),
					(this.scrollbarX = null),
					(this.scrollbarY = null),
					(this.scrollbarXRail = null),
					(this.scrollbarYRail = null),
					(this.isAlive = !1));
			}),
			(L.prototype.removePsClasses = function() {
				this.element.className = this.element.className
					.split(' ')
					.filter(function(t) {
						return !t.match(/^ps([-_].+|)$/);
					})
					.join(' ');
			}),
			L
		);
	});
