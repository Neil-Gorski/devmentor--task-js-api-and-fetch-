import { validateFormData } from "./validateFormData";
import { getFormData, generateId } from "./utils";
export default class AdminExcursionsForm {
  constructor(api, adminExcursions, form) {
    this.api = api;
    this.adminExcursions = adminExcursions;
    this.form;
  }
  init() {
    this.form.addEventListener("submit", (e) => this.onFormSubmit(e));
  }
  async onFormSubmit(e) {
    e.preventDefault();
    if (validateFormData(e.target)) {
      const newExcursionEntry = getFormData(e.target);
      newExcursionEntry.id = generateId();
      console.log(newExcursionEntry);
      await this.api.postExcursion(newExcursionEntry);
      await this.adminExcursions.rerenderExcursions();
      e.target.reset();
    }
  }
}
