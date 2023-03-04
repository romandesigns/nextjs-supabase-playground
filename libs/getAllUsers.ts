import React from "react";

export const getAllUsers = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	if (!response.ok) throw new Error("Failed data fetching");
	const users = await response.json();
	return users.slice(0, 10);
};
