<script setup lang="ts">
  import AppCardLink from '@/components/Card/AppCardLink.vue'
</script>
<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12" md="6">
        <AppCardLink title="Provincias" name="Provincias" />
      </v-col>
      <v-col cols="12" md="6">
        <AppCardLink title="Personas" name="Personas" />
      </v-col>
    </v-row>
  </v-container>
</template>
