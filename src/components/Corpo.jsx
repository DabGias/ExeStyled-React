import styled from "styled-components"

const DivCorpo = styled.div `
    text-align: center;
    background-color: lightgreen;
    margin-top: 150px;
`

const ListaSabores = styled.ul `
    font-family: monospace;
`

const Sabor = styled.li `
    list-style: none;
`

function Corpo() {
    return(
        <DivCorpo>
            <h2>Sabores</h2>
            <ListaSabores>
                <Sabor>Chocolate;</Sabor>
                <Sabor>Cupuaçu;</Sabor>
                <Sabor>Uva;</Sabor>
                <Sabor>Milho;</Sabor>
                <Sabor>Coco queimado;</Sabor>
                <Sabor>Morango;</Sabor>
                <Sabor>Baunilha.</Sabor>
            </ListaSabores>
        </DivCorpo>
    )
}

export default Corpo