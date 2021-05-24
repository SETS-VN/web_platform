import Contact from "./Contact"
import SendToEmail from "../../email-accounts/crm-emails.json";
import IRepo from "../repo-interface"
import ContactRepository from "./repository/repo-contact-implementation"

class ContactAggregate{

    public contact : Contact;
    public email : string[];
    /**
     * @type {number} id - automatically assigned by repo-contact-implementation
     */
    // private id : number;

    constructor(givenContact: Contact){
        this.contact = givenContact;
        this.email = SendToEmail["crm-emails"];
        // add id with repo-contact later
    }
}

export default ContactAggregate;