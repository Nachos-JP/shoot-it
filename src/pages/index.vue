<template>
  <v-container fluid fill-height>
    <v-row no-gutters>
      <v-col align="center">

        <div id="shoot"></div>

        <v-overlay absolute :value="!playing && !scoring">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col>
                  <v-text-field
                    class="mx-4"
                    v-model="targetNum"
                    max="50"
                    min="1"
                    step="1"
                    type="number"
                    label="Number of target"
                    style="width: 100px"
                    :rules="targetNumRules"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click.stop="play">Start</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-overlay>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      game: null,
      targetNum: 3,
      playing: false,
      scoring: false,
      targetNumRules: [
        v => parseInt(v) < 1 ? "greater than 1" : false,
        v => parseInt(v) > 50 ? "less than 50" : false,
      ],
    };
  },
  methods: {
    async play(){
      this.playing = true;
      const score = await this.game.start({targetNum: this.targetNum});
      this.playing = false;
    },
  },
  mounted(){
    const targetElem = document.getElementById("shoot");
    this.game = new this.$Game(targetElem);
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
