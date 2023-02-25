import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
    throw redirect(303, 'https://discord.gg/aBr4PAYX8d')
}