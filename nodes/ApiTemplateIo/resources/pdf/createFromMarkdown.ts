import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCreateFromMarkdown = {
	resource: ['pdf'],
	operation: ['createFromMarkdown'],
};

export const createFromMarkdownDescription: INodeProperties[] = [
	{
		displayName: 'Markdown Content',
		name: 'markdownBody',
		type: 'string',
		typeOptions: { rows: 10 },
		required: true,
		default: '',
		placeholder: '# {{title}}\n\nThis is a **Markdown** document.',
		description:
			'The Markdown content for the PDF. Supports Jinja2 template syntax (e.g., {{title}}) for dynamic content.',
		displayOptions: { show: showOnlyForCreateFromMarkdown },
		routing: {
			send: {
				type: 'body',
				property: 'body',
			},
		},
	},
];
