import React from "react";

export const getPhoto = async (id: string) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
	if (!response.ok) throw new Error("Failed data fetching");
	const photo = await response.json();
	return photo;
};
