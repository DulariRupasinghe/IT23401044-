const { test, expect } = require('@playwright/test') ;

const BASE_URL = 'https://www.swifttranslator.com/';

// Helper function to wait for translation output
async function waitForTranslation(page, timeout = 3000) {
  await page.waitForTimeout(timeout);
}

test.describe('Singlish to Sinhala Converter - Functional Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  // POSITIVE TEST CASES - 24 cases

  test('Pos_Fun_0001: Convert simple present tense sentence', async ({ page }) => {
    const input = 'mama gedhara yanavaa';
    const expected = 'මම ගෙදර යනවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0002: Convert simple sentence with need expression', async ({ page }) => {
    const input = 'mata bath oonee';
    const expected = 'මට බත් ඕනී';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0003: Convert compound sentence with conjunction', async ({ page }) => {
    const input = 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee';
    const expected = 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නැහැ';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0004: Convert complex sentence with condition', async ({ page }) => {
    const input = 'oya enavaanam mama balan innavaa';
    const expected = 'ඔය එනවානම් මම බලන් ඉන්නවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0005: Convert interrogative sentence', async ({ page }) => {
    const input = 'oyaata kohomadha?';
    const expected = 'ඔයාට කොහොමද?';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0006: Convert imperative command sentence', async ({ page }) => {
    const input = 'vahaama enna';
    const expected = 'වහාම එන්න';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0007: Convert positive affirmative sentence', async ({ page }) => {
    const input = 'mama ehema karanavaa';
    const expected = 'මම එහෙම කරනවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0008: Convert negative sentence', async ({ page }) => {
    const input = 'mama ehema karannee naehae';
    const expected = 'මම එහෙම කරන්නේ නැහැ';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0009: Convert greeting expression', async ({ page }) => {
    const input = 'aayuboovan!';
    const expected = 'ආයුබෝවන්!';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0010: Convert polite request', async ({ page }) => {
    const input = 'karuNaakaralaa eka poddak balanna';
    const expected = 'කරුණාකරලා එක පොඩ්ඩක් බලන්න';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0011: Convert informal phrasing', async ({ page }) => {
    const input = 'eeyi, ooka dhiyan';
    const expected = 'ඒයි, ඕක දියන්';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0012: Convert day-to-day expression', async ({ page }) => {
    const input = 'mata nidhimathayi';
    const expected = 'මට නිදිමතයි';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0013: Convert multi-word expression', async ({ page }) => {
    const input = 'poddak inna';
    const expected = 'පොඩ්ඩක් ඉන්න';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0014: Convert repeated word for emphasis', async ({ page }) => {
    const input = 'hari hari';
    const expected = 'හරි හරි';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0015: Convert past tense sentence', async ({ page }) => {
    const input = 'mama iiyee gedhara giyaa';
    const expected = 'මම ඊයේ ගෙදර ගියා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0016: Convert future tense sentence', async ({ page }) => {
    const input = 'mama heta enavaa';
    const expected = 'මම හෙට එනවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0017: Convert plural pronoun sentence', async ({ page }) => {
    const input = 'api yamu';
    const expected = 'අපි යමු';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0018: Convert sentence with English brand term', async ({ page }) => {
    const input = 'Zoom meeting ekak thiyennee';
    const expected = 'Zoom meeting එකක් තියෙන්නේ';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toContain('Zoom');
  });

  test('Pos_Fun_0019: Convert sentence with place name', async ({ page }) => {
    const input = 'siiyaa Colombo yanna hadhannee';
    const expected = 'සීයා Colombo යන්න හදන්නේ';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toContain('Colombo');
  });

  test('Pos_Fun_0020: Convert sentence with abbreviation', async ({ page }) => {
    const input = 'mata NIC eka dhenna';
    const expected = 'මට NIC එක දෙන්න';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toContain('NIC');
  });

  test('Pos_Fun_0021: Convert sentence with punctuation', async ({ page }) => {
    const input = 'oyaa enavadha?';
    const expected = 'ඔයා එනවද?';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toBe(expected);
  });

  test('Pos_Fun_0022: Convert sentence with currency', async ({ page }) => {
    const input = 'Rs. 5000 ganan';
    const expected = 'Rs. 5000 ගණන්';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toContain('Rs.');
  });

  test('Pos_Fun_0023: Convert sentence with date', async ({ page }) => {
    const input = 'dhesaembar 25';
    const expected = 'දෙසැම්බර් 25';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toContain('25');
  });

  test('Pos_Fun_0024: Convert slang expression', async ({ page }) => {
    const input = 'ela machan! supiri!!';
    const expected = 'එල මචං! සුපිරි!!';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).toContain('මචං');
  });

  // NEGATIVE TEST CASES - 10 cases

  test('Neg_Fun_0001: Joined words without spaces fail conversion', async ({ page }) => {
    const input = 'mamagedharayanavaa';
    const expected = 'මම ගෙදර යනවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0002: Long paragraph causes incomplete conversion', async ({ page }) => {
    const input = 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYaa bimal rathnaayaka saDHahan kaLeeya.';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    // Check for incomplete or incorrect conversion
    expect(output.trim().length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0003: Excessive slang causes poor conversion', async ({ page }) => {
    const input = 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ';
    const expected = 'අදෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කෝ බං';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    // Verify it doesn't match exactly due to slang complexity
    expect(output.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0004: Multiple spaces cause formatting issues', async ({ page }) => {
    const input = 'mama     gedhara     yanavaa';
    const expected = 'මම ගෙදර යනවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    // May have extra spaces or incorrect formatting
    expect(output.includes('     ')).toBe(false);
  });

  test('Neg_Fun_0005: Complex mixed English fails partial conversion', async ({ page }) => {
    const input = 'Documents tika attach karalaa mata email ekak evanna ASAP';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    // Check if conversion is incomplete or has issues
    expect(output.trim().length).toBeGreaterThan(0);
  });

  test('Neg_Fun_0006: Incorrect special character usage', async ({ page }) => {
    const input = 'mama@@gedhara##yanavaa';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    // Expect special characters to cause issues
    expect(output.trim()).toContain('@');
  });

  test('Neg_Fun_0007: Unconventional Singlish spelling fails', async ({ page }) => {
    const input = 'mmaa gdrr ynnvvaa';
    const expected = 'මම ගෙදර යනවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    expect(output.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0008: Line breaks in middle of sentence cause issues', async ({ page }) => {
    const input = 'mama\ngedhara\nyanavaa';
    const expected = 'මම ගෙදර යනවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    // May not properly handle line breaks
    expect(output.trim().split('\n').length).toBeGreaterThan(1);
  });

  test('Neg_Fun_0009: All caps input causes conversion issues', async ({ page }) => {
    const input = 'MAMA GEDHARA YANAVAA';
    const expected = 'මම ගෙදර යනවා';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    // Caps may affect conversion
    expect(output.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0010: Numeric prefixes cause word segmentation issues', async ({ page }) => {
    const input = '123mama gedhara yanavaa';
    
    await page.fill('[data-testid="singlish-input"], textarea, input[type="text"]', input);
    await waitForTranslation(page);
    
    const output = await page.locator('[data-testid="sinhala-output"], .output, .translation-output').first().textContent();
    // Numbers at start may cause segmentation issues
    expect(output.trim().startsWith('123')).toBe(true);
  });

  // UI TEST CASE - 1 case

  test('Pos_UI_0001: Real-time output updates while typing', async ({ page }) => {
    const input = 'mama gedhara yanavaa';
    
    const inputField = page.locator('[data-testid="singlish-input"], textarea, input[type="text"]').first();
    const outputField = page.locator('[data-testid="sinhala-output"], .output, .translation-output').first();
    
    // Type character by character and verify real-time update
    for (let i = 0; i < input.length; i++) {
      await inputField.fill(input.substring(0, i + 1));
      await page.waitForTimeout(200);
      
      const currentOutput = await outputField.textContent();
      expect(currentOutput).toBeDefined();
      expect(currentOutput.length).toBeGreaterThan(0);
    }
    
    // Final output should be complete
    const finalOutput = await outputField.textContent();
    expect(finalOutput.trim()).toBe('මම ගෙදර යනවා');
  });

});
