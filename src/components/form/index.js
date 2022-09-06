import { useState } from 'react';
import './style.css';

const Form = ({ handleSubmitProduct }) => {


    const [textProdut, setTextProduct] = useState()
    const [id, setId] = useState(0)


    const todoCreate = () => {
        const todoObj = {text: textProdut, id: id}
        setId(id+1)
        handleSubmitProduct(todoObj)
    }

    return (
        <>
            <div className="form-container">
                <div className="form-content">
                    <div className="">
                        <div className="">
                            <div className="row">
                                <h1 className="">Formulário</h1>
                                <span className="required">* Preenchimento obrigatório</span>
                                <div className="form-name">
                                    <label for="nome">Nome: </label><span >*</span>
                                    <input type="text" onChange={(e) => setTextProduct(e.target.value)}
                                        required />
                                </div>
                                {/* {textProdut} */}
                            </div>



                            {/* <div className="row">
                                    <div className="col-sm-6 ">
                                        <label for="unidade">Unidade de medida: </label><span className="required">*</span>
                                        <select id="unidade" className="form-select" aria-label="unidadeMedida" required>
                                            <option disabled selected value="">Selecione...</option>
                                            <option value="Unidade">Unidade</option>
                                            <option value="Litro">Litro</option>
                                            <option value="Quilograma">Quilograma</option>
                                        </select>
                                        <span id="semUnidade" className="alert alert-danger mt-2" hidden>Unidade de medida é
                                            obrigatória</span>
                                    </div>
                                    <div className="col-sm-6 ">
                                        <label for="quantidade">Quantidade: </label>
                                        <input type="text" className="form-control" id="quantidade" aria-describedby="quantidade"
                                            onkeyup="mascaraQuantidade(this)" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" ">
                                        <label for="preco">Preço: </label><span className="required">*</span>
                                        <input type="text" className="form-control" id="preco" aria-describedby="preco"
                                            placeholder="R$0,00" required onkeyup="mascaraReal(this)" />
                                        <span id="semPreco" className="alert alert-danger mt-2" hidden>Preço é obrigatório</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="container">
                                        <label for="selectPerecivel">Produto perecível: </label><span
                                            className="required d-inline-flex">*</span><br />
                                        <div className="form-check form-check-inline" id="selectPerecivel">
                                            <input className="form-check-input" type="radio" name="radioPerecivel"
                                                id="radioPerecivelTrue" value="true" required />
                                            <label className="form-check-label" for="inlineRadio1">Sim</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="radioPerecivel"
                                                id="radioPerecivelFalse" value="false" />
                                            <label className="form-check-label" for="inlineRadio2">Não</label>
                                        </div>
                                        <br/>
                                            <span id="semPerecivel" className="alert alert-danger mt-2" hidden>Obrigatório informar se é
                                                perecível</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 ">
                                        <label for="validade">Data de validade: </label><span className="required">*</span>
                                        <input type="date" className="form-control" id="validade" aria-describedby="validade"
                                            disabled placeholder="dd/mm/aaaa" />
                                        <span id="semValidade" className="alert alert-danger mt-2" hidden>Validade
                                            obrigatória</span>
                                    </div>
                                    <div className="col-sm-6 ">
                                        <label for="fabricacao">Data de fabricação: </label><span className="required">*</span>
                                        <input type="date" className="form-control" id="fabricacao" aria-describedby="fabricacao"
                                            required placeholder="dd/mm/aaaa" />
                                        <span id="semFabricacao" className="alert alert-danger mt-2" hidden>Fabricação
                                            obrigatória</span>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="row d-flex justify-content-between">
                                        <button type="button" id="botaoSalvar" className="medidasBotao w-25 btn btn-success"
                                            onclick="salvar()">Salvar</button>
                                        <a href="listagem.html" className="medidasBotao w-25 btn btn-danger">Cancelar</a>
                                    </div>
                                </div> */}

                            <div className="">
                                <button className="button" onClick={() => todoCreate(textProdut)}>Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Form