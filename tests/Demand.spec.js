import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test('test in headed mode', async ({ }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://minimals.cc/', { timeout: 30000 });
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email address',{ timeout: 50000 }).click();
  await page.getByLabel('Email address',{ timeout: 50000 }).fill('demo@minimals.cc');
  await page.getByLabel('Password',{ timeout: 50000 }).click();
  await page.getByLabel('Password',{ timeout: 50000 }).fill('demo1234');
  await page.getByRole('button', { name: 'Login' },{ timeout: 60000 }).click();
  await page.locator('body',{ timeout: 50000 }).press('ArrowDown');
  await page.getByText('overviewappe-').click();
  await page.getByRole('button', { name: 'analytics' },{ timeout: 80000 }).press('ArrowDown');
  await page.getByRole('button', { name: 'job' },{ timeout: 70000 }).click();
  await page.getByRole('button', { name: 'list' },{ timeout: 60000 }).click();
  await page.getByRole('button', { name: 'Filters' },{ timeout: 60000 }).click();
  await page.getByLabel('On Demand').check();
  await page.getByRole('button',{ timeout: 50000 }).nth(1).click();
  await page.getByText('ListDashboardJob List New Job FiltersSort By:latest4results foundEmployment').click();
  await browser.close();
});