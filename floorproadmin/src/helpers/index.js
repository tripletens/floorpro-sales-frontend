export function ucwords(word) {
	let str = word.toLowerCase();
	var words = str.split(' ');
	str = '';
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		word = word.charAt(0).toUpperCase() + word.slice(1);
		if (i > 0) { str = str + ' '; }
		str = str + word;
	}
    return str;
}

export const currency_formatter = () => {
	// usage currency_formater.format(data);
  return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
  });
}

export const get_greetings = () => {
	var date = new Date();
	var hour = date.getHours();
	var greeting = "";
	if (hour >= 0 && hour < 12) {
	  greeting = "Good Morning";
	} else if (hour >= 12 && hour < 18) {
	  greeting = "Good Afternoon";
	} else if (hour >= 18 && hour < 24) {
	  greeting = "Good Evening";
	}
	return greeting;
  };
  
  export const get_day = () => {
	var date = new Date();
	var day = date.getDay();
	var day_name = "";
	switch (day) {
	  case 0:
		day_name = "Sunday";
		break;
	  case 1:
		day_name = "Monday";
		break;
	  case 2:
		day_name = "Tuesday";
		break;
	  case 3:
		day_name = "Wednesday";
		break;
	  case 4:
		day_name = "Thursday";
		break;
	  case 5:
		day_name = "Friday";
		break;
	  case 6:
		day_name = "Saturday";
		break;
	  default:
		day_name = "";
	}
	return day_name;
  };
  
  export const get_current_full_date = () => {
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	return day + "/" + month + "/" + year;
  };
  
  export const format_calendar_date = (date) => {
	  var date = new Date(date);
	  var day = date.getDate();
	  var month = date.getMonth() + 1;
	  var year = date.getFullYear();
	  return year + "-" + month + "-" + day;
  };
  
  export const get_current_time_extra = () => {
	var format = "";
	var ndate = new Date();
	var hr = ndate.getHours();
	var h = hr % 12;
	var greet = "";
  
	if (hr < 12) {
	  greet = "Good Morning";
	  format = "AM";
	} else if (hr >= 12 && hr <= 17) {
	  greet = "Good Afternoon";
	  format = "PM";
	} else if (hr >= 17 && hr <= 24) greet = "Good Evening";
  
	var m = ndate.getMinutes().toString();
	var s = ndate.getSeconds().toString();
  
	if (h < 12) {
	  h = "0" + h;
	  // $("h3.day-message").html(greet);
	} else if (h < 18) {
	  // $("h3.day-message").html(greet);
	} else {
	  // $("h3.day-message").html(greet);
	}
  
	if (s < 10) {
	  s = "0" + s;
	}
  
	if (m < 10) {
	  m = "0" + m;
	}
  
	return h + ":" + m + " " + format;
	// $(".date").html(h + ":" + m + ":" + s + format);
  };
  
  export const get_current_day_and_time = (data) => {
	var date = new Date(data);
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var ampm = hour >= 12 ? "PM" : "AM";
	hour = hour % 12;
	hour = hour ? hour : 12;
	minute = minute < 10 ? "0" + minute : minute;
	var strTime = hour + ":" + minute + ampm;
	return day + "-" + month + "-" + year + " " + strTime;
  };

  export const formatDate = (date) => {
	const d = new Date(date);
	const options = { month: "short", year: "numeric", day: "numeric" };
	let formatted_date = d.toLocaleDateString("en", options);
	return formatted_date;
  };
  
  export const capitalizeWord = (str) => {
	const lower = str.toLowerCase();
	return str.charAt(0).toUpperCase() + lower.slice(1);
  };
  