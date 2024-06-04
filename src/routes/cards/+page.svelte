<script lang="ts">
	import { H1 } from '$components/typography';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { toast } from 'svelte-sonner';
	import type { PageData } from './$types';

	export let data: PageData;

	if (data && data.error) {
		toast.error(`${data.status} - ${data.error}`, { duration: 5000 });
	}
	if (data && data.products && data.products.length === 0) {
		toast.error(`Error retrieving data: ${data.products?.length}`, { duration: 5000 });
	}
</script>

{#if data.error}
	<p class="text-destructive">{data.error}</p>
{/if}

<H1 class="py-4">Products to buy !</H1>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
	{#if data.products}
		{#each data.products as product}
			<Card.Root class="flex flex-col">
				<Card.Content class="my-5 mx-auto w-full">
					<img
						class="rounded items-center min-h-16 h-72 mx-auto object-contain"
						src={product.image}
						alt={product.title}
					/>
				</Card.Content>
				<Card.Header>
					<Card.Title>{product.title}</Card.Title>
					<Card.Description class="text-justify py-2">{product.description}</Card.Description>
				</Card.Header>
				<Card.Footer class="flex mt-auto justify-between">
					<Badge class="w-fit">{product.category}</Badge>
					<p class="font-bold text-lg">{product.price} €</p>
				</Card.Footer>
			</Card.Root>
		{/each}
	{/if}
</div>
