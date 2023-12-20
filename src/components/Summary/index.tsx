import { Container } from "./styles";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import totalImg from "../../assets/Total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const totalDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      return acc + transaction.value;
    }
    return acc;
  }, 0);

  const totalWithdraws = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'withdraw') {
      return acc + transaction.value;
    }
    return acc;
  }, 0);

  const total = totalDeposits - totalWithdraws;
  return (
    <Container>



      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-br',
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(totalDeposits)
                }</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> - {new Intl.NumberFormat('pt-br',
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(totalWithdraws)
                } </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong> {new Intl.NumberFormat('pt-br',
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(total)
                } </strong>
      </div>
    </Container>
  );
}
