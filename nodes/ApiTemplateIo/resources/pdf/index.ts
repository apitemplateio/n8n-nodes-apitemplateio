import type { INodeProperties } from 'n8n-workflow';
import { createFromUrlDescription } from './createFromUrl';
import { createFromHtmlDescription } from './createFromHtml';
import { createFromMarkdownDescription } from './createFromMarkdown';
import { commonBodyFields, queryParamsDescription, pdfSettingsDescription } from './shared';

const showOnlyForPdf = {
	resource: ['pdf'],
};

export const pdfDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForPdf },
		options: [
			{
				name: 'Create From HTML',
				value: 'createFromHtml',
				action: 'Create a PDF from HTML',
				description: 'Create a PDF document from HTML content',
				routing: {
					request: {
						method: 'POST',
						url: '/v2/create-pdf-from-html',
					},
				},
			},
			{
				name: 'Create From Markdown',
				value: 'createFromMarkdown',
				action: 'Create a PDF from markdown',
				description: 'Create a PDF document from Markdown content',
				routing: {
					request: {
						method: 'POST',
						url: '/v2/create-pdf-from-markdown',
					},
				},
			},
			{
				name: 'Create From URL',
				value: 'createFromUrl',
				action: 'Create a PDF from a URL',
				description: 'Create a PDF document from a web page URL',
				routing: {
					request: {
						method: 'POST',
						url: '/v2/create-pdf-from-url',
					},
				},
			},
		],
		default: 'createFromHtml',
	},
	...createFromHtmlDescription,
	...createFromMarkdownDescription,
	...createFromUrlDescription,
	...commonBodyFields,
	...queryParamsDescription,
	...pdfSettingsDescription,
];
