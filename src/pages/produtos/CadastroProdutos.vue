<template>
  <q-page>
    <q-card flat class="full-width row wrap justify-center q-pa-md">
      <div class="col-11">
        <q-table
          title="Produtos"
          row-key="name"
          separator="horizontal"
          :rows="rows"
          :columns="columns"
        >
          <template v-slot:top-left>
            <q-btn color="primary" label="Adicionar produto" @click="cadastrarItem" />
          </template>
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-actions="props">
            <q-tr :props="props">
              <q-td key="actions" :props="props">
                  <q-btn size="xs" round class="bg-yellow-8" icon="edit" @click="editarItem(props.row.id)"/>
                  <q-btn size="xs" round class="bg-red-8" text-color="white" icon="delete"/>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from "quasar"

import NewProduct from 'components/dialogs/NewProduct'
import EditItem from 'components/dialogs/EditItem'

export default defineComponent({
  name: 'CadastroProdutos',

  setup () {

    const $q = useQuasar()
    const filter = ref('')

    async function cadastrarItem () {
      $q.dialog({
          component: NewProduct,

          componentProps: {
            // ...more..props...
          }
        }).onOk(() => {
          console.log('OK')
        }).onCancel(() => {
          console.log('Cancel')
        }).onDismiss(() => {
          console.log('Called on OK or Cancel')
        })
    }

    async function editarItem (barcode) {
      $q.dialog({
          component: EditItem,

          componentProps: {
            barcode: barcode
          }
        }).onOk(() => {
          console.log('OK')
        }).onCancel(() => {
          console.log('Cancel')
        }).onDismiss(() => {
          console.log('Called on OK or Cancel')
        })
    }

    const columns = [
  {
    name: 'id',
    required: true,
    label: 'Código de Barra',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'product_name', align: 'left', label: 'Nome do produto', field: 'product_name', sortable: true },
  { name: 'quantity', align: 'left', label: 'Peso', field: 'quantity', sortable: true },
  { name: 'category', align: 'left', label: 'Categoria', field: 'category' },
  { name: 'main_category', align: 'left', label: 'Categoria principal', field: 'main_category', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'traces', align: 'left', label: 'Alergênicos', field: 'tracer' },
  { name: 'traces_tag', align: 'left', label: 'Preço', field: 'tracer_tag' },
  { name: 'actions', align: 'left', label: 'Ações', field: 'actions' }
]

const rows = [
  {
    id: '6497261349784',
    product_name: 'Sardinha',
    quantity: '450 g',
    category: 24,
    tracer: 'não',
    tracer_tag: '5.50',
    main_category: 'Conservados'
  },
  {
    id: '4695792315478',
    product_name: 'Achocolatado',
    quantity: '420 g',
    category: 24,
    tracer: 'não',
    tracer_tag: '5.75',
    main_category: 'Laticínios'
  },
  {
    id: '3964715824695',
    product_name: 'Leite',
    quantity: '1200 g',
    category: 24,
    tracer: 'não',
    tracer_tag: '4.85',
    main_category: 'Laticínios'
  },
  {
    id: '1326458765498',
    product_name: 'Miojo',
    quantity: '240 g',
    category: 24,
    tracer: 'não',
    tracer_tag: '3.86',
    main_category: 'Conservados'
  },
  {
    id: '3126542564782',
    product_name: 'Carne enlatada',
    quantity: '450 g',
    category: 24,
    tracer: 'não',
    tracer_tag: 12.79,
    main_category: 'conservados'
  },
  {
    id: '5263415789652',
    product_name: 159,
    quantity: 6.0,
    category: 24,
    tracer: 'não',
    tracer_tag: 87,
    main_category: '14%'
  },
  {
    id: '3652632974158',
    product_name: 159,
    quantity: 6.0,
    category: 24,
    tracer: 4.0,
    tracer_tag: 87,
    main_category: '14%'
  },
  {
    id: '3625974125897',
    product_name: 159,
    quantity: 6.0,
    category: 24,
    tracer: 4.0,
    tracer_tag: 87,
    main_category: '14%'
  },
  {
    id: '3759164823698',
    product_name: 159,
    quantity: 6.0,
    category: 24,
    tracer: 4.0,
    tracer_tag: 87,
    main_category: '14%'
  },
  {
    id: '2645231897451',
    product_name: 159,
    quantity: 6.0,
    category: 24,
    tracer: 4.0,
    tracer_tag: 87,
    main_category: '14%'
  },
  {
    id: '5369796418275',
    product_name: 159,
    quantity: 6.0,
    category: 24,
    tracer: 4.0,
    tracer_tag: 87,
    main_category: '14%'
  },
  {
    id: '1532684257981',
    product_name: 159,
    quantity: 6.0,
    category: 24,
    tracer: 4.0,
    tracer_tag: 87,
    main_category: '14%'
  },
  {
    id: '8256749836528',
    product_name: 159,
    quantity: 6.0,
    category: 24,
    tracer: 4.0,
    tracer_tag: 87,
    main_category: '14%'
  }
]

  return {
    cadastrarItem,
    editarItem,
    columns,
    rows,
    filter
  }
  }
})
</script>

<style>

</style>
