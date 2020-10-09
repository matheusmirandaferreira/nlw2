const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: 'Diego Fernandes',
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp: '123456789',
        bio: 'Entrevista das melhores tecnologias da química avançada. Apaixonado por explodir coisas emlaboratorios e por mudar a via das pessoas atravez da experiencia. Mais de 200.000 pessoas jápassaram pelas minhas exploxões.'
    }

    classValue = {
        subject: 1,
        cost: "20"
        //o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        //classId vira pelo banco de dados após o cadastro
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    //consutar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar classes de um professor 
    //trazer dados dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)
    
    // o horário que a pessoa trabalha, ex: 8:00 as 18:00
    //o horario do time_from é 8:00 precisa ser menor ou igual ao solicitado
    //o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "520";
    `)

    console.log(selectClassesSchedules)

})