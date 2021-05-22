export default interface IEmailStructure {
    emailAddress: string;
    subject: string;
    text: string;
    attachment: {};

    constructEmail: (obj: object) => string;
}

