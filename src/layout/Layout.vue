<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>
<template>
  <v-layout>
    <TheHeader />
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>
