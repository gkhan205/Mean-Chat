import { GkChatPage } from './app.po';

describe('gk-chat App', () => {
  let page: GkChatPage;

  beforeEach(() => {
    page = new GkChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
