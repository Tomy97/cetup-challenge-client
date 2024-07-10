<script setup lang="ts">
import { onMounted } from 'vue'
import { useProvinciaStore } from '@/stores/provinciaStore'

import Card from 'primevue/card'
import ProvinciasDataTable from '@/components/Tables/ProvinciasDataTable.vue'

const store = useProvinciaStore()

onMounted(async () => {
  await store.getProvincias()
})
</script>

<template>
  <main>
    <Card class="w-30rem">
      <template #content>
        <ProvinciasDataTable :provincias="store.provincias" />
      </template>
    </Card>
  </main>
</template>
