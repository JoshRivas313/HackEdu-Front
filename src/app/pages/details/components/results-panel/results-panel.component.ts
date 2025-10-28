import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


interface RubricResult {
  name: string;
  passed: number;
  failed: number;
}

@Component({
  selector: 'app-results-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-panel.component.html',
  styleUrl: './results-panel.component.scss'
})
export class ResultsPanelComponent {
 totalGroups = signal(6);
  percentPassed = signal(66.7);
  percentFailed = signal(33.3);
  worstRubric = signal('Rúbrica 3');

  rubricsResults = signal<RubricResult[]>([
    { name: 'Rúbrica 1', passed: 4, failed: 2 },
    { name: 'Rúbrica 2', passed: 5, failed: 1 },
    { name: 'Rúbrica 3', passed: 4, failed: 2 },
    { name: 'Rúbrica 4', passed: 5, failed: 1 },
    { name: 'Rúbrica 5', passed: 6, failed: 0 },
  ]);
}
