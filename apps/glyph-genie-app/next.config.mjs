/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ["pjsjlo04jviw3hss.public.blob.vercel-storage.com"],
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
