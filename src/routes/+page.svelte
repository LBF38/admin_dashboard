<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Menu } from 'lucide-svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Input } from '$lib/components/ui/input';
	import Button from '$components/ui/button/button.svelte';
</script>

<nav class="flex justify-between items-center">
	<Sheet.Root>
		<Sheet.Trigger>
			<Menu />
		</Sheet.Trigger>
		<Sheet.Content side="left">
			<Sheet.Header>
				<Sheet.Title>WIP on left sidebar</Sheet.Title>
				<Sheet.Description>TODO: add the links and other parts.</Sheet.Description>
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
