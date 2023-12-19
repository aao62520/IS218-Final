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
  await expect(page.locator('[data-testid="heroSubtitle"]')).toContainText('Discover the perfect blend for the holiday season with BlendBrew Tea Co. Customize your own tea creations and send them directly to your loved ones with our expedited shipping options. Order by Dec. 19th to ensure your personalized tea gifts arrive in time for Christmas. Conditions apply.');
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

test.describe('Subscribe Button Functionality Tests', () => {
    test('The Subscribe button is clickable', async ({ page }) => {
        // Go to your site's home page
        await page.goto('http://localhost:3000');

        // Locate the email input field and type a test email address
        const emailInput = page.locator('[data-testid="email-input"]');
        await emailInput.type('mikev2002v@icloud.com');

        // Locate the Subscribe button
        const subscribeButton = page.locator('[data-testid="subscribe-button"]');
    });

    

    test.describe('Cookie Consent and Google Analytics Test', () => {
      test('Should accept cookies and load page content', async ({ page }) => {
        // Go to your website
        await page.goto('https://is-218-final-beta.vercel.app/');
    
        // Check for the presence of the cookie consent banner
        const cookieBanner = page.locator('[data-testid="cookie-consent-banner"]');
        await expect(cookieBanner).toBeVisible();
    
        // Click the 'Accept' button
        const acceptCookiesButton = page.locator('[data-testid="accept-cookies"]');
        await acceptCookiesButton.click();
    
        // Check if a specific element is visible after accepting cookies
        const afterCookieAcceptElement = page.locator('[data-testid="after-cookie-accept"]');
        await expect(afterCookieAcceptElement).toBeVisible();
      });
    });
    



});
