import { PrimeNGDemoPage } from './app.po';

describe('prime-ngdemo App', () => {
  let page: PrimeNGDemoPage;

  beforeEach(() => {
    page = new PrimeNGDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
