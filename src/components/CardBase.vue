<template>
  <q-card
    class="fit"
    :style="{backgroundImage: 'linear-gradient( 135deg, #141E30, #243B55)', minHeight: '150px'}"
  >
    <q-card-section>
      <slot></slot>
    </q-card-section>

  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardBase',

  setup () {

    return {

    }
  }
})
</script>
