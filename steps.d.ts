/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type basePage = typeof import('./pages/base.js');
type accountPage = typeof import('./pages/account.js');
type productPage = typeof import('./pages/product.js');
type cartPage = typeof import('./pages/cart.js');
type ChaiWrapper = import('codeceptjs-chai');
type PriceGrabber = import('./helpers/pricegrabber_helper.js');
type CheckElement = import('./helpers/checkelement_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, basePage: basePage, accountPage: accountPage, productPage: productPage, cartPage: cartPage }
  interface Methods extends Playwright, ChaiWrapper, PriceGrabber, CheckElement, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
