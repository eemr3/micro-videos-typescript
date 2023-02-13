import InvalidUuidError from '../errors/invalid-uuid.error';
import UniqueEntityId from './unique-entity-id.vo';

describe('UniqueEntityId unit Test', () => {
  it('should throw error when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');

    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
    const vo = new UniqueEntityId('87cba71d-4ed4-411f-ba4b-41fccb328f98');

    expect(vo.id).toBe('87cba71d-4ed4-411f-ba4b-41fccb328f98');
    expect(validateSpy).toHaveBeenCalled();
  });
});
