Feature: Compra no site Extra
	@compra @estorno
	Scenario: Busca por Produto
		Given que acesso o site do Extra
		When preencho o termo "smartphone" e clico na Lupa
		Then exibe a lista de produtos 
	
	@estorno
	Scenario: Compra por Produto Nao Encontrado
		Given que acesso o site do Extra
		When preencho o termo "SDFGHJRTYERTY" e clico na Lupa
		Then exibe a mensagem de produto nao encontrado