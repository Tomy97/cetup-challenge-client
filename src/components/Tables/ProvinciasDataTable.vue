<script setup lang="ts">
import type { Provincia } from '@/types/Provincia'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const props = defineProps<{
  provincias: Provincia[]
}>()
</script>

<template>
    <DataTable :value="props.provincias">
      <Column field="id" header="ID" />
      <Column field="nombre" header="Nombre" />
      <template #empty>
        <h5 class="text-center">No hay provincias registradas</h5>
      </template>
    </DataTable>
</template>
