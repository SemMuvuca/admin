<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card flat class="full-width row wrap justify-evenly items-center content-center q-pt-md">
      <q-card-section class="col-md-12 col-xs-12">
        <div class="text-h5 text-center">
          Edição de item
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
      <q-card-section>
        <q-btn @click="onOKClick" label="gravar" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar, useDialogPluginComponent} from "quasar"

export default defineComponent({
  name: 'EditItem',

  props: {
    barcode: {
      type: String,
      required: true
    }
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
  ],

  setup (props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    const $q = useQuasar()

    function onOKClick () {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        console.log(props.barcode)
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

      onOKClick
    }
  }
})
</script>

<style>

</style>
