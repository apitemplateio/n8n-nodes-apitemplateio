# n8n-nodes-apitemplateio

This is an n8n community node. It lets you use [APITemplate.io](https://apitemplate.io) in your n8n workflows.

[APITemplate.io](https://apitemplate.io) offers PDF generation API and image generation API at scale. APITemplate.io lets you design PDF templates in any browser and generate pixel-perfect PDF documents from reusable templates and data with no-code platforms such as N8n, Zapier, Make, Bubble.io or REST API.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

The sections:

- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials) <!-- delete if no auth needed -->
- [Compatibility](#compatibility)
- [Usage](#usage) <!-- delete if not using this section -->
- [Resources](#resources)
- [License](#license)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The following are the options:

| Name                     | Operation            | Description                                      | Documentation Link                                                                                     |
| ------------------------ | -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Create PDF from HTML     | `createFromHtml`     | Creates a PDF file from HTML with JSON data.     | [Link](https://apitemplate.io/apiv2/index.html#tag/API-Integration/operation/create-pdf-from-html)     |
| Create PDF from Markdown | `createFromMarkdown` | Creates a PDF file from Markdown with JSON data. | [Link](https://apitemplate.io/apiv2/index.html#tag/API-Integration/operation/create-pdf-from-markdown) |
| Create PDF from URL      | `createFromUrl`      | Creates a PDF file from web page URL             | [Link](https://apitemplate.io/apiv2/index.html#tag/API-Integration/operation/create-pdf-from-url)      |

## Credentials

You only need a APITemplate.io API Key for this, you can get it in the API Integration tab in the web portal.

## Compatibility

Compatible with n8n@1.60.0 or later

## Usage

Please check out the [APITemplate.io API Reference](https://apitemplate.io/apiv2/index.html) for more information on how to use the integration.

Please check out the [N8n integration tutorial](https://apitemplate.io/docs/integrations/n8n/) for more information.

## License

apitemplateio/n8n-nodes-apitemplateio is licensed under the [MIT License](LICENSE.md).

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [APITemplate.io API Reference](https://apitemplate.io/apiv2/index.html)
