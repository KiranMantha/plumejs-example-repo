import { Component, html } from '@plumejs/core';
import { IHooks, InputProps } from '@plumejs/core/dist/src/lib/types';

interface Category {
  id: number;
  name: string;
  questions: Array<{
    id: number;
    name: string;
    type: string;
  }>;
}

@Component({
  selector: 'app-row-item',
  styles: `:host {
      display: table-row-group;
  }
  .hide-row {
      display: none;
  }
  :host > tr > td[colspan] {
      background-color: #eee;
  }
  :host > tr > td[colspan] table {
      background-color: #fff;
      margin-bottom: 0;
  }
  `
})
class RowItem implements IHooks {
  readonly ObservedProperties = <const>['category'];

  category: Category;
  nestedRow: HTMLElement;

  toggleNestedTable() {
    this.nestedRow.classList.toggle('hide-row');
  }

  populateNestedTable() {
    if (this.category.questions.length) {
      return this.category.questions.map((question) => {
        return html`<tr>
          <td>${question.id}</td>
          <td>${question.name}</td>
          <td>${question.type}</td>
        </tr>`;
      });
    } else {
      return html`<tr>
        <td colspan="3">Please add a question</td>
      </tr>`;
    }
  }

  render() {
    if (this.category) {
      return html`
        <tr>
          <td>${this.category.id}</td>
          <td>${this.category.name}</td>
          <td>
            <button
              onclick=${() => {
                this.toggleNestedTable();
              }}
            >
              toggle
            </button>
          </td>
        </tr>
        <tr
          ref=${(row) => {
            this.nestedRow = row;
          }}
          class="hide-row"
        >
          <td colspan="3">
            <table>
              <thead>
                <tr>
                  <th>Question Id</th>
                  <th>Question</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                ${this.populateNestedTable()}
              </tbody>
            </table>
          </td>
        </tr>
      `;
    } else {
      return html``;
    }
  }
}

@Component({
  selector: 'app-nested-table'
})
export class NestedTable {
  categories: Category[] = [
    {
      id: 1,
      name: 'category 1',
      questions: [
        {
          id: 1,
          name: 'how are you',
          type: 'text'
        },
        {
          id: 2,
          name: 'what you do',
          type: 'text'
        }
      ]
    },
    {
      id: 2,
      name: 'category 2',
      questions: []
    }
  ];
  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Category Name</th>
            <th></th>
          </tr>
        </thead>
        ${this.categories.map((category: Category) => {
          return html`<app-row-item onbindprops=${(): InputProps<RowItem> => ({ category })}></app-row-item>`;
        })}
      </table>
    `;
  }
}
