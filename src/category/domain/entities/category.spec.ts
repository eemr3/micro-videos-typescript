import { Category } from './category';

describe('Category Test', () => {
  it('sould constructor of category', () => {
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
});
