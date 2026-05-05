import { test, expect } from '../src/fixtures/index';
import users from '../src/test-data/users.json'

const passwords = {
  newUser: process.env.NEWUSER_PASSWORD!,
};

test.describe("Register",() => {

  test.beforeEach( async ({page, cookies, menu, loginPage}) => {
    await page.goto('/');
    await cookies.clickAcceptCookies();
    await menu.clickLoginSection();
  });

test('Register new user', async ({ page, registerPage }) => {
  const email = `test${Date.now()}@mail.com`;
  await page.getByRole('link', { name: 'Regístrate aquí' }).click();
  await registerPage.createAccount(users.newUser.name, email, passwords.newUser, passwords.newUser);
  await expect(page.getByText(email)).toBeVisible();
  await expect(page.getByText('Enviamos un enlace de')).toBeVisible();
});


test('Registered user', async ({ page, registerPage }) => {
  await page.getByRole('link', { name: 'Regístrate aquí' }).click();
  await registerPage.createAccount(users.registeredUser.name, users.registeredUser.email, passwords.newUser, passwords.newUser);
  await expect(page.getByText('Este email ya está registrado.')).toBeVisible();
  
});


});
