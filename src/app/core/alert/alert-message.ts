import { AlertLevel } from "./warning-level";

export class AlertMessage {
    constructor(public title: string, public message: string, public alertLevel: AlertLevel) {
    }
  }