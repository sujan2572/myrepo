import {Page,Locator, expect} from '@playwright/test';
import { Basepage } from './Basepage';
export interface CustomerregistionData {
    fullname: string;
    phonenumber: string;
    email: string;
    password: string;
}
export class Customer extends Basepage{

    bookcarebutton: Locator;
    fullnameinput: Locator;
    phonenumberinput: Locator;
    emailinput: Locator;
    passwordinput: Locator;
    createaccountbutton: Locator;


    
    constructor(protected readonly page: Page) {
        super(page);
        this.bookcarebutton =page.getByRole('button',{name:'Book care'});
        this.fullnameinput =page.locator('.input').first() ;

        this.phonenumberinput =page.locator('.input').nth(1);

        this.emailinput =page.locator('.input').nth(2);

        this.passwordinput = page.locator('.input').nth(3);

        this.createaccountbutton=page.getByRole('button',{name:'Create account'});

    }
    async clickbookcarebutton(): Promise<void> {
        await this.clickElement(this.bookcarebutton);
    }
    async Customerregistionform(data: CustomerregistionData): Promise<void> {
        await this.fullnameinput.fill(data.fullname);
        await this.phonenumberinput.fill(data.phonenumber);
    
        await this.emailinput.fill(data.email);
        await this.passwordinput.fill(data.password);
    }


   
}

