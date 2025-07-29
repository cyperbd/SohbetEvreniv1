import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// ✅ Güvenli crypto tanımı (Node 22 için gerekli)
import { webcrypto } from 'node:crypto';
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}

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
      port: parseInt(process.env.PORT || '5173')
    },
    preview: {
      host: '0.0.0.0',
      port: parseInt(process.env.PORT || '4173'),
      allowedHosts: ['sohbetevreni.onrender.com']
    }
  };
});
