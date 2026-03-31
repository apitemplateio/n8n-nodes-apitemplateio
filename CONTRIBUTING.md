# Contributing to n8n-nodes-apitemplateio

# Bugs and features

Whether it's a bug report or feature request, you're welcome to raise an
**[issue](https://github.com/apitemplateio/n8n-nodes-apitemplateio/issues)**.

# Environment setup

## Requirements

- Node.js 24

## Local environment

### Run n8n-nodes-apitemplateio locally

In the n8n-nodes-apitemplateio directory, run

1. Install dependencies.

   ```
   npm install
   ```

2. Start the development server

   ```
   npm run dev
   ```

   You should see the `dist` folder in the n8n-nodes-apitemplateio directory now

3. Open n8n via `http://localhost:5678/`. You should see the "PDF from HTML, Markdown, URL" node when you search for it.

# Release a new version

1. Update the `version` field in `package.json` using [`npm version`](https://docs.npmjs.com/cli/v11/commands/npm-version) command.

   For example:

   ```
   # For patch version update, e.g. 0.1.1 to 0.1.2
   npm version patch

   # For minor version update, e.g. 0.1.1 to 0.2.0
   npm version minor
   ```

   The `npm version` command will create a version commit and tag.

2. Push the commit and tag

   ```
   git push --follow-tags
   ```

3. The NPM Publish job will be triggered at https://github.com/apitemplateio/n8n-nodes-apitemplateio/actions/workflows/publish.yaml
