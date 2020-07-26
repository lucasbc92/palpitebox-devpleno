import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1RuEjl4QOVb-AW9VKr-kHYMiAlp5sgmeiTzzrxk_rYFc');

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
    
        const { Name, Email, Whatsapp } = JSON.parse(req.body);
        
        const sheet = doc.sheetsByIndex[1];
        // Name	Email	Whatsapp	Coupon	Promo
    
        await sheet.addRow({
            Name,
            Email,
            Whatsapp,
            Coupon: 'aaa111',
            Promo: 'gyaygsygas'
        })
    
        res.end(req.body)
    } catch (err) {
        res.end('error');
    }

}