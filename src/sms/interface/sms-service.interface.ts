export interface ISmsSrevice {
  simpleSend(phoneNumber: string[], context: string): Promise<any>;
  //   patternSend(phoneNumber: string[], pattern: number, token: string[]): Promise<any>;
}
