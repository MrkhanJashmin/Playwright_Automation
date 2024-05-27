import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test('test in headed mode', async ({ }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
await page.goto('https://minimals.cc/',{ timeout: 60000 });
  await page.getByRole('link', { name: 'Login' },{ timeout: 60000 }).click();
  await page.getByLabel('Email address',{ timeout: 60000 }).click();
  await page.getByLabel('Email address',{ timeout: 60000 }).fill('demo@minimals.cc');
  await page.getByLabel('Password',{ timeout: 60000 }).click();
  await page.getByLabel('Password',{ timeout: 60000 }).fill('demo1234');
  await page.getByRole('button', { name: 'Login' },{ timeout: 60000 }).click();
  await page.getByText('overviewappe-').click();
  await page.getByRole('button', { name: 'analytics' },{ timeout: 60000 }).click();
  await page.getByText('overviewappe-').click();
  await page.getByRole('button', { name: 'analytics' }).press('ArrowDown');
  
  await page.getByRole('button', { name: 'chat' },{ timeout: 60000 }).click();
  await page.getByPlaceholder('+ Recipients').click();
  await page.getByRole('option', { name: 'Deja Brady Deja Brady' }).click();
  await page.getByPlaceholder('Type a message').click();
  
  await page.getByPlaceholder('Type a message').press('CapsLock');
  
  await page.getByPlaceholder('Type a message').fill('hello, How are you');
  await page.getByPlaceholder('Type a message').press('Enter');

  
  await page.getByLabel('scrollable content').nth(2).click();
  
  await page.getByRole('main').click();
  await browser.close();
});