import { expect, Page } from "@playwright/test";

export class BasePage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }
    async closeCookiesAlert() {
        await this.page.getByRole('button', { name: 'Ок', exact: true }).click();
    }
    async closeModalWindows() {
        if (await expect(this.page.getByRole('button', { name: 'Закрыть' })).toBeVisible) {
            await this.page.getByRole('button', { name: 'Закрыть' }).click();
        }
    }
}