import IEmailStructure from './IEmailStructure';

export default interface IEmail {
    /**
     * Send email 
     * @param {IEmailStructure} - object with the content of the email
     * @returns {boolean} - true if email was sent successfully, false otherwise
     */
    sendEmail(struct: IEmailStructure) : boolean;
}