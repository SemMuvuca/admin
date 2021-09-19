<template>
  <q-page class="row justify-center items-center content-center bg-blue-7">

    <div class="col-12 row justify-center q-pb-xl">
      <q-input
        filled
        v-model="email"
        type="email"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="E-mail"
        class="col-md-4 col-xs-10"
      />
    </div>
    <div class="col-12 row justify-center q-pb-sm">
      <q-input
        filled
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="Senha"
        class="col-md-4 col-xs-10"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div class="col-12 row justify-center text-center q-pb-md">
      <q-checkbox
        keep-color
        v-model="check"
        color="yellow-8"
        label="Lembrar senha"
        class="col-md-2 col-xs-5 text-white "
      />
      <a class="col-md-2 col-xs-5 text-body1 text-white" href="about:blank">Esqueci a senha</a>
    </div>
    <div class="col-12 row justify-center">
      <q-btn flat class="col-md-3 col-xs-6 bg-yellow-8" @click="pushToMain">Logar</q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter, /* useRoute */ } from 'vue-router'

export default defineComponent({
  name: 'Login',

  setup () {
    const router = useRouter() // Compôe a instância do router
    // const route = useRoute() // Acessa as propriedades da URL atual

    const check = ref(false)
    const isPwd = ref(true)

    const email = ref('')
    const password = ref('')

    //Local methods:
    function pushToMain() {
      router.push({
        name: 'Main',
        params: {
          userId: 'teste'
        }
      })
    }

    return {
      check,
      isPwd,
      password,
      email,
      pushToMain
    }
  }
})
</script>
