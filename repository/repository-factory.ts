import { ContactRepository } from "./contact-repository";
import { IRepository } from "./repository-interface";

const factoryBundle = {
    contact: new ContactRepository(),
}

export class RepositoryFactory {
    getContactRepo() {
        return factoryBundle.contact;
    }
}