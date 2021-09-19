<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-btn flat :to="{name: 'Main'}" label="Página Principal"/>


        <!-- <q-toolbar-title>
          Sem Muvuca Admin
        </q-toolbar-title> -->

      <!-- <q-btn
          style="background: #36384c"
          @click="toggle"
          :icon="$q.fullscreen.isActive ? 'fas fa-compress' : 'fas fa-expand'"
        /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <!-- <q-item-label
          header
        >
          Essential Links
        </q-item-label> -->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    // caption: 'Visualização',
    icon: 'space_dashboard',
    name: 'Dashboard'
  },
  {
    title: 'Cadastro de produtos ',
    // caption: 'github.com/quasarframework',
    icon: 'inventory_2',
    name: 'Produtos'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
