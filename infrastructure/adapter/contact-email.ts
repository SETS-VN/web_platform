import Contact from "../../application/Contact/Contact";
import ContactAggregate from "../../application/Contact/ContactAggregate";
import ContactEmail from "../../application/Contact/email-helper/contact-email-implementation";

async function sendEmail(contactEmail: Contact): Promise<boolean>{
    const newContact = new ContactAggregate(contactEmail);
    const emailSender = new ContactEmail();
    let result = await emailSender.sendEmail(newContact.getEmail(),newContact.getContact());
    return result;
}

export default sendEmail;