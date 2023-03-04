import React from "react";

export const getUser = async (id: string) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	if (!response.ok) throw new Error("Failed data fetching");
	return response.json();
};
