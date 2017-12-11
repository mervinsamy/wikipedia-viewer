$(document).ready(function(){

$('#search_button').click(function(){
  $("#result").html("");
  var searchvar = document.getElementById("search_field").value;
  
  if (searchvar != ""){
  $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + searchvar +
          '&format=json&origin=*', function(data) {
  
  var pagedata = data['query']['pages'];
  for (var key in pagedata) {
    var item = pagedata[key];
    
    if (item.thumbnail != 'undefined' && item.thumbnail != null){
        console.log(item.thumbnail);
        var imgThumbnail = " <img src=" + item.thumbnail.source 
        + " height=" + item.thumbnail.height + 
          " weight=" + item.thumbnail.weight + ">"
    }
    else {
        var imgThumbnail = "";
    }

    $("#result").append(
 "<div class='page'>" + imgThumbnail + 
 "<a target='_blank' href=https://en.wikipedia.org/?curid=" +
                        item.pageid + ">" +
                        item.title  + "</a><br/>" +
                        "<p>" + item.extract + "</p>" 
                        + "</div>"
                       );
    
  }

});
  
 

}
});
 

 $("#search_field").on('keypress',function(e){
   if(e.which === 13){
      $("#search_button").click();
     }
    
});

});