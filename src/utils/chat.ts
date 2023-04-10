export const completeChat = async (message: string) => {
  const response = await window.native?.completeChat(message);
  if (!response) {
    console.error('Empty message response:', response);
    return;
  }
  return response.message;
};
