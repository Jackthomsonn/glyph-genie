/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ["oaidalleapiprodscus.blob.core.windows.net"],
	},
	redirects: async () => {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
