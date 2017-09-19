import { SnippetsModule } from './snippets.module';

describe('SnippetsModule', () => {
  let snippetsModule: SnippetsModule;

  beforeEach(() => {
    snippetsModule = new SnippetsModule();
  });

  it('should create an instance', () => {
    expect(snippetsModule).toBeTruthy();
  });
});
