function showDescription(title, description) {
    $('#exampleModalLabel').text(title);
    $('#projectDescription').text(description);
    $('#exampleModal').modal('show');
  }
  
  function hideDescription() {
    $('#exampleModal').modal('hide');
  }
  