$(function(){

  $('#menu1').tab('show');

  $(document).on('click', '.nav-item .nav-link', function(){

    switch($(this).attr('id')){
      case 'menu4' : $('#menu4').tab('show');
      break;
      case 'menu2' : $('#menu2').tab('show');
      break;
      case 'menu3' : $('#menu3').tab('show');
      break;
      default: $('#menu1').tab('show');
      break;
    }

  })

 
})