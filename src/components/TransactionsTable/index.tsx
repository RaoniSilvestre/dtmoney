import { Container } from "./styles";

export function TransactionsTable() {
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