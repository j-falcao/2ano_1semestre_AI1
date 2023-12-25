/* import React from 'react';
import ReactDOM from 'react-dom'; */

function Title({ titleText }) {
    return React.createElement('h1', { className: 'title' }, titleText);
}

function Lead({ leadText }) {
    return React.createElement('p', { className: 'lead' }, leadText);
}

function Corpo({ corpoText }) {
    return React.createElement('p', { className: 'corpo' }, corpoText);
}


function Article(props){
    return (
        React.createElement('div', {className: 'article'}, 
            Title(props),
            Lead(props),
            Corpo(props)
        )
    );
}

const artileInfo = {
    titleText: 'Lídia Jorge, o ano de todos os prémios',
    leadText: 'Em Portugal, o ano literário foi marcado pelos vários prémios nacionais e estrangeiros ganhos pelo romance de Lídia Jorge, Misericórdia. Uma história de envelhecimento e morte, em que convivem drama e comédia. Como na vida.',
    corpoText: 'Maria Alberta, a quem também chamam Dona Alberti, é uma das residentes do lar para idosos Hotel Paraíso, mas se a noite a assusta e o corpo lhe fraqueja, nem por isso a abandonam o prazer, o sonho, a curiosidade e até um certo tom despótico que usa na relação com a filha. Sobre si mesma, ela dirá: "Mas eu tenho este feitio, quero demais, mando demais, amo demais alguma coisa que não alcanço, e quando não a atinjo, procuro desesperadamente transformar o que existe (...)." Tudo isto acontece no último romance de Lídia Jorge, Misericórdia, em que esta protagonista, ainda consciente de si mesma, é acompanhada por um leque de personagens, entre pessoas cuidadas e seus cuidadores, que desfazem qualquer ideia maniqueísta que se possa ter sobre estes espaços e sobre esta faixa etária, pouco tratada pela Literatura. São pessoas reais, contraditórias nas suas pulsões, vivências, medos e anseios.'
}

ReactDOM.render(React.createElement(Article, artileInfo), document.getElementById('root'))