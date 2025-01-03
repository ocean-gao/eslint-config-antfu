import antfu from '@antfu/eslint-config';
import { tsImport } from 'tsx/esm/api';

const local = await tsImport('./src/index.ts', import.meta.url).then(r => r.default);

export default antfu(
  {
  // Type of the project. 'lib' for libraries, the default is 'app'
    type: 'lib',
    ...local,
  },
);
