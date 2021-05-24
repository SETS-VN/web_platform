import IEmail from "../../email-interface"
import Contact from "../Contact"
import {SMTPClient, Message} from 'emailjs'
import userSendEmail from '../../../email-accounts/ducanh-email.json'


const EmailClient:SMTPClient = new SMTPClient({
    user: userSendEmail.user,
    password: userSendEmail.password,
    host: userSendEmail.host,
    ssl: userSendEmail.ssl,
})

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

    public sendEmail(email: string[], content: Contact) : boolean {
        let isSuccessful = true;
        const msg: Message = new Message({
            text: this.ContactToEmailText(content),
            from: userSendEmail.user,
            to: email.join(","),
            subject: content.subject,
        })
        
        EmailClient.send(msg, (err, message)=>{
            console.log(err || message);
            isSuccessful = false;
        })
        return isSuccessful;
    }
}

export default ContactEmail;