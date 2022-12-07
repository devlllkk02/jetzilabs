/* ----- RadioButton.js ----- */
import React from "react";
import "./RadioButton.scss";

function RadioButton() {
  return (
    <div class="radio">
      <input id="radio-1" name="radio" type="radio" checked />
      <label for="radio-1" class="radio-label">
        Checked
      </label>
    </div>
  );
}

export default RadioButton;
