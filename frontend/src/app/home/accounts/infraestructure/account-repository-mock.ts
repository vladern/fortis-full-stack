import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AccountRepository } from "../domain/account-repository";
import { Account } from "../domain/account";

const accounts: Account[] = [
    { id: 12, name: 'Test', category: 'Affiliates', tags: 'test', balance: 1, availableBalance: 1000 },
    { id: 13, name: 'Test1', category: 'Affiliates', tags: 'test', balance: 2, availableBalance: 1000 },
    { id: 14, name: 'Test2', category: 'Affiliates', tags: 'test', balance: 3, availableBalance: 1000 },
    { id: 15, name: 'Test3', category: 'Affiliates', tags: 'test', balance: 4, availableBalance: 1000 },
    { id: 16, name: 'Test4', category: 'Affiliates', tags: 'test', balance: 5, availableBalance: 1000 },
    { id: 17, name: 'Test5', category: 'Affiliates', tags: 'test', balance: 6, availableBalance: 1000 },{ id: 12, name: 'Test', category: 'Affiliates', tags: 'test', balance: 1, availableBalance: 1000 },
    { id: 18, name: 'Test1', category: 'Affiliates', tags: 'test', balance: 2, availableBalance: 1000 },
    { id: 19, name: 'Test2', category: 'Affiliates', tags: 'test', balance: 3, availableBalance: 1000 },
    { id: 20, name: 'Test3', category: 'Affiliates', tags: 'test', balance: 4, availableBalance: 1000 },
    { id: 21, name: 'Test4', category: 'Affiliates', tags: 'test', balance: 5, availableBalance: 1000 },
    { id: 22, name: 'Test5', category: 'Affiliates', tags: 'test', balance: 6, availableBalance: 1000 },
];

@Injectable()
export class AccountRepositoryMock extends AccountRepository {
    public getAccounts(): Observable<Account[]> {
        return new Observable<Account[]>((observer) => {
            observer.next(accounts);
        });
    }
    public onSomeAcountChanges(): Observable<Account> {
        return new Observable<Account>((observer) => {
            setInterval(() => {
                const randomAccount = accounts[Math.floor(Math.random() * accounts.length)];
                if (Math.floor(Math.random() * 2) === 0) {
                    randomAccount.balance = Math.floor(Math.random() * 10000);
                }
                if (Math.floor(Math.random() * 2) === 0) {
                    randomAccount.availableBalance = Math.floor(Math.random() * 10000);
                }
                observer.next(randomAccount);
            }, Math.floor(Math.random() * 20000) + 20000);
        });
    }
}