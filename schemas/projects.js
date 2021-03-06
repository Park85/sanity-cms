export default {
	name: 'project',
	type: 'document',
	title: 'Projects',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
			},
		},
		{
			name: 'location',
			type: 'string',
			title: 'Location',
		},
		{
			name: 'price',
			type: 'price',
			title: 'Starting Price',
		},
		{
			name: 'bhk',
			type: 'bhk',
			title: 'BHK',
		},
		{
			name: 'area',
			type: 'number',
			title: 'Area (in acres)',
		},
		{
			name: 'image',
			type: 'project_image',
			title: 'Project Image',
		},
		{
			name: 'featured',
			type: 'boolean',
			title: 'Featured',
		},
	],
};
