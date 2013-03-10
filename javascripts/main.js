// doc toc
$('.toc li:first-child').click(function(e) {
  e.stopPropagation();
  $('.toc li:not(:first-child)').toggle();
});

$(document).click(function() {
  $('.toc li:not(:first-child)').hide();
});

// screenshots
$("section.screenshots a").fancybox({
    openEffect  : 'none',
    closeEffect : 'none'
  });
