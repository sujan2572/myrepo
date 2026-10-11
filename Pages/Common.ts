import{Page,Locator,expect}from '@playwright/test';
export class Common{

    constructor(protected readonly page: Page) {}

    async openurl(url:string): Promise<void>{
        await this.page.goto(url);
        await this.page.waitForTimeout(2000);
    
    }

    async clickElement(locator:Locator): Promise<void>{
        await locator.click();
        
    }
 async fileinput(locator:Locator, value:string): Promise<void>{
    await locator.setInputFiles(value);
 }
 async visibility(locator:Locator): Promise<boolean>{
    return await locator.isVisible();
 }
 async timestamp(): Promise<string>{
return`${Date.now()}${Math.floor(Math.random() * 1000)}`;

}
}
