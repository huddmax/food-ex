module.exports = {
  bail: true,
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js"
    //Essa configuração diz que ele deve procurar em src os arquivos com esse final
  ],

}