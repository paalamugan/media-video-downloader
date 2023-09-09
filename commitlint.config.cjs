// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
// module.exports = { extends: ['@commitlint/config-conventional'] };
const types = require('@paalan/cz-emoji/types');
const {
  conventionalCommitParserOpts,
} = require('@paalan/cz-emoji/parserOptions');

/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['gitmoji'],
  parserPreset: {
    parserOpts: conventionalCommitParserOpts,
  },
  rules: {
    'type-enum': [2, 'always', types.map(({ name }) => name)],
  },
};
