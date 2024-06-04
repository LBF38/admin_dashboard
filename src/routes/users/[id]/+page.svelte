<script lang="ts">
	import { H1 } from '$components/typography';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<H1 class="my-2">Here is the result of your search</H1>

{#if data}
	<pre>{JSON.stringify(data, null, 2)}</pre>
{:else}
	<p>No data found</p>
{/if}
