import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {

    // Señal para almacenar el archivo cargado
  uploadedFile = signal<File | null>(null);

  // Estado visual
  isDragging = signal(false);

  // Emitir evento cuando el archivo se suba correctamente
  @Output() fileUploaded = new EventEmitter<File>();

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);

    const file = event.dataTransfer?.files[0];
    if (file && file.type === 'application/pdf') {
      this.uploadedFile.set(file);
      this.fileUploaded.emit(file);
    } else {
      alert('Solo se permiten archivos PDF.');
    }
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file && file.type === 'application/pdf') {
      this.uploadedFile.set(file);
      this.fileUploaded.emit(file);
    } else {
      alert('Solo se permiten archivos PDF.');
    }
  }

  clearFile() {
    this.uploadedFile.set(null);
  }
}
