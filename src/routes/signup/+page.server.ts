import { inputUserSchema } from '$lib/validators';
import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

const validateUser = valibot(inputUserSchema);

export const load: PageServerLoad = async (context) => {
	return {
		form: await superValidate(validateUser)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(inputUserSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};
