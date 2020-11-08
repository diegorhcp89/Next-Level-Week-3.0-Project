const Database = require('./db');
const savaOrphanage = require('./savaOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    await savaOrphanage(db,{
        lat: "-23.687977",
        lng: "-46.6829917",
        name: "Lar dos Meninos", 
        about:
          "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98 968455621",
        images: [
          "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
          "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions:
          "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horários de visitas Das 18h até 8h",
        open_on_weekends: "0",
      },)

    // consultar dados da tabela
    const selectesOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectesOrphanages)

    // Consultar somente 1 orphanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
   // console.log(orphanage)

    // // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})