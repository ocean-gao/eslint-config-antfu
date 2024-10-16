# 基于 antfu 的 ESLint 配置

## 1. 相关链接

- [腾讯云 - 开发者社区 - ESLint 教程](https://cloud.tencent.com/developer/section/1135602)
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- [eslint-config](https://github.com/antfu/eslint-config)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
- [Anthony extended ESLint rules. For antfu/eslint-config.](https://github.com/antfu/eslint-plugin-antfu)

## 2.使用

```js
// eslint.config.js 或 eslint.config.mjs

import antfu from '@antfu/eslint-config'
import config from '@oceanopen/eslint-config-antfu'

export default antfu({
  ...config
})
```
