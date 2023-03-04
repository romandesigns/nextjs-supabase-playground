import React from "react";
import supabase from "./../lib/supabaseClient";

export async function getRooms() {
	const { data: rooms, error } = await supabase.from("rooms").select("*");
	return { rooms, error };
}
