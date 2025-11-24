import { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { Viewport } from "next";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import { ThemeProvider } from "@/components/ThemeProvider";
import config from "@/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const viewport: Viewport = {
	// Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
	themeColor: config.colors.main,
	width: "device-width",
	initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			data-theme={config.colors.theme}
			className={`${inter.variable} ${playfair.variable} ${inter.className}`}
			suppressHydrationWarning
		>
			<body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
				<ThemeProvider>
					{/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
					<ClientLayout>{children}</ClientLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
