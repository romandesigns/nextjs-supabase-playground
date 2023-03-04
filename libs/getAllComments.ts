import React from "react";

export const getAllTodos = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/comments");
	if (!response.ok) throw new Error("Failed data fetching");
	const comments = await response.json();
	return comments.slice(0, 10);
};
