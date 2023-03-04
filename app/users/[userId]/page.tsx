import React from "react";
import { getUser } from "@/libs/getUser";
import { getPhoto } from "@/libs/getPhoto";

export const metadata = {
	title: "Post Page",
	description: "This is the POST page",
};

type Params = {
	params: {
		userId: string;
	};
};

export default async function Page({ params: { userId } }: Params) {
	const userData: User = await getUser(userId);
	const photoData: Photo = await getPhoto(userId);
	const [user, photo] = await Promise.all([userData, photoData]);
	console.log(user, photo);
	return (
		<div>
			<h1>{user.name}</h1>
		</div>
	);
}
