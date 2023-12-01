<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header>
		<nav class="bg-gray-700">
			<div class="max-w-screen-xl px-4 py-3 mx-auto">
				<div class="flex items-center">
					<ul
						class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm"
					>
						<li>
							<RouterLink
								id="dashboard-link"
								class="text-white hover:underline"
								to="/"
								>Dashboard</RouterLink
							>
						</li>
						<li>
							<RouterLink
								id="about-link"
								class="text-white hover:underline"
								to="/about"
								>About Me</RouterLink
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>

	<RouterView />
</template>
