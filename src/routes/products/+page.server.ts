import { productSchema, userSchema } from '$lib/validators';
import { array, safeParse } from 'valibot';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('https://fakestoreapi.com/products?limit=11');
	const data = await res.json();

	if (!res.ok) {
		console.error('Error on fetching API: ', res.status, data);
		return { status: res.status, error: `Could not load users` };
	}

	const result = safeParse(array(productSchema), data);
	if (!result.success) {
		console.error('Error on fetching API: ', result);
		return { error: `User validation failed` };
	}

	console.log('Success on fetching API: ', result);
	return {
		products: result.output
	};
};
