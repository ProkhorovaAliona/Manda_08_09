module.exports = () => ({
  test: /\.jsx?$/, // обычный js и jsx. jsx - так называют смесь React + JS
  exclude: /node_modules/, // не обрабатывать папку node_modules, модули с npm обычно уже оптимизированы их разработчиками
  use: [
    { loader: 'babel-loader' }, // Бабель транслирует ES6+ код в более раннийц для большей кросбраузерности. Настройки бабеля храняться в отдельном файле .babelrc
  //  { loader: 'eslint-loader' }, // Чтобы ESLint ругался. Соблюдайте очередность, тут не использован enforse для читабельности конфига.
  ],
});
