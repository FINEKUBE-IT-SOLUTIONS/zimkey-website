import {google} from "googleapis";

export default async function handler(
    req,
    res
) {
    console.log('in campaign submit')

    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' })
    }

    const body = req.body

    try {
        console.log('envss',process.env.GOOGLE_CLIENT_EMAIL)
        console.log('envss',process.env.GOOGLE_PRIVATE_KEY)

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        console.log('sheetssss',process.env.GOOGLE_SHEET_ID)


        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:C1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.phone, body.propertyType]
                ]
            }
        });

        console.log('fff',response)

        return res.status(201).json({
            data: response.data
        })
    }catch (e) {
        console.log('cattt',e)
        return res.status(e.code).send({message: e.message})
    }

}