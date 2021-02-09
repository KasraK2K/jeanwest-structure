export interface IOtpSrevice {
  requestPin(phoneNumber: string): Promise<any>;
}
