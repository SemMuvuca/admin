<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
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
        type="number"
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
      <q-card-section class="col-md-6 col-xs-10">
        <q-input
        filled
        standout="bg-yellow-8 text-black"
        hint="preço"
      />
      </q-card-section>
      <q-card-section class="col-md-6 col-xs-10">
        <q-card-actions align="center">
          <q-btn flat @click="cadastrarItem" class="bg-yellow-8" label="Cadastrar" />
          <q-btn flat @click="onCancelClick" text-color="white" class="bg-red" label="Cancel" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar, useDialogPluginComponent} from "quasar"
import ItemService from '../../services/item'

export default defineComponent({
  name: 'CadastroProdutos',

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  ],

  setup () {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    const $q = useQuasar()

    const itemService = new ItemService()


    async function cadastrarItem () {
      try {
        // let payload = await itemService.post()
        console.log(payload)
        $q.notify({
        color: 'green',
        position: 'top',
        message: 'Produto cadastrado com sucesso.',
        icon: 'done'
        })
        onOKClick()
        } catch (er) {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: er.message,
            icon: 'report_problem'
          })
        }
    }

    function onOKClick () {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK()
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      }

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,
      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,

      cadastrarItem
    }
  }
})
</script>

<style>

</style>
