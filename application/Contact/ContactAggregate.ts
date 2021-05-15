import Contact from "./Contact"
import IRepo from "../repo-interface"
import ContactRepository from "./repository/repo-contact-implementation"

class ContactAggregate{

    private contact : Contact;
    private email : String[];
    /**
     * @type {number} id - automatically assigned by repo-contact-implementation
     */
    private id : number;

    private constructor(){}

    /**
     * factory method to generate an instance of Contact for each request by guest
     * @param {Contact} contact - contact field created by guest
     * @returns {ContactAggregate}
     */
    public static getContactAggregate(contact : Contact) : ContactAggregate{
        let construct = new ContactAggregate();
        construct.contact = contact;

        // get id of this record in database
        

        // get email of CRM teams from database

        return construct;
    }
}

export default ContactAggregate;