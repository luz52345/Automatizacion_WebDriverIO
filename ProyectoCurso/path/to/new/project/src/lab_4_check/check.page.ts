import { browser } from '@wdio/globals'

/**
   * Abre la página principal 
   */
  
class lab_4_checkPage{
async open() {
    await browser.url("https://practice.expandtesting.com/checkboxes");
    console.log("Se abrio la url de practica");
    //await browser.url ("/");
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
 * seleccionar el checkbox 1
 */

get checkbox1() {
  return $('//*[@id="checkbox1"]'); 
}

async clickCheckbox1() {
  await this.checkbox1.click();
  await browser.pause(5000); 
}

}

export default new lab_4_checkPage();