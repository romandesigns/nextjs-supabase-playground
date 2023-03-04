import Link from "next/link";
import USERS from "./users.module.css";
import { getAllUsers } from "../../libs/getAllUsers";

export default async function TodoLayout({ children }: { children: React.ReactNode }) {
	const usersData: Promise<User[]> = await getAllUsers();
	const users = await usersData;
	return (
		<div className={USERS.post_layout}>
			<aside className={USERS.aside}>
				{users.map((user: User) => (
					<Link key={user.id} href={`/users/${user.id}`}>
						{user.name}
					</Link>
				))}
			</aside>
			<section className={USERS.main}>{children}</section>
		</div>
	);
}
