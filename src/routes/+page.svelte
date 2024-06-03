<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Input } from '$lib/components/ui/input';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Home, Menu, PenBox, Table } from 'lucide-svelte';

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
				{ name: 'Dashboard 1', href: '/' },
				{ name: 'Dashboard 2', href: '/' },
				{ name: 'Dashboard 3', href: '/' },
				{ name: 'Dashboard 4', href: '/' }
			]
		},
		{
			name: 'Forms',
			lucide_icon: PenBox,
			subsections: [
				{ name: 'Form 1', href: '/' },
				{ name: 'Form 2', href: '/' },
				{ name: 'Form 3', href: '/' },
				{ name: 'Form 4', href: '/' }
			]
		},
		{
			name: 'Tables',
			lucide_icon: Table,
			subsections: [
				{ name: 'Table 1', href: '/' },
				{ name: 'Table 2', href: '/' },
				{ name: 'Table 3', href: '/' },
				{ name: 'Table 4', href: '/' }
			]
		}
	];
</script>

<nav class="flex justify-between items-center">
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

	<form action="/search" method="get" class="flex mx-4 gap-4">
		<Input type="search" name="q" placeholder="Search..." class="w-1/2" />
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
				<DropdownMenu.Item href="/settings">Settings</DropdownMenu.Item>
				<DropdownMenu.Item href="/signup">Signup</DropdownMenu.Item>
				<DropdownMenu.Item href="/login">Login</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</nav>
