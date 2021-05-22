import IEmail from './IEmail'
import IEmailStructure from './IEmailStructure'
import { SMTPClient, Message } from 'emailjs';
import userSendEmail from '../email-accounts/ducanh-email.json'

const EmailClient:SMTPClient = new SMTPClient({
    user: userSendEmail.user,
    password: userSendEmail.password,
    host: userSendEmail.host,
    ssl: userSendEmail.ssl,
})



class Email implements IEmail {
    sendEmail(emailContent: IEmailStructure) : boolean{
        let isSentSuccess: boolean;
        const msg: Message = new Message({
            text: emailContent.text,
            from: userSendEmail.user,
            to: this.getContact().join(","),
            subject: 'testing emailjs',
        })

        EmailClient.send(
            msg,
            (err, message) => {
                console.log(err || message);
            }
        );
        return isSentSuccess;
    }

    getContact():string[]{
        return ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com"]
    }
}