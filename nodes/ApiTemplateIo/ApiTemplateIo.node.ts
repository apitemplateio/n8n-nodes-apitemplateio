import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import { pdfDescription } from './resources/pdf';
import { regionField } from './resources/pdf/shared';

export class ApiTemplateIo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'PDF from HTML, Markdown, URL',
		name: 'apiTemplateIo',
		icon: 'file:../../icons/apitemplateio.svg',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Generate PDF documents from HTML, URL, or Markdown using APITemplate.io',
		defaults: {
			name: 'APITemplate.io',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'apiTemplateIoApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://rest.apitemplate.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			regionField,
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'PDF',
						value: 'pdf',
					},
				],
				default: 'pdf',
			},
			...pdfDescription,
		],
	};
}
