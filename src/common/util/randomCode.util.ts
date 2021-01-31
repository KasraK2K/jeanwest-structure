export const generateCode = async (type: number, length: number) => {
  let result = '';
  const characters: string[] = [
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    'abcdefghijklmnopqrstuvwxyz',
    '0123456789',
  ];
  const charactersLength = characters[type-1].length;
  for (let i = 0; i < length; i++) {
    result += characters[type-1].charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
