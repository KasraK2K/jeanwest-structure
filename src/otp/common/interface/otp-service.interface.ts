export interface IOtpSrevice {
  requestPin(phoneNumber: string): Promise<any>;
  verifyPin(phoneNumber: string, pin:string): Promise<any>;
}
