<template>
  <v-container fluid fill-height class="overflow-y-auto">
    <v-row no-gutters>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-subtitle>Developed by</v-list-item-subtitle>
            <v-list-item-title class="headline mb-1">Nachos-JP</v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar tile size="80">
            <img src="/Nachos-JP-logo.jpeg" alt="Nachos-JP Logo">
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            v-for="(item, i) in profileItems"
            :key="i"
            class="ma-2"
            :color="item.color"
            dark
            :href="item.url"
            target="_blank"
          >
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

    <v-row no-gutters justify="center">
      <v-btn
        v-for="(item, i) in builtItems"
        :key="i"
        class="ma-5"
        dark
        :href="item.url"
        target="_blank"
        icon
        width="auto"
        height="auto"
        tile
      >
        <v-avatar tile width="300" height="130">
          <img :src="item.icon" :style="item.style">
        </v-avatar>
      </v-btn>
    </v-row>

    <v-row no-gutters>
      <v-card class="mx-auto" max-width="800" outlined>
        <v-card-text class="headline text--primary pb-0">
          <p class="mb-0">Made with</p>
        </v-card-text>

        <v-container fluid>
          <v-row no-gutters justify="center">
            <v-btn
              v-for="(item, i) in madeItems"
              :key="i"
              class="ma-5"
              dark
              :href="item.url"
              target="_blank"
              icon
              tile
              width="auto"
              height="auto"
            >
              <v-avatar tile width="60" height="60">
                <img :src="item.icon">
              </v-avatar>
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      profileItems: [
        {
          color: "#55acee",
          url: "https://twitter.com/Nachos_JP",
          icon: "fab fa-twitter",
        },
        {
          color: "#24292e",
          url: "https://github.com/Nachos-JP",
          icon: "fab fa-github",
        },
      ],
      builtItems: [
        {
          url: "https://firebase.google.com",
          icon: "/firebase-logo.svg",
          style: "",
        },
        {
          url: "https://nuxtjs.org/",
          icon: "/nuxt-logo.svg",
          style: "background: white; padding: 10px;"
        },
      ],
      madeItems: [
        {
          url: "https://vuejs.org/",
          icon: "/vue-logo.svg",
        },
        {
          url: "https://vuetifyjs.com/",
          icon: "/vuetify-logo.svg",
        },
        {
          url: "https://d3js.org/",
          icon: "/d3-logo.svg",
        },
      ],
    };
  },
}
</script>
