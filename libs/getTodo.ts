import React from "react";

export const getTodo = async (id: string) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	if (!response.ok) throw new Error("Failed data fetching");
	return response.json();
};
