<script setup lang="ts">
import { useProvinciasStore } from "@/stores/provincias";
import { computed, onMounted, ref } from 'vue'
import AppDataTable from "@/components/Card/AppDataTable.vue";

const provinciasStore = useProvinciasStore();

onMounted(async () => {
  await provinciasStore.getProvincias();
});

const provinceComputed = computed(() => provinciasStore.provincias.map(provincia => {
  return {
    ...provincia,
    actions: [
      {
        text: 'Editar',
        value: 'edit'
      },
      {
        text: 'Eliminar',
        value: 'delete'
      }
    ]
  }
}));
</script>
<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" md="8" lg="7">
        <AppDataTable
          :items="provinceComputed"
          title="Provincias"
          button-text="Nueva Provincia"
          @create="provinciasStore.createProvincia"
          @edit="provinciasStore.editProvincia"
          @delete="provinciasStore.deleteProvincia"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
