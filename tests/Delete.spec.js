import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test('test in headed mode', async ({ }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://minimals.cc/',{ timeout: 70000 });
  await page.getByRole('link', { name: 'Login' },{ timeout: 60000 }).click();
  await page.getByLabel('Email address',{ timeout: 60000 }).click();
  await page.getByLabel('Email address',{ timeout: 60000 }).fill('demo@minimals.cc');
  await page.getByLabel('Password',{ timeout: 60000 }).click();
  await page.getByLabel('Password',{ timeout: 60000 }).fill('demo1234');
  await page.getByRole('button', { name: 'Login' },{ timeout: 60000 }).click();
  await page.getByText('overviewappe-').click();
  await page.getByRole('button', { name: 'analytics' },{ timeout: 60000 }).press('ArrowDown');
  await page.getByRole('button', { name: 'analytics' }).press('ArrowDown');
  await page.getByRole('button', { name: 'analytics' }).press('ArrowDown');
  await page.getByRole('button', { name: 'analytics' },{ timeout: 60000 }).press('ArrowDown');
  await page.getByRole('button', { name: 'File Manager' },{ timeout: 60000 }).click();
  await page.getByRole('row', { name: 'Docs 2.24 Gb folder 25 May' },{ timeout: 60000 }).getByRole('checkbox').first().check();
  await page.getByLabel('Delete',{ timeout: 60000 }).click();
  await page.getByRole('button', { name: 'Delete' },{ timeout: 60000 }).click();
  await page.getByText('Delete success!').click();
  await browser.close();
});