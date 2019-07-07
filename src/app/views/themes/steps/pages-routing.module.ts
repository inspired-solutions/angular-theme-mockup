// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// Auth
import { AuthGuard } from '../../../core/auth';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'step1',
				loadChildren: 'app/views/steps/step1/step1.module#Step1Module',
			},
			{
				path: 'step2',
				loadChildren: 'app/views/steps/step2/step2.module#Step2Module',
			},
			{
				path: 'step3',
				loadChildren: 'app/views/steps/step3/step3.module#Step3Module',
			},
			{ path: 'error/:type', component: ErrorPageComponent },
			{ path: '', redirectTo: 'step1', pathMatch: 'full' },
			{ path: '**', redirectTo: 'step1', pathMatch: 'full' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
