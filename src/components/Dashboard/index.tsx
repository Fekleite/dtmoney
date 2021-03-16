import { Summary } from '../Summary';
import { TransactionsTable } from '../TrasactionsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}