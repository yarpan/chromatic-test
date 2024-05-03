import { test, expect } from '@playwright/test';


test('match screenshot logo', async ({ page }) => {
  await page.goto('https://github.com');
  const logoLocator = page.locator('.octicon-mark-github');
  expect(await logoLocator.screenshot()).toMatchSnapshot('svg_logo.png');

});

test('match screenshot full page', async ({ page }) => {
  await page.goto('https://github.com');
  expect(page).toHaveScreenshot({fullPage: true});

});