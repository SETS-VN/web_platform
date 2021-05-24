/**
 * @type {object}
 * @property {string} name - name of guest
 * @property {string} email - email address of guest
 * @property {string} phone - optional, phone of guest
 * @property {string} subject - subject of email content
 * @property {string} message - content of email
 */
type Contact = {
    id: number;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export default Contact;