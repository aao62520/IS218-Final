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


test('Footer section has correct content', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check for specific text in the footer
  await expect(page.locator('footer')).toContainText('About Blend-brew Tea');
  await expect(page.locator('footer')).toContainText('FAQ');
  await expect(page.locator('footer')).toContainText('Contact Us');


});

test('Product Grid displays products correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check for specific product titles
  await expect(page.locator('text=Emerald Essence Brew')).toBeVisible();
  await expect(page.locator('text=Midnight Majesty Blend')).toBeVisible();
  await expect(page.locator('text=Herbal Haven Brew')).toBeVisible();
});

test('Testimonial section displays the correct text', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://localhost:3000');

  // Locate the testimonial text using the data-testid attribute
  const testimonialText = page.locator('[data-testid="testimonialText"]');

  // Assert that the testimonial text contains the expected content
  await expect(testimonialText).toContainText("Blendbrew's tea is a delightful blend of quality and flavor! Each sip feels like a journey through the finest tea leaves, offering a rich and aromatic experience that soothes the senses.");
});
