"use client";

import { MainNav } from "@/components/main-nav";

export function SiteHeader() {
	return (
		<>
			<header className="bg-background sticky top-0 z-40 w-full bg-gray-900">
				<div className="p-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
					<MainNav />
					<div className="flex flex-1 items-center justify-end space-x-4"></div>
				</div>
			</header>
		</>
	);
}
