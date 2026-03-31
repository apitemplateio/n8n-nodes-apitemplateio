import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';

export class ApiTemplateIo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'PDF from HTML, Markdown, URL',
		name: 'apiTemplateIo',
		icon: 'file:../../icons/apitemplateio.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description:
			'Create beautiful PDF documents with ease using our drag-and-drop template editor. Start from ready-made templates for invoices, certificates, receipts, contracts, and more.',
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
			baseURL: 'https://rest.apitemplate.io/v2',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [],
	};
}
