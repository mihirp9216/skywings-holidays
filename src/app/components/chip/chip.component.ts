import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {
  MatChipInputEvent,
  MatChipListbox,
  MatChipListboxChange,
} from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Category } from "src/app/models/categories.model";

// export interface Category {
//   name: string;
// }

@Component({
  selector: "app-chip",
  templateUrl: "./chip.component.html",
  styleUrls: ["./chip.component.scss"],
})
export class ChipComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  // @ViewChild('chipList') chipList: MatChipListbox;

  categories: Category[] = [];
  @Output()
  onSubmit = new EventEmitter<Category[]>();

  submit() {
    this.onSubmit.emit(this.categories);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    // Add our fruit
    if (value) {
      this.categories.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(categories: Category): void {
    const index = this.categories.indexOf(categories);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }
}
