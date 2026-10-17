
// ═══════════════════════════════════════════════════════════════════════════
export const CFG = {

  // ✏️ MODIFICAR: usuario y contraseña de entrada. Es solo una barrera visual, NO seguridad real.
  //    La contraseña se escribe solo con números (se ignoran barras y espacios).
  login: { user: 'mor', pass: '20102026' },

  // ✏️ MODIFICAR: fecha y hora exacta del cumpleaños (formato AAAA-MM-DDTHH:MM:SS). Alimenta la cuenta regresiva.
  birthday: '2026-10-20T00:00:00',

  // ✏️ MODIFICAR: textos de la portada (pantalla "Inicio").
  home: {
    name: 'MARLON',                       // nombre grande
    dateLabel: '20 · OCTUBRE · 2026',     // fecha dorada
    beforeTitle: 'Se acerca un día que no es cualquiera…',        // mientras falte tiempo
    beforeText: 'El 20 de octubre celebra su cumpleaños una de mis personas favoritas.',
    todayTitle: 'Hoy no es un día cualquiera…',                    // el mismo día del cumpleaños
    todayText: 'Hoy celebra su cumpleaños una de mis personas favoritas.',
    todayBig: 'Hoy es tu día, Mor ❤️',
  },

  // ✏️ MODIFICAR: foto del rompecabezas (cualquier foto de public/photos/; se recorta al centro en cuadrado).
  puzzleImg: 'nosotros-01.jpg',

  // ✏️ MODIFICAR: "Nuestro comienzo" → d = frase pequeña dorada, t = título, x = texto, img = foto.
  //    Puedes añadir o quitar bloques { ... }.
  timeline: [
    { d: 'Donde comenzó todo…', t: 'La danza', x: 'Éramos pareja de baile antes de saber todo lo que vendría después.', img: 'danza-01.jpg' },
    { d: 'Entre ensayo y ensayo', t: 'Nuestros ensayos', x: 'Repetir el mismo paso mil veces y aun así reírnos en cada error. Ahí empezó a sentirse fácil estar a tu lado.', img: 'danza-02.jpg' },
    { d: 'A través de la pantalla', t: 'Nuestros meet', x: 'Las películas que hacían que el tiempo se pasara volando y que me hacian pensar y amar estar a tu lado.', img: 'meet-01.jpg' },
    { d: 'Nuevas experiencias', t: 'Juntos siempre', x: 'Descubrir juntos nuevos lugares y crear recuerdos inolvidables.', img: 'nosotros-01.jpg' },
  ],

  // ✏️ MODIFICAR: "Nuestros recuerdos" (fotos tipo polaroid). c = categoría, d = frase dorada, x = texto, img = foto.
  memories: [
    { c: 'Salidas', d: 'Una día cualquiera', x: 'Una de esas salidas sin mucho plan que terminó siendo de lo mejor. La repetiría minuto a minuto.', img: 'salida-01.jpg' },
    { c: 'Comidas', d: 'Mesa para dos… o más', x: 'Nuestro hobby favorito sin dudas, pero el verdadero placer es compartirlo contigo.', img: 'comida-01.jpg' },
    { c: 'Paseos', d: 'Sin rumbo fijo', x: 'Caminar sin saber a dónde ir y que igual fuera el mejor lugar del mundo.', img: 'paseo-01.jpg' },
    { c: 'Películas', d: 'Función privada', x: 'La película que vimos juntos, que nos hizo reír y soltar una que otra lagrimita.', img: 'meet-02.jpg' },
    { c: 'Espontáneas', d: 'Sin avisar', x: 'La foto que salió sin planearla… y por eso es de las que más me gustan.', img: 'momento-01.jpg' },
  ],

  // ✏️ MODIFICAR: tarjetas con frase (también salen en "Nuestros recuerdos"). t = título, x = texto, img = foto.
  cards: [
    { t: 'Un recuerdo que nunca quiero olvidar…', x: 'Nuestras presentaciones, las risas y esa forma tuya de hacer que todo saliera mejor.', img: 'danza-03.jpg' },
    { t: 'Algo que amo de ti…', x: 'Que eres auténtico, no necesitas esforzarte para ser mi mejor compañía.', img: 'nosotros-02.jpg' },
    { t: 'Un momento que repetiría…', x: 'Cualquiera de esos ratos en los que el tiempo se olvidó de correr.', img: 'salida-02.jpg' },
    { t: 'Algo que extraño…', x: 'Las historias largas y las risas que llegaban sin avisar.', img: 'meet-01.jpg' },
  ],

  // ✏️ MODIFICAR: "Nuestras películas" → n = nombre / título, x = comentario. Pon los títulos reales si quieres.
  movies: [
    { n: 'La primera función', x: 'Nuestro primer meet, con el significado de las gerberas.' },
    { n: 'La que nos atrapó con los F4', x: 'La película que nos hizo reír y regresar por un nuevo capítulo.' },
    { n: 'Las que te encantan', x: 'Amé conocer un nuevo mundo a través de ellas y disfrutarlas contigo.' },
    { n: 'La nueva princesa', x: 'Esa película que pensé que no me gustaría y terminé amando.' },
  ],

  // ✏️ MODIFICAR: frase del mapa de aventura (en "Nuestras películas").
  lotr: 'En cualquier aventura, elegiría volver a caminar contigo.',

  // ✏️ MODIFICAR: "Mor's Cartoons" → k = nombre, x = frase, img = foto (en public/photos/).
  toons: [
    { k: 'TOM Y JERRY', x: 'Persecuciones eternas y risas que nunca pasan de moda.', img: 'toon-tomyjerry.jpg' },
    { k: 'JORGE EL CURIOSO', x: 'Curioso desde chiquito… y todavía lo eres.', img: 'toon-jorge.jpg' },
    { k: 'GRAVITY FALLS', x: 'Misterios, secretos y veranos que se quedan para siempre.', img: 'toon-gravityfalls.jpg' },
    { k: 'SPIDER-MAN', x: 'El héroe que siempre te acompañó.', img: 'toon-spiderman.jpg' },
  ],

  // ✏️ MODIFICAR: el diario secreto (en "El mundo de Mor" → 📔 Diario).
  //    clue = pregunta, hint = ayuda (sale tras 2 errores), answers = respuestas válidas (en minúsculas),
  //    pages = las páginas del diario (puedes añadir más).
  diary: {
    clue: 'Pista: ¿en qué mes es tu cumpleaños? (número o nombre)',
    hint: 'Es el mismo mes que aparece en la portada: 20 · ___ · 2026.',
    answers: ['10', 'diez', 'octubre'],
    pages: [
      { t: 'Página 1 · El comienzo', x: 'La primera vez que supe que bailar contigo era mi parte favorita del ensayo. No fue un día en especial: fue de a poquito, paso a paso, hasta que ya no imaginaba el baile sin ti.' },
      { t: 'Página 2 · Lo que no dije', x: 'Hay cosas que se quedan en una mirada porque las palabras no alcanzan. Una de ellas es gracias: por la paciencia, por las risas y por seguir aquí.' },
      { t: 'Página 3 · Para el futuro', x: 'Para este nuevo año quiero más películas, más charlas largas, más planes sin planear y todos los pasos de baile que nos faltan por inventar.' },
    ],
  },

  // ✏️ MODIFICAR: preguntas del juego "¿Cuánto recuerdas?" → q = pregunta, o = opciones, a = número de la opción correcta (empieza en 0).
  quiz: [
    { q: '¿Dónde empezó nuestra historia?', o: ['En el cine', 'En la danza', 'En el colegio', 'En un partido de fútbol'], a: 1 },
    { q: '¿En qué mes es tu cumpleaños?', o: ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], a: 1 },
    { q: '¿Cuál es tu equipo de fútbol favorito?', o: ['Real Madrid', 'FC Barcelona', 'Juventus', 'Bayern Múnich'], a: 1 },
    { q: '¿Qué superhéroe es tu favorito?', o: ['Batman', 'Superman', 'Spider-Man', 'Iron Man'], a: 2 },
    { q: '¿Cuál de estas series vive en Mor\'s Cartoons?', o: ['Gravity Falls', 'Los Simpson', 'Bob Esponja', 'Rick y Morty'], a: 0 },
  ],

  // ✏️ MODIFICAR: cajas sorpresa → i = emoji, x = mensaje, img = foto opcional (puedes quitar la línea img).
  //    Puedes cambiar estas fotos por tus propias caja-01.jpg, caja-02.jpg… dentro de public/photos/.
  boxes: [
    { i: '📸', x: 'Una foto que te va a sacar una sonrisa.', img: 'momento-01.jpg' },
    { i: '💬', x: '“Contigo hasta los días normales se sienten de estreno.”', img: 'paseo-01.jpg' },
    { i: '🎵', x: 'Una canción para nosotros: esa que se que amas.' },
    { i: '✉️', x: 'Gracias por seguir aquí, Mor. Ve a la Carta. ❤️', img: 'nosotros-02.jpg' },
  ],

  // ✏️ MODIFICAR: GALERÍA. Una línea por foto → ['Categoría', 'archivo.jpg', 'Texto opcional']
  //    · Para AÑADIR fotos: copia el archivo a public/photos/ y agrega una línea aquí. La cuadrícula crece sola
  //      (muestra 12 y un botón "Ver más fotos"), así que puedes poner decenas.
  //    · Para una categoría NUEVA: simplemente escribe un nombre nuevo y su pestaña aparece sola.
  //    · Si un archivo no existe, esa foto se oculta sin romper nada (puedes dejar líneas listas para después).
  gallery: [
    ['Bailando', 'danza-01.jpg'],
    ['Bailando', 'danza-02.jpg'],
    ['Bailando', 'danza-03.jpg'],
    ['Meet', 'meet-01.jpg'],
    ['Meet', 'meet-02.jpg'],
    ['Comiendo', 'comida-01.jpg'],
    ['Paseos', 'paseo-01.jpg'],
    ['Salidas', 'salida-01.jpg'],
    ['Salidas', 'salida-02.jpg'],
    ['Nosotros', 'nosotros-01.jpg'],
    ['Nosotros', 'nosotros-02.jpg'],
    ['Momentos', 'momento-01.jpg'],
    // Ejemplos para añadir más (quita las // al inicio):
    // ['Bailando', 'danza-04.jpg'],
    // ['Nosotros', 'nosotros-03.jpg', 'Texto que sale debajo de la foto'],
  ],

  // ✏️ MODIFICAR: emoji de cada pestaña de la galería (opcional). El ORDEN de aquí es el orden de las pestañas.
  galleryIcons: { Bailando: '💃', Meet: '🎬', Comiendo: '🍔', Paseos: '🚶', Salidas: '🌆', Nosotros: '❤️', Momentos: '📸' },

  // ✏️ MODIFICAR: la carta final. Cada texto entre comillas es un párrafo.
  letter: [
    'Mor,',
    

'Todo empezó en la danza: dos personas que solo debían aprender una coreografía y que, sin darse cuenta, terminaron aprendiendo a entenderse sin necesidad de hablar. Quién diría que, entre pasos, ensayos, risas y errores compartidos, ibas a convertirte en alguien tan especial para mí. Nunca imaginé que algo tan sencillo como coincidir en una danza me llevaría a sentir tanto por una persona. Y ahora, cuando recuerdo cómo empezó todo, me doy cuenta de que hay encuentros que parecen pequeños al principio, pero que terminan ocupando un lugar enorme en el corazón, como comprar zapatillas en la primera cita.',

'Después llegaron los meet, las películas, los juegos y esas charlas que se alargaban sin que nos diéramos cuenta de la hora. Llegaron las bromas, las conversaciones de cualquier cosa y esos momentos en los que, aunque no estuviéramos haciendo nada extraordinario, simplemente compartir el tiempo contigo hacía que todo se sintiera bonito. Poco a poco, te fuiste convirtiendo en parte de mis días, en alguien a quien quería contarle mis cosas, con quien quería reírme y a quien quería seguir conociendo cada vez más. Y creo que eso es lo más bonito de nosotros: que no necesitamos que todos los momentos sean perfectos para encontrar algo especial en ellos.',

'No todo ha sido siempre bonito, y sé que también hemos tenido días malos, momentos difíciles y situaciones que quizás nos han puesto a prueba. Pero, a pesar de esos días en los que las cosas no salen como queremos, de las diferencias, de las dificultades y de todo aquello que a veces puede hacernos sentir un poquito más lejos, hay algo que quiero que tengas muy presente: te sigo amando. Te amo en los días bonitos, cuando todo parece estar bien y sobran las razones para sonreír, pero también en esos días complicados en los que las cosas pesan un poquito más. Porque lo que siento por ti no depende solamente de que todo sea perfecto. Sigues siendo tú, esa persona que llegó a mi vida de una manera inesperada y que, con el tiempo, se ganó un lugar que no cambiaría por nada.',

'Quiero que sepas que me hace feliz tenerte en mi vida, compartir contigo nuestras pequeñas cosas y guardar recuerdos que quizás para otras personas no significarían demasiado, pero que para mí tienen un valor enorme. Me gusta pensar en todo lo que hemos vivido, en las veces que nos hemos hecho reír, en las conversaciones que parecían no terminar nunca y en cada detalle que, sin que lo notaras, se fue convirtiendo en un recuerdo bonito. Y también me emociona pensar en todo lo que todavía nos queda por vivir, en las nuevas historias que podemos crear y en todos esos momentos que algún día recordaremos con una sonrisa.',

'Quise hacerte este pequeño mundo porque siento que mereces algo que tenga un poquito de ti y de todo aquello que te hace ser quien eres. Quizás no es mucho, pero créeme que es con mucho cariño. Por eso están tu fútbol, tus dibujos de siempre, tus juegos y esos pequeños secretos escondidos que espero que descubras con una sonrisa. Quería regalarte algo más que un simple detalle; quería dejarte un pedacito de lo que siento por ti, de lo mucho que te quiero y de lo feliz que me hace poder celebrar un año más de tu vida. Ojalá, mientras lo recorres, encuentres detalles que te hagan reír, recordar cosas nuestras y sentir, aunque sea por un ratito, todo el cariño con el que lo preparé.',

'Y ahora que comienza un nuevo año para ti, deseo de corazón que la vida te regale muchísimas razones para ser feliz. Espero que todo eso que hoy anhelas, cada sueño que guardas en tu corazón y cada meta por la que te esfuerzas puedan hacerse realidad. Deseo que nunca te falten las ganas de seguir adelante, incluso cuando las cosas se pongan difíciles; que tengas la valentía de intentarlo una y otra vez, la paciencia para esperar lo que merece la pena y la confianza para recordar todo lo que eres capaz de lograr. Ojalá la vida te sorprenda de las maneras más bonitas, que lleguen oportunidades que te acerquen a tus sueños y que algún día puedas mirar hacia atrás y sentirte orgulloso de todo lo que conseguiste.',

'Pero, sobre todo, espero que seas muy feliz, Mor. Que tengas días tranquilos, que te rías hasta que te duela la barriga, que nunca pierdas esa parte de ti que disfruta de las cosas que ama y que siempre encuentres motivos para sonreír, incluso en los días que no sean tan buenos. Espero que estés rodeado de personas que te quieran de verdad, que te valoren, que crean en ti y que te recuerden lo mucho que vales. Que nunca tengas que dejar de ser tú para sentirte suficiente y que, cuando dudes de ti mismo, puedas recordar que tienes muchísimas cosas bonitas por delante.',

'Y si alguna vez las cosas no salen como esperabas, quiero que recuerdes que no todos los días tienen que ser buenos para que tu vida sea bonita. También se vale cansarse, equivocarse, cambiar de planes y empezar de nuevo. No tienes que tener todo resuelto ahora. Ve a tu ritmo, disfruta de lo que vas construyendo y no dejes de luchar por aquello que te hace ilusión. Yo deseo de corazón verte cumplir tus sueños, verte crecer, verte alcanzar eso que tanto quieres y verte feliz con la vida que poco a poco vayas construyendo.',

'Gracias por haber llegado a mi vida de esa manera tan inesperada. Gracias por cada risa, cada conversación, cada película compartida, cada juego y cada recuerdo que, sin darte cuenta, has dejado en mí. Gracias por ser parte de mi historia y por permitirme formar parte, aunque sea un poquito, de la tuya. No sé qué nos traerá cada día ni puedo prometer que todo será siempre fácil, pero sí sé que lo que siento por ti es sincero y que, incluso después de los días buenos y malos, mi corazón sigue eligiéndote a ti.',

'Feliz cumpleaños, mi Mor. ❤️ Ojalá este nuevo año de vida sea tan bonito como mereces, que recibas todo el amor que das, que tus sueños encuentren su camino y que la felicidad te acompañe en cada paso. Nunca olvides lo especial que eres ni lo mucho que deseo que te vaya bien en todo lo que te propongas. Espero que hoy sonrías muchísimo, que te sientas querido y que guardes este pequeño regalo como un recordatorio de que hay alguien que te ama, que piensa en ti con muchísimo cariño y que desea verte cumplir todo aquello que hace brillar tus ojos.',

'Te sigo amando, en los días buenos, en los días malos y en todos los días que todavía nos quedan por vivir. Y si pudiera pedirle algo a la vida y a Dios por tu cumpleaños, sería que te cuide mucho, que te permita cumplir cada uno de tus anhelos y que nunca te falten razones para ser feliz.',
  ],
  letterSign: 'Feliz cumpleaños, Mor. ❤️',   // ✏️ 
  letterDate: '20.10.2026',                  // ✏️ 

  // ✏️ MODIFICAR: música de fondo (opcional). Copia los .mp3 a public/music/ y descomenta/añade líneas.
  //    Mientras la lista esté vacía, el botón de música NO aparece en la página.
  playlist: [
     { t: 'Feliz cumpleaños', src: 'cancion-01.mp3' },
     { t: 'Diablada', src: 'cancion-02.mp3' },
     { t: 'Título de la canción', src: 'cancion-03.mp3' },
  ],
};
