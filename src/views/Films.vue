<template>
  <div class="films">
     
      <h1 class="subtitle grey--text">film index</h1>

        <v-container class="my-5">

            <v-row class="mb-3">

                <v-tooltip top>
                    <template v-slot:activator="{on}">
                        <v-btn small flat color="grey" @click="sortBy('title')" v-on="on">
                            <v-icon left small>mdi-folder</v-icon>
                            <span class="caption text-lowercase">By film</span>
                        </v-btn>
                    </template>
                    <span>sort films by name A-Z</span>
                </v-tooltip>

                 <v-tooltip top>
                    <template v-slot:activator="{on}">
                        <v-btn small flat color="grey" @click="sortBy('release_date')" v-on="on">
                            <v-icon left small>mdi-heart</v-icon>
                            <span class="caption text-lowercase">By Year</span>
                        </v-btn>
                    </template>
                    <span>Sort films by release date</span>
                </v-tooltip>


                <v-tooltip top>
                    <template v-slot:activator="{on}">
                        <v-btn small flat color="grey" @click="sortBy('rt_score')" v-on="on">
                            <v-icon left small>mdi-heart</v-icon>
                            <span class="caption text-lowercase">By RT Score</span>
                        </v-btn>
                    </template>
                    <span>sort films by tomato score</span>
                </v-tooltip>
               
            </v-row>

            <v-card outlined class="px-3" v-for="(film, index) in ghibliFilms" :film="film" :key="index">
                <v-row>
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
                <v-row>
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
    data(){
        return{
            ghibliFilms: []
        }
    },
    methods: {
        getFilms: function(){
            fetch("https://ghibliapi.herokuapp.com/films/")
            .then(res => res.json())
            .then(ghibliFilms => this.ghibliFilms = ghibliFilms)
        },
        sortBy(parameter){
            this.ghibliFilms.sort((a, b)=> a[parameter] < b[parameter] ? -1 : 1)
        }
    },
    mounted(){
        this.getFilms();
    }
}
</script>

<style>

</style>