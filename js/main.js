document.addEventListener("DOMContentLoaded", function() {
    const signoSelect = document.getElementById("signoSelect");
    const contenido = document.getElementById("contenido");

    alert("Bienvenido al seleccionador de dinosaurios, ¡Espero que te diviertas!");

    signoSelect.addEventListener("change", function() {
        const signoSeleccionado = signoSelect.value;
    
        let texto = "";
        let imagenURL = "";

        // ARIES -----------------------------------------------------------------
        if (signoSeleccionado === "Aries") {
            texto = `
            El Velociraptor era un dinosaurio ágil y rápido, conocido por su naturaleza cazadora y su determinación para enfrentar desafíos. Estas características reflejan la energía ardiente, la valentía y la determinación asociadas con Aries. Al igual que los arianos, el Velociraptor era intrépido y no dudaba en enfrentarse a cualquier obstáculo que se interpusiera en su camino.
            Además, Aries es un signo de fuego, lo que sugiere una energía dinámica y enérgica. El Velociraptor, con su velocidad y agilidad, encarna esta energía ardiente y esta impulsividad propia de Aries, siempre listo para actuar rápidamente ante cualquier situación.
            Otra similitud entre Aries y el Velociraptor es su naturaleza competitiva y su deseo de liderar. Aries tiende a ser un líder natural, siempre buscando estar a la cabeza y destacar entre la multitud, al igual que el Velociraptor que, como depredador, buscaba dominar en su ecosistema y liderar en la caza.
            En resumen, el Velociraptor podría ser considerado como el dinosaurio que representa a Aries debido a su agilidad, determinación, energía dinámica y su naturaleza competitiva y líder.
            `;
            imagenURL = "./imgs/velociraptor.jpg";

        // TAURO -----------------------------------------------------------------
        } else if (signoSeleccionado === "Tauro") {
            texto = ` 
            El Triceratops es conocido por su naturaleza robusta y su resistencia, características que reflejan la perseverancia y la estabilidad asociadas con Tauro. Al igual que los taureanos, el Triceratops tiende a ser tranquilo y paciente, pero también posee una fuerza impresionante cuando es necesario defenderse.
            Además, al igual que Tauro, el Triceratops valora la seguridad y la estabilidad en su entorno. Es un herbívoro que se alimentaba de plantas y que, al igual que los nativos de Tauro, tiende a buscar el equilibrio y la armonía en su vida cotidiana.
            Otra similitud entre Tauro y el Triceratops es su apego a la tierra y a la naturaleza. Tauro es un signo de tierra, lo que sugiere una conexión profunda con el mundo material y un amor por la belleza natural. Del mismo modo, el Triceratops habitaba en la tierra y dependía de su entorno natural para sobrevivir.
            En resumen, el Triceratops podría ser considerado como el dinosaurio que representa a Tauro debido a su resistencia, estabilidad, conexión con la tierra y su naturaleza tranquila pero poderosa.
            `;
            imagenURL = "./imgs/triceratops.jpg"; //

        // GÉMINIS ---------------------------------------------------------------
        } else if (signoSeleccionado === "Géminis") {
            texto = `
            El Archaeopteryx es un dinosaurio conocido por ser uno de los primeros ancestros de las aves. Esta conexión entre los dinosaurios y las aves refleja la dualidad y la versatilidad asociadas con Géminis. Al igual que Géminis, el Archaeopteryx es adaptable y capaz de moverse entre diferentes entornos y formas de vida.
            Además, Géminis es un signo de aire, lo que sugiere una mente rápida y curiosa. El Archaeopteryx, con su capacidad para volar y su agilidad en el aire, encarna esta energía mental y esta búsqueda constante de conocimiento y experiencia.
            Otra similitud entre Géminis y el Archaeopteryx es su naturaleza juguetona y social. Géminis es conocido por ser sociable y comunicativo, y disfruta de la interacción con los demás. Del mismo modo, el Archaeopteryx probablemente se relacionaba con otros de su especie y participaba en comportamientos sociales, como la caza en grupo o el cortejo.
            En resumen, el Archaeopteryx podría ser considerado como el dinosaurio que representa a Géminis debido a su adaptabilidad, agilidad mental, naturaleza social y su conexión con el elemento aire.
            `;
            imagenURL = "./imgs/archaeopteryx.jpg";

        //CÁNCER -----------------------------------------------------------------
        } else if (signoSeleccionado === "Cáncer") {
            texto = `
            El Maiasaura es un dinosaurio que se destacaba por su naturaleza maternal y protectora. Este dinosaurio era conocido por cuidar y alimentar a sus crías, lo que refleja el instinto protector y la conexión emocional que caracterizan a Cáncer. Al igual que los cáncerianos, el Maiasaura valora la familia y el hogar como pilares fundamentales de su vida.
            Además, Cáncer es un signo de agua, lo que sugiere una profunda sensibilidad emocional y una conexión intuitiva con los demás. El Maiasaura, con su comportamiento empático hacia sus crías y su capacidad para interpretar las necesidades de su entorno, encarna esta energía emocional y esta habilidad para leer las emociones de los demás.
            Otra similitud entre Cáncer y el Maiasaura es su naturaleza nostálgica y su apego a las tradiciones. Cáncer tiende a valorar la seguridad emocional y busca la estabilidad en su vida, al igual que el Maiasaura, que habitaba en manadas y dependía del apoyo mutuo para sobrevivir.
            En resumen, el Maiasaura podría ser considerado como el dinosaurio que representa a Cáncer debido a su naturaleza maternal y protectora, su sensibilidad emocional y su apego a la familia y al hogar.
            `;
            imagenURL = "./imgs/maiasaura.jpg";

        //LEO --------------------------------------------------------------------
        } else if (signoSeleccionado === "Leo") {
            texto = `
            El Tyrannosaurus rex es uno de los dinosaurios más icónicos y dominantes del mundo jurásico, con características que reflejan el espíritu audaz, majestuoso y dominante de Leo. Al igual que los leoninos, el Tyrannosaurus rex es conocido por su presencia imponente y su liderazgo en su ecosistema.
            Además, Leo es un signo de fuego, lo que sugiere una energía ardiente y una pasión por destacar y brillar. El Tyrannosaurus rex, con su poderosa mandíbula y su naturaleza depredadora, encarna esta energía de poder y determinación, siempre buscando destacar y mantener su posición en la cima de la cadena alimentaria.
            Otra similitud entre Leo y el Tyrannosaurus rex es su necesidad de atención y reconocimiento. Los leoninos suelen buscar el reconocimiento y el aplauso, al igual que el Tyrannosaurus rex que, como uno de los mayores depredadores de su época, dominaba su entorno y buscaba la admiración de los demás dinosaurios.
            En resumen, el Tyrannosaurus rex podría ser considerado como el dinosaurio que representa a Leo debido a su dominio, su energía ardiente y su búsqueda constante de atención y reconocimiento.
            `;
            imagenURL = "./imgs/tyrannosaurus.jpg";

        //VIRGO ------------------------------------------------------------------
        } else if (signoSeleccionado === "Virgo") {
            texto = `
            El Microraptor era un pequeño dinosaurio con plumas que habitaba en el período Cretácico. Este dinosaurio era conocido por su precisión y atención al detalle, características que reflejan la meticulosidad y la analítica naturaleza de Virgo. Al igual que los virgo, el Microraptor era minucioso en sus acciones y tenía una habilidad para observar y aprender de su entorno.
            Además, Virgo es un signo de tierra, lo que sugiere una conexión con lo práctico y lo terrenal. El Microraptor, como habitante de la tierra, estaba arraigado en su entorno y dependía de sus habilidades para sobrevivir en él, mostrando así una conexión similar con lo tangible y lo concreto.
            Otra similitud entre Virgo y el Microraptor es su naturaleza reservada y cautelosa. Virgo tiende a ser cuidadoso y precavido en sus acciones, al igual que el Microraptor que, a pesar de su tamaño pequeño, actuaba con precaución para evitar peligros y maximizar sus posibilidades de supervivencia.
            En resumen, el Microraptor podría ser considerado como el dinosaurio que representa a Virgo debido a su precisión, meticulosidad, conexión con la tierra y su naturaleza reservada y cautelosa.
            `;
            imagenURL = "./imgs/microraptor.jpg";

        //LIBRA ------------------------------------------------------------------
        } else if (signoSeleccionado === "Libra") {
            texto = `
            El Diplodocus es un dinosaurio conocido por su naturaleza pacífica y su comportamiento tranquilo. Esta criatura herbívora, con su estructura elegante y su paso majestuoso, refleja la armonía y el equilibrio que Libra valora tanto. Al igual que los librianos, el Diplodocus tiende a evitar los conflictos y busca la paz y la serenidad en su entorno.
            Además, Libra es un signo de aire, lo que sugiere una conexión con la belleza y la estética. El Diplodocus, con su largo cuello y su elegante postura, encarna esta energía estética y esta apreciación por la belleza natural, mostrando una gracia similar a la de Libra.
            Otra similitud entre Libra y el Diplodocus es su naturaleza sociable y cooperativa. Libra tiende a valorar las relaciones armoniosas y busca la colaboración y el consenso en sus interacciones sociales, al igual que el Diplodocus que, al vivir en manadas, dependía del apoyo mutuo y la cooperación para sobrevivir.
            En resumen, el Diplodocus podría ser considerado como el dinosaurio que representa a Libra debido a su naturaleza pacífica, su elegancia y gracia, su aprecio por la belleza y su enfoque en las relaciones armoniosas y cooperativas.
            `;
            imagenURL = "./imgs/diplodocus.jpg";

        //ESCORPIO ---------------------------------------------------------------
        } else if (signoSeleccionado === "Escorpio") {
            texto = `
            El Dilophosaurus es un dinosaurio conocido por su naturaleza misteriosa y su presencia imponente. Al igual que los escorpiones, este dinosaurio poseía una aura intrigante y un temperamento poderoso que lo hacía destacar entre otros depredadores de su época.
            Además, Escorpio es un signo de agua, lo que sugiere una profundidad emocional y una intensidad en sus acciones. El Dilophosaurus, con su aspecto intimidante y su capacidad para cazar con astucia, encarna esta energía emocional y esta determinación feroz característica de Escorpio.
            Otra similitud entre Escorpio y el Dilophosaurus es su habilidad para adaptarse y transformarse. Escorpio es conocido por su capacidad para renacer de las cenizas y transformarse a través de sus experiencias, al igual que el Dilophosaurus que, con su agilidad y astucia, se adaptaba a diferentes entornos y situaciones para sobrevivir.
            En resumen, el Dilophosaurus podría ser considerado como el dinosaurio que representa a Escorpio debido a su naturaleza misteriosa, su intensidad emocional, su astucia y su capacidad para adaptarse y transformarse.
            `;
            imagenURL = "./imgs/dilophosaurus.jpg";

        //OFIUCO -----------------------------------------------------------------
        } else if (signoSeleccionado === "Ofiuco") {
            texto = `
            No tengo ni la menor idea de que es eso jaja...
            `;
            imagenURL = "./imgs/ofiuco.jpg";

        //SAGITARIO --------------------------------------------------------------
        } else if (signoSeleccionado === "Sagitario") {
            texto = `
            El Gallimimus es un dinosaurio conocido por su naturaleza aventurera y su movilidad rápida. Esta criatura, similar a un avestruz, era capaz de correr a velocidades impresionantes, lo que refleja el espíritu libre y explorador de Sagitario. Al igual que los sagitarianos, el Gallimimus tiende a buscar la libertad y la expansión, y disfruta de la exploración de nuevos horizontes.
            Además, Sagitario es un signo de fuego, lo que sugiere una energía entusiasta y optimista. El Gallimimus, con su agilidad y su capacidad para moverse rápidamente a través de su entorno, encarna esta energía dinámica y esta pasión por la vida característica de Sagitario.
            Otra similitud entre Sagitario y el Gallimimus es su naturaleza sociable y extrovertida. Sagitario tiende a ser amistoso y sociable, disfrutando de la compañía de otros y buscando la aventura en conjunto, al igual que el Gallimimus que, al vivir en manadas, se beneficiaba de la interacción con sus congéneres y la colaboración en la búsqueda de alimento.
            En resumen, el Gallimimus podría ser considerado como el dinosaurio que representa a Sagitario debido a su naturaleza aventurera, su movilidad rápida, su energía optimista y su sociabilidad.
            `;
            imagenURL = "./imgs/gallimimus.jpg";

        //CAPRICORNIO ------------------------------------------------------------
        } else if (signoSeleccionado === "Capricornio") {
            texto = `
            El Ankylosaurus es un dinosaurio conocido por su naturaleza perseverante y su resistencia ante los desafíos. Esta criatura, con su armadura ósea y su robusta estructura, refleja la determinación y la capacidad de Capricornio para enfrentar obstáculos y perseverar en la consecución de sus metas. Al igual que los capricornianos, el Ankylosaurus es tenaz y no se rinde fácilmente frente a las adversidades.
            Además, Capricornio es un signo de tierra, lo que sugiere una conexión con lo práctico y lo terrenal. El Ankylosaurus, como habitante de la tierra, está arraigado en su entorno y depende de su resistencia física para sobrevivir, mostrando así una conexión similar con lo tangible y lo concreto.
            Otra similitud entre Capricornio y el Ankylosaurus es su enfoque en la seguridad y la estabilidad. Capricornio tiende a valorar la seguridad material y la estabilidad en su vida, al igual que el Ankylosaurus que, con su armadura protectora y su estilo de vida tranquilo, busca protegerse de los peligros y mantener un ambiente seguro a su alrededor.
            En resumen, el Ankylosaurus podría ser considerado como el dinosaurio que representa a Capricornio debido a su naturaleza perseverante, su resistencia, su conexión con la tierra y su enfoque en la seguridad y la estabilidad.
            `;
            imagenURL = "./imgs/ankylosaurus.jpg";

        //ACUARIO ----------------------------------------------------------------
        } else if (signoSeleccionado === "Acuario") {
            texto = `
            El Parasaurolophus es un dinosaurio conocido por su singularidad y su capacidad para destacar entre otros de su especie. Esta criatura, con su característica cresta en forma de tubo, refleja la originalidad y la individualidad que caracteriza a Acuario. Al igual que los acuarianos, el Parasaurolophus tiende a ser único y poco convencional, mostrando una perspectiva diferente en su entorno.
            Además, Acuario es un signo de aire, lo que sugiere una mentalidad innovadora y progresista. El Parasaurolophus, con su cresta distintiva y su capacidad para comunicarse a través de sonidos únicos, encarna esta energía mental y esta disposición para explorar lo nuevo y lo diferente.
            Otra similitud entre Acuario y el Parasaurolophus es su enfoque en la comunidad y la colaboración. Acuario tiende a valorar la igualdad y la solidaridad entre las personas, al igual que el Parasaurolophus que, al vivir en manadas y depender del apoyo mutuo, muestra una conexión profunda con la comunidad y la cooperación.
            En resumen, el Parasaurolophus podría ser considerado como el dinosaurio que representa a Acuario debido a su singularidad, su mentalidad innovadora, su enfoque en la comunidad y su disposición para explorar lo nuevo y lo diferente.
            `;
            imagenURL = "./imgs/parasaurolophus.jpg";

        //PISCIS -----------------------------------------------------------------
        } else if (signoSeleccionado === "Piscis") {
            texto = `
            El Elasmosaurus es un dinosaurio marino conocido por su naturaleza tranquila y su conexión con el océano. Esta criatura, con su cuerpo alargado y su estilo de vida sereno, refleja la sensibilidad y la conexión espiritual que caracteriza a Piscis. Al igual que los piscianos, el Elasmosaurus tiende a ser intuitivo y empático, mostrando una profunda sensibilidad hacia su entorno.
            Además, Piscis es un signo de agua, lo que sugiere una conexión emocional y una capacidad para fluir con las corrientes de la vida. El Elasmosaurus, como habitante del océano, está en sintonía con las mareas y las corrientes marinas, encarnando esta energía fluida y adaptable propia de Piscis.
            Otra similitud entre Piscis y el Elasmosaurus es su naturaleza soñadora y espiritual. Piscis tiende a ser imaginativo y visionario, buscando significado más allá de lo tangible, al igual que el Elasmosaurus que, con su estilo de vida tranquilo en las profundidades del océano, parece estar en armonía con el mundo espiritual y la naturaleza.
            En resumen, el Elasmosaurus podría ser considerado como el dinosaurio que representa a Piscis debido a su naturaleza tranquila, su sensibilidad emocional, su conexión espiritual y su capacidad para fluir con las corrientes de la vida.
            `;
            imagenURL = "./imgs/elasmosaurus.jpg";
        }

        contenido.innerHTML = `<p>${texto}</p><img src="${imagenURL}" alt="${signoSeleccionado}">`;
    });
});