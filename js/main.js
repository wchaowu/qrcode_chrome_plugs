
;!(function (){
	var $input = document.getElementById("input");
	var $btn = document.getElementById("btn");
	var $about = document.getElementById("about");
	var qrcode;

	var options = {
		text: "",
		width: 160,
		height: 160,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H
	}

	chrome.tabs.getSelected(null, function(tab) {
		options.text = tab.url;

		$input.value = options.text;
		qrcode = new QRCode("qrcode", options);
		$input.select();
	});
	document.onkeydown=function(){
	 if(event.keyCode==13)   
	 {   
		qrcode.clear();
		qrcode.makeCode($input.value);
	 } 
	}
	$btn.onclick = function(){
		qrcode.clear();
		qrcode.makeCode($input.value);
	}
	$about.onclick=function (){
		window.open("https://github.com/wchaowu/qrcode_chrome_plugs");
	}	
})();


