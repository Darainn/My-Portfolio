import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { FindMeComponent } from './components/find-me/find-me.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { TechnologyCardsComponent } from './components/experience/technology-cards/technology-cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    ExperienceComponent,
    MainSectionComponent,
    FindMeComponent,
    ProjectCardComponent,
    BannerComponent,
    TechnologyCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
