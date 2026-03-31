import type { INodeProperties } from 'n8n-workflow';

const showForHtmlAndMarkdown = {
	resource: ['pdf'],
	operation: ['createFromHtml', 'createFromMarkdown'],
};

const showForAllPdfOperations = {
	resource: ['pdf'],
};

export const commonBodyFields: INodeProperties[] = [
	{
		displayName: 'CSS',
		name: 'css',
		type: 'string',
		typeOptions: { rows: 5 },
		default: '',
		placeholder: '<style>.bg{background: red};</style>',
		description: 'CSS styles to apply to the PDF, including the style tag',
		displayOptions: { show: showForHtmlAndMarkdown },
		routing: {
			send: {
				type: 'body',
				property: 'css',
			},
		},
	},
	{
		displayName: 'Template Data',
		name: 'templateData',
		type: 'json',
		default: '{}',
		placeholder: '{"name": "John", "total": 100}',
		description:
			'JSON object with values for dynamic content placeholders in the HTML/Markdown body (e.g., {"name": "John"})',
		displayOptions: { show: showForHtmlAndMarkdown },
		routing: {
			send: {
				type: 'body',
				property: 'data',
			},
		},
	},
];

export const queryParamsDescription: INodeProperties[] = [
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: { show: showForAllPdfOperations },
		options: [
			{
				displayName: 'Async',
				name: 'async',
				type: 'options',
				options: [
					{ name: 'No', value: '0' },
					{ name: 'Yes', value: '1' },
				],
				default: '0',
				description:
					'Whether to generate the PDF asynchronously. When enabled, the API returns immediately and calls the webhook URL when done.',
				routing: {
					send: {
						type: 'query',
						property: 'async',
					},
				},
			},
			{
				displayName: 'Direct Download',
				name: 'directDownload',
				type: 'options',
				options: [
					{ name: 'No', value: '0' },
					{ name: 'Yes', value: '1' },
				],
				default: '0',
				description: 'Whether to set Content-Disposition to attachment for direct download',
				routing: {
					send: {
						type: 'query',
						property: 'direct_download',
					},
				},
			},
			{
				displayName: 'Expiration (Minutes)',
				name: 'expiration',
				type: 'number',
				typeOptions: { minValue: 60, maxValue: 10080 },
				default: 60,
				description: 'Expiration of the generated PDF in minutes',
				routing: {
					send: {
						type: 'query',
						property: 'expiration',
					},
				},
			},
			{
				displayName: 'Export Type',
				name: 'exportType',
				type: 'options',
				options: [
					{
						name: 'JSON',
						value: 'json',
						description: 'Returns a JSON object with a CDN download URL',
					},
					{
						name: 'File',
						value: 'file',
						description: 'Returns binary data of the generated PDF',
					},
				],
				default: 'json',
				description: 'The format of the API response',
				routing: {
					send: {
						type: 'query',
						property: 'export_type',
					},
				},
			},
			{
				displayName: 'Filename',
				name: 'filename',
				type: 'string',
				default: '',
				placeholder: 'invoice_89326.pdf',
				description: 'Custom filename for the generated PDF (should end with .pdf)',
				routing: {
					send: {
						type: 'query',
						property: 'filename',
					},
				},
			},
			{
				displayName: 'Generation Delay',
				name: 'generationDelay',
				type: 'number',
				default: 0,
				description: 'Delay in milliseconds before PDF generation begins',
				routing: {
					send: {
						type: 'query',
						property: 'generation_delay',
					},
				},
			},
			{
				displayName: 'Output Format',
				name: 'outputFormat',
				type: 'options',
				options: [
					{ name: 'PDF', value: 'pdf' },
					{ name: 'HTML', value: 'html' },
					{ name: 'PNG', value: 'png' },
					{ name: 'JPEG', value: 'jpeg' },
				],
				default: 'pdf',
				description: 'The desired output format for the generated document',
				routing: {
					send: {
						type: 'query',
						property: 'output_format',
					},
				},
			},
			{
				displayName: 'Webhook Method',
				name: 'webhookMethod',
				type: 'options',
				options: [
					{ name: 'GET', value: 'GET' },
					{ name: 'POST', value: 'POST' },
				],
				default: 'GET',
				description: 'The HTTP method for the webhook callback',
				routing: {
					send: {
						type: 'query',
						property: 'webhook_method',
					},
				},
			},
			{
				displayName: 'Webhook URL',
				name: 'webhookUrl',
				type: 'string',
				default: '',
				placeholder: 'https://yourwebserver.com/callback',
				description:
					'URL for the webhook callback when async generation is enabled. Must start with http:// or https://.',
				routing: {
					send: {
						type: 'query',
						property: 'webhook_url',
					},
				},
			},
		],
	},
];

export const pdfSettingsDescription: INodeProperties[] = [
	{
		displayName: 'PDF Settings',
		name: 'pdfSettings',
		type: 'collection',
		placeholder: 'Add Setting',
		default: {},
		displayOptions: { show: showForAllPdfOperations },
		options: [
			{
				displayName: 'Custom Footer',
				name: 'customFooter',
				type: 'string',
				typeOptions: { rows: 3 },
				default: '',
				description: 'Custom HTML markup for the PDF footer',
				routing: {
					request: {
						body: {
							settings: {
								custom_footer: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Custom Header',
				name: 'customHeader',
				type: 'string',
				typeOptions: { rows: 3 },
				default: '',
				description: 'Custom HTML markup for the PDF header',
				routing: {
					request: {
						body: {
							settings: {
								custom_header: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Custom Height',
				name: 'customHeight',
				type: 'string',
				default: '',
				placeholder: '297mm',
				description: 'Custom height when paper size is set to "custom". Valid units: mm, px, cm.',
				routing: {
					request: {
						body: {
							settings: {
								custom_height: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Custom Width',
				name: 'customWidth',
				type: 'string',
				default: '',
				placeholder: '210mm',
				description: 'Custom width when paper size is set to "custom". Valid units: mm, px, cm.',
				routing: {
					request: {
						body: {
							settings: {
								custom_width: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Display Header and Footer',
				name: 'displayHeaderFooter',
				type: 'boolean',
				default: false,
				description: 'Whether to display the header and footer in the PDF',
				routing: {
					request: {
						body: {
							settings: {
								displayHeaderFooter: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Header Font Size',
				name: 'headerFontSize',
				type: 'string',
				default: '',
				placeholder: '9px',
				description: 'Font size for the header in the PDF',
				routing: {
					request: {
						body: {
							settings: {
								header_font_size: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Margin Bottom (Mm)',
				name: 'marginBottom',
				type: 'string',
				default: '',
				placeholder: '40',
				description: 'Bottom margin for the PDF in millimeters',
				routing: {
					request: {
						body: {
							settings: {
								margin_bottom: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Margin Left (Mm)',
				name: 'marginLeft',
				type: 'string',
				default: '',
				placeholder: '10',
				description: 'Left margin for the PDF in millimeters',
				routing: {
					request: {
						body: {
							settings: {
								margin_left: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Margin Right (Mm)',
				name: 'marginRight',
				type: 'string',
				default: '',
				placeholder: '10',
				description: 'Right margin for the PDF in millimeters',
				routing: {
					request: {
						body: {
							settings: {
								margin_right: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Margin Top (Mm)',
				name: 'marginTop',
				type: 'string',
				default: '',
				placeholder: '40',
				description: 'Top margin for the PDF in millimeters',
				routing: {
					request: {
						body: {
							settings: {
								margin_top: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Orientation',
				name: 'orientation',
				type: 'options',
				options: [
					{ name: 'Portrait', value: '1' },
					{ name: 'Landscape', value: '2' },
				],
				default: '1',
				description: 'Page orientation for the PDF',
				routing: {
					request: {
						body: {
							settings: {
								orientation: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Paper Size',
				name: 'paperSize',
				type: 'options',
				options: [
					{ name: 'A0', value: 'A0' },
					{ name: 'A1', value: 'A1' },
					{ name: 'A2', value: 'A2' },
					{ name: 'A3', value: 'A3' },
					{ name: 'A4', value: 'A4' },
					{ name: 'A5', value: 'A5' },
					{ name: 'A6', value: 'A6' },
					{ name: 'Custom', value: 'custom' },
					{ name: 'Ledger', value: 'Ledger' },
					{ name: 'Legal', value: 'Legal' },
					{ name: 'Letter', value: 'Letter' },
					{ name: 'Tabloid', value: 'Tabloid' },
				],
				default: 'A4',
				description: 'Paper size for the PDF. Use "Custom" with custom width/height.',
				routing: {
					request: {
						body: {
							settings: {
								paper_size: '={{$value}}',
							},
						},
					},
				},
			},
			{
				displayName: 'Print Background',
				name: 'printBackground',
				type: 'options',
				options: [
					{ name: 'Yes', value: '1' },
					{ name: 'No', value: '0' },
				],
				default: '1',
				description: 'Whether to include background graphics and colors in the PDF',
				routing: {
					request: {
						body: {
							settings: {
								print_background: '={{$value}}',
							},
						},
					},
				},
			},
		],
	},
];
