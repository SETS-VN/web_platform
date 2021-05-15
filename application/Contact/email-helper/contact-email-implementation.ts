import IEmail from "../../email-interface"
import Contact from "../Contact"

class ContactEmail implements IEmail{

    private constructor(){}

    public static getContactEmail() : ContactEmail{
        let obj = new ContactEmail();
        return obj;
    }

    public sendEmail(email: string, content: Contact) : boolean {
        let isSuccessful = true;

        return isSuccessful;
    }

}