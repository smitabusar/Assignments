

function makeContactRowClickable() {
  $(".table > tbody > tr").click(function() {
    var newUrl = window.location.href;
    if(newUrl.charAt(newUrl.length) != "/") {
      newUrl = newUrl + "/";
    }
    newUrl = newUrl + $(this).data("contact-guid");
    window.location.href = newUrl;
  });
}

function addNewContact(){
	$("#buttonAdd").on("click",function(){
		var newUrl = window.location.href.replace("contacts","addContact");
		//alert(newUrl);
    window.location.href = newUrl;
	});
}

function showEmail() {
  $(".table > tbody > tr").mouseenter(function() {
    //alert($(this).find(".hidden").html());
    $(this).find(".hidden").addClass("visible");
    $(this).find(".hidden").removeClass("hidden");
  });
  $(".table > tbody > tr").mouseleave(function() {
    //alert($(this).find(".hidden").html());
    $(this).find(".visible").addClass("hidden");
    $(this).find(".visible").removeClass("visible");
  });
}