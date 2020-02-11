$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuscaExtra.feature");
formatter.feature({
  "line": 1,
  "name": "Compra no site Extra",
  "description": "",
  "id": "compra-no-site-extra",
  "keyword": "Feature"
});
formatter.before({
  "duration": 33454586400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Busca por Produto",
  "description": "",
  "id": "compra-no-site-extra;busca-por-produto",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@compra"
    },
    {
      "line": 2,
      "name": "@estorno"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "que acesso o site do Extra",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "preencho o termo \"smartphone\" e clico na Lupa",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "exibe a lista de produtos",
  "keyword": "Then "
});
formatter.match({
  "location": "BuscaExtra.que_acesso_o_site_do_Extra()"
});
formatter.result({
  "duration": 55131463900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smartphone",
      "offset": 18
    }
  ],
  "location": "BuscaExtra.preencho_o_termo_e_clico_na_Lupa(String)"
});
formatter.result({
  "duration": 94958451600,
  "status": "passed"
});
formatter.match({
  "location": "BuscaExtra.exibe_a_lista_de_produtos()"
});
formatter.result({
  "duration": 4619201400,
  "status": "passed"
});
formatter.after({
  "duration": 20139251300,
  "status": "passed"
});
formatter.before({
  "duration": 18272935200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Compra por Produto Nao Encontrado",
  "description": "",
  "id": "compra-no-site-extra;compra-por-produto-nao-encontrado",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@estorno"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que acesso o site do Extra",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "preencho o termo \"SDFGHJRTYERTY\" e clico na Lupa",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "exibe a mensagem de produto nao encontrado",
  "keyword": "Then "
});
formatter.match({
  "location": "BuscaExtra.que_acesso_o_site_do_Extra()"
});
formatter.result({
  "duration": 68352392900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SDFGHJRTYERTY",
      "offset": 18
    }
  ],
  "location": "BuscaExtra.preencho_o_termo_e_clico_na_Lupa(String)"
});
formatter.result({
  "duration": 69957339500,
  "status": "passed"
});
formatter.match({
  "location": "BuscaExtra.exibe_a_mensagem_de_produto_nao_encontrado()"
});
formatter.result({
  "duration": 4973778600,
  "status": "passed"
});
formatter.after({
  "duration": 14127739300,
  "status": "passed"
});
});