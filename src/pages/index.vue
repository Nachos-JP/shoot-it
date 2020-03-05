<template>
  <v-container fluid fill-height>
    <v-row no-gutters>
      <v-col align="center">
        <div id="shoot"></div>
        <v-overlay absolute :value="!playing">
          <v-btn @click.stop="play">Start</v-btn>
        </v-overlay>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as d3 from "d3";

export default {
  data(){
    return {
      playing: false,
      scoring: false,
    };
  },
  methods: {
    async play(){
      this.playing = true;
      const targetElem = document.getElementById("shoot");
      const game = new this.$Game(targetElem);
      const score = await game.start();
      console.log(score);
    },
  },
}
</script>

<style lang="scss" scoped>
#shoot {
  width: 80vw;
  height: 80vh;
  background: gray;
}
</style>
