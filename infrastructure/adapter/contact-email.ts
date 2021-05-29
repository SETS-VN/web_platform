import Contact from "../../application/Contact/Contact";
import ContactAggregate from "../../application/Contact/ContactAggregate";
import ContactEmail from "../../application/Contact/email-helper/contact-email-implementation";

// async function, takes in email form, returns if success or not
async function sendEmail(contactEmail: Contact): Promise<boolean>{
    // create contact aggregate to know who to send to
    const newContact = new ContactAggregate(contactEmail);

    // get handler of the send implementation
    const emailSender = new ContactEmail();

    // use ContactEmail implementation handler to send with ContactAggregrate
    let result = await emailSender.sendEmail(newContact.getEmail(),newContact.getContact());
    return result;
}

export default sendEmail;