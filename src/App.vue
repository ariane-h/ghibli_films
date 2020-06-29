<template>
	<v-app>
		<nav-bar></nav-bar>

		<v-main class="mx-4 my-4">
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
	name: "App",

	components: {
		"nav-bar": NavBar,
	},

	data: () => ({}),
};
</script>
