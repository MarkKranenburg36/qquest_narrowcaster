import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    server:{
      // setting a redirect proxy to avoid CORS policy block
      proxy: {
        '/api': {
          target: 'http://localhost:3000/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''), // Removes /api prefix
          secure: true, 
          headers:  {
            'Cache-Control': 'no-cache',
            'Ocp-Apim-Subscription-Key': `${process.env.VITE_NS_KEY}`,}
        },
      },
    },
    plugins: [react()],
    base: '/qquest-narrowcaster/',
  }) 
}
