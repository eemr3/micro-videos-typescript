import InvalidUuidError from '../errors/invalid-uuid.error';
import UniqueEntityId from './unique-entity-id.vo';
import { validate as uuidValidade } from 'uuid';

const spyValidateMetohd = () => {
  return jest.spyOn(UniqueEntityId.prototype as any, 'validate');
};

describe('UniqueEntityId unit Test', () => {
  it('should throw error when uuid is invalid', () => {
    const validateSpy = spyValidateMetohd();

    expect(() => new UniqueEntityId('fake id')).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should accept a uuid passed in constructor', () => {
    const validateSpy = spyValidateMetohd();
    const vo = new UniqueEntityId('87cba71d-4ed4-411f-ba4b-41fccb328f98');

    expect(vo.id).toBe('87cba71d-4ed4-411f-ba4b-41fccb328f98');
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should a valid uuid must be created', () => {
    const validateSpy = spyValidateMetohd();
    const vo = new UniqueEntityId();

    expect(uuidValidade(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
