import { NcgAppPage } from './app.po';

describe('ncg-app App', () => {
  let page: NcgAppPage;

  beforeEach(() => {
    page = new NcgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
