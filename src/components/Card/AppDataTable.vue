<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref<boolean>(false)
const dialogDelete = ref<boolean>(false)

const props = defineProps<{
  items: any[];
  title: string
  buttonText: string
}>()

const emits = defineEmits(['create', 'delete', 'edit'])

const formData = ref({
  nombre: ''
})

const closeDialog = () => {
  dialog.value = false
}

const save = () => {
  dialog.value = false
  emits('create', formData.value)
}

const closeDelete = () => {
  dialogDelete.value = false
}

const deleteItemConfirm = () => {
  dialogDelete.value = false
}

const deleteItem = (id: number) => {
  dialogDelete.value = true
  emits('delete', id)
}

const editItem = (id: number) => {
  dialog.value = true
  const dataForEmit = {
    id,
    nombre: formData.value.nombre
  }
  emits('edit', dataForEmit)
}

</script>

<template>
  <v-data-table
    :items="props.items"
    hide-default-footer
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ props.title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" dark v-bind="props">
              {{ buttonText }}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ props.title }}</span>
            </v-card-title>
            <!--      Todo: Hacer que cuando es provincia muestre un formulario, y cuando es el de persona, muestre el de persona -->
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="formData.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
            >Are you sure you want to delete this item?
            </v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
              >Cancel
              </v-btn
              >
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteItemConfirm"
              >OK
              </v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        @click="editItem(item.id)"
        class="mr-2"
        color="blue-darken-1"
        >mdi-pencil</v-icon
      >
      <v-icon @click="deleteItem(item.id)" color="red">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <span class="text-h6">
        No hay datos para mostrar
      </span>
    </template>
  </v-data-table>
</template>