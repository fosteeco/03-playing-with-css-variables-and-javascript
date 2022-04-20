const inputs = document.querySelectorAll("input");

function addListener(input) {
  input.addEventListener("mousemove", handleUpdate);
  input.addEventListener("input", handleUpdate);
}

function handleUpdate() {
  const suffix = this.dataset["sizing"] || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  console.log("suffix :", suffix);
}

inputs.forEach((input) => addListener(input));
