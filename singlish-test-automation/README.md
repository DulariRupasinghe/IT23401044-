# Singlish to Sinhala Converter - Automated Test Suite

This project contains automated tests for the Singlish to Sinhala converter application at https://www.swifttranslator.com/

## Assignment Details

- **Module**: IT3040 – ITPM Semester 1
- **Assignment**: Assignment 1
- **Test Framework**: Playwright
- **Total Test Cases**: 35 (24 Positive Functional + 10 Negative Functional + 1 UI)

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Navigate to the project directory:
```bash
cd singlish-test-automation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install chromium
```

## Running Tests

### Run all tests (headless mode):
```bash
npm test
```

### Run tests with visible browser:
```bash
npm run test:headed
```

### Run tests in UI mode (interactive):
```bash
npm run test:ui
```

### View test report:
```bash
npm run test:report
```

## Test Coverage

### Positive Functional Tests (24 cases)

The positive tests cover:
- **Sentence structures**: Simple, compound, complex sentences
- **Interrogative and imperative forms**: Questions and commands
- **Positive and negative sentence forms**
- **Daily language usage**: Greetings, requests, responses
- **Polite vs informal phrasing**
- **Word combinations and phrases**
- **Grammatical forms**: Past, present, future tenses
- **Negation patterns**
- **Plural and pronoun variations**
- **Mixed language content**: Singlish + English technical terms
- **Place names and brand terms**
- **Abbreviations and acronyms**
- **Punctuation, currency, dates**
- **Slang and colloquial expressions**

### Negative Functional Tests (10 cases)

The negative tests identify failures in:
- **Joined words without spaces**
- **Long paragraph conversion issues**
- **Excessive slang causing poor conversion**
- **Multiple spaces formatting issues**
- **Complex mixed English**
- **Incorrect special character usage**
- **Unconventional Singlish spelling**
- **Line breaks in sentences**
- **All caps input**
- **Numeric prefixes**

### UI Test (1 case)

- **Real-time output update behavior**: Verifies that Sinhala output updates automatically while typing

## Project Structure

```
singlish-test-automation/
├── tests/
│   └── singlish-converter.spec.js    # All test cases
├── playwright.config.js               # Playwright configuration
├── package.json                       # Project dependencies
└── README.md                          # This file
```

## Test Results

After running tests, results will be available in:
- `playwright-report/` - HTML report
- `test-results.json` - JSON format results
- Console output with pass/fail status

## Notes

- Tests are configured to run sequentially (workers: 1) for consistency
- Each test waits for translation to complete before validation
- Screenshots and videos are captured on failure for debugging
- The test suite uses data-testid selectors where possible, with fallbacks to common selectors

## Troubleshooting

If tests fail to run:

1. **Check internet connection**: Tests require access to https://www.swifttranslator.com/
2. **Verify Playwright installation**: Run `npx playwright install chromium`
3. **Update selectors**: If website structure changes, update selectors in test file
4. **Increase timeout**: Modify `timeout` in `playwright.config.js` if needed

## Contact

For issues or questions about this test suite, please contact the assignment author.
