export const mockPlaySoundFile = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return {
    playSoundFile: mockPlaySoundFile, // jest.fn();
  }
})

export default mock;
