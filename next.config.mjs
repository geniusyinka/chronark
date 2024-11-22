import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	env: {
		UPSTASH_REDIS_REST_URL: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
		UPSTASH_REDIS_REST_TOKEN: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
	  },
};

export default withContentlayer(nextConfig);
