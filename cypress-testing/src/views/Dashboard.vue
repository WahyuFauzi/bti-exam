<script setup>
import AnimeCard from '../components/AnimeCard.vue';
import { ref } from 'vue';
import axios from 'axios';
import dummyRequest from '../assets/dummyRequest.json';

const animeList = ref(dummyRequest.data);

const options = {
	method: 'GET',
	url: 'https://anime-db.p.rapidapi.com/anime',
	params: {
		page: '1',
		size: '5',
		sortBy: 'ranking',
	},
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
	},
};

//WARN the api already reach limit
//try {
//	const response = await axios.request(options);
//	console.log(response.data.data);
//} catch (error) {
//	console.error(error);
//}
</script>

<template>
	<main class="w-full bg-black text-white">
		<div class="w-full pt-4">
			<h1 class="text-3xl text-center font-semibold">
				Top Anime list this Season
			</h1>
		</div>
		<div class="w-full py-8">
			<ul id="anime-list" class="w-full">
				<li v-for="data in animeList">
					<AnimeCard
						:image="data.image"
						:title="data.title"
						:genres="data.genres"
						:type="data.type"
						:synopsis="data.synopsis"
					/>
				</li>
			</ul>
		</div>
	</main>
</template>
