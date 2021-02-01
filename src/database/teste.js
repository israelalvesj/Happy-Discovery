const Database = require('./db');

Database.then( async db => {
    // inserir dados na tabela
    /*await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-7.207001",
            "-48.218559",
            "Lar das meninas",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "63992901400",
            "https://images.unsplash.com/photo-1603138461768-23d1ba2ab00c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "1"
        );
    `)*/
    
    // consultar dados da tabela
    /*const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)*/

    // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})