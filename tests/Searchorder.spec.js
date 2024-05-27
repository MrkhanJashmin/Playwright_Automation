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
  await page.getByRole('button', { name: 'analytics' },{ timeout: 90000 }).press('ArrowDown');
  await page.getByRole('button', { name: 'order' }).click();
  await page.getByRole('button', { name: 'list' },{ timeout: 90000 }).click();
  await page.getByPlaceholder('Search customer or order').click();
  await page.getByPlaceholder('Search customer or order').fill('cor');
  await page.getByRole('columnheader', { name: 'Customer' },{ timeout: 90000 }).click();
  await page.getByRole('main',).click();
  
  await browser.close();
  
});
