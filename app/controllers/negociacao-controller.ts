import { Negociacao } from "../models/negociacao";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(){
        
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
       
    }
    criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputData.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }       
}