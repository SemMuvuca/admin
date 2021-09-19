
const routes = [
  {
    path: '/',
    component: () => import('layouts/RegisterLoginLayout.vue'),
    children: [
      { path: '', name: 'Raiz', component: () => import('pages/apresentacao/Apresentacao.vue') },
      { path: 'login', name: 'Login', component: () => import('pages/apresentacao/Login.vue') },
      { path: 'registro', name: 'Registro', component: () => import('pages/apresentacao/Registro.vue') },
    ]
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: ':userId', name: 'Main', props: true, component: () => import('pages/Index.vue') },
      { path: ':userId/dashboard', name: 'Dashboard', props: true, component: () => import('pages/analytics/Analytics.vue') },
      { path: ':userId/cadastro-produtos', name: 'Produtos', props: true, component: () => import('pages/CadastroProdutos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
