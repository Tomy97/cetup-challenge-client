import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Provincia } from '@/types/Provincia'
import {
  createProvinciaService, deleteProvinciaService,
  getProvinciaService,
  getProvinciasService,
  updateProvinciaService
} from '@/services/provincia.service'

export const useProvinciaStore = defineStore('provincia', () => {
  const provincias = ref<Provincia[]>([])
  const provincia = ref<Provincia | null>(null)

  const getProvincias = async () => {
    provincias.value = await getProvinciasService()
  }

  const getProvincia = async (id: number) => {
    provincia.value = await getProvinciaService(id)
  }

  const createProvincia = async (provincia: Provincia) => {
    await createProvinciaService(provincia)
    await getProvincias()
  }

  const updateProvincia = async (id: number, provincia: Provincia) => {
    await updateProvinciaService(id, provincia)
    await getProvincias()
  }

  const deleteProvincia = async (id: number) => {
    await deleteProvinciaService(id)
    await getProvincias()
  }

  return {
    provincias,
    provincia,
    getProvincias,
    getProvincia,
    createProvincia,
    updateProvincia,
    deleteProvincia
  }
})