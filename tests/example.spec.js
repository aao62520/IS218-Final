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

  // Close the modal if it's present
  const modalCloseButton = page.locator('button:has-text("Close")'); // Replace with the actual selector for closing the modal
  if (await modalCloseButton.isVisible()) {
    await modalCloseButton.click();
  }

  // Now click the navigation link
  await page.click('nav >> text=About Us');
  // Add assertions as needed
});



