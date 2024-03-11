import { OpenAIService, ChatModels, EmbeddingModels  } from '../dist';
describe('Package Import Tests', () => {
  test('OpenAIService should be defined', () => {
    expect(OpenAIService).toBeDefined();
  });
  describe("Enums" , () => {
    test('ChatModels should be defined', () => {
      expect(ChatModels).toBeDefined();
    });
    test('EmbeddingModels should be defined', () => {
      expect(EmbeddingModels).toBeDefined();
    });
  });
});
