import { Category } from './category';
import { omit } from 'lodash';
describe('Category Test', () => {
  it('sould constructor of  property name', () => {
    const category = new Category({
      name: 'Move',
      description: null,
      isActive: true,
    });
    const props = omit(category.props, 'createdAt');

    expect(props).toStrictEqual({
      name: 'Move',
      description: null,
      isActive: true,
    });
  });

  it('sould constructor of  properties name, description and isActive', () => {
    const category = new Category({
      name: 'Move',
      description: 'some description',
      isActive: false,
    });
    const props = omit(category.props, 'createdAt');
    expect(props).toStrictEqual({
      name: 'Move',
      description: 'some description',
      isActive: false,
    });

    expect(category.props.createdAt).toBeInstanceOf(Date);
  });
  it('sould constructor of  properties name, description and isActive', () => {
    const category = new Category({
      name: 'Move',
      description: 'some description',
      isActive: false,
    });
    const props = omit(category.props, 'createdAt');
    expect(props).toStrictEqual({
      name: 'Move',
      description: 'some description',
      isActive: false,
    });
  });
  it('sould constructor of  properties name, description, isActive, createdAt', () => {
    const createdAt = new Date();
    const category = new Category({
      name: 'Move',
      description: 'some description',
      isActive: true,
      createdAt,
    });

    expect(category.props).toStrictEqual({
      name: 'Move',
      description: 'some description',
      isActive: true,
      createdAt,
    });
  });
  it('sould constructor of  properties name, description', () => {
    const category = new Category({
      name: 'Move',
      description: 'other description',
    });

    expect(category.props).toMatchObject({
      name: 'Move',
      description: 'other description',
    });
  });

  it('sould constructor of  properties name, isActive', () => {
    const category = new Category({
      name: 'Move',
      isActive: true,
    });

    expect(category.props).toMatchObject({
      name: 'Move',
      isActive: true,
    });
  });

  it('sould constructor of  properties name, createdAt', () => {
    const createdAt = new Date();
    const category = new Category({
      name: 'Move',
      createdAt,
    });

    expect(category.props).toMatchObject({
      name: 'Move',
      createdAt,
    });
  });
});
