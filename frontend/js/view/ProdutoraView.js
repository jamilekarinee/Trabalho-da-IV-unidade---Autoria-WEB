/**
 * Renderiza o formulário para criar uma nova tarefa.
 * @return {string} HTML do formulário de criação de tarefa.
 */
function renderizarFormulario() {
  return `
          <form class="mt-3" id="formulario_produtora">
              <div class="form-group">
                  <label for="produtora_titulo">Nome da produtora:</label>
                  <input type="text" class="form-control" id="produtora_titulo_formulario">
              </div>
              <button type="submit" class="btn btn-primary mt-2">Salvar</button>
          </form>
      `;
}

/**
 * Renderiza o formulário para atualizar uma produtora existente.
 * @param {Object} tarefa - A tarefa a ser atualizada.
 * @return {string} HTML do formulário de atualização de tarefa.
 */
function renderizarFormularioAtualizar(produtora) {
    return `
            <form class="mt-3" id="formulario_produtora_atualizar">
                <input type="hidden" class="form-control" id="produtora_id_formulario" value="${produtora.id}">
                <div class="form-group">
                    <label for="produtora_titulo">Título da produtora:</label>
                    <input type="text" class="form-control" id="produtora_titulo_formulario" value="${produtora.nome}">
                </div>
                <button type="submit" class="btn btn-primary mt-2">Salvar</button>
            </form>
        `;
}

  /**
 * Renderiza a tabela de produtoras.
 * @param {Array} tarefas - Lista de tarefas a serem exibidas.
 * @return {string} HTML da tabela de tarefas.
 */
function renderizarTabela(produtora) {
  let tabela = `
          <table class="table table-striped mt-3">
              <thead>
                  <tr>
                      <th>Nome da Produtora</th>
                      </tr>
              </thead>
              <tbody>
      `;

      produtora.forEach((produtora) => {
    tabela += `
              <tr>
                  <td>${produtora.nome}</td>

                  <td>
                    <button class="excluir-btn" produtora-id=${produtora.id}>Excluir</button>
                    <button class="atualizar-btn" produtora-atualizar-id=${produtora.id}>Atualizar</button>
                  </td>
              </tr>
          `;
  });

  tabela += `
              </tbody>
          </table>
      `;

  return tabela;
}

const ProdutoraView = {
    renderizarFormulario,
    renderizarTabela,
    renderizarFormularioAtualizar
};

export default ProdutoraView;
