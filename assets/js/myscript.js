let url = window.location.pathname;
let file_name =  url.substring(url.lastIndexOf('/')+1);
let dynamic_tag = file_name.split(".", 1);
dynamic_tag = dynamic_tag.toString();

if(dynamic_tag == "index")
{
  document.title = "Ciyaarsame";
}else {
  document.title = dynamic_tag;
}

document.getElementById("page_header").innerHTML = "=dsafasd";
