<script setup lang="ts">
import { RouterLink } from "vue-router";
const props = defineProps<{
  title: string;
  name: string
}>();
</script>
<template>
  <RouterLink :to="{ name: props.name }" class="text-decoration-none">
    <v-card class="mx-auto my-8" elevation="16" max-width="344">
      <v-card-item>
        <v-card-title class="text-center"> {{ props.title }} </v-card-title>
      </v-card-item>
    </v-card>
  </RouterLink>
</template>
