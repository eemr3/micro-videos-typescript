import { omit } from 'lodash';
import UniqueEntityId from '../../../@seedworkd/domain/unique-entity-id.vo';
import { Category, CategoryProperties } from './category';
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

  it('sould getter an setter description prop', () => {
    let category = new Category({
      name: 'Move',
      description: 'some description',
    });
    expect(category.props.description).toBe('some description');

    category = new Category({
      name: 'Move',
    });
    expect(category.props.description).toBeNull();

    category = new Category({
      name: 'Move',
      description: undefined,
    });
    expect(category.props.description).toBeNull();
  });

  it('sould getter an setter isActive prop', () => {
    let category = new Category({
      name: 'Move',
      isActive: true,
    });
    expect(category.props.isActive).toBeTruthy();

    category = new Category({
      name: 'Move',
    });
    expect(category.props.isActive).toBeTruthy();

    category = new Category({
      name: 'Move',
      isActive: false,
    });
    expect(category.description).toBeFalsy();
  });
  it('sould getter an setter isActive prop', () => {
    let category = new Category({
      name: 'Move',
      isActive: true,
    });
    expect(category.props.isActive).toBeTruthy();

    category = new Category({
      name: 'Move',
    });
    expect(category.props.isActive).toBeTruthy();

    category = new Category({
      name: 'Move',
      isActive: false,
    });
    expect(category.description).toBeFalsy();
  });
  it('sould getter createdAt prop', () => {
    const createdAt = new Date();
    let category = new Category({
      name: 'Move',
      createdAt,
    });
    expect(category.props.createdAt).toBeInstanceOf(Date);

    category = new Category({
      name: 'Move',
      createdAt,
    });

    expect(category.createdAt).toBe(createdAt);
  });

  it('should id fild', () => {
    type CategoryData = { props: CategoryProperties; id?: UniqueEntityId };

    const data: CategoryData[] = [
      { props: { name: 'Move' } },
      { props: { name: 'Move' }, id: null },
      { props: { name: 'Move' }, id: undefined },
      { props: { name: 'Move' }, id: new UniqueEntityId() },
    ];

    data.forEach((i) => {
      const category = new Category(i.props, i.id);
      expect(category.id).not.toBeNull();
      expect(category.id).toBeInstanceOf(UniqueEntityId);
    });
  });
});
