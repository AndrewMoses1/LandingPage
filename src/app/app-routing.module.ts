import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' }},
  { path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' }},
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' }},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
