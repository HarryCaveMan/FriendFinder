 var config = {
      ".chosen-select": {},
      ".chosen-select-deselect": {
        allow_single_deselect: true
      },
      ".chosen-select-no-single": {
        disable_search_threshold: 10
      },
      ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
      },
      ".chosen-select-width": {
        width: "95%"
      }
    };

    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    // Capture the form inputs
    $("#submit").on("click", function(event) {
      event.preventDefault();

      // Form validation
      function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
          if ($(this).val() === "") {
            isValid = false;
          }
        });

        $(".chosen-select").each(function() {

          if ($(this).val() === "") {
            isValid = false;
          }
        });
        console.log(isValid);
        return isValid;
      }

      // If all required fields are filled
      if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          data: [
            $("#q1").val()+
            $("#q2").val()+
            $("#q3").val()+
            $("#q4").val()+
            $("#q5").val()+
            $("#q6").val()+
            $("#q7").val()+
            $("#q8").val()+
            $("#q9").val()+
            $("#q10").val()
          ]
        };

        console.log(userData);

        // AJAX post the data to the friends API.
        $.get(`/api/friends/${userData.name}/${userData.photo}/${userData.data}`, (res) => {

          // Grab the result from the AJAX post so that the best match's name and photo are displayed.
          //for high traffic servers, it's better to have this run client side...
          //          
          matched = match(res);
          $("#match-name").text(matched.name);
          $("#match-img").attr("src", matched.photo);

          // Show the modal with the best match
          $("#results-modal").modal("toggle");
        });
      } else {
        alert("Please fill out all fields before submitting!");
      }
    });