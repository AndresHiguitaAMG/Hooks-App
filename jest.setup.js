// jest.setup.js

// Extensiones de jest-dom para mejores assertions
import '@testing-library/jest-dom';

// Polyfill para fetch API
import 'whatwg-fetch';

// Polyfill para TextEncoder/TextDecoder (evita errores en algunos entornos)
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Silenciar warnings innecesarios durante los tests
const originalError = console.error;
console.error = (...args) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return; // Ignora los warnings de act()
  }
  originalError.call(console, ...args);
};

