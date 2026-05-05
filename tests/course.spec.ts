import { test, expect } from '../src/fixtures/index';
import users from '../src/test-data/users.json'

const passwords = {
  newUser: process.env.NEWUSER_PASSWORD!,
};


// Para contener los test 
test.describe ("Inscripción a un curso por primera vez", () => {

  test.beforeEach (async ({page, cookies, menu, loginPage, registerPage}) => {
      await page.goto('/');
      await cookies.clickAcceptCookies();
      await menu.clickLoginSection();
      //const email = `nata${Date.now()}@mail.com`;
      //await registerPage.createAccount(users.newUser.name, email, passwords.newUser, passwords.newUser);
      await loginPage.loginUser('nata@yopmail.com', passwords.newUser);
    });
      

  test('test sin cursos', async ({ page }) => {
    await expect(page.getByText('0').first()).toBeVisible();
    await expect(page.getByText('Bienvenido de nuevo, nata@')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Aún no hay cursos' })).toBeVisible();
  });

  test('test cursos disponibles', async ({ page, coursePage}) => {
    await coursePage.clickExploreCourses();
    await expect(page.getByTestId('courses-search-input')).toBeVisible();
  });

  test('test seleccionar curso', async ({ page, coursePage}) => {
    await coursePage.selectCourse();
    await expect(page.getByTestId('course-enroll-btn')).toBeVisible();
  });
  
  test('test inscribirse a un curso', async ({page, coursePage}) => {
    await coursePage.courseEnroll();
    await expect(page.getByText('¡Inscripción completada!→')).toBeVisible();
  });
  
  test('Verificar mis cursos', async ({page, coursePage}) => {
   await coursePage.clickMyCourses();
   await expect(page.getByRole('button', { name: 'Todos (1)' })).toBeVisible();
   await expect(page.getByRole('button', { name: 'En progreso (1)' })).toBeVisible();
   await expect(page.getByRole('button', { name: 'Completados (0)' })).toBeVisible();
   await expect(page.getByText('cursos inscritos')).toBeVisible();
   });
  
});


