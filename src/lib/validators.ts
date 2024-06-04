import { email, minLength, number, object, omit, optional, regex, string } from 'valibot';

export const userSchema = object({
	id: number(),
	email: string([email()]),
	username: string([minLength(3)]),
	password: string([minLength(6)]),
	name: object({
		firstname: string([minLength(3)]),
		lastname: string([minLength(3)])
	}),
	address: object({
		city: string(),
		street: string(),
		number: number(),
		zipcode: string(),
		geolocation: object({
			lat: string([
				regex(
					/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
					'Invalid latitude format: must be a float number between -90 and 90 with up to 6 decimal places.'
				)
			]),
			long: string([
				regex(
					/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/,
					'Invalid longitude format: must be a float number between -90 and 90 with up to 6 decimal places.'
				)
			])
		})
	}),
	phone: string([minLength(9)])
});

export const inputUserSchema = omit(userSchema, ['id']);

export const productSchema = object({
	id: number(),
	title: string(),
	price: number(),
	category: string(),
	description: string(),
	image: string()
});

export const searchSchema = object({ q: number() });
