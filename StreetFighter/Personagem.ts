export class Personagem{
    nome: string
    vida: number
    nacionalidade: string
    estiloDeLuta: string
    constructor(nome: string, vida: number, nacionalidade: string, estiloDeLuta: string){
        this.nome = nome
        this.vida = vida
        this.nacionalidade = nacionalidade
        this.estiloDeLuta = estiloDeLuta
    }
    private getNome(): string{
        return this.nome
    }
    private setNome(nome: string){
        this.nome = nome
    }

    private getVida(): number{
        return this.vida
    }
    private setVida(vida: number){
        this.vida = vida
    }
    
    private getNacionalidade(): string{
        return this.nacionalidade
    }
    private setNacionalidade(nacionalidade: string){
        this.nacionalidade = nacionalidade
    }
    
    private getEstiloDeLuta(): string{
        return this.estiloDeLuta
    }
    private setEstiloDeLuta(estiloDeLuta: string){
        this.estiloDeLuta = estiloDeLuta
    }

    golpeLeve(){}
    golpePesado(){}
    golpeEspecial(){}
}