import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { kitRoutes } from 'vite-plugin-kit-routes';
import type { KIT_ROUTES } from '$lib/ROUTES';

export default defineConfig({
	plugins: [sveltekit(), kitRoutes<KIT_ROUTES>()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
