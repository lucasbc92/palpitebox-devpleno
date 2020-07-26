import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'

const doc = new GoogleSpreadsheet('1RuEjl4QOVb-AW9VKr-kHYMiAlp5sgmeiTzzrxk_rYFc');

const genCoupon = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS'))
                .toString(16)
                .toUpperCase();
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
    
        const { Name, Email, Whatsapp } = JSON.parse(req.body);
        
        const configSheet = doc.sheetsByIndex[2];    
        await configSheet.loadCells('A3:B3');

        const showCoupon = configSheet.getCell(2,0).value; 
        const message = configSheet.getCell(2,1).value;

        let Coupon = ''
        let Promo = ''
        let Grade = 5

        if(showCoupon) {
            // TODO: gerar cupom
            Coupon = genCoupon();
            Promo = message
        }

        const surveySheet = doc.sheetsByIndex[1];
        // Name	Email	Whatsapp	Coupon	Promo    
        await surveySheet.addRow({
            Name,
            Email,
            Whatsapp,
            Coupon,
            Promo,
            Grade,
            Date: moment().format('DD/MM/YYYY, HH:mm')
        })
    
        res.end(JSON.stringify({
            showCoupon,
            Coupon,
            Promo
        }))
    } catch (err) {
        res.end('error');
    }

}