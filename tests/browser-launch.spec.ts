import { expect, test } from '@playwright/test';

test('Chromium uses isolated storage and disables notifications', ({
	browserName,
	launchOptions,
}) => {
	test.skip(browserName !== 'chromium');
	for (const flag of ['--use-mock-keychain', '--password-store=basic', '--disable-notifications']) {
		expect(launchOptions.args).toContain(flag);
	}
});
