//example.spec.js
const { test, expect } = require('@playwright/test');

test('Home page has the correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Blend-brew Tea/);
});

test('Home page has correct SEO description', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const description = await page.getAttribute('meta[name="description"]', 'content');
  expect(description).toBe("Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors.");
});

test('Footer section has correct content', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Wait for the footer to be visible
  await page.waitForSelector('footer #footer', { state: 'visible' });

  // Check for the "About Blend-brew Tea" section
  await expect(page.locator('footer #footer')).toContainText('About Blend-brew Tea', { timeout: 10000 });
  await expect(page.locator('footer #footer')).toContainText('Discover the art of fine tea with Blend-brew Tea.');

  // Other checks...
});
