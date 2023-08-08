function cor(dados, FEN) {
    const turno = FEN[FEN.indexOf('_')+1]
    const vencedorDados = dados.category;
    let vencedor = ' ';
    let resultado = 'Empatado';
    let mate = Math.abs(Math.ceil(dados.dtm/2));

    if(vencedorDados == 'draw' || vencedorDados == 'blessed-loss' || vencedorDados == 'cursed-win'){
        vencedor = 'empate'
    }else{
        switch(vencedorDados){
            case 'win':
                if(turno == 'w'){
                    vencedor = 'brancas';
                    resultado = 'Brancas Ganhando';
                }else{
                    vencedor = 'negras';
                    resultado = 'Negras Ganhando';
                }
                break
            case 'loss':
                if(turno == 'w'){
                    vencedor = 'negras';
                    resultado = 'Negras Ganhando';
                }else{
                    vencedor = 'brancas';
                    resultado = 'Brancas Ganhando';
                }
                break
        }
    }
    
    let mensagemVitoria = '';
    
    if(mate === 0 && vencedor != 'empate'){
        mensagemVitoria = `
        <div>
        <p>Indisponível</p>
        </div>`
    }else if(vencedor != 'empate'){
        mensagemVitoria = `
        <div>
        <p>Mate em ${mate}</p>
        </div>`
    }
    document.querySelector('#auxiliar').innerHTML = `
    <section id="resultado" class="geral resultado-${vencedor}">
        <p>${resultado}</p>
        ${mensagemVitoria} 
    </section>
    `
    const melhorLance = document.querySelector('#melhor-lance');
    melhorLance.innerHTML = `Melhor Lance: ${dados.moves[0].san.replace('R', 'T').replace('N', 'C').replace('Q', 'D').replace('K', 'R')}`
}

async function tablebases() {
    const FEN = document.querySelector('input').value.replaceAll(' ', '_');
    const url = `https://tablebase.lichess.ovh/standard?fen=${FEN}`;
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados)
    cor(dados, FEN);
}

function trataTecla(e){
    if(!e.repeat){
        if(e.key === 'Enter'){
            tablebases();
        }
    }
}
document.addEventListener('keypress', trataTecla);