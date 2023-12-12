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

test('Navigation bar works correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check navigation links
  await expect(page.locator('nav >> text=Home')).toBeVisible();
  await expect(page.locator('nav >> text=About Us')).toBeVisible();
  await expect(page.locator('nav >> text=Sign Up')).toBeVisible();

  // Test clicking a navigation link
  await page.click('nav >> text=About Us');
  // Add assertions to verify the navigation action
});


