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

        <v-overlay absolute :value="scoring">
          <v-card width="300">
            <v-card-title class="headline">SCORE</v-card-title>
            <v-list>
              <v-list-item v-for="(value, key) in score" :key="key">
                <v-list-item-content>{{ key }} :</v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ value }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click.stop="scoring = false">close</v-btn>
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
      score: {
        point: null,
        accuracy: null,
      },
    };
  },
  methods: {
    async play(){
      this.playing = true;
      const score = await this.game.start({targetNum: this.targetNum});
      this.playing = false;
      this.score = {
        point: score.point,
        accuracy: score.accuracy,
      };
      this.scoring = true;
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
