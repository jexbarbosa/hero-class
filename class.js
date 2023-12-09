class Heroi {
    constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }

    atacar () {
        let ataque

        if (this.tipo === "mago") {
            ataque = "relâmpago"
        } else if (this.tipo === "arqueiro") {
            ataque = "chuva de flechas"
        } else if (this.tipo === "paladino") {
            ataque = "espada sagrada"
        } else if (this.tipo === "ninja") {
            ataque = "fuuma shuriken"
        } else {
            ataque = "ataque desconhecido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi = new Heroi("Ravengar", 35, "mago")
heroi.atacar()

const heroi2 = new Heroi("Shishimaru", 30, "ninja")
heroi2.atacar()
