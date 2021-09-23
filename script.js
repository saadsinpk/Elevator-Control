jQuery(document).ready(function( $ ){
	var pin = '1234';

	$( ".elevator_pin_class .av-image-hotspot_inner" ).each(function( index ) {
		var check_hotspot_fix = $(this).text();
		if(check_hotspot_fix == '13' || check_hotspot_fix == '14' || check_hotspot_fix == '15' || check_hotspot_fix == '16') {
			$(this).closest(".av-image-hotspot").append("<span class='show_num_"+check_hotspot_fix+"'></span>");
		}
	});

	$("#main .elevator_pin_class").append('<input class="show_pin_box" type="hidden" style="position: fixed;top: 10%;    width: 50%;    left: 25%; z-inder: 1000" placeholder="Enter_pin">');

  $( ".elevator_pin_class .av-image-hotspot_inner" ).click(function() {
  	var hotspot_text = $(this).text();
  	if(hotspot_text > 0 && hotspot_text <= 10) {
  		var current_val = $(".elevator_pin_class .show_pin_box").val();
  		var total_digit = current_val.length;
  		if(total_digit <= 4) {
	  		if(total_digit == 4) {
		  		current_val = current_val.substring(1);
		  		new_value = current_val+hotspot_text;
	  		} else {
		  		new_value = current_val+hotspot_text;
	  		}
	  		$(".elevator_pin_class .show_pin_box").val(new_value);
	  		if(total_digit == 0 || total_digit == undefined) {
	  			var show_num_class = '.elevator_pin_class .show_num_13';
	  			$(show_num_class).text(hotspot_text);
	  		}
	  		if(total_digit == 1) {
	  			var show_num_class = '.show_num_14';
	  			$(show_num_class).text(hotspot_text);
	  		}
	  		if(total_digit == 2) {
	  			var show_num_class = '.show_num_15';
	  			$(show_num_class).text(hotspot_text);
	  		}
	  		if(total_digit == 3) {
	  			var show_num_class = '.show_num_16';
	  			$(show_num_class).text(hotspot_text);
	  		}
	  		if(total_digit == 4) {
	  			$(".elevator_pin_class .show_num_13").text($(".show_num_14").text());
	  			$(".elevator_pin_class .show_num_14").text($(".show_num_15").text());
	  			$(".elevator_pin_class .show_num_15").text($(".show_num_16").text());
	  			var show_num_class = '.elevator_pin_class .show_num_16';
	  			$(show_num_class).text(hotspot_text);
	  		}
  		}
  	}
  	if(hotspot_text == 11) {
  		var current_val = $(".elevator_pin_class .show_pin_box").val();
		if(current_val == pin) {
			alert("Unlock");
		} else {
			alert("Sorry! Wrong pin.");
		}
  	}
  	if(hotspot_text == 12) {
		// cancle 
  		$(".elevator_pin_class .show_pin_box").val("");
			$(".elevator_pin_class .show_num_13").text("");
			$(".elevator_pin_class .show_num_14").text("");
			$(".elevator_pin_class .show_num_15").text("");
			$(".elevator_pin_class .show_num_16").text("");
  	}
  });
  $('body').on('change', '.elevator_pin_class .show_pin_box', function() {
      var new_value = $(this).val();
      if(new_value.length == 4) {
          console.log("test");
      }
  });
});
