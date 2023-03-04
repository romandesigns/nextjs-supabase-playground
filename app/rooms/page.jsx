import React from "react";
import supabase from "@/lib/supabaseClient";

export default async function Page() {
	const { data: rooms } = await supabase.from("rooms").select("*");
	console.log(rooms);
	return <h1>Test</h1>;
}
