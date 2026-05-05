import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('button', { name: 'Dashboard ▾' }).click();
  await page.getByRole('link', { name: 'Mi panel', exact: true }).click();
  await expect(page.getByText('Bienvenido de nuevo, test1@')).toBeVisible();
  //getByText('0').first()
});

  /*
  await page.getByTestId('browse-courses-btn').click();
  await page.getByTestId('course-card-curso-basico-cypress').click();
  await page.getByTestId('course-enroll-btn').click();
  await expect(page.getByText('¡Inscripción completada!→')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Curso Básico de Cypress' })).toBeVisible();
  */