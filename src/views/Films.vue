<template>
	<div class="films">
		<v-container class="my-5">
			<v-parallax
				src="@/assets/forest-bridge.jpg"
				height="300"
				class="d-flex justify-center ma-4"
			>
				<v-card
					flat
					color="rgb(122, 122, 122, 0.8)"
					max-width="450"
					max-height="200"
				>
					<h1 class="subtitle white--text pa-4">
						Studio Ghibli Movies
					</h1>
				</v-card>
			</v-parallax>
			<v-row class="mb-3 d-flex justify-center">
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn
							class="ma-2"
							small
							depressed
							color="#E7D8C9"
							@click="sortBy('title')"
							v-on="on"
						>
							<v-icon left small>mdi-sort-alphabetical-ascending</v-icon>
							<span class="caption text-capitalize">By Film</span>
						</v-btn>
					</template>
					<span>sort films by name A-Z</span>
				</v-tooltip>

				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn
							class="ma-2"
							small
							depressed
							color="#E7D8C9"
							@click="sortBy('release_date')"
							v-on="on"
						>
							<v-icon left small>mdi-calendar</v-icon>
							<span class="caption text-capitalize">By Year</span>
						</v-btn>
					</template>
					<span>Sort films by release date</span>
				</v-tooltip>

				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn
							class="ma-2"
							small
							depressed
							color="#E7D8C9"
							@click="sortBy('rt_score')"
							v-on="on"
						>
							<v-icon left small>mdi-star-four-points-outline</v-icon>
							<span class="caption text-capitalize">By RT Score</span>
						</v-btn>
					</template>
					<span>sort films by tomato score</span>
				</v-tooltip>
			</v-row>

			<v-card
				outlined
				class="px-3 ma-6"
				v-for="(film, index) in ghibliFilms"
				:film="film"
				:key="index"
			>
				<v-row class="ma-2">
					<v-col cols="12" md="6">
						<div class="caption grey--text">Movie Title</div>
						<div>{{ film.title }}</div>
					</v-col>
					<v-col cols="6" sm="4" md="2">
						<div class="caption grey--text">Director</div>
						<div>{{ film.director }}</div>
					</v-col>
					<v-col cols="6" sm="4" md="2">
						<div class="caption grey--text">Release Year</div>
						<div>{{ film.release_date }}</div>
					</v-col>
					<v-col cols="4" sm="4" md="2">
						<div class="caption grey--text">RT Score</div>
						<div>{{ film.rt_score }}</div>
					</v-col>
				</v-row>
				<v-row class="ma-2">
					<v-col cols="12">
						<div class="caption grey--text">Description</div>
						<div>{{ film.description }}</div>
					</v-col>
				</v-row>
			</v-card>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ghibliFilms: [],
		};
	},
	methods: {
		getFilms: function() {
			fetch("https://ghibliapi.herokuapp.com/films/")
				.then((res) => res.json())
				.then((ghibliFilms) => (this.ghibliFilms = ghibliFilms));
		},
		sortBy(parameter) {
			this.ghibliFilms.sort((a, b) => (a[parameter] < b[parameter] ? -1 : 1));
		},
	},
	mounted() {
		this.getFilms();
	},
};
</script>

<style></style>
