import { inputUserSchema } from '$lib/validators';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { number, object, safeParse } from 'valibot';
import type { Actions, PageServerLoad } from './$types';

const validateUser = valibot(inputUserSchema);

export const load: PageServerLoad = async (context) => {
	return {
		form: await superValidate(validateUser)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, validateUser);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const res = await fetch('https://fakestoreapi.com/users', {
			method: 'POST',
			body: JSON.stringify(form.data)
		});

		console.log('Response', res);

		if (!res.ok) {
			console.error('Failed to create user', res);

			return fail(502, {
				form,
				error: 'Failed to create user'
			});
		}
		const id = safeParse(object({ id: number() }), await res.json());

		if (!id.success) {
			console.error('Failed to parse response', id);
			return fail(502, {
				form,
				error: 'Failed to parse response'
			});
		}

		console.log('User created successfully, id: ', id.output.id);

		return {
			form
		};
	}
};
