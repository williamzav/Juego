import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../dist/public/css/main.css';

import Game from './Game.js';
import Swal from 'sweetalert2';

let player1;
let player2;

let personaje1 = "";
let personaje2 = "";

let turno = 1;
let usosVida1 = 3;
let usosVida2 = 3;
let juegoActivo = true;

// Contador de victorias
let victorias1 = 0;
let victorias2 = 0;

let btn_py1 = document.getElementById("btn_py1");
let btn_py2 = document.getElementById("btn_py2");

let seleccion1 = document.getElementById("seleccion_personaje1");
let seleccion2 = document.getElementById("seleccion_personaje2");

const accionesPersonaje = {
    "Cell": {
        basico: { img: "Cell/basico.png", msj: "Cell ataca con un golpe básico" },
        especial: { img: "Cell/especial.png", msj: "Cell ataca con un golpe especial" },
        semilla: { img: "Cell/curar.png", msj: "Cell se cura con una semilla del ermitaño" },
        ki: { img: "Cell/energia.png", msj: "Cell recupera energía" }
    },
    "Gogueta": {
        basico: { img: "Gogueta/basico.png", msj: "Gogueta ataca con un golpe básico" },
        especial: { img: "Gogueta/especial.png", msj: "Gogueta ataca con un golpe especial" },
        semilla: { img: "Gogueta/curar.png", msj: "Gogueta se cura con una semilla del ermitaño" },
        ki: { img: "Gogueta/energia.png", msj: "Gogueta recupera energía" }
    },
    "Goku": {
        basico: { img: "Goku/basico.png", msj: "Goku ataca con un golpe básico" },
        especial: { img: "Goku/especial.png", msj: "Goku ataca con un golpe especial" },
        semilla: { img: "Goku/curar.png", msj: "Goku se cura con una semilla del ermitaño" },
        ki: { img: "Goku/energia.png", msj: "Goku recupera energía" }
    },
    "Pikoro": {
        basico: { img: "Pikoro/basico.png", msj: "Pikoro ataca con un golpe básico" },
        especial: { img: "Pikoro/especial.png", msj: "Pikoro ataca con un golpe especial" },
        semilla: { img: "Pikoro/curar.png", msj: "Pikoro se cura con una semilla del ermitaño" },
        ki: { img: "Pikoro/energia.png", msj: "Pikoro recupera energía" }
    },
    "Trunks": {
        basico: { img: "Trunks/basico.png", msj: "Trunks ataca con un golpe básico" },
        especial: { img: "Trunks/especial.png", msj: "Trunks ataca con un golpe especial" },
        semilla: { img: "Trunks/curar.png", msj: "Trunks se cura con una semilla del ermitaño" },
        ki: { img: "Trunks/energia.png", msj: "Trunks recupera energía" }
    },
    "Veguetta": {
        basico: { img: "Veguetta/basico.png", msj: "Veguetta ataca con un golpe básico" },
        especial: { img: "Veguetta/especial.png", msj: "Veguetta ataca con un golpe especial" },
        semilla: { img: "Veguetta/curacion.png", msj: "Veguetta se cura con una semilla del ermitaño" },
        ki: { img: "Veguetta/energia.png", msj: "Veguetta recupera energía" }
    },
    "Veguito": {
        basico: { img: "Veguito/basico.png", msj: "Veguito ataca con un golpe básico" },
        especial: { img: "Veguito/especial.png", msj: "Veguito ataca con un golpe especial" },
        semilla: { img: "Veguito/curar.png", msj: "Veguito se cura con una semilla del ermitaño" },
        ki: { img: "Veguito/energia.png", msj: "Veguito recupera energía" }
    },
    "Buu": {
        basico: { img: "Buu/basico.png", msj: "Buu ataca con un golpe básico" },
        especial: { img: "Buu/especial.png", msj: "Buu ataca con un golpe especial" },
        semilla: { img: "Buu/curar.png", msj: "Buu se cura con una semilla del ermitaño" },
        ki: { img: "Buu/energia.png", msj: "Buu recupera energía" }
    },
    "Zamasu": {
        basico: { img: "Zamasu/basico.png", msj: "Zamasu ataca con un golpe básico" },
        especial: { img: "Zamasu/especial.png", msj: "Zamasu ataca con un golpe especial" },
        semilla: { img: "Zamasu/curar.png", msj: "Zamasu se cura con una semilla del ermitaño" },
        ki: { img: "Zamasu/energia.png", msj: "Zamasu recupera energía" }        
    },
    "Gohan": {
        basico: { img: "Gohan/basico.png", msj: "Gohan ataca con un golpe básico" },
        especial: { img: "Gohan/especial.png", msj: "Gohan ataca con un golpe especial" },
        semilla: { img: "Gohan/curar.png", msj: "Gohan se cura con una semilla del ermitaño" },
        ki: { img: "Gohan/energia.png", msj: "Gohan recupera energía" }
    }
};

const alertaATK = (personaje, accion) => {
    Swal.fire({
        title: accionesPersonaje[personaje][accion].msj,
        imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img} `,
        imageWidth: 400,
        imageHeight: 400,
        background: "none",
        backdrop: `rgba(255, 0, 0, 1)`,
        timer: 3000,
        showConfirmButton: false
    });
};

const alertaATKEsp = (personaje, accion) => {
    Swal.fire({
        title: accionesPersonaje[personaje][accion].msj,
        imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img}`,
        imageWidth: 400,
        imageHeight: 400,
        background: "none",
        backdrop: `rgba(170, 0, 255, 1)`,
        timer: 3000,
        showConfirmButton: false
    });
};

const alertaSemilla = (personaje, accion) => {
    Swal.fire({
        title: accionesPersonaje[personaje][accion].msj,
        imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img}`,
        imageWidth: 400,
        imageHeight: 400,
        background: "none",
        backdrop: `rgba(4, 255, 0, 1)`,
        timer: 3000,
        showConfirmButton: false
    });
};

const alertaKi = (personaje, accion) => {
    Swal.fire({
        title: accionesPersonaje[personaje][accion].msj,
        imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img}`,
        imageWidth: 400,
        imageHeight: 400,
        background: "none",
        backdrop: `rgba(221, 255, 0, 1)`,
        timer: 3000,
        showConfirmButton: false
    });
};

const actualizarContadorVictorias = () => {
    document.getElementById("victorias1").innerText = victorias1;
    document.getElementById("victorias2").innerText = victorias2;
};

const verificarVictoria = () => {
    if (player1.getVida() <= 0) {
        juegoActivo = false;
        victorias2++;
        actualizarContadorVictorias();
        let ganador = document.getElementById("username2").innerText;
        Swal.fire({
            title: '¡Victoria!',
            html: `<h2>${ganador} ha ganado</h2>`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Revancha',
            cancelButtonText: 'Volver a selección de personajes'
        }).then((result) => {
            if (result.isConfirmed) {
                revancha();
            } else {
                volverASeleccion();
            }
        });
        return true;
    }
    if (player2.getVida() <= 0) {
        juegoActivo = false;
        victorias1++;
        actualizarContadorVictorias();
        let ganador = document.getElementById("username1").innerText;
        Swal.fire({
            title: '¡Victoria!',
            html: `<h2>${ganador} ha ganado</h2>`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Revancha',
            cancelButtonText: 'Volver a selección de personajes'
        }).then((result) => {
            if (result.isConfirmed) {
                revancha();
            } else {
                volverASeleccion();
            }
        });
        return true;
    }
    return false;
};

const volverASeleccion = () => {
    // Ocultar batalla y contador
    document.getElementById("batalla").classList.add("d-none");
    document.getElementById("contador_victorias").classList.add("d-none");
    
    // Quitar fondo de batalla
    document.body.style.backgroundImage = 'none';
    
    // Mostrar selección de personajes
    document.getElementById("jugador1").classList.remove("d-none");
    document.getElementById("jugador2").classList.remove("d-none");
    
    // Limpiar inputs
    document.getElementById("username_py1").value = "";
    document.getElementById("username_py2").value = "";
    
    // Resetear selección de personajes
    personaje1 = "";
    personaje2 = "";
    
    // Restaurar botones a su color original
    seleccion1.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-danger");
    });
    
    seleccion2.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-primary");
    });
    
    // Resetear jugadores
    player1 = null;
    player2 = null;
    
    // Resetear stats del juego
    turno = 1;
    usosVida1 = 3;
    usosVida2 = 3;
    juegoActivo = true;
};

const revancha = () => {
    player1.resetearStats();
    player2.resetearStats();
    turno = 1;
    usosVida1 = 3;
    usosVida2 = 3;
    juegoActivo = true;
    cambiarFondoAleatorio();
    actualizarBarras();
    mostrarTurno();
};

const cambiarSeleccion = (botones, seleccionado, color) => {
    botones.forEach(btn => {
        if (seleccionado == btn.querySelector("img").title) {
            btn.classList.remove(color);
            btn.classList.add("btn-warning");
        } else {
            btn.classList.remove("btn-warning");
            btn.classList.add(color);
        }
    });
};

seleccion1.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (evento) => {
        cambiarSeleccion(seleccion1.querySelectorAll("button"), evento.target.title, "btn-danger");
        personaje1 = evento.target.title;
    });
});

seleccion2.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (evento) => {
        cambiarSeleccion(seleccion2.querySelectorAll("button"), evento.target.title, "btn-primary");
        personaje2 = evento.target.title;
    });
});

const mostrarBatalla = () => {
    if (player1 && personaje1 && player2 && personaje2) {
        document.getElementById("batalla").classList.remove("d-none");
        document.getElementById("contador_victorias").classList.remove("d-none");
        cambiarFondoAleatorio();
        actualizarBarras();
        mostrarTurno();
    }
};

const cambiarFondoAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    document.body.style.backgroundImage = `url('./public/img/fondo/${numeroAleatorio}.jpg')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
};

const mostrarTurno = () => {
    let jugador = turno === 1 ? "Jugador 1 🔴" : "Jugador 2 🔵";
    let color = turno === 1 ? "#dc3545" : "#0d6efd";

    Swal.fire({
        title: `🎮 Turno de ${jugador}`,
        background: color,
        color: 'white',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        position: 'top',
        toast: true
    });
};

const cambiarTurno = () => {
    if (!juegoActivo) return;
    turno = turno === 1 ? 2 : 1;
    setTimeout(mostrarTurno, 500);
};

const validarTurno = (jugador) => {
    if (!juegoActivo) return false;
    if (turno !== jugador) {
        Swal.fire({
            icon: 'info',
            title: '⏳ Espera tu turno',
            text: `Debe jugar el jugador ${turno}`,
            timer: 1000,
            showConfirmButton: false,
            position: 'top',
            toast: true
        });
        return false;
    }
    return true;
};

btn_py1.addEventListener("click", () => {
    let user_py1 = document.getElementById("username_py1").value;
    if (user_py1 != "") {
        player1 = new Game(user_py1);
        document.getElementById("username1").innerText = user_py1;
        document.getElementById("img_personaje1").src = `./public/img/${personaje1}/base.png`;
    } else {
        Swal.fire({ icon: 'error', title: 'Error', text: 'El nombre del jugador 1 no puede estar vacío' });
    }
    if (personaje1 == "") Swal.fire({ icon: 'error', title: 'Error', text: 'Debe seleccionar un personaje' });
    ocultarSeleccion1();
});

btn_py2.addEventListener("click", () => {
    let user_py2 = document.getElementById("username_py2").value;
    if (user_py2 != "") {
        player2 = new Game(user_py2);
        document.getElementById("username2").innerText = user_py2;
        document.getElementById("img_personaje2").src = `./public/img/${personaje2}/base.png`;
    } else {
        Swal.fire({ icon: 'error', title: 'Error', text: 'El nombre del jugador 2 no puede estar vacío' });
    }
    if (personaje2 == "") Swal.fire({ icon: 'error', title: 'Error', text: 'Debe seleccionar un personaje' });
    ocultarSeleccion2();
});

const ocultarSeleccion1 = () => {
    if (player1 && personaje1) {
        document.getElementById("jugador1").classList.add("d-none");
        document.getElementById("nombre_personaje1").innerText = personaje1;
        if (player2 && personaje2) {
            mostrarBatalla();
        }
    }
};

const ocultarSeleccion2 = () => {
    if (player2 && personaje2) {
        document.getElementById("jugador2").classList.add("d-none");
        document.getElementById("nombre_personaje2").innerText = personaje2;
        if (player1 && personaje1) {
            mostrarBatalla();
        }
    }
};

document.getElementById("btn_atk_basico1").addEventListener("click", () => {
    if (!validarTurno(1)) return;
    alertaATK(personaje1, "basico");
    player1.atk_basico(player2);
    actualizarBarras();
    if (verificarVictoria()) return;
    cambiarTurno();
});

document.getElementById("btn_atk_basico2").addEventListener("click", () => {
    if (!validarTurno(2)) return;
    alertaATK(personaje2, "basico");
    player2.atk_basico(player1);
    actualizarBarras();
    if (verificarVictoria()) return;
    cambiarTurno();
});

document.getElementById("btn_atk_especial1").addEventListener("click", () => {
    if (!validarTurno(1)) return;
    if (player1.getKi() < 500 || player1.getEnergia() < 400) {
        Swal.fire({
            icon: 'warning',
            title: '¡No puedes atacar!',
            text: 'Te falta ki o energía para usar el ataque especial.'
        });
        return;
    }
    alertaATKEsp(personaje1, "especial");
    player1.atk_especial(player2);
    actualizarBarras();
    if (verificarVictoria()) return;
    cambiarTurno();
});

document.getElementById("btn_atk_especial2").addEventListener("click", () => {
    if (!validarTurno(2)) return;
    if (player2.getKi() < 500 || player2.getEnergia() < 400) {
        Swal.fire({
            icon: 'warning',
            title: '¡No puedes atacar!',
            text: 'Te falta ki o energía para usar el ataque especial.'
        });
        return;
    }
    alertaATKEsp(personaje2, "especial");
    player2.atk_especial(player1);
    actualizarBarras();
    if (verificarVictoria()) return;
    cambiarTurno();
});

document.getElementById("btn_ki1").addEventListener("click", () => {
    if (!validarTurno(1)) return;
    if (player1.getKi() === 1000 && player1.getEnergia() === 1000) {
        Swal.fire({
            icon: 'info',
            title: 'Ki y Energía al máximo',
            text: 'No puedes cargar ki cuando ya tienes el máximo.'
        });
        return;
    }
    alertaKi(personaje1, "ki");
    player1.cargarKi();
    actualizarBarras();
    cambiarTurno();
});

document.getElementById("btn_ki2").addEventListener("click", () => {
    if (!validarTurno(2)) return;
    if (player2.getKi() === 1000 && player2.getEnergia() === 1000) {
        Swal.fire({
            icon: 'info',
            title: 'Ki y Energía al máximo',
            text: 'No puedes cargar ki cuando ya tienes el máximo.'
        });
        return;
    }
    alertaKi(personaje2, "ki");
    player2.cargarKi();
    actualizarBarras();
    cambiarTurno();
});

document.getElementById("btn_vida1").addEventListener("click", () => {
    if (!validarTurno(1)) return;
    if (player1.getVida() === 1000) {
        Swal.fire({
            icon: 'info',
            title: 'Vida al máximo',
            text: 'No puedes usar la semilla del ermitaño si ya tienes vida completa.'
        });
        return;
    }
    if (usosVida1 > 0) {
        alertaSemilla(personaje1, "semilla");
        player1.recuperarVida();
        usosVida1--;
        actualizarBarras();
        cambiarTurno();
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Límite alcanzado',
            text: 'Ya no puedes recuperar vida más veces.'
        });
    }
});

document.getElementById("btn_vida2").addEventListener("click", () => {
    if (!validarTurno(2)) return;
    if (player2.getVida() === 1000) {
        Swal.fire({
            icon: 'info',
            title: 'Vida al máximo',
            text: 'No puedes usar la semilla del ermitaño si ya tienes vida completa.'
        });
        return;
    }
    if (usosVida2 > 0) {
        alertaSemilla(personaje2, "semilla");
        player2.recuperarVida();
        usosVida2--;
        actualizarBarras();
        cambiarTurno();
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Límite alcanzado',
            text: 'Ya no puedes recuperar vida más veces.'
        });
    }
});

function actualizarBarras() {
    document.getElementById("vida1").style.width = `${player1.getVida() / 10}%`;
    document.getElementById("vida1").innerText = `${player1.getVida()}`;
    document.getElementById("energia1").style.width = `${player1.getEnergia() / 10}%`;
    document.getElementById("energia1").innerText = `${player1.getEnergia()}`;
    document.getElementById("ki1").style.width = `${player1.getKi() / 10}%`;
    document.getElementById("ki1").innerText = `${player1.getKi()}`;

    document.getElementById("vida2").style.width = `${player2.getVida() / 10}%`;
    document.getElementById("vida2").innerText = `${player2.getVida()}`;
    document.getElementById("energia2").style.width = `${player2.getEnergia() / 10}%`;
    document.getElementById("energia2").innerText = `${player2.getEnergia()}`;
    document.getElementById("ki2").style.width = `${player2.getKi() / 10}%`;
    document.getElementById("ki2").innerText = `${player2.getKi()}`;
}