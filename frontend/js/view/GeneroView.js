/**
 * Renderiza o formulário para criar uma nova tarefa.
 * @return {string} HTML do formulário de criação de tarefa.
 */
function renderizarFormulario() {
  return `
          <form class="mt-3" id="formulario_genero">
              <div class="form-group">
                  <label for="genero_titulo">Nome do Gênero:</label>
                  <input type="text" class="form-control" id="genero_titulo_formulario">
              </div>
              <button type="submit" class="btn btn-primary mt-2">Salvar</button>
          </form>
      `;
}

/**
 * Renderiza o formulário para atualizar uma genero existente.
 * @param {Object} tarefa - A tarefa a ser atualizada.
 * @return {string} HTML do formulário de atualização de tarefa.
 */
function renderizarFormularioAtualizar(genero) {
    return `
            <form class="mt-3" id="formulario_genero_atualizar">
                <input type="hidden" class="form-control" id="genero_id_formulario" value="${genero.id}">
                <div class="form-group">
                    <label for="genero_titulo">Nome do Gênero:</label>
                    <input type="text" class="form-control" id="genero_titulo_formulario" value="${genero.nome}">
                </div>
            </form>
        `;
}

  /**
 * Renderiza a tabela de tarefas.
 * @param {Array} tarefas - Lista de tarefas a serem exibidas.
 * @return {string} HTML da tabela de tarefas.
 */
function renderizarTabela(genero) {
  let tabela = `
          <table class="table table-striped mt-3">
              <thead>
                  <tr>
                      <th>Nome do Gênero</th>
                  </tr>
              </thead>
              <tbody>
      `;

      genero.forEach((genero) => {
    tabela += `
              <tr>
                  <td>${genero.nome}</td>
                  <td>
                    <button class="excluir-btn" genero-id=${genero.id}>Excluir</button>
                    <button class="atualizar-btn" genero-atualizar-id=${genero.id}>Atualizar</button>
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

const GeneroView = {
    renderizarFormulario,
    renderizarTabela,
    renderizarFormularioAtualizar
};

export default GeneroView;
