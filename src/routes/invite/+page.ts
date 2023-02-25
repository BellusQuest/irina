import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
    throw redirect(303, 'https://discord.com/api/oauth2/authorize?client_id=983449886567583744&permissions=277025467456&scope=bot')
}