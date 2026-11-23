import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

function resolveEnvOrigin(): string {
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '';
  const vercelPreview = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
  return (
    process.env.VITE_SITE_URL ||
    vercelProd ||
    vercelPreview ||
    process.env.APP_URL ||
    ''
  ).replace(/\/+$/, '');
}

const DEFAULT_OG_ORIGIN =
  'https://ais-pre-lfenixtyptwovoyt52bqkz-1003545204964.asia-east1.run.app';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'resolve-og-origin',
        transformIndexHtml(html: string): string {
          const envOrigin = resolveEnvOrigin();
          if (!envOrigin || envOrigin === DEFAULT_OG_ORIGIN) {
            return html;
          }
          return html.split(DEFAULT_OG_ORIGIN).join(envOrigin);
        },
      },
      // Copies src/assets into dist/ and updates robots.txt/sitemap.xml origin
      // for production builds.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }

          const envOrigin = resolveEnvOrigin();
          if (envOrigin && envOrigin !== DEFAULT_OG_ORIGIN) {
            for (const filename of ['robots.txt', 'sitemap.xml']) {
              const targetPath = path.resolve(distDir, filename);
              if (fs.existsSync(targetPath)) {
                const raw = fs.readFileSync(targetPath, 'utf-8');
                fs.writeFileSync(
                  targetPath,
                  raw.split(DEFAULT_OG_ORIGIN).join(envOrigin),
                  'utf-8'
                );
              }
            }
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
