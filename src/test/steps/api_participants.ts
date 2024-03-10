import { Given, When, Then } from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';


let apiResponse: AxiosResponse;

Given('The user requests activities by the number of participants', async () => {
});

When('Information is required based on the number of participants {string}', async (param: string) => {
  apiResponse = await axios.get(`http://www.boredapi.com/api/activity?participants=${param}`);
 
});

Then('The service should always respond with a code {int}', (expectedStatusCode: number) => {
  expect(apiResponse.status).to.equal(expectedStatusCode);
});

Then('If there are activities for the number of participants, the response should contain the following structure', () => {
        expect(apiResponse.data).to.have.property('participants');
        expect(apiResponse.data).to.have.property('activity');
        expect(apiResponse.data).to.have.property('type');

});
