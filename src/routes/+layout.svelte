<script lang="ts">
	import { Toaster } from '$components/ui/sonner';
	import '../app.pcss';
</script>

<Toaster richColors />
<div class="flex min-h-screen flex-col">
	<main class="container my-4 flex-grow px-4">
		<slot />
	</main>
</div>
