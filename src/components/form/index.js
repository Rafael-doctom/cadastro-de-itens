import './style.css';

const Form = () => {
    return (
        <>
            <div className="form-container">
                <div className="form-content">
                    <div class="">
                        <form class="" id="">
                            <div class="">
                                <div class="row">
                                    <h1 class="">Formulário</h1>
                                    <span class="required">* Preenchimento obrigatório</span>
                                    <div class="form-name">
                                        <label for="nome">Nome: </label><span class="required">*</span>
                                        <input type="text" class="form-control" id="" aria-describedby="nomeProduto"
                                            maxlength="50" required />
                                    </div>
                                </div>
                                {/* <div class="row">
                                    <div class="col-sm-6 ">
                                        <label for="unidade">Unidade de medida: </label><span class="required">*</span>
                                        <select id="unidade" class="form-select" aria-label="unidadeMedida" required>
                                            <option disabled selected value="">Selecione...</option>
                                            <option value="Unidade">Unidade</option>
                                            <option value="Litro">Litro</option>
                                            <option value="Quilograma">Quilograma</option>
                                        </select>
                                        <span id="semUnidade" class="alert alert-danger mt-2" hidden>Unidade de medida é
                                            obrigatória</span>
                                    </div>
                                    <div class="col-sm-6 ">
                                        <label for="quantidade">Quantidade: </label>
                                        <input type="text" class="form-control" id="quantidade" aria-describedby="quantidade"
                                            onkeyup="mascaraQuantidade(this)" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class=" ">
                                        <label for="preco">Preço: </label><span class="required">*</span>
                                        <input type="text" class="form-control" id="preco" aria-describedby="preco"
                                            placeholder="R$0,00" required onkeyup="mascaraReal(this)" />
                                        <span id="semPreco" class="alert alert-danger mt-2" hidden>Preço é obrigatório</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="container">
                                        <label for="selectPerecivel">Produto perecível: </label><span
                                            class="required d-inline-flex">*</span><br />
                                        <div class="form-check form-check-inline" id="selectPerecivel">
                                            <input class="form-check-input" type="radio" name="radioPerecivel"
                                                id="radioPerecivelTrue" value="true" required />
                                            <label class="form-check-label" for="inlineRadio1">Sim</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="radioPerecivel"
                                                id="radioPerecivelFalse" value="false" />
                                            <label class="form-check-label" for="inlineRadio2">Não</label>
                                        </div>
                                        <br/>
                                            <span id="semPerecivel" class="alert alert-danger mt-2" hidden>Obrigatório informar se é
                                                perecível</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 ">
                                        <label for="validade">Data de validade: </label><span class="required">*</span>
                                        <input type="date" class="form-control" id="validade" aria-describedby="validade"
                                            disabled placeholder="dd/mm/aaaa" />
                                        <span id="semValidade" class="alert alert-danger mt-2" hidden>Validade
                                            obrigatória</span>
                                    </div>
                                    <div class="col-sm-6 ">
                                        <label for="fabricacao">Data de fabricação: </label><span class="required">*</span>
                                        <input type="date" class="form-control" id="fabricacao" aria-describedby="fabricacao"
                                            required placeholder="dd/mm/aaaa" />
                                        <span id="semFabricacao" class="alert alert-danger mt-2" hidden>Fabricação
                                            obrigatória</span>
                                    </div>
                                </div>
                                <div class="p-3">
                                    <div class="row d-flex justify-content-between">
                                        <button type="button" id="botaoSalvar" class="medidasBotao w-25 btn btn-success"
                                            onclick="salvar()">Salvar</button>
                                        <a href="listagem.html" class="medidasBotao w-25 btn btn-danger">Cancelar</a>
                                    </div>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Form