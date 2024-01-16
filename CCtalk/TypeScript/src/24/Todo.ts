/* export default class Todo<T> {
  constructor(private id: number, private content: T, private completed: boolean) {}
} */

/* 
   相当于
   export default class Todo<T> {
        private id: number;
        private content: T;
        private completed: boolean;
        constructor(private id: number, private content: T, private completed: boolean) {
            this.id = id;
            this.content = content;
            this.completed = completed;
        }
   } 
*/

// =========================

interface ITodoProps<T> {
  id: number;
  content: T;
  completed: boolean;
}

interface ITodo<T> {
  get(): ITodoProps<T>;
  created(): string;
}

export default class Todo<T> implements ITodo<T> {
  constructor(private id: number, private content: T, private completed: boolean) {}

  get(): ITodoProps<T> {
    return {
      id: this.id,
      content: this.content,
      completed: this.completed
    };
  }

  created() {
    let _content = "";

    if (typeof this.content === "string") {
      _content = this.createStringContent(this.content);
    } else if (Array.isArray(this.content)) {
      _content = this.createArrayContent(this.content);
    } else if (Object.prototype.toString.call(this.content) === "[object Object]") {
      _content = this.createObjectContent(this.content);
    }
    return `${this.id} | ${this.content} | ${this.completed ? "completed" : "no completed"}`;
  }

  private createStringContent(content: string): string {
    return content;
  }

  private createArrayContent(content: string[]): string {
    return content.join(", ");
  }

  private createObjectContent(content: T): string {
    let _content = "";

    for (const key in content) {
      _content += `${key}: ${content[key]}`;
    }

    return _content;
  }
}
