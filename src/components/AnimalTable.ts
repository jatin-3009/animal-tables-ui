import { SortOrder } from "../constants/animals";

class AnimalTable {
  data: Array<any>;
  tableId: string;

  constructor(data: Array<any>, tableId: string) {
    this.data = data;
    this.tableId = tableId;
  }

  renderTable() {}

  sortTable(field: string, order: SortOrder) {
    this.data.sort((a, b) => {
      if (order === SortOrder.Ascending) {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });

    this.renderTable();
  }

  addAnimal(animal: any) {
    if (this.isDuplicate(animal)) {
      alert("Animal already exists");
      return;
    }
    this.data.push(animal);
    this.renderTable();
  }

  deleteAnimal(index: number) {
    this.data.splice(index, 1);
    this.renderTable();
  }

  isDuplicate(animal: any) {
    return this.data.some((a) => a.name === animal.name);
  }
}
