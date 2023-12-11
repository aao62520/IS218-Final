//example.spec.js
// @ts-check
const { test, expect } = require('@playwright/test');

test('Home page has the correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Blend-brew Tea/);
});


