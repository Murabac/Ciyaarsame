let url = window.location.pathname;
let file_name =  url.substring(url.lastIndexOf('/')+1);
let dynamic_tag = file_name.split(".", 1);
dynamic_tag = dynamic_tag.toString();

if(dynamic_tag == "index")
{
  document.title = "Ciyaarsame";
  dynamic_tag = "Ciyaarsame";
}else {
  document.title = dynamic_tag;
}
function var1() {
document.getElementById("page_header").text = dynamic_tag;
}

window.onload = var1;
