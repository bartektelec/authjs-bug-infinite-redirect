import type {Handle} from '@sveltejs/kit'
import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
    pages: {
        // URLS below end up in infinite redirect
        error: '/auth/error',
        signIn: '/auth/signin',
        signOut: '/auth/signout',

        // URLs below work fine
        // error: '/auth/x/error',
        // signIn: '/auth/x/signin',
        // signOut: '/auth/x/signout',

    },
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
}) satisfies Handle