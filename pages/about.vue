<template>
  <v-container fluid fill-height>
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
    };
  },
}
</script>
