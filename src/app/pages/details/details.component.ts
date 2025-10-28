import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RubricListComponent } from "./components/rubric-list/rubric-list.component";
import { UploadFileComponent } from "./components/upload-file/upload-file.component";
import { ResultsPanelComponent } from "./components/results-panel/results-panel.component";
import { GroupResultsComponent } from "./components/group-results/group-results.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, CommonModule, RubricListComponent, UploadFileComponent, ResultsPanelComponent, GroupResultsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

   activeTab = signal<'config' | 'results'>('config');

  uploadedFile = signal<File | null>(null);

  onFileUploaded(file: File) {
    this.uploadedFile.set(file);
    console.log('Archivo recibido:', file.name);
  }

  goBack() {
    window.history.back();
  }


}
