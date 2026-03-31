import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateFromUrl = {
	resource: ['pdf'],
	operation: ['createFromUrl'],
};

export const createFromUrlDescription: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'https://example.com',
		description: 'The URL of the web page to convert into a PDF',
		displayOptions: { show: showOnlyForCreateFromUrl },
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},
];
