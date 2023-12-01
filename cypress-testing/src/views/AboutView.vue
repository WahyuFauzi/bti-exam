<script setup>
const skills = ['frontend ', 'backend ', 'desktop-software'];
</script>

<template>
	<div class="w-full h-screen bg-black text-white">
		<div class="w-3/5 mx-auto">
			<p class="text-lg font-semibold text-center">Name: Wahyu</p>
		</div>
		<div class="w-3/5 mx-auto">
			<p class="text-lg font-semibold text-center">
				Skills: {{ skills.toString() }}
			</p>
		</div>
	</div>
</template>
