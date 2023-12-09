import axios from 'axios';
import auth from "./authGoogleCalendar.js";

async function getCalendar() {
    const googleCalendar = await auth.GoogleCalendar();
    console.log(googleCalendar);

    const calendarId = 'teste@teste.com'

    const getCalendar = await axios({
        method: 'get',
        url: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
        params: {
            timeMin: '2023-12-09T06:30:00-03:00',
            timeMax: '2023-12-09T23:59:00-03:00',
            orderBy: 'startTime',
            singleEvents: 'true'
        },
        headers: {
            Authorization: `${googleCalendar.token_type} ${googleCalendar.access_token}`
        }
    })
    console.log(getCalendar.data)

    // falta
    // - para cada item retornado da listagem
    //   verificar a descrição se tiver o ID da tarefa
    //   - atualizar a tarefa com o horário da agenda
    //   - atualizar a cor da agenda para verde
}

getCalendar()