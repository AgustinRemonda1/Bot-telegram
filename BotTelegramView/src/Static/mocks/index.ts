if (typeof window !== 'undefined') {
  const { worker } = require('./browser');
  console.log('start browser mock');
  worker.start();
}

export {};
