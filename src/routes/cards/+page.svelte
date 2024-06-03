<script lang="ts">
	import { H1 } from '$components/typography';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<H1 class="py-4">Products to buy !</H1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
	{#if data.products}
		{#each data.products as product}
			<Card.Root class="flex flex-col">
				<Card.Content class="my-5 mx-auto w-full">
					<img
						class="rounded items-center min-h-16 h-72 mx-auto"
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
