'use strict';
var KTCalendarBasic = {
	init: function() {
		var t = moment().startOf('day'),
			e = t.format('YYYY-MM'),
			i = t
				.clone()
				.subtract(1, 'day')
				.format('YYYY-MM-DD'),
			n = t.format('YYYY-MM-DD'),
			r = t
				.clone()
				.add(1, 'day')
				.format('YYYY-MM-DD');
		$('#kt_calendar').fullCalendar({
			isRTL: KTUtil.isRTL(),
			header: { left: 'prev,next today', center: 'title', right: 'month,agendaWeek,agendaDay,listWeek' },
			editable: !0,
			eventLimit: !0,
			navLinks: !0,
			events: [
				{
					title: 'All Day Event',
					start: e + '-01',
					description: 'Lorem ipsum dolor sit incid idunt ut',
					className: 'fc-event-danger fc-event-solid-warning',
				},
				{
					title: 'Reporting',
					start: e + '-14T13:30:00',
					description: 'Lorem ipsum dolor incid idunt ut labore',
					end: e + '-14',
					className: 'fc-event-accent',
				},
				{
					title: 'Company Trip',
					start: e + '-02',
					description: 'Lorem ipsum dolor sit tempor incid',
					end: e + '-03',
					className: 'fc-event-primary',
				},
				{
					title: 'ICT Expo 2017 - Product Release',
					start: e + '-03',
					description: 'Lorem ipsum dolor sit tempor inci',
					end: e + '-05',
					className: 'fc-event-light fc-event-solid-primary',
				},
				{ title: 'Dinner', start: e + '-12', description: 'Lorem ipsum dolor sit amet, conse ctetur', end: e + '-10' },
				{
					id: 999,
					title: 'Repeating Event',
					start: e + '-09T16:00:00',
					description: 'Lorem ipsum dolor sit ncididunt ut labore',
					className: 'fc-event-danger',
				},
				{
					id: 1e3,
					title: 'Repeating Event',
					description: 'Lorem ipsum dolor sit amet, labore',
					start: e + '-16T16:00:00',
				},
				{
					title: 'Conference',
					start: i,
					end: r,
					description: 'Lorem ipsum dolor eius mod tempor labore',
					className: 'fc-event-accent',
				},
				{
					title: 'Meeting',
					start: n + 'T10:30:00',
					end: n + 'T12:30:00',
					description: 'Lorem ipsum dolor eiu idunt ut labore',
				},
				{
					title: 'Lunch',
					start: n + 'T12:00:00',
					className: 'fc-event-info',
					description: 'Lorem ipsum dolor sit amet, ut labore',
				},
				{
					title: 'Meeting',
					start: n + 'T14:30:00',
					className: 'fc-event-warning',
					description: 'Lorem ipsum conse ctetur adipi scing',
				},
				{
					title: 'Happy Hour',
					start: n + 'T17:30:00',
					className: 'fc-event-metal',
					description: 'Lorem ipsum dolor sit amet, conse ctetur',
				},
				{
					title: 'Dinner',
					start: n + 'T20:00:00',
					className: 'fc-event-solid-focus fc-event-light',
					description: 'Lorem ipsum dolor sit ctetur adipi scing',
				},
				{
					title: 'Birthday Party',
					start: r + 'T07:00:00',
					className: 'fc-event-primary',
					description: 'Lorem ipsum dolor sit amet, scing',
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: e + '-28',
					className: 'fc-event-solid-info fc-event-light',
					description: 'Lorem ipsum dolor sit amet, labore',
				},
			],
			eventRender: function(t, e) {
				e.hasClass('fc-day-grid-event')
					? (e.data('content', t.description), e.data('placement', 'top'), KTApp.initPopover(e))
					: e.hasClass('fc-time-grid-event')
					? e.find('.fc-title').append('<div class="fc-description">' + t.description + '</div>')
					: 0 !== e.find('.fc-list-item-title').lenght &&
					  e.find('.fc-list-item-title').append('<div class="fc-description">' + t.description + '</div>');
			},
		});
	},
};
jQuery(document).ready(function() {
	KTCalendarBasic.init();
});
