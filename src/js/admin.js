import "./../css/admin.css";

import ExcursionsAPI from "./modules/ExcursionsAPI";
import AdminExcursions from "./modules/AdminExcursions";
import AdminExcursionsForm from "./modules/adminExcursionsForm";

console.log("admin");
const excursionsApi = new ExcursionsAPI();
const adminExcursions = new AdminExcursions(excursionsApi);
const adminExcursionsForm = new AdminExcursionsForm(
  excursionsApi,
  adminExcursions
);
document.addEventListener("DOMContentLoaded", init);

function init() {
  initPanelExcursions();
  initFormExcursions();
}

async function initPanelExcursions() {
  try {
    const exursions = await excursionsApi.fetchExcursions();
    adminExcursions.laodExcursions(exursions);
    adminExcursions.renderExcursions(
      document.querySelector(".panel__excursions")
    );
  } catch (error) {
    console.error(error);
  }
}
function initFormExcursions() {
  const form = document.querySelector(".form");
  adminExcursionsForm.form = form;
  adminExcursionsForm.init();
}
