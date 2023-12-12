const { test, expect } = require('@playwright/test');

// Test for the Home page title
test('Home page has the correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Blend-brew Tea/);
});

// Test for SEO description on the Home page
test('Home page has correct SEO description', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const description = await page.getAttribute('meta[name="description"]', 'content');
  expect(description).toBe("Discover the art of fine tea with Blend-brew Tea. Explore our crafted blends for a symphony of flavors.");
});

test('Navigation bar works correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Close the Mailchimp modal if it's present
  const mailchimpModalCloseButton = page.locator('.mc-closeModal');
  if (await mailchimpModalCloseButton.isVisible()) {
    await mailchimpModalCloseButton.click();
  }

  // Now click the navigation link
  await page.click('nav >> text=About Us');
  // Add further assertions as needed
});

