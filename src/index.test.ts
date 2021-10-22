import { render } from './';

describe('render', () => {
  it('appends a div to the document', () => {
    jest.spyOn(document.body, 'append');

    render();

    expect(document.body.append).toHaveBeenCalledWith(
      expect.objectContaining({
        innerHTML: 'Hello world',
        tagName: 'DIV'
      })
    );
  })
})