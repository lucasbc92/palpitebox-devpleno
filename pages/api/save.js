import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { decodeBase64 } from '../../helpers/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const genCoupon = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS'))
                .toString(16)
                .toUpperCase();
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: decodeBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo();
    
        const { Name, Email, Whatsapp, Grade } = JSON.parse(req.body);
        
        const configSheet = doc.sheetsByIndex[2];    
        await configSheet.loadCells('A3:B3');

        const showCoupon = configSheet.getCell(2,0).value; 
        const message = configSheet.getCell(2,1).value;

        let Coupon = ''
        let Promo = ''

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
            Date: moment().format('DD/MM/YYYY, HH:mm:ss')
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