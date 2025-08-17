import test from '@playwright/test';
import { MainPage } from "../../pages/MainPage"

test('Открытие главной страницы', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
});
test('Проверка доступности элементов хедера', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeCookiesAlert(); 
    await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности табов категорий', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeCookiesAlert(); 
    await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});
test('Проверка доступности бокового меню', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closeCookiesAlert(); 
    await mainPage.menuHasCorrectAriaSnapshot();
});