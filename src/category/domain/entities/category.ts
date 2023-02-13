import { v4 as uuidv4 } from 'uuid';
export type CategoryProperties = {
  name: string;
  description?: string;
  isActive?: boolean;
  createdAt?: Date;
};

export class Category {
  public readonly id: string;

  constructor(public readonly props: CategoryProperties, id?: string) {
    this.id = id || uuidv4();
    this.description = this.props.description;
    this.isActive = this.props.isActive;
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  private set nam(valeu: string) {
    this.props.name = valeu;
  }

  get description() {
    return this.props.description;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  get isActive() {
    return this.props.isActive;
  }

  private set isActive(value: boolean) {
    this.props.isActive = value ?? true;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
