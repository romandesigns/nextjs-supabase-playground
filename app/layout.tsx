import Link from "next/link";
import "./globals.css";

type metaProps = {
	title: string;
	description: string;
};

export const metadata: metaProps = {
	title: "Home Page",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<nav className="navigation">
					<Link href="/">Home</Link>
					<Link href="/users">Users</Link>
					<Link href="/rooms">Rooms</Link>
					<Link href="/contact">Contact</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
