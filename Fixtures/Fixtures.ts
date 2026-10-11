import{test as nwe, expect} from '@playwright/test';
import {Customer} from '../Pages/Customerregistion';
import {Basepage} from '../Pages/Basepage';
import { Common } from '../Pages/Common';

type text={
    Common:Common,
    Customer:Customer,
    Basepage:Basepage
}

export const test= nwe.extend<text>({
    Common: async ({ page }, use) => {
        const common = new Common(page);
        await use(common);
    },
    Customer: async ({ page }, use) => {
        await use(new Customer(page));
    },
    Basepage: async ({ page }, use) => {
        await use(new Basepage(page));
    }
});
export {expect};