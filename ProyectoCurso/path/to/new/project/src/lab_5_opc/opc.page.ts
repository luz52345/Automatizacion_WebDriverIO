import { browser } from '@wdio/globals'

/**
   * Abre la página principal 
   */
  
 
class lab_5_opcPage{
async open() {
    await browser.url("https://practice.expandtesting.com/dropdown");
  }
async scrollToBottom() {
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  })};
 
  async scroll500px() {
    await browser.execute(() => {
      window.scrollBy(0, 500);
    })};
/**
 * seleccionar opcion de la lista desplegable Simple dropdown   
 */

get dropdown() {
  return $('//*[@id="dropdown"]'); 
  
}

get option2() {
  return $('//*[@id="dropdown"]/option[3]'); 
}

async selectOption() {
  await this.dropdown.click();
  await browser.pause(5000); 
  await this.option2.click();
  await browser.pause(5000); 
}

}

export default new lab_5_opcPage();