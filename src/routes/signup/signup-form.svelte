<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { inputUserSchema } from '$lib/validators';
	import SuperDebug, { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<typeof inputUserSchema>>;

	const form = superForm(data, {
		validators: valibotClient(inputUserSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = form;
</script>

<Collapsible.Root>
	<Collapsible.Trigger>open</Collapsible.Trigger>
	<Collapsible.Content>
		<SuperDebug {data} />
	</Collapsible.Content>
</Collapsible.Root>

<form method="POST" action="/signup" use:enhance>
	<Form.Field {form} name="username">
		<Form.Control let:attrs>
			<Form.Label>Username</Form.Label>
			<Input {...attrs} bind:value={$formData.username} />
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="name.firstname">
		<Form.Control let:attrs>
			<Form.Label>First name</Form.Label>
			<Input {...attrs} bind:value={$formData.name.firstname} />
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="name.lastname">
		<Form.Control let:attrs>
			<Form.Label>Last name</Form.Label>
			<Input {...attrs} bind:value={$formData.name.lastname} />
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="address.number">
		<Form.Control let:attrs>
			<Form.Label>Address number</Form.Label>
			<Input {...attrs} bind:value={$formData.address.number} />
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="address.street">
		<Form.Control let:attrs>
			<Form.Label>Address street</Form.Label>
			<Input {...attrs} bind:value={$formData.address.street} />
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button>Submit</Form.Button>
</form>
