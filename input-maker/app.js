$(function(){

  //Controlling the addition and deletion new input fields
  let inputCounter = 1;
  let inputName = 'Input name';
  $(document).on('click', '#plus-input-button',function () {
      if(inputCounter < 5){
          inputCounter++;
          $('#input-container').append(`
                     <div class='form-group'>
                          <label>${inputName}</label>
                                <input type='text'
                                       class='form-control'
                                       name='videos[${inputCounter - 1}]'>
                     </div>
          `);
          if($('#minus-input-button').parent().length === 0){
              $('#modifiers-container').append(`
              <div class="form-group" id="minus-button-container">
                 <i id="minus-input-button" class="fas fa-minus-circle text-danger fa-lg"></i>
              </div>
          `)
          }
      }
      if(inputCounter === 5){
          $('#plus-input-button').remove()
      }
  });

  $(document).on('click', '#minus-input-button',  function () {
      if(inputCounter > 1) {
          inputCounter--
          $('#input-container').children().last().remove();
          if($('#plus-input-button').parent().length === 0){
              $('#modifiers-container').prepend(`
              <div class="form-group" id="plus-button-container">
                 <i id="plus-input-button" class="fas fa-plus-circle text-success fa-lg mr-3"></i>
              </div>
          `)
          }
      }
      if(inputCounter === 1){
          $('#minus-input-button').remove()
      }
  })
})