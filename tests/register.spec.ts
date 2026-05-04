import { test, expect } from '../src/fixtures/index';
import users from '../src/test-data/users.json'

const passwords = {
  newUser: process.env.NEWUSER_PASSWORD!,
};

test.describe("Register",() => {

  test.beforeEach( async ({page, cookies, menu}) => {
    await page.goto('/');
    await cookies.clickAcceptCookies();
    await menu.clickLoginSection();
  });

test.only('Register new user', async ({ page, registerPage }) => {
  const email = `test${Date.now()}@mail.com`;
  await page.getByRole('link', { name: 'Regístrate aquí' }).click();
  await registerPage.createAccount(users.newUser.name, email, passwords.newUser, passwords.newUser);
  await expect(page.getByRole('heading', { name: 'Confirma tu correo' })).toBeVisible();
  await expect(page.getByText(email)).toBeVisible();
  await expect(page.getByText('Enviamos un enlace de')).toBeVisible();
});


test.only('Registered user', async ({ page, registerPage }) => {
  await page.getByRole('link', { name: 'Regístrate aquí' }).click();
  await registerPage.createAccount(users.registeredUser.name, users.registeredUser.email, passwords.newUser, passwords.newUser);
  await expect(page.getByText('Enviamos un enlace de')).toBeVisible();
});


});
