import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
    throw redirect(303, 'https://forms.gle/t3HgPwHNrC747px58')
}