import { RecruitinderPage } from './app.po';

describe('recruitinder App', () => {
  let page: RecruitinderPage;

  beforeEach(() => {
    page = new RecruitinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
