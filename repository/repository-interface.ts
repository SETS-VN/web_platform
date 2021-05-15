export interface IRepository {
    create(arg: any) : any;

    get(id: any) : any;

    all() : any;

    remove(id: any) : any;
}