import TransactionsRepository, {
  Balance,
} from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface ListTransactionsResponse {
  transactions: Transaction[];
  balance: Balance;
}

class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): ListTransactionsResponse {
    return {
      transactions: this.transactionsRepository.all(),
      balance: this.transactionsRepository.getBalance(),
    };
  }
}

export default ListTransactionsService;
