<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<nav class="">
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
