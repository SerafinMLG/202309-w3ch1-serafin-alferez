import './scss/main.scss';

const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement === null) throw new Error('Critical Error.');

appElement.innerHTML = 'Index';
