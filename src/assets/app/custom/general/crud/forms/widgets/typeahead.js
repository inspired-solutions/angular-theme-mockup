var KTTypeahead = (function() {
	var e = [
		'Alabama',
		'Alaska',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'Florida',
		'Georgia',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming',
	];
	return {
		init: function() {
			var a, n, t, o, i, s;
			$(
				'#kt_typeahead_1, #kt_typeahead_1_modal, #kt_typeahead_1_validate, #kt_typeahead_2_validate, #kt_typeahead_3_validate',
			).typeahead(
				{ hint: !0, highlight: !0, minLength: 1 },
				{
					name: 'states',
					source: ((a = e),
					function(e, n) {
						var t;
						(t = []),
							(substrRegex = new RegExp(e, 'i')),
							$.each(a, function(e, a) {
								substrRegex.test(a) && t.push(a);
							}),
							n(t);
					}),
				},
			),
				(n = new Bloodhound({
					datumTokenizer: Bloodhound.tokenizers.whitespace,
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					local: e,
				})),
				$('#kt_typeahead_2, #kt_typeahead_2_modal').typeahead(
					{ hint: !0, highlight: !0, minLength: 1 },
					{ name: 'states', source: n },
				),
				(t = new Bloodhound({
					datumTokenizer: Bloodhound.tokenizers.whitespace,
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					prefetch:
						'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/typeahead/countries.json',
				})),
				$('#kt_typeahead_3, #kt_typeahead_3_modal').typeahead(null, { name: 'countries', source: t }),
				(o = new Bloodhound({
					datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					prefetch: 'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/typeahead/movies.json',
				})),
				$('#kt_typeahead_4').typeahead(null, {
					name: 'best-pictures',
					display: 'value',
					source: o,
					templates: {
						empty: [
							'<div class="empty-message" style="padding: 10px 15px; text-align: center;">',
							'unable to find any Best Picture winners that match the current query',
							'</div>',
						].join('\n'),
						suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>'),
					},
				}),
				(i = new Bloodhound({
					datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					prefetch: 'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/typeahead/nba.json',
				})),
				(s = new Bloodhound({
					datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
					queryTokenizer: Bloodhound.tokenizers.whitespace,
					prefetch: 'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/typeahead/nhl.json',
				})),
				$('#kt_typeahead_5').typeahead(
					{ highlight: !0 },
					{
						name: 'nba-teams',
						display: 'team',
						source: i,
						templates: {
							header: '<h3 class="league-name" style="padding: 5px 15px; font-size: 1.2rem; margin:0;">NBA Teams</h3>',
						},
					},
					{
						name: 'nhl-teams',
						display: 'team',
						source: s,
						templates: {
							header: '<h3 class="league-name" style="padding: 5px 15px; font-size: 1.2rem; margin:0;">NHL Teams</h3>',
						},
					},
				);
		},
	};
})();
jQuery(document).ready(function() {
	KTTypeahead.init();
});
