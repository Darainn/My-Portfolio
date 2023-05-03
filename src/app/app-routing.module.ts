import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { FindMeComponent } from "./components/find-me/find-me.component";
import { MainSectionComponent } from "./components/main-section/main-section.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";

const routes: Routes = [
  { path: "aboutMe", component: MainSectionComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "findMe", component: FindMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
