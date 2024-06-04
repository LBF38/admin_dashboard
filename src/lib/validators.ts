import { number, object, omit, string } from 'valibot';

export const userSchema = object({
	id: number(),
	email: string(),
	username: string(),
	password: string(),
	name: object({
		firstname: string(),
		lastname: string()
	}),
	address: object({
		city: string(),
		street: string(),
		number: number(),
		zipcode: string(),
		geolocation: object({
			lat: string(),
			long: string()
		})
	}),
	phone: string()
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
