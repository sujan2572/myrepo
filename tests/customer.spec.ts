import{expect, test} from '../Fixtures/Fixtures.ts';
import{customerData} from '../Data/Data.ts';
test('Customer Registration', async ({ Customer,Common,Basepage }) =>{
    await Common.openurl('https://carelink-fh4o.onrender.com/');
    await Basepage.clickgetstatedbutton();
    await Customer.clickbookcarebutton();
await Customer.Customerregistionform(customerData);

})
