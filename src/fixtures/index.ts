
import { LoginPage } from '../pages/login/login.page';
import { Cookies } from '../components/cookiesModal/cookies';
import { navBar } from '../components/navBar/navBar';
import { DashboardPage } from '../pages/dashboard/dashboard.page';
import { test as base } from '@playwright/test';
import { RegisterPage } from '../pages/register/register.page';
import { CoursesPage } from '../pages/course.page';



type PageFixtures = {
  loginPage: LoginPage;
  cookies: Cookies;
  menu: navBar;
  dashboardPage: DashboardPage;
  registerPage: RegisterPage;
  coursePage: CoursesPage;
}

export const test = base.extend<PageFixtures> (
    {
        loginPage: async({ page }, use) => {
            await use(new LoginPage(page));
        },

        dashboardPage: async({ page }, use) => {
            await use(new DashboardPage(page));
        },

        menu: async({ page }, use) => {
            await use(new navBar(page));
        },

        cookies: async({ page }, use) => {
            await use(new Cookies(page));
        },

        registerPage: async({ page }, use) => {
            await use(new RegisterPage(page));
        },

        coursePage: async({ page }, use) => {
            await use(new CoursesPage(page));
        },
    }
);

export { expect } from '@playwright/test';