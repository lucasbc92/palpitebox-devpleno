import { GoogleSpreadsheet } from 'google-spreadsheet'
import { decodeBase64 } from '../../helpers/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: decodeBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo();
    
        const sheet = doc.sheetsByIndex[2];    
        await sheet.loadCells('A3:B3');

        const showCoupon = sheet.getCell(2,0).value; 
        const message = sheet.getCell(2,1).value;

        res.end(JSON.stringify({
            showCoupon,
            message
        }))
    } catch (err) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
}