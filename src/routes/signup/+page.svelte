<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { PageData } from './$types';
	import SignupForm from './signup-form.svelte';

	export let data: PageData;
</script>

<Card.Root class="mx-auto max-w-4xl">
	<Card.Header>
		<Card.Title class="text-xl">Sign Up</Card.Title>
		<Card.Description>Enter your information to create an account</Card.Description>
	</Card.Header>
	<Card.Content>
		<SignupForm data={data.form} />
	</Card.Content>
</Card.Root>
