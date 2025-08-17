import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_URL || 'https://playwright.dev';

export default defineConfig({
	testDir: './tests',
	testMatch: /.*\.spec\.ts/,
	timeout: 30_000,
	expect: { timeout: 5000 },
	reporter: [['html', { outputFolder: 'reports' }], ['list']],
	use: {
		baseURL,
		trace: 'on-first-retry',
		video: 'retain-on-failure',
		screenshot: 'only-on-failure',
	},
	projects: [
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
		{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },
		{ name: 'webkit', use: { ...devices['Desktop Safari'] } },
	],
});
