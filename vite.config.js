export default {
  plugins: [
    {
      name: 'html-reload',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.html')) {
          server.ws.send({ type: 'full-reload', path: '*' });
        }
      },
    }
  ]
}
