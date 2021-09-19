const verifyTypeAMethod = (method) => {
  let typesMethod = {
    'get': { error: new Error(`Não foi possível realizar a pesquisa, tente mais tarde`) },
    'post': { error: new Error(`Não foi possível realizar o cadastro , tente mais tarde`) },
    'put': { error: new Error(`Não foi possível realizar a edição, tente mais tarde`) },
    'delete': { error: new Error(`Não foi possível realizar a exclusão, tente mais tarde`) },
  }
  return typesMethod[method].error;
}

const verifyStatusCode = (method, status_code) => {
  let typesStatus = {
    400: { error: verifyTypeAMethod(method) },
    401: { error: new Error('Sessão expirada, por favor , logue novamente') },
    404: { error: new Error('Produto não encontrado') },
    422: { error: new Error('Algum(s) campos não estão no formato correto') },
    500: { error: verifyTypeAMethod(method) },
    503: { error: new Error('Servidor indisponível, tente mais tarde') }
  }
  return typesStatus[status_code].error;
}

const responseService = (method, status_code) => {
  return verifyStatusCode(method, status_code);
}


export default responseService
