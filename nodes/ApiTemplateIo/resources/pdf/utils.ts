import type {
	IExecuteSingleFunctions,
	IHttpRequestOptions,
	IN8nHttpFullResponse,
	INodeExecutionData,
} from 'n8n-workflow';

/**
 * When export_type is 'file', configure the request to receive binary data
 * instead of JSON so the raw PDF bytes are returned.
 */
export async function setBinaryRequestOptions(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const options = this.getNodeParameter('options', {}) as { exportType?: string };
	if (options.exportType === 'file') {
		requestOptions.encoding = 'arraybuffer';
		requestOptions.json = false;
	}
	return requestOptions;
}

/**
 * When export_type is 'file', convert the binary response body into n8n
 * binary data so downstream nodes can work with the PDF file directly.
 */
export async function handleBinaryResponse(
	this: IExecuteSingleFunctions,
	items: INodeExecutionData[],
	response: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {
	const options = this.getNodeParameter('options', {}) as {
		exportType?: string;
		filename?: string;
	};
	if (options.exportType !== 'file') {
		return items;
	}
	if (!Buffer.isBuffer(response.body)) {
		return items;
	}
	const filename = options.filename || 'output.pdf';
	const binaryData = await this.helpers.prepareBinaryData(response.body, filename);
	return [{ json: {}, binary: { data: binaryData } }];
}
