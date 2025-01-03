# 基于 antfu 的 ESLint 配置

## 1. 相关链接

- [Antfu Eslint Config](https://github.com/antfu/eslint-config)
- [Anthony extended ESLint rules. For antfu/eslint-config.](https://github.com/antfu/eslint-plugin-antfu)
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
- [腾讯云 - 开发者社区 - ESLint 教程](https://cloud.tencent.com/developer/section/1135602)

## 2.使用

```js
// eslint.config.js 或 eslint.config.mjs

import antfu from '@antfu/eslint-config';
import defaultConfig from '@oceanopen/eslint-config-antfu';

export default antfu(
  // Configures for antfu's default config
  {
    ...defaultConfig
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ['**/*.ts'],
    rules: {},
  },
  {
    rules: {},
  },
);
```

## 3. 发版

判断网络环境:

```bash
curl https://registry.npmjs.org
# {}
```

若当前项目未登录过则:

```bash
npm adduser --registry=https://registry.npmjs.org/
# npm notice Log in on https://registry.npmjs.org/
# Create your account at:
# https://www.npmjs.com/login?next=/login/cli/1a7636a8-1102-4c6c-b50d-b86ae5662656
# Press ENTER to open in the browser...

# Logged in on https://registry.npmjs.org/.
```

发版:

```bash
npm run release
```
