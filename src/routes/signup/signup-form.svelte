<script lang="ts">
	import { browser } from '$app/environment';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { inputUserSchema } from '$lib/validators';
	import { toast } from 'svelte-sonner';
	import SuperDebug, {
		superForm,
		type FormPath,
		type Infer,
		type SuperValidated
	} from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';

	let data: SuperValidated<Infer<typeof inputUserSchema>>;
	export { data as form };

	const form = superForm(data, {
		validators: valibotClient(inputUserSchema),
		dataType: 'json',
		onUpdated: ({ form: f }) => {
			if (!f.valid) {
				toast.error('Please fix the errors before submitting.');
				return;
			}
			toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
		},
		onChange(event) {
			if (event.target) {
				if (event.path === 'address.number') {
					formData.update(
						($form) => {
							$form.address.number = Number($form.address.number);
							return $form;
						},
						{ taint: false }
					);
				}
			}
		},
		onSubmit({ jsonData }) {
			const taintedData = Object.fromEntries(
				Object.entries($formData).filter(([key]) => {
					return isTainted(key as FormPath<typeof $formData>);
				})
			);

			console.debug('taintedData', taintedData);
			jsonData(taintedData);
		}
	});

	const { form: formData, enhance, isTainted } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="username">
		<Form.Control let:attrs>
			<Form.Label>Username</Form.Label>
			<Input {...attrs} bind:value={$formData.username} />
		</Form.Control>
		<Form.Description>Your username</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.Description>Your email</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>Password</Form.Label>
			<Input type="password" {...attrs} bind:value={$formData.password} />
		</Form.Control>
		<Form.Description>Your password</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="phone">
		<Form.Control let:attrs>
			<Form.Label>Phone</Form.Label>
			<Input {...attrs} bind:value={$formData.phone} />
		</Form.Control>
		<Form.Description>Your phone</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="name.firstname">
		<Form.Control let:attrs>
			<Form.Label>First name</Form.Label>
			<Input {...attrs} bind:value={$formData.name.firstname} />
		</Form.Control>
		<Form.Description>Your firstname</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="name.lastname">
		<Form.Control let:attrs>
			<Form.Label>Last name</Form.Label>
			<Input {...attrs} bind:value={$formData.name.lastname} />
		</Form.Control>
		<Form.Description>Your lastname</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Address -->
	<Form.Field {form} name="address.number">
		<Form.Control let:attrs>
			<Form.Label>Address number</Form.Label>
			<Input type="number" {...attrs} bind:value={$formData.address.number} />
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="address.street">
		<Form.Control let:attrs>
			<Form.Label>Street</Form.Label>
			<Input {...attrs} bind:value={$formData.address.street} />
		</Form.Control>
		<Form.Description>Your street</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="address.city">
		<Form.Control let:attrs>
			<Form.Label>City</Form.Label>
			<Input {...attrs} bind:value={$formData.address.city} />
		</Form.Control>
		<Form.Description>Your city</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="address.zipcode">
		<Form.Control let:attrs>
			<Form.Label>Zipcode</Form.Label>
			<Input type="number" {...attrs} bind:value={$formData.address.zipcode} />
		</Form.Control>
		<Form.Description>Your zipcode</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="address.geolocation.lat">
		<Form.Control let:attrs>
			<Form.Label>Latitude</Form.Label>
			<Input {...attrs} bind:value={$formData.address.geolocation.lat} />
		</Form.Control>
		<Form.Description>Your latitude</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="address.geolocation.long">
		<Form.Control let:attrs>
			<Form.Label>Longitude</Form.Label>
			<Input {...attrs} bind:value={$formData.address.geolocation.long} />
		</Form.Control>
		<Form.Description>Your longitude</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button type="submit">Submit</Form.Button>
</form>

{#if browser}
	<Collapsible.Root class="m-4 p-4 outline rounded">
		<Collapsible.Trigger class="w-full text-left">open form debugger</Collapsible.Trigger>
		<Collapsible.Content class="p-4 m-4">
			<SuperDebug data={$formData} />
		</Collapsible.Content>
	</Collapsible.Root>
{/if}
