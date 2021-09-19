<template>
  <q-page>
    <q-card flat class="full-width row wrap justify-evenly items-center content-center q-pt-md">
      <q-card-section class="col-md-12 col-xs-12">
        <div class="text-h5 text-center">
          Cadastro de produtos
        </div>
      </q-card-section>
      <q-card-section class="col-md-6 col-xs-10">
        <q-input
        filled
        standout="bg-yellow-8 text-black"
        hint="Nome do produto"
      />
      </q-card-section>
      <q-card-section class="col-md-6 col-xs-10">
        <q-input
        filled
        standout="bg-yellow-8 text-black"
        hint="código de barra"
      />
      </q-card-section>
      <q-card-section class="col-md-6 col-xs-10">
        <q-input
        filled
        standout="bg-yellow-8 text-black"
        hint="código de barra"
      />
      </q-card-section>
      <q-card-section class="col-md-6 col-xs-10">
        <q-input
        filled
        standout="bg-yellow-8 text-black"
        hint="peso (mg / ml)"
      />
      </q-card-section>
    </q-card>
    <q-card flat class="full-width row wrap justify-center items-center content-center q-pt-md">
      <q-btn flat class="col-md-4 col-xs-7 bg-yellow-8">Cadastrar</q-btn>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { useQuasar } from "quasar"
import ItemService from '../services/item'
// import { http } from 'boot/axios'

export default defineComponent({
  name: 'CadastroProdutos',

  setup () {

    const $q = useQuasar()
    const itemService = new ItemService()

    const product = reactive({
      id: 9223372036850,
      product_name: 'nescau',
      quantity: 250
    })

    async function recuperarItem () {
      try {
        let payload = await itemService.get(9223372036850)
        $q.notify({
        color: 'green',
        position: 'top',
        message: 'Produto recuperado com sucesso',
        icon: 'done'
        })
        } catch (er) {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: er.message,
            icon: 'report_problem'
          })
        }
    }

    recuperarItem()

    return {

    }
  }
})
</script>

<style>

</style>
