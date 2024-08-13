import { createProxyMiddleware } from 'http-proxy-middleware';

const CURRENT_KEY = 'vbUGjupVjZydXbadmM4XM-RcxkEsazHVLWAxiNDcpN-FeN6M';

export default function handler(req, res) {
  const proxy = createProxyMiddleware({
    target: `https://api.currentsapi.services/v1/latest-news?apiKey=${CURRENT_KEY}`,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },

    // onProxyReq: (proxyReq, req, res) => {
    //   // Add your custom headers here
    //   // proxyReq.setHeader('apiKey', `${CURRENT_KEY}`);
    //   // proxyReq.setHeader( 'Cache-Control', 'no-cache');
    //   // Add any other headers you need
    // },

  });
  return proxy(req, res);
};