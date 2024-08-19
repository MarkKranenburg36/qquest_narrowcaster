import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv'
dotenv.config()

const NS_KEY = process.env.VITE_NS_KEY;

export default function handler(req, res) {
  
  const proxy = createProxyMiddleware({
    target: 'https://gateway.apiportal.ns.nl/nsapp-stations/v2/nearest?lat=52.08253517526941&lng=5.117591126554095&limit=2&includeNonPlannableStations=false',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
    onProxyReq: (proxyReq, req, res) => {
      // Add your custom headers here
      proxyReq.setHeader('Ocp-Apim-Subscription-Key', `${NS_KEY}`);
      proxyReq.setHeader( 'Cache-Control', 'no-cache');
      // Add any other headers you need
    },

  });

  return proxy(req, res);
};
