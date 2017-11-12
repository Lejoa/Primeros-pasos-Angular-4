import { AngularFSPage } from './app.po';

describe('angular-fs App', () => {
  let page: AngularFSPage;

  beforeEach(() => {
    page = new AngularFSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
