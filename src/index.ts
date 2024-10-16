import type { OptionsConfig } from '@antfu/eslint-config';

const optionsConfig = {
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
  overrides: {
    vue: {
      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
    },
  },
} satisfies OptionsConfig;

export default {
  ...optionsConfig,
};
