import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    value: number;
    category: string;
    type: string;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode;
}


export const TransactionContext = createContext<Transaction[]>([]);


export function TransactionProvider({children} : TransactionProviderProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("transactions").then((response) => setTransactions(response.data.transactions));
    }, []);

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
}