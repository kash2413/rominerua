//START Header Scroll Down
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
				if (scroll >= 800) {
            $(".lvd-header").addClass('lvd-header-small');
            $(".lvd-header-full").addClass('lvd-header-full-small');
						$(".lvd-logo-link").addClass('lvd-logo-link-small');
						$(".lvd-menu").addClass('lvd-menu-small');
            $(".lvd-space-replace").addClass('lvd-space-replace-show');


        } else {
            $(".lvd-header").removeClass('lvd-header-small');
            $(".lvd-header-full").removeClass('lvd-header-full-small');
						$(".lvd-logo-link").removeClass('lvd-logo-link-small');
						$(".lvd-menu").removeClass('lvd-menu-small');
            $(".lvd-space-replace").removeClass('lvd-space-replace-show');
        }
    });
});
//END Header Scroll Down\

//search
var showSearch=true;
$(document).ready(function()
  {
  $(".close-search").bind("click",function() { searchShowHide(); });

  });
function searchShowHide()
  {
  if(showSearch)
    {
    $(".dropdown_search_full").show(50);
    showSearch=false;
    }
  else{
    $(".dropdown_search_full").hide(50);
    showSearch=true;
    }
  }
