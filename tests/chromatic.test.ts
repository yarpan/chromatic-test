//import { test, expect } from '@playwright/test';
import { test, expect } from "@chromatic-com/playwright";



test("Homepage", async ({ page }) => {  
  await page.goto('https://github.com');
  
  await expect(page).toHaveTitle("GitHub: Let’s build from here · GitHub");  

  
});
