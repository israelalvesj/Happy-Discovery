const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-7.184001",
        lng: "-48.218559",
        name: "Lar das Meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "56315416546",
        images: [
            "https://images.unsplash.com/photo-1603138461768-23d1ba2ab00c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

            "https://images.unsplash.com/photo-1602133187081-4874fdbd555c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

            "https://images.unsplash.com/photo-1606461048073-ef2df26cf660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

            "https://images.unsplash.com/photo-1605506412358-303da9ea238a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })
    
    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
    console.log(orphanage)

    // // //deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
})