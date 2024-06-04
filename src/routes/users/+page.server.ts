import { userSchema } from '$lib/validators';
import { array, safeParse } from 'valibot';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('https://fakestoreapi.com/users');
	const data = await res.json();

	if (!res.ok) {
		console.error('Error on fetching API: ', res.status, data);
		return { status: res.status, error: new Error(`Could not load users`) };
	}

	const result = safeParse(array(userSchema), data);
	if (!result.success) {
		console.error('Error on fetching API: ', result);
		throw new Error(`User validation failed: ${result.issues.join(', ')}`);
	}
	console.log('Success on fetching API: ', result);
	return {
		users: result.output
	};
};
