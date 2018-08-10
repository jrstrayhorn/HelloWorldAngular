import { Component, OnInit, Input } from '@angular/core';
import { AlertLevel } from '../core/alert/warning-level';
import { AlertMessage } from '../core/alert/alert-message';

@Component({
  selector: 'bootstrap-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() alertMsg: AlertMessage;

  constructor() { }

  get isSuccess() {
    return this.alertMsg.alertLevel == AlertLevel.Success;
  }

  get isInfo() {
    return this.alertMsg.alertLevel == AlertLevel.Info;
  }

  get isWarning() {
    return this.alertMsg.alertLevel == AlertLevel.Warning;
  }

  get isDanger() {
    return this.alertMsg.alertLevel == AlertLevel.Danger;
  }

}
