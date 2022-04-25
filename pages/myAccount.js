const { I } = inject();

module.exports = {
  centerInput: {css: '#center_column'},
  

  waitForPageLoad() {
    I.waitForVisible(this.centerInput);
  },
  checkMyAccountPageIsVisible(){
    I.see('My account');
  },
}
