import IEmail from "../../email-interface"
import Contact from "../Contact"
import SenderEmailInfo from '../../../email-accounts/sender-email-info.json'
import emailjs from 'emailjs-com';


class ContactEmail implements IEmail{

    constructor(){}

    public static getContactEmail() : ContactEmail{
        let obj = new ContactEmail();
        return obj;
    } 
    
    private ContactToEmailText(content: Contact): string{
        let txt = "";
        txt += "Name: " + content.name + "\n";
        txt += "From: " + content.email + "\n";
        if (content.email != null && content.email != undefined){
            txt += "Phone number: " + content.phone + "\n";
        }
        return txt;
    }

    public async sendEmail(recipients: string[], content: Contact){
        let results = false;
        await emailjs.send(
            SenderEmailInfo.SenderEmailInfo["SERVICE_ID"], 
            SenderEmailInfo.SenderEmailInfo["TEMPLATE_ID"], 
            {...content, sets_email: recipients.join(",")}, 
            SenderEmailInfo.SenderEmailInfo["USER_ID"])
        .then((response) => {
            results = true;
        }, (err) => {
            results = false;
        });
        return results;
    }
}

export default ContactEmail;