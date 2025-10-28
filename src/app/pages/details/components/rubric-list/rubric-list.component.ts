import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-rubric-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rubric-list.component.html',
  styleUrl: './rubric-list.component.scss'
})
export class RubricListComponent {
rubrics = signal<string[]>(['']);
  maxRubrics = 5;

  addRubric(): void {
    if (this.rubrics().length >= this.maxRubrics) {
      alert(`Solo puedes crear hasta ${this.maxRubrics} rúbricas.`);
      return;
    }
    this.rubrics.update((r) => [...r, '']);
  }

  removeRubric(index: number): void {
    this.rubrics.update((r) => r.filter((_, i) => i !== index));
  }

  updateRubric(value: string, index: number): void {
    this.rubrics.update((r) => {
      const newList = [...r];
      newList[index] = value;
      return newList;
    });
  }

  saveRubrics(): void {
    console.log('Rúbricas guardadas:', this.rubrics());
    alert('Rúbricas guardadas correctamente.');
  }
}
