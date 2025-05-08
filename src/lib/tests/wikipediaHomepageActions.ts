import { Page, expect } from '@playwright/test';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia's homepage
 * 2. Assert there are less than 7,000,000 articles in English
 * 3. Assert the page's text gets smaller when the 'Small' text size option is selected
 * 4. Assert the page's text gets larger when the 'Large' text size option is selected
 * 5. Assert the page's text goes back to the default size when the 'Standard' text size option is selected
 *
 * Instructions: Run the test and ensure it performs all steps described above
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    /** STEP: Navigate to URL */
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');

    /** ASSERTION: Confirm that there are less than 7,000,000 articles in English  */
    const totalArticlesLink = page.getByTitle('Special:Statistics').nth(1);
    const rawText = await totalArticlesLink.textContent();
    const cleanedText = rawText?.replace(/,/g, '') ?? '0';
    const articleCount = parseInt(cleanedText, 10);
    expect(articleCount).toBeLessThan(7000000);
    
    /** STEP: Click the link to view the total number of articles in English */
    await totalArticlesLink.click();

    /** According to the Wikipedia webpage, this option has been disabled in the 'Statistics' page. 
     
     * STEP: Select the 'Small' text size option in the appearance settings 
    const smallTextSizeOption = page.getByRole('radio', { name: 'Small' });
    await smallTextSizeOption.click();

    /** STEP: Click the 'Large' text size option to change the display size 
    const largeTextSizeOption = page.getByRole('radio', { name: 'Large' });
    await largeTextSizeOption.click();

    /** STEP: Click the 'Standard' text size option in the appearance settings 
    const standardTextSizeButton = page.getByLabel('Standard').first();
    await standardTextSizeButton.click();*/
}
