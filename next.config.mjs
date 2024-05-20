/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://aa-portkey-test.portkey.finance/api/:path*",
      },
      {
        source: "/graphql/:path*",
        destination:
          "https://dapp-aa-portkey-test.portkey.finance/Portkey_V2_DID/PortKeyIndexerCASchema/graphql/:path*",
      },
    ];
  },
};

export default nextConfig;
