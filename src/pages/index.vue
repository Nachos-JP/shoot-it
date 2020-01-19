<template>
  <v-container fluid fill-height>
    <v-row no-gutters>
      <v-col align="center">
        <div id="shoot"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as d3 from "d3";

export default {
  mounted(){
    const targetElem = document.getElementById("shoot");
    const bound = targetElem.getBoundingClientRect();

    const svg = d3.select(targetElem).append("svg")
      .attr("width", bound.width)
      .attr("height", bound.height);

    const circle = this.$CreateCircle(svg);
    circle.create();

    const rect = this.$CreateRect(svg);
    rect.create();
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
