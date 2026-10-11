import {Page,Locator, expect} from '@playwright/test';
import { Common } from './Common';
export class Basepage extends Common{
    
    signinbutton: Locator;
     getstatedbutton: Locator;

    constructor(protected readonly page: Page) {
        
        super(page);
        this.signinbutton = this.page.locator('//a[@href="/login"]');
        this.getstatedbutton = this.page.locator('//a[@href="/register"]');
    }
   async signinbuttonvisibility(): Promise<boolean> {
        return await this.visibility(this.signinbutton);
    }
    async getstatedbuttonvisibility(): Promise<boolean> {
        return await this.visibility(this.getstatedbutton);
    }
    async clicksigninbutton(): Promise<void> {
        await this.clickElement(this.signinbutton);
    }

    async clickgetstatedbutton(): Promise<void> {
        await this.clickElement(this.getstatedbutton);
    }

}