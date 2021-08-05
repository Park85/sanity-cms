export default {
	name: 'price',
	type: 'object',
	fields: [
		{
			name: 'price',
			type: 'number',
			title: 'Amount',
		},
		{
			name: 'unit',
			type: 'string',
			title: 'Unit',
			options: {
				list: [
					{title: 'Lakhs', value: 'L'},
					{title: 'Crores', value: 'Cr'},
				],
				layout: 'radio',
				direction: 'horizontal',
			},
		},
	],
};
