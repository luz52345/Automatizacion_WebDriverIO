import { browser } from '@wdio/globals'

  /**
   * Abre la página principal 
   */
  
class lab_6_impPage{
  async open() {
    await browser.url("https://practice.expandtesting.com/dynamic-loading");
  }

  async logoVisible() {
    await $('/html/body/header/nav/a').waitForDisplayed({ timeout: 10000 });
    
  }
  async scrollToBottom() {
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  })};
 
  async scroll1100px() {
    await browser.execute(() => {
      window.scrollBy(0, 1100);
    })};

/**
 * seleccionar el elemento
 */
 
get elemento() {
  return $('//*[@id="core"]/div/div/div/ul/li[1]/a'); 
}

get button() {
  return $('#start button'); 
  //return $('button=Start'); 
}

get validatetxt() {
  return $('#finish h4'); 
}

  async Example1() {
    await this.elemento.click();
    await browser.pause(5000); 
    await this.button.click();
   await browser.pause(5000); 
  }

    
  }
  
 export default new lab_6_impPage();