import { Given, When, Then } from '@cucumber/cucumber';
import axios, { AxiosResponse } from 'axios';
import { expect } from 'chai';

let apiResponse: AxiosResponse;

Given('The user validates if there are activities for the different types', async () => {

});

When('The user requests the activity related to the following typology {string}', async (param: string) => {
  apiResponse = await axios.get(`http://www.boredapi.com/api/activity?type=${param}`);
});

Then('The service must always respond correctly {int}', (expectedStatusCode: number) => {
  expect(apiResponse.status).to.equal(expectedStatusCode);
});

Then('The service must respond with the following details', () => {
  expect(apiResponse.data).to.have.property('activity');
  expect(apiResponse.data).to.have.property('type');
});
