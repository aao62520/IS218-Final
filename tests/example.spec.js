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


test('Google Analytics is correctly initialized', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check if the Google Analytics initialization function is defined
  const isGAInitialized = await page.evaluate(() => {
    return typeof window.gtag === 'function';
  });

  expect(isGAInitialized).toBe(true);

  // Optionally, you can also check if the window dataLayer object has been created
  const isDataLayerDefined = await page.evaluate(() => {
    return typeof window.dataLayer !== 'undefined';
  });

  expect(isDataLayerDefined).toBe(true);
});



test.describe('Navigation Bar Text Tests', () => {
    test('Text for Home, About Us, and Subscribe links are correct', async ({ page }) => {
        // Go to your site's home page
        await page.goto('http://localhost:3000');

        // Check if the 'Home' link text is correct
        const homeLink = page.locator('[data-testid="nav-home"]');
        await expect(homeLink).toHaveText('Home');

        // Check if the 'About Us' link text is correct
        const aboutUsLink = page.locator('[data-testid="nav-about-us"]');
        await expect(aboutUsLink).toHaveText('About Us');

        // Check if the 'Sign Up' link text is correct
        const signUpLink = page.locator('[data-testid="nav-sign-up"]');
        await expect(signUpLink).toHaveText('Subscribe');
    });
});

test('Hero section displays correct content and button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check for hero title and subtitle using data-testid
  await expect(page.locator('[data-testid="heroTitle"]')).toContainText('Where Flavor Meets Tranquility');
  await expect(page.locator('[data-testid="heroSubtitle"]')).toContainText('Sign up for 10% off your next cup');
});

test('Subscribe button and description are present in the SignUpSection', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check if the description text is present
  const descriptionText = page.locator('text=Sign up for a free trial and get 10% off your next order:');
  await expect(descriptionText).toBeVisible();

  // Check if the subscribe button is present and has the correct text
  const subscribeButton = page.locator('[data-testid="subscribe-button"]');
  await expect(subscribeButton).toBeVisible();
  await expect(subscribeButton).toHaveText('Subscribe');
});


test('Privacy policy page displays the correct content', async ({ page }) => {
  await page.goto('http://localhost:3000/policy');

  // Check for the presence of various sections in the privacy policy using data-testid
  await expect(page.locator('data-testid=privacy-introduction')).toBeVisible();
  await expect(page.locator('data-testid=privacy-info-collection')).toBeVisible();
  // Add more checks for other sections using their respective data-testid attributes
});


test('Cookie consent banner is functional', async ({ page }) => {
  // Go to your site's homepage
  await page.goto('http://localhost:3000');

  // Optionally clear cookies and local storage to ensure the banner shows up for repeat tests
  await page.context().clearCookies();
  await page.evaluate(() => localStorage.clear());

  
});

test('Responsive design adjustments', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check layout at different screen sizes
  await page.setViewportSize({ width: 1200, height: 800 });
  // Add checks for layout at this size

  await page.setViewportSize({ width: 768, height: 1024 });
  // Add checks for layout at this size

  await page.setViewportSize({ width: 480, height: 640 });
  // Add checks for layout at this size
});


test('Subscription via Mailchimp works correctly', async ({ page }) => {
  // Go to the home page
  await page.goto('http://localhost:3000');

  // Set the viewport size
  await page.setViewportSize({width: 1200, height: 800});

  // Fill the email input field with a test email
  await page.fill('[data-testid="email-input"]', 'test@example.com');

  // Click the subscribe button, force the click if needed
  await page.click('[data-testid="subscribe-button"]', { force: true });

  // Wait for the subscription message to be displayed
  await page.waitForSelector('[data-testid="subscription-message"]', { state: 'visible' });

  // Verify that the subscription message is displayed and contains the expected text
  const messageText = await page.textContent('[data-testid="subscription-message"]');
  expect(messageText).toContain('Thank you for subscribing!');
});