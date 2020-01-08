<template>
  <v-app>
    <v-app-bar app dark dense>
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SHOOT-IT</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer app>
      <v-spacer></v-spacer>
      <div class="footer-text">{{ version }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import packageJson from "../package.json";

export default {
  data () {
    return {
      drawer: false,
      version: packageJson.version,
      navItems: [
        {
          icon: "fas fa-gamepad",
          title: "SHOOT",
          to: "/",
        },
        {
          icon: "fas fa-award",
          title: "SCORE",
          to: "/score",
        },
        {
          icon: "fas fa-user",
          title: "ACCOUNT",
          to: "/account",
        },
        {
          icon: "fas fa-info-circle",
          title: "ABOUT",
          to: "/about",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.footer-text {
  font-size: 10px;
}
</style>
