import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  exclude: ['node_modules', '.git', '.husky', '.vscode', 'dist', 'public', 'build', 'mock', './stats.html'],
  presets: [presetUno({ dark: 'class' })],
});
