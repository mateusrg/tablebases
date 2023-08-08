# Tablebases
Este projeto tem por objetivo a aplicação dos conhecimentos relacionados ao consumo de APIs em JavaScript. Para isto, escolhi criar um Tablebases simplificado, em que se pode colocar o FEN de uma posição de xadrez com até 7 peças e o site retorna:
- O Resultado (Brancas Ganhando, Negras Ganhando ou Empatado)
- Nº de Lances até o Xeque-Mate (se aplicável)
- O Melhor Lance da Posição

## Como Usar
1. Clone este repositório para seu computador ou baixe o arquivo zippado e extraia-o;
2. Abra o index.html
3. O site não tem imbutido nele uma função de converter uma posição para FEN. Para isso, você pode utilizar os meios que preferir. Uma forma simples é através do site https://lichess.org/editor/8/8/8/8/8/8/8/8_w_-_-_0_1, em que você pode posicionar as peças da forma que desejar e copiar o FEN da posição logo abaixo. Pelas próprias limitações do Tablebases, o site do projeto não suporta mais de 7 peças no tabuleiro.
4. Cole o FEN no campo disponível no site e aperte a tecla "Enter"
5. Receba os resultados! O melhor lance é apresentado em forma de notação enxadrística, então é necessário conhecê-la.

## Algumas Informações Adicionais
Em algumas posições, a informação necessária para saber quantos lances são necessários até o xeque-mate não é disponibilida pela API. Nestes casos, o site do projeto simplesmente mostra "Indisponível" no lugar onde essa informação normalmente aparece.

A API utilizada é a disponível em https://github.com/lichess-org/lila-tablebase#http-api.
