import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test('test in headed mode', async ({ }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://minimals.cc/',{ timeout: 60000});
  await page.getByRole('link', { name: 'Login' },{ timeout: 60000}).click();
  await page.getByLabel('Email address',{ timeout: 60000}).click();
  await page.getByLabel('Email address',{ timeout: 60000}).fill('demo@minimals.cc');
  await page.getByLabel('Password',{ timeout: 60000}).click();
  await page.getByLabel('Password',{ timeout: 60000}).fill('demo1234');
  await page.getByRole('button', { name: 'Login' },{ timeout: 60000}).click();
  await page.getByRole('button', { name: 'user' },{ timeout: 60000}).click();
  await page.getByRole('button', { name: 'user' },{ timeout: 60000}).press('ArrowDown');
  await page.getByRole('button', { name: 'account' },{ timeout: 60000}).click();
  await page.getByRole('tab', { name: 'Billing' },{ timeout: 60000}).click();
  await page.getByRole('tab', { name: 'Billing' },{ timeout: 60000}).press('ArrowDown');
  await page.getByRole('button', { name: 'Jayvion Simon' }).click();
  await page.getByRole('button', { name: 'Deja Brady 18605 Thompson' }).click();
  await page.getByRole('button', { name: '**** **** ****' }).click();
  await page.getByRole('dialog').locator('div').filter({ hasText: /^\*\*\*\* \*\*\*\* \*\*\*\* 1234$/ }).click();
  await page.getByRole('button', { name: 'Upgrade Plan' }).click();
 await browser.close();

});