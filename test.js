

/*
var TestArray =[1,2,3,4,5];
console.log("The Array:");

for (var i = 0; i < TestArray.length; i++) {
		console.log(TestArray[i]);
	if (i==TestArray.length-1) {
		var LastNum = TestArray.pop();
	   // console.log("The last numbue is " + LastNum);
		LastNum++;
		TestArray.push(LastNum);
     }		

 }	

console.log("The New Array:");

for ( i = 0; i < TestArray.length; i++) {
            	console.log(TestArray[i]); 
}

*/


var TestString = "suNdaRa rAo"
//"ryUGa hElLsINg";
var s ="";
var subString="";
var flag = 0;
console.log("String: "+TestString);

for (var i = 0; i < TestString.length; i++) {
	if (i==0) {
		s = TestString.charAt(i).toUpperCase();
    //	console.log(s);
	}else if (TestString.charAt(i) == " ") {
		s += TestString.charAt(i);
		subString = TestString.substring(i+1).toUpperCase();
		s += subString;
		flag = 1;
		//console.log("Spliced String:" + subString);
	}else if (TestString.charAt(i) != " " && flag == 0) {

    	s += TestString.charAt(i).toLowerCase();

	}
}

console.log("Formatted String: "+s);


var bio = {
	"name" : "Ryuga",
    "role" : "Professional time-waster",
    "contact_info" : "kkdarkgamer46@gmail.com",
     "pic_url" : "<img id='myPic' src='http://vignette2.wikia.nocookie.net/hellsing/images/1/1f/Alucardanddcasull.png/revision/latest?cb=20160520050746'>",
     "message" : "Welcome, you're am idiot"
};
    $("#main").append(bio.pic_url);
	$("#main").append("<br />"+bio.name);
    $("#main").append("<br />"+ bio.role);
   	$("#main").append("<br />"+ bio.contact_info);

   	