import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1RuEjl4QOVb-AW9VKr-kHYMiAlp5sgmeiTzzrxk_rYFc');

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
    
        const sheet = doc.sheetsByIndex[2];
    
        await sheet.loadCells('A3:B3');
        console.log(sheet.title);
    
        const showCoupon = sheet.getCell(2,0).value; 
        console.log(showCoupon);

        const message = sheet.getCell(2,1).value;
        console.log(message);

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