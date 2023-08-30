import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../services/api";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, [])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="title">Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >Monitoria</td>
                        <td className="deposit">R$700,00</td>
                        <td>Desenvolvimento</td>
                        <td>01/08/2023</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td >Hamburguer</td>
                        <td className="withdraw">- R$30,00</td>
                        <td>Alimentação</td>
                        <td>01/08/2023</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    )
}