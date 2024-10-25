# Carrgar e validar pelo WebService

> ## Caso de sucesso - Token existe nao existe no cache, mas sim no banco
1. Sistema executa a o comando "verificaNFC"
2. Sistema carrega os dados do cache
3. Sistema válida se o token é referente a algum cache
4. Sistema retorna o um valor invalido
5. Sistema puxa os dados do banco
6. Sistema salva na memória do cache
6. Sistema retorna valor válido 

>## Exceção - Token não existe nem no cache nem no banco
1. Sistema retorna erro