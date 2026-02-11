const el = document.getElementById("username");

if (el instanceof HTMLInputElement) {
  el.value = "Sam";
  console.log("Value set safely using instanceof");
} else {
  console.log("Element not found or not an input element");
}