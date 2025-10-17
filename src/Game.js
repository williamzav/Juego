class Game {
    #username;
    #vida;
    #energia;
    #ki;
    constructor(username) {
        this.#username = username;
        this.#vida = 1000;
        this.#energia = 1000;
        this.#ki = 1000;
        this.mostrar_stats();
    }

    mostrar_stats() {
        console.log(`
            username : ${this.#username},
            vida : ${this.#vida},
            energia : ${this.#energia},
            ki : ${this.#ki}
        `);
    }

    getVida() { return this.#vida; }
    getKi() { return this.#ki; }
    getEnergia() { return this.#energia; }

    resetearStats() {
        this.#vida = 1000;
        this.#energia = 1000;
        this.#ki = 1000;
        this.mostrar_stats();
    }

    decremento_vida() {
        this.#vida = this.#vida - 150 >= 0 ? this.#vida - 150 : 0;
        this.mostrar_stats();
    }

    decremento_vida_atk_especial() {
        this.#vida = this.#vida - 300 >= 0 ? this.#vida - 300 : 0;
        this.mostrar_stats();
    }

    atk_basico(player) {
        this.#energia = this.#energia - 150 >= 0 ? this.#energia - 150 : 0;
        this.#ki = this.#ki - 200 >= 0 ? this.#ki - 200 : 0;
        player.decremento_vida();
    }

    atk_especial(player) {
        this.#energia = this.#energia - 300 >= 0 ? this.#energia - 300 : 0;
        this.#ki = this.#ki - 200 >= 0 ? this.#ki - 200 : 0;
        player.decremento_vida_atk_especial();
    }

    cargarKi() {
        this.#energia = Math.min(this.#energia + 300, 1000);
        this.#ki = Math.min(this.#ki + 300, 1000);
        this.mostrar_stats();
    }

    recuperarVida() {
        this.#vida = 1000;
        this.#energia = 1000;
        this.#ki = 1000;
        this.mostrar_stats();
    }
}

export default Game;