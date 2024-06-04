import { userSchema } from '$lib/validators';
import { fail } from '@sveltejs/kit';
import { safeParse } from 'valibot';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const result = await fetch(`https://fakestoreapi.com/users/${params.id}`);
	if (!result.ok) {
		return fail(400, {
			message: 'User not found'
		});
	}

	const user = await result.json();
	const validUser = safeParse(userSchema, user);
	if (!validUser.success) {
		return fail(500, {
			message: 'Invalid user data'
		});
	}

	return {
		user: validUser.output
	};
};
