<template>
  <q-page class="row justify-center items-center content-center bg-blue-7">
    <div class="col-12 row justify-center q-pb-sm">
      <q-input
        v-model="user.email"
        type="email"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="E-mail"
        filled
        class="col-md-5 col-xs-10"
        :rules="[
          val => isValidEmail(val)
        ]"
      />
    </div>
    <div class="col-12 row justify-center q-pb-sm">
      <q-input
        v-model="user.password"
        :type="isPwd ? 'password' : 'text'"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="Senha"
        filled
        class="col-md-5 col-xs-10"
        :rules="[
          val => isPasswordValid(val)
        ]"
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
    <div class="col-md-5 col-xs-12 row justify-evenly q-pb-sm">
      <q-input
        v-model="user.telephoneNumber"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="num. de telefone"
        mask="(##) #####-####"
        filled
        class="col-md-7 col-xs-10"
        :rules="[
        val => isTelephoneValid(val)
      ]"
      />
      <q-input
        v-model="user.birthday"
        type="text"
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="nascimento"
        filled
        class="col-md-4 col-xs-10"
      >
        <template v-slot:append>
          <q-icon
            name="event"
            class="cursor-pointer"
          >
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
              v-model="user.birthday"
                mask="DD/MM/YYYY"
              >
                <div class="row items-center justify-end">
                  <q-btn
                    flat
                    v-close-popup
                    label="Close"
                    color="primary"
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <div class="col-12 row justify-center q-pb-sm">
      <q-select
        v-model="user.genre"
        :options=genderOptions
        standout="bg-yellow-8 text-black"
        bg-color="white"
        hint="Gênero"
        filled
        class="col-md-5 col-xs-10 row justify-center"
      />
    </div>
    <div class="col-12 row justify-center q-pb-sm">
      <q-btn flat class="col-md-5 col-xs-10 bg-yellow-8" label="Cadastrar" @click="tratamentos" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { date } from 'quasar'
import { isValidEmail, isPasswordValid, isTelephoneValid } from '../../helpers/ValidationHelper'

export default defineComponent({
  name: 'Login',

  setup () {

    const user = reactive({
      email: '',
      password: '',
      genre: '',
      telephoneNumber: '',
      birthday: date.formatDate(Date.now(), 'DD/MM/YYYY'),
    })

    const genderOptions = ref(['Masculino', 'Feminino', 'Não-binário'])
    const check = ref(false)
    const isPwd = ref(true)

    function tratamentos () {
      console.log(
        {
          ...user,
          birthday: date.extractDate(user.birthday, 'DD/MM/YYYY'), // transformação em Date type
          telephoneNumber: user.telephoneNumber.replace(/[^\w\\s]/gi, '') // tratamento do numero
        }
      )
    }

    return {
      user,
      check,
      isPwd,
      genderOptions,
      isValidEmail,
      isPasswordValid,
      isTelephoneValid,
      tratamentos
    }
  }
})
</script>
