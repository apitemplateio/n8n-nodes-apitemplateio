import type { INodeProperties } from 'n8n-workflow';
import { createFromUrlDescription } from './createFromUrl';
import { createFromHtmlDescription } from './createFromHtml';
import { createFromMarkdownDescription } from './createFromMarkdown';
import {
	commonBodyFields,
	queryParamsDescription,
	asyncDescription,
	pdfSettingsDescription,
} from './shared';
import { setBinaryRequestOptions, handleBinaryResponse } from './utils';

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
					send: {
						preSend: [setBinaryRequestOptions],
					},
					output: {
						postReceive: [handleBinaryResponse],
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
					send: {
						preSend: [setBinaryRequestOptions],
					},
					output: {
						postReceive: [handleBinaryResponse],
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
					send: {
						preSend: [setBinaryRequestOptions],
					},
					output: {
						postReceive: [handleBinaryResponse],
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
	...asyncDescription,
	...queryParamsDescription,
	...pdfSettingsDescription,
];
