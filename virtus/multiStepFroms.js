function nextSection(section) {
  // Add validation logic here
  document.getElementById(`section${section}`).style.display = "none";
  document.getElementById(`section${section + 1}`).style.display = "block";
}
