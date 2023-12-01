<script setup>
defineProps({
	image: {
		type: String,
	},

	title: {
		type: String,
	},

	genres: {
		type: Array,
	},

	type: {
		type: String,
	},

	synopsis: {
		type: String,
	},
});
</script>

<template>
	<div class="anime-card w-4/5 rounded my-8 mx-auto bg-gray-900">
		<div class="w-full flex py-2 pl-8">
			<div class="w-1/5 rounded">
				<img :src="image" alt="alternatetext" />
			</div>
			<div class="w-4/5 px-4">
				<div class="text-2xl font-semibold py-2">Title: {{ title }}</div>
				<div class="py-1">Genres: {{ genres.toString() }}</div>
				<div class="py-1">Type: {{ type }}</div>
				<div class="py-1">Synopsis: {{ synopsis }}</div>
			</div>
		</div>
	</div>
</template>
