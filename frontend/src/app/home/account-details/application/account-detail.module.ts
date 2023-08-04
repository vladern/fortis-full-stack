import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TableComponent } from "@shared/components/table/table.component";
import { BalanceTemplateComponent } from "@shared/components/balance-template/balance-template.component";
import { CommonModule } from "@angular/common";
import { HighlightChangeDirective } from "@shared/directives/highlight-change-directive/highlight-change.directive";
import { AccountDetailsComponent } from "./account-detail.component";
import { AccountDetailsRepositoryMock } from "../infrastructure/account-detail-repository-mock";
import { AccountDetailsRepository } from "../domain/account-details-repository";

const routes: Routes = [
    { path: '', component: AccountDetailsComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        TableComponent,
        BalanceTemplateComponent,
        HighlightChangeDirective,
        RouterModule.forChild(routes),
    ],
    declarations: [AccountDetailsComponent],
    providers: [{ provide: AccountDetailsRepository, useClass: AccountDetailsRepositoryMock }],
})
export class AccountDetailsModule { }