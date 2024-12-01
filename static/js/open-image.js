  // Function to open the modal
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Function to set the image source in the modal
  function currentSlide(n) {
    var modalImg = document.getElementById("img01");
    modalImg.src = document.getElementsByClassName("thumbnail")[n-1].src;
  }