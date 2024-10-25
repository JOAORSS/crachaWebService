# Carregar e validar os dados pelo cache

> ## Caso de sucesso - Token existe no cache
1. Sistema executa a o comando "verificaNFC"
2. Sistema carrega os dados do cache
3. Sistema válida se o token é referente a algum cache
4. Sistema retorna o um valor válido e catraca abre

> ## Exceção - Token não resgistrado no cache & offline
1. Sistema avisa que o token não existe no cache
2. Sistema retorna erro