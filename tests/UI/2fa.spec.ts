import { expect, test } from '@playwright/test'
import * as OTPAuth from 'otpauth'

const totp = new OTPAuth.TOTP({
  issuer: 'TomaszTester',
  label: 'Github',
  algorithm: 'SHA1',
  digits: 6,
  period: 30,
  secret: process.env.GH_OTP,
})

test('GitHub 2FA login', async ({ page }) => {
  await page.goto('https://github.com/')
  await page.getByRole('link', { name: 'Sign in' }).click()
  await page.getByLabel('Username or email address').click()
  await page
   .getByLabel('Username or email address')
   .fill(process.env.GH_USER)
  await page.getByLabel('Username or email address').press('Tab')
  await page.getByLabel('Password').fill(process.env.GH_PW)
  await page.getByRole('button', { name: 'Sign in', exact: true }).click()
  await page.getByPlaceholder('XXXXXX').click()
  await page.getByPlaceholder('XXXXXX').fill(totp.generate())
  await expect(page).toHaveURL("https://github.com/")
})