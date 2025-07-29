import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// 🔐 Web Crypto polyfill (önce geliyor!)
import { webcrypto } from 'node:crypto';
globalThis.crypto = webcrypto;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    server: {
      host: '0.0.0.0',
      port: parseInt(process.env.PORT) || 5173
    },
    preview: {
      host: '0.0.0.0',
      port: parseInt(process.env.PORT) || 4173,
      allowedHosts: ['sohbetevreni.onrender.com']
    }
  };
});
