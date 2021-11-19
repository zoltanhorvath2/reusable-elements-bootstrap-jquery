$(function(){

  $(document).on('click', '.nav-item', function(){

    //Showing selected tabs on edit location
    if($(".nav-item .nav-link").attr('id') === 'menu1'){
        console.log(1);
        $('#menu1').tab('show');
    }else if($(".nav-item .nav-link").attr('id') === 'menu2'){
        console.log(2);
        $('#menu2').tab('show');
    }else if($(".nav-item .nav-link").attr('id') === 'menu3'){
        console.log(3);
        $('#menu3').tab('show');
    }else{
        console.log(4);
        $('#menu4').tab('show');
    }

  })

 
})