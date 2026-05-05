// 3. pongo de donde importo
import { expect, Page } from "@playwright/test";

// 1. Creo clase 
export class CoursesPage {

    // 5. 
    readonly page:Page;

    // 2. creo identidad a la clase
    constructor (page: Page){
        // 4. declaro o construyo page dentro de la clase para reutilizar
        this.page = page;
    }

    //copio los metodos del test
    //y empezamos a crear nuestra propias clases para manejar cada una de las acciones

    async clickExploreCourses() {
        await this.page.getByTestId('browse-courses-btn').click();
    }
    
    async clickSelectCourse() {
        await this.page.getByTestId('course-card-curso-basico-cypress').click();
    }
    
    async clickCourseEnroll() {
        await this.page.getByTestId('course-enroll-btn').click();
    }
    
    async clickMyCourses() {
        await this.page.getByRole('link', { name: 'Mis cursos' }).click();
    }

    async selectCourse () {
        await this.clickExploreCourses();
        await this.clickSelectCourse();
    }

    async courseEnroll() {
        await this.clickExploreCourses();
        await this.clickSelectCourse();
        await this.clickCourseEnroll();
    }

    async courseRegistration() {
        await this.clickExploreCourses();
        await this.clickSelectCourse();
        await this.clickCourseEnroll();
        await this.clickMyCourses();
    }
}