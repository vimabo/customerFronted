import { FormControl } from "@angular/forms";


export class Cliente {
    id:number;
    firstName: string;
    lastName: string;
    company: string;



    constructor(id: number, firstName: string, 
        lastName: string, company: string) {
        this.id = id;    
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
    }
}
