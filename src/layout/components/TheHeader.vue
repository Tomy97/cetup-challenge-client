<script setup lang="ts">
import { RouterLink } from "vue-router";

</script>
<template>
  <v-app-bar color="secondary" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>
      <RouterLink :to="{ name: 'Home' }" class="text-decoration-none font-weight-medium" style="color: #000">
        Cetap Challenge
      </RouterLink>
    </v-app-bar-title>
  </v-app-bar>
</template>
