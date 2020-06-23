export default class MobileCheck {
  public static isMobile() {
    return 'ontouchstart' in document.documentElement;
  }
}
