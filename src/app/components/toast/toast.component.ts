import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toast } from './models/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input() toastData!: Toast;
  @Output() closeToastEvent = new EventEmitter<boolean>();

  constructor() {}
  onClick(): void {
    this.closeToastEvent.emit(false);
  }
  ngOnInit(): void {}
}
