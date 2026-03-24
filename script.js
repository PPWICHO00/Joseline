/**
 * ARCHIVO: script.js
 * Controla la playlist, las letras y las animaciones del reproductor.
 */

const playlist = [
    {
        title: "Home", artist: "Edith Whiskers", img: "imagen1.png", audio: "cancion1.mp3", duration: 80,
        lyrics: [
            "Hola señorita Joseline,", "dependiendo de la hora y tiempo en que lea esto, buenos días, tardes o noches.",
            "He aquí mi pequeño proyecto para usted,", "donde le presento ciertas canciones que me recuerdan y relaciono con usted.",
            "Y pues no puedo empezar sin más que con esta canción titulada Home,", "que significa mucho para nosotros.",
            "Principalmente esta canción me transmite un poco de tristeza", "porque sé que no está usted conmigo...",
            "pero sigue siendo mi hogar y más en un día como hoy que es su cumpleaños.", "Reiterando que sigue siendo mi hogar, y un lugar seguro.",
            "Esta canción la elegí al principio porque es la que más me recuerda a usted,", "y también se la quiero dedicar hoy día de su cumpleaños.",
            "Espero que se la pase muy bonito y sea muy feliz.", "Desde lejos le mando un abrazo. Le quiero."
        ]
    },
    {
        title: "Somewhere only we know", artist: "Keane", img: "imagen2.png", audio: "cancion2.mp3", duration: 95,
        lyrics: [
            "Ahora nos vamos con Somewhere Only We Know.", "Especialmente me gusta esta canción porque me recuerda a usted",
            "y al lugar que 'solo nosotros conocemos' (los columpios).", "Un lugar muy bonito donde pasábamos el rato cuando nos sentíamos tristes,",
            "y donde podíamos llorar a gusto.", "Un lugar al que me gusta ir de vez en cuando",
            "solo para sentir esa sensación como cuando estaba ahí con usted.", "Siéndole sincero, es uno de mis lugares favoritos,",
            "y lo mantengo en la memoria como un lugar al que si me siento triste o necesito algo,",
            "sé que en ese lugar puedo sentirme mejor y recordarla por unos instantes.", "Aún recuerdo todas las cosas que dijimos y pasamos ahí.",
            "Es como si hubiera sido ayer, cuando una personita me dijo", "que aún faltaba mucho tiempo para separarnos.",
            "Hoy me doy cuenta que solo era optimista para el bien de los dos,", "pero en el interior sentía que había un vacío casi infinito...",
            "o al menos un vacío sin fin dentro de mí.", "Así que sí, ese es mi lugar favorito.", "Le quiero."
        ]
    },
    {
        title: "Summer Child", artist: "Conan Gray", img: "imagen3.png", audio: "cancion3.mp3", duration: 85,
        lyrics: [
            "Y ahora nos movemos con otra canción de Conan Gray,", "la cual prácticamente no escuchaba...",
            "pero alguien me inculcó sus gustos musicales,", "que realmente son impresionantes, tiene un buen gusto.",
            "Esta canción principalmente la puse por un motivo:", "un día le pedí una canción a una señorita, a un pandita rojo,",
            "y me recomendó esta canción.", "Desde ese entonces la escucho mínimo una vez por semana,",
            "y podría decir que es mi canción favorita de este artista.", "Y creo que esta canción me representa mucho,",
            "porque por dentro me siento vacío aunque yo demuestre lo contrario,", "y eso tiene alguna razón...",
            "el querer a alguien que ya no está a su lado.", "Fin de este cuento.", "(No pude con la presión)", "Le quiero."
        ]
    },
    {
        title: "Chasing Shadows", artist: "Alex Warren", img: "imagen4.png", audio: "cancion4.mp3", duration: 115,
        lyrics: [
            "Esta canción la he escuchado recientemente, y me recuerda mucho a usted,", "porque muy profundamente dentro de mí, la extraño.",
            "Se vienen vagos recuerdos a mi mente cuando la iba a dejar a su casa", "o la esperaba a la salida de la prepa, extraño mucho eso.",
            "Aún cuando a veces sentía que perdía un poco de tiempo,", "pero realmente no era eso, sino que era algo importante,",
            "era un vínculo que nos unía más.", "Entendí que no perdía mi tiempo, sino que me sentía bien,",
            "y si lo piensa, no, no me molestaba esperarla.", "Aunque era aburrido, me gustaba hacerlo.",
            "Aunque no jugara con usted, me gustaba estar ahí,", "por si necesitaba algo o a alguien.",
            "Extraño muchas cosas de usted,", "pero no me pondré a hacer una lista ahora mismo, estaría desperdiciando su tiempo.",
            "Algún día le cumpliré todas las promesas que le hice,", "y si en algún momento no cumplo mi promesa, fallaré como un hombre.",
            "Sin más.", "Le quiero."
        ]
    },
    {
        title: "Home", artist: "Edward Sharpe & The Magnetic Zeros", img: "imagen5.png", audio: "cancion5.mp3", duration: 100,
        lyrics: [
            "Y ahora sí, culminando nuevamente con esta canción...", "Esta canción más que tristeza, me da mucha nostalgia y me llena de recuerdos.",
            "De todas las aventuras que tuvimos, aunque hayan sido pocas, han sido las mejores.", "Esta canción me hace extrañar tu voz y tu sonrisa,",
            "pero para todo esto ya tendré tiempo de decírtelo en persona.", "Me desvié un poco de la razón principal que era felicitarte,",
            "y pues más que nada deseo y espero que te la pases muy bien hoy, princesa.", "Espero que seas feliz, aunque sé que lo eres y mucho.",
            "Espero que te vaya muy bien en la vida y espero salgas adelante.", "Espero que seas una gran ingeniera y lo que más espero es ir a un lugar que le prometí.",
            "Nous partirons et vivrons de nombreuses aventures à Paris, en France,", "et nous visiterons la tour Eiffel...", "Es mi promesa más importante la cual quiero cumplirle.",
            "Y sin más que decir, feliz cumpleaños ingeniera Joseline.", "Feliz cumpleaños pandita rojo.",
            "Feliz cumpleaños corazón de melón.", "Feliz cumpleaños princesa.", "💜"
        ]
    }
];

const PASSWORD_CORRECTA = "joseline240307";
let currentTrack = 0, isPlaying = false, progressInterval, currentSeconds = 0;
const audio1 = document.getElementById('audio1'), audio2 = document.getElementById('audio2');
let activeAudio = audio1, isFirstPlay = true, fadeOutInt, fadeInInt;
let t1, t2, t3;
let canHighlightLyrics = false;

// Inicialización de partículas de fondo
function createParticles() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 35; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const s = (Math.random() * 3 + 2) + 'px';
        p.style.width = s; p.style.height = s;
        p.style.left = Math.random() * 100 + 'vw'; p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDuration = (Math.random() * 12 + 10) + 's';
        p.style.background = 'rgba(216, 180, 254, 0.2)';
        container.appendChild(p);
    }
}
createParticles();

// Lógica de Validación de Contraseña
const pwdInput = document.getElementById('pwdInput'), loginBtn = document.getElementById('loginBtn');
function intentarLogin() {
    if (pwdInput.value.toLowerCase().trim() === PASSWORD_CORRECTA) {
        document.getElementById('loginBtnText').innerHTML = '<svg class="animate-spin h-7 w-7 text-white" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
        setTimeout(() => {
            document.getElementById('loginScreen').classList.add('opacity-0');
            setTimeout(() => {
                document.getElementById('loginScreen').classList.add('hidden');
                const mp = document.getElementById('mainPlayer');
                mp.classList.remove('hidden');
                setTimeout(() => { mp.classList.remove('opacity-0', 'scale-95'); cargarTrack(0); }, 200);
            }, 2000);
        }, 800);
    } else { pwdInput.value = ''; }
}
loginBtn.addEventListener('click', intentarLogin);
pwdInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') intentarLogin(); });

// Función para manejar el desvanecimiento de audio entre canciones
function fadeAudio(audioOut, audioIn) {
    clearInterval(fadeOutInt); clearInterval(fadeInInt);
    if (audioOut && !audioOut.paused) {
        let v = audioOut.volume;
        fadeOutInt = setInterval(() => { 
            v -= 0.05; 
            if (v <= 0) { audioOut.volume = 0; audioOut.pause(); clearInterval(fadeOutInt); } 
            else audioOut.volume = v; 
        }, 100);
    }
    if (audioIn) {
        audioIn.load(); audioIn.volume = 0;
        audioIn.play().then(() => { 
            let v = 0; 
            fadeInInt = setInterval(() => { 
                v += 0.05; 
                if (v >= 1) { audioIn.volume = 1; clearInterval(fadeInInt); } 
                else audioIn.volume = v; 
            }, 100); 
        }).catch(() => { });
    }
}

// Carga la información de la canción y prepara las letras
function cargarTrack(index, direction = null) {
    const track = playlist[index];
    currentSeconds = 0; 
    canHighlightLyrics = false;
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('currentTime').textContent = '0:00';
    document.getElementById('totalTime').textContent = Math.floor(track.duration/60) + ":" + (track.duration%60).toString().padStart(2, '0');
    
    const info = document.getElementById('trackInfoContainer'), wrap = document.getElementById('lyricsWrapper'), container = document.getElementById('lyricsContainer');
    
    // Resetear posición de lectura y animaciones previas
    container.scrollTop = 0; 
    clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    
    info.style.opacity = 0; wrap.style.opacity = 0;
    setTimeout(() => {
        wrap.classList.add('hidden'); wrap.classList.remove('flex');
        info.classList.remove('hidden'); info.classList.add('flex');
        document.getElementById('trackTitle').textContent = track.title;
        document.getElementById('trackArtist').textContent = track.artist;
        info.style.opacity = 1;

        container.innerHTML = '';
        track.lyrics.forEach((l, i) => {
            const p = document.createElement('p'); p.className = 'lyric-line py-2'; p.id = `line-${i}`; p.textContent = l;
            container.appendChild(p);
        });

        // Si se está reproduciendo, programar el desvanecimiento del título para mostrar letras
        if (isPlaying) {
            t1 = setTimeout(() => {
                info.style.opacity = 0;
                t2 = setTimeout(() => {
                    info.classList.add('hidden'); wrap.classList.remove('hidden'); wrap.classList.add('flex');
                    container.scrollTop = 0;
                    t3 = setTimeout(() => { 
                        wrap.style.opacity = 1; 
                        // Retraso para que el scroll no empiece hasta que el texto sea visible
                        setTimeout(() => { canHighlightLyrics = true; }, 1000); 
                    }, 50);
                }, 2000);
            }, 4000);
        }
    }, 800);

    // Animación de cambio de carátula
    let cImg = document.getElementById('coverImg'), nImg = document.getElementById('coverImgNext');
    if (direction) {
        nImg.src = track.img; nImg.classList.remove('hidden', 'slide-left', 'slide-right');
        nImg.classList.add(direction === 'next' ? 'slide-right' : 'slide-left');
        void nImg.offsetWidth;
        cImg.classList.remove('slide-center');
        cImg.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');
        nImg.classList.remove('slide-right', 'slide-left'); nImg.classList.add('slide-center');
        setTimeout(() => { 
            cImg.src = track.img; 
            cImg.className = 'slide-item slide-center w-full h-full object-cover object-center'; 
            nImg.classList.add('hidden'); 
        }, 2800);
    } else { cImg.src = track.img; }
}

// Actualiza el progreso de la barra y el resaltado de letras
function updateProgress() {
    const track = playlist[currentTrack];
    currentSeconds += 0.1;
    document.getElementById('progressBar').style.width = (currentSeconds / track.duration * 100) + '%';
    document.getElementById('currentTime').textContent = Math.floor(currentSeconds/60) + ":" + Math.floor(currentSeconds%60).toString().padStart(2, '0');

    if (canHighlightLyrics) {
        const offset = 8.5; // Tiempo de espera antes de empezar a resaltar
        const progress = Math.max(0, currentSeconds - offset);
        const totalLyricTime = track.duration - offset;
        const idx = Math.min(Math.floor((progress / totalLyricTime) * track.lyrics.length), track.lyrics.length - 1);

        document.querySelectorAll('.lyric-line').forEach((l, i) => {
            if(i === idx) { 
                if(!l.classList.contains('lyric-active')) { 
                    l.classList.add('lyric-active'); 
                    l.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                } 
            } else l.classList.remove('lyric-active');
        });
    } else {
        const first = document.getElementById('line-0'); 
        if (first) first.classList.add('lyric-active');
    }

    if (currentSeconds >= track.duration) siguienteTrack();
}

// Maneja el botón de Play/Pause
function togglePlay() {
    isPlaying = !isPlaying;
    const track = playlist[currentTrack], glow = document.getElementById('glowCover'), info = document.getElementById('trackInfoContainer'), wrap = document.getElementById('lyricsWrapper'), container = document.getElementById('lyricsContainer');

    if (isPlaying) {
        if (isFirstPlay) { activeAudio.src = track.audio; activeAudio.play(); isFirstPlay = false; } 
        else activeAudio.play();
        document.getElementById('playIcon').classList.add('hidden'); document.getElementById('pauseIcon').classList.remove('hidden');
        glow.classList.add('glow-active');
        info.style.opacity = 0;
        t2 = setTimeout(() => { 
            info.classList.add('hidden'); wrap.classList.remove('hidden'); wrap.classList.add('flex'); 
            container.scrollTop = 0; 
            t3 = setTimeout(() => { wrap.style.opacity = 1; setTimeout(() => { canHighlightLyrics = true; }, 1000); }, 50); 
        }, 2000);
        progressInterval = setInterval(updateProgress, 100);
    } else {
        document.getElementById('playIcon').classList.remove('hidden'); document.getElementById('pauseIcon').classList.add('hidden');
        glow.classList.remove('glow-active'); activeAudio.pause(); clearInterval(progressInterval);
        wrap.style.opacity = 0; 
        canHighlightLyrics = false;
        t2 = setTimeout(() => { 
            wrap.classList.add('hidden'); info.classList.remove('hidden'); info.classList.add('flex'); 
            t3 = setTimeout(() => { info.style.opacity = 1; }, 50); 
        }, 1500);
    }
}

// Avanza a la siguiente canción automáticamente
function siguienteTrack() {
    clearInterval(progressInterval);
    if (currentTrack === playlist.length - 1) {
        isPlaying = false; 
        crearConfeti();
        setTimeout(() => { 
            activeAudio.pause(); 
            document.getElementById('blackoutScreen').classList.remove('hidden'); 
            document.getElementById('blackoutScreen').classList.add('broken-bulb-active'); 
        }, 4000); 
        return;
    }
    const old = activeAudio, next = activeAudio === audio1 ? audio2 : audio1;
    currentTrack++; 
    next.src = playlist[currentTrack].audio; 
    fadeAudio(old, next); 
    activeAudio = next; 
    cargarTrack(currentTrack, 'next');
    if (isPlaying) progressInterval = setInterval(updateProgress, 100);
}

// Maneja el salto manual (Botones atrás/adelante)
function saltarTrackManual(dir) {
    clearInterval(progressInterval); 
    const was = isPlaying;
    const old = activeAudio, next = activeAudio === audio1 ? audio2 : audio1;
    if (dir === 'next') currentTrack++; else currentTrack--;
    next.src = playlist[currentTrack].audio;
    if (was) fadeAudio(old, next); 
    else { old.pause(); isFirstPlay = true; }
    activeAudio = next; 
    cargarTrack(currentTrack, dir);
    if (was) { progressInterval = setInterval(updateProgress, 100); }
}

// Listeners de botones
document.getElementById('playBtn').addEventListener('click', togglePlay);
document.getElementById('prevBtn').addEventListener('click', () => { if (currentTrack > 0) saltarTrackManual('prev'); });
document.getElementById('nextBtn').addEventListener('click', () => { if (currentTrack < playlist.length - 1) saltarTrackManual('next'); });

// Lluvia de confeti final
function crearConfeti() {
    for (let i = 0; i < 150; i++) {
        const c = document.createElement('div'); c.classList.add('confetti');
        c.style.backgroundColor = ['#d8b4fe', '#c084fc', '#ffffff', '#ffd700'][Math.floor(Math.random()*4)];
        c.style.left = Math.random() * 100 + 'vw';
        const d = Math.random() * 3 + 4; c.style.animationDuration = d + 's';
        document.body.appendChild(c); 
        setTimeout(() => c.remove(), d * 1000 + 1000);
    }
}
