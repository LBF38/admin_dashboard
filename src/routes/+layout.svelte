<script lang="ts">
	import { goto } from '$app/navigation';
	import { Input } from '$components/ui/input';
	import { Toaster } from '$components/ui/sonner';
	import { route } from '$lib/ROUTES';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Sheet from '$lib/components/ui/sheet';
	import { userSchema } from '$lib/validators';
	import { Box, Home, Menu, Table } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import { array, safeParse } from 'valibot';
	import '../app.pcss';

	let query = '';

	async function searchUser() {
		const res = await fetch('https://fakestoreapi.com/users');
		const users = await res.json();
		const validUsers = safeParse(array(userSchema), users);
		if (!validUsers.success) {
			console.error('Error validating data: ', validUsers);
			return toast.error('Invalid data from API');
		}

		const user = validUsers.output.find(
			(user) =>
				user.name.firstname === query || user.name.lastname === query || user.username === query
		);

		if (!user) {
			toast.error('User not found');
			return;
		}
		goto(`/users/${user.id}`);
	}

	const sections: {
		name: string;
		lucide_icon?: any; // use svelte components for rendering it in UI.
		//TODO: ^ make it more typed.
		subsections: { name: string; href: string }[];
	}[] = [
		{
			name: 'Home',
			lucide_icon: Home,
			subsections: [
				{ name: 'Dashboard 1', href: route('/') },
				{ name: 'Dashboard 2', href: route('/') },
				{ name: 'Dashboard 3', href: route('/') },
				{ name: 'Dashboard 4', href: route('/') }
			]
		},
		{
			name: 'Users',
			lucide_icon: Table,
			subsections: [
				{ name: 'Table 1', href: route('/users') },
				{ name: 'Table 2', href: route('/users') },
				{ name: 'Table 3', href: route('/users') },
				{ name: 'Table 4', href: route('/users') }
			]
		},
		{
			name: 'Products',
			lucide_icon: Box,
			subsections: [
				{ name: 'Product 1', href: route('/products') },
				{ name: 'Product 2', href: route('/products') },
				{ name: 'Product 3', href: route('/products') },
				{ name: 'Product 4', href: route('/products') }
			]
		}
	];
</script>

<Toaster richColors />
<div class="flex flex-col container my-4">
	<nav
		class="flex justify-between items-center sticky top-0 w-full backdrop-blur-md bg-opacity-50 py-6 z-50"
	>
		<Sheet.Root>
			<Sheet.Trigger>
				<Menu />
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<Sheet.Header>
					<Sheet.Title>Gentellela Alela!</Sheet.Title>
					<Sheet.Description class="overflow-y-auto h-screen pb-12">
						{#each sections as { name, lucide_icon, subsections }}
							<Collapsible.Root class="py-4 w-full">
								<Collapsible.Trigger class="flex gap-4 items-center w-full">
									{#if lucide_icon}
										<svelte:component this={lucide_icon} />
									{/if}
									<span class="font-bold">
										{name}
									</span>
								</Collapsible.Trigger>
								<Collapsible.Content class="my-4">
									<ul>
										{#each subsections as { name, href }}
											<li><Button {href} variant="link">{name}</Button></li>
										{/each}
									</ul>
								</Collapsible.Content>
							</Collapsible.Root>
						{/each}
					</Sheet.Description>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>

		<form on:submit|preventDefault={searchUser} class="flex mx-4 gap-4">
			<Input bind:value={query} type="search" name="q" placeholder="Search..." class="w-1/2" />
			<Button type="submit">Search</Button>
		</form>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="flex items-center gap-4">
				<Avatar.Root>
					<Avatar.Image src="https://github.com/lbf38.png" alt="@lbf38" />
					<Avatar.Fallback>LBF38</Avatar.Fallback>
				</Avatar.Root>
				<span>LBF38</span>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item href="#">Settings</DropdownMenu.Item>
					<DropdownMenu.Item href={route('/signup')}>Signup</DropdownMenu.Item>
					<DropdownMenu.Item href="#">Login</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</nav>
	<main class="container flex-grow px-4 my-4">
		<slot />
	</main>
</div>
