import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './src/redux/store/services/openapi-schema.json',
  apiFile: './src/store/store/services/emptyApi.ts',
  apiImport: 'emptyApi',
  outputFile: '/src/store/store/services/lmsApi.ts',
  exportName: 'lmsApi',
  hooks: true,
};

export default config;
