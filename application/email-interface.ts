interface IEmail{

    /**
     * send email to a person
     * @param {string} email_to - email of send-to person
     * @param {any} content - content of the email 
     * @returns {boolean} - determine whether sent successfully
     */
    sendEmail(email_to : string, content : any) : boolean;

}

export default IEmail;