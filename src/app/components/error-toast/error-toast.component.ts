import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toast } from './models/toast';
@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss'],
})
export class ErrorToastComponent implements OnInit {
  @Input() toastData!: Toast;
  @Output() closeToastEvent = new EventEmitter<boolean>();

  constructor() {}
  onClick(): void {
    this.closeToastEvent.emit(false);
  }
  ngOnInit(): void {}
}
