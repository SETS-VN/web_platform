import { ContactRepository } from "./contact-repository";

const factoryBundle = {
    contact: new ContactRepository(),
}

export class RepositoryFactory {
    getContactRepo() {
        return factoryBundle.contact;
    }
}