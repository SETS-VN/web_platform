import Contact from "../Contact";
import ContactAggregate from "../ContactAggregate";
import ContactEmail from "../email-helper/contact-email-implementation";

function sendEmail(contactEmail: Contact): boolean{
    const newContact = new ContactAggregate(contactEmail);
    const emailSender = new ContactEmail();
    let result = emailSender.sendEmail(newContact.email, newContact.contact);

    return result;
}

export default sendEmail;