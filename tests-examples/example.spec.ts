import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://github.com');

  //const _cardTypeSvg = page.locator('//input[@name="cardNumber"]/..//*[name()="svg"]');
  
  const logoLocator = page.locator('.octicon-mark-github');

  //expect(await _cardTypeSvg.screenshot()).toMatchSnapshot('svg_Amex.png', { maxDiffPixelRatio: 0.02 });

  expect(await logoLocator.screenshot()).toMatchSnapshot('svg_logo.png');

});
