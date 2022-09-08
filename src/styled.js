import styled from 'styled-components';

export const DivCabecalho = styled.div `
    text-align: center;
    background-color: lightcoral;

    .divImagem {
        width: 30%;
        display: inline-block;
    }

    .divImagem img {
        height: 100px;
    }

    .divTitulo {
        width: 70%;
        display: inline-block;
    }
`;

export const DivRodape = styled.div `
    text-align: center;
    height: 100px;
    width: 100%;
    background-color: black;
    color: white;
    position: fixed;
    bottom: 0;

    p {
        margin-top: 45px;
    }
`
