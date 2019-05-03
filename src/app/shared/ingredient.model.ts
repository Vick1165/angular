import { StateKey } from '@angular/platform-browser';

export class Ingredient{
    public name:string;
    public amount : number;
    
    constructor(name:string, amount:number){
        this.name=name;
        this.amount=amount;

    }
}