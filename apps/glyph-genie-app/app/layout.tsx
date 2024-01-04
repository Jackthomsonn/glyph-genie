import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import { UserProvider } from "@/context/user";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	minimumScale: 1,
	maximumScale: 1,
	initialScale: 1,
	width: "device-width",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body
					className={cn(
						"bg-background min-h-screen font-sans antialiased",
						fontSans.variable,
					)}
				>
					<div className="relative flex min-h-screen flex-col">
						<ClerkProvider>
							<UserProvider>
								<div className="flex-1">{children}</div>
							</UserProvider>
						</ClerkProvider>
						<Analytics />
					</div>
				</body>
			</html >
		</>
	);
}
