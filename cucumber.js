let common = [
    'src/test/features/*.feature',
    '--require-module ts-node/register', //typescript cucumber
    '--require src/test/**/*.ts',
    '--format progress-bar',
    `--format-options '{"snippetInterface": "synchronous"}'`
  ].join(' ');

module.exports = {
    default: common
}