import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateFromHtml = {
	resource: ['pdf'],
	operation: ['createFromHtml'],
};

export const createFromHtmlDescription: INodeProperties[] = [
	{
		displayName: 'HTML Content',
		name: 'htmlBody',
		type: 'string',
		typeOptions: { rows: 10 },
		required: true,
		default: '',
		placeholder: '<h1>Hello {{name}}</h1>',
		description:
			'The HTML body content for the PDF. Supports Jinja2 template syntax (e.g., {{name}}) for dynamic content.',
		displayOptions: { show: showOnlyForCreateFromHtml },
		routing: {
			send: {
				type: 'body',
				property: 'body',
			},
		},
	},
];
