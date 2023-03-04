import React from "react";

export const getAllTodos = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	if (!response.ok) throw new Error("Failed data fetching");
	return response.json();
};
