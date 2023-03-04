import React from "react";
import supabase from "@/lib/supabaseClient";

export default async function Page() {
	const { data: rooms } = await supabase.from("rooms").select("*");
	return <h1>{rooms[0].room_type}</h1>;
}
