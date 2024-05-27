import { test, expect } from '@playwright/test';


test('match screenshot logo', async ({ page }) => {
  await page.goto('https://github.com');
  const logoLocator = page.locator('.octicon-mark-github');
  expect(await logoLocator.screenshot()).toMatchSnapshot('svg_logo.png');

});


test.skip('match screenshot full page', async ({ page }) => {
  await page.goto('https://github.com');
  //await page.screenshot({ path: './screenshots/screenshot.png' });
  //await page.screenshot({ path: './screenshots/screenlong.png', fullPage: true });

  await expect(page).toHaveScreenshot('screenshot.png');
  await expect(page).toHaveScreenshot('screenlong.png', {fullPage: true, maxDiffPixelRatio: 0.02 });

});