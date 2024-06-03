<script lang="ts">
	import { Button } from '$components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import { toast } from 'svelte-sonner';
	import type { PageData } from './$types';
	import { H1 } from '$components/typography';

	export let data: PageData;

	if (data && data.error) {
		toast.error(`${data.status} - ${data.error}`, { duration: 5000 });
	}
	if (data && data.users && data.users.length === 0) {
		toast.error(`Error retrieving data: ${data.users?.length}`, { duration: 5000 });
	}
	console.log('page data: ', data);
</script>

<H1 class="p-4">A data table with user information</H1>

<Table.Root>
	<Table.Caption>
		List of users from <Button variant="link" href="https://fakestoreapi.com/users"
			>https://fakestoreapi.com/users</Button
		>
	</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Username</Table.Head>
			<Table.Head>First Name</Table.Head>
			<Table.Head>Last Name</Table.Head>
			<Table.Head>Email</Table.Head>
			<Table.Head class="text-right">Phone</Table.Head>
			<Table.Head class="text-right">Address</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#if data && data.users}
			{#each data.users as user}
				<Table.Row>
					<Table.Cell class="font-medium">{user.username}</Table.Cell>
					<Table.Cell>{user.name.firstname}</Table.Cell>
					<Table.Cell>{user.name.lastname}</Table.Cell>
					<Table.Cell>{user.email}</Table.Cell>
					<Table.Cell class="text-right">{user.phone}</Table.Cell>
					<Table.Cell class="text-right">
						{user.address.number}, {user.address.street}
						{user.address.city}, {user.address.zipcode} ({user.address.geolocation.lat}, {user
							.address.geolocation.long})
					</Table.Cell>
				</Table.Row>
			{/each}
		{/if}
	</Table.Body>
</Table.Root>
