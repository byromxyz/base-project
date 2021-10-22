export const render = () => {
  const content = document.createElement('div');
  content.innerHTML = 'Hello world';
  document.body.append(content);
}

render();