import { MyFamilyWebPage } from './app.po';

describe('my-family-web App', function() {
  let page: MyFamilyWebPage;

  beforeEach(() => {
    page = new MyFamilyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
