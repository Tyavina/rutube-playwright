import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
   private readonly headerLocator: Locator;
   private readonly categoriesTabsLocator: Locator;
   private readonly menuLocator: Locator;
   private readonly headerAddButtonLocator: Locator;
   private readonly headerNotificationsButtonLocator: Locator;
   private readonly headerLoginButtonLocator: Locator;
   private readonly headerAddButtonPopupListLocator: Locator;
   private readonly headerNotificationsPopupLocator: Locator;
   private readonly authorizationModalLocator: Locator;
   private readonly menuButtonLocator: Locator;
   private readonly openMenuAriaLocator: Locator;
   private readonly changeThemeButtonLocator: Locator;

   constructor(page: Page) {
      super(page);
      this.headerLocator = this.page.locator('.header-module__charHeaderWrapper');
      this.categoriesTabsLocator = this.page.getByRole('main').locator('div').filter({ hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ' }).nth(1);
      this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
      this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
      this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
      this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
      this.headerAddButtonPopupListLocator = this.page.locator('.wdp-header-right-module__uploader ul');
      this.headerNotificationsPopupLocator = this.page.locator('.wdp-notifications-popup-module__wrapper');
      this.authorizationModalLocator = this.page.locator('iframe[title="Multipass"]').contentFrame().locator('div[role="form"]');
      this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' })
      this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
      this.changeThemeButtonLocator = this.page.getByRole('button', { name: 'Переключить на светлую тему' })
   }
   
   async open() {
      await this.page.goto('https://rutube.ru');
   }
   async changeThemeToWhite() {
      await this.changeThemeButtonLocator.click();
   }
   async openFullMenu() {
      await this.menuButtonLocator.click();
   }
   async headerHasCorrectAriaSnapshot() {
      await expect(this.headerLocator).toMatchAriaSnapshot({name: 'headerAriaSnapshot.yml'});
   }
   async categoriesTabsHasCorrectAriaSnapshot() {
      await expect(this.categoriesTabsLocator).toMatchAriaSnapshot({name: 'categoriesTabsSnapshot.yml'});
   }
   async menuHasCorrectAriaSnapshot() {
      await expect(this.menuLocator).toMatchAriaSnapshot({name: 'menuSnapshot.yml'});
   }
   async openAddPopupList() {
      this.headerAddButtonLocator.click();
   }
   async openNotificationPopup() {
      this.headerNotificationsButtonLocator.click();
   }
   async openAuthorizationModal() {
      this.headerLoginButtonLocator.click();
   }
   async addPopupListHasCorrectAriaSnapshot() {
      await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({name: 'addButtonPopupList.yml'});   
   }
   async notificationsPopupHasCorrectAriaSnapshot() {
      await expect(this.headerNotificationsPopupLocator).toMatchAriaSnapshot({name: 'notificationsPopup.yml'});   
   }
   async authorizationModalHasCorrectAriaSnapshot() {
      await expect(this.authorizationModalLocator).toMatchAriaSnapshot({name: 'authorizationModal.yml'});   
   }
   async fullMenuHasCorrectAriaSnapshot() {
      await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({name: 'fullMenuSnapshot.yml'});
   }
   async checkThemeAttributeValue(attributeValue: 'dark' | 'light' ) {
      await expect(this.page.locator('html')).toHaveAttribute('data-themeid', attributeValue);
   }
}

