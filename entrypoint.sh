#!/bin/sh

# Create a JS file with the environment variables
cat <<EOF > /usr/share/nginx/html/env-config.js
window.env = {
  VITE_NS_KEY : "c9af8962e10e46bc92f8e98b501a3894",
  VITE_FORECAST_API_KEY : "fe8cc7ce1859439baab125140241806",
  VITE_FACTS_API_KEY = "iOer3nTeBq7kMs1Q5NSlQQ==88YiAeR9XOYBsiud"
};
EOF

# Start Nginx
nginx -g 'daemon off;'