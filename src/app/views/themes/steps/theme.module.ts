import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatProgressBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxPermissionsModule } from 'ngx-permissions';

import { PermissionEffects, permissionsReducer, RoleEffects, rolesReducer } from '../../../core/auth';
import { CoreModule } from '../../../core/core.module';
import { PagesModule } from '../../pages/pages.module';
import { PartialsModule } from '../../partials/partials.module';
import { AsideLeftComponent } from './aside/aside-left.component';
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { BrandComponent } from './header/brand/brand.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { HeaderComponent } from './header/header.component';
import { MenuHorizontalComponent } from './header/menu-horizontal/menu-horizontal.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { HtmlClassService } from './html-class.service';
import { PagesRoutingModule } from './pages-routing.module';
import { SubheaderComponent } from './subheader/subheader.component';

// Angular
// NgBootstrap
// Translation
// Loading bar
// NGRX
// Ngx DatePicker
// Perfect Scrollbar
// SVG inline
// Core Module
@NgModule({
	declarations: [
		BaseComponent,
		FooterComponent,

		// headers
		HeaderComponent,
		BrandComponent,
		HeaderMobileComponent,

		// subheader
		SubheaderComponent,

		// topbar components
		TopbarComponent,

		// aside left menu components
		AsideLeftComponent,

		// horizontal menu components
		MenuHorizontalComponent,

		ErrorPageComponent,
	],
	exports: [
		BaseComponent,
		FooterComponent,

		// headers
		HeaderComponent,
		BrandComponent,
		HeaderMobileComponent,

		// subheader
		SubheaderComponent,

		// topbar components
		TopbarComponent,

		// aside left menu components
		AsideLeftComponent,

		// horizontal menu components
		MenuHorizontalComponent,

		ErrorPageComponent,
	],
	providers: [HtmlClassService],
	imports: [
		CommonModule,
		RouterModule,
		NgxPermissionsModule.forChild(),
		StoreModule.forFeature('roles', rolesReducer),
		StoreModule.forFeature('permissions', permissionsReducer),
		EffectsModule.forFeature([PermissionEffects, RoleEffects]),
		PagesRoutingModule,
		PagesModule,
		PartialsModule,
		CoreModule,
		PerfectScrollbarModule,
		NgbModule,
		FormsModule,
		MatProgressBarModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
		TranslateModule.forChild(),
		LoadingBarModule,
		NgxDaterangepickerMd,
		InlineSVGModule,
	],
})
export class ThemeModule {}
