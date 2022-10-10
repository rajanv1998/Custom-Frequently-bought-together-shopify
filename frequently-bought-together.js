function update_array(){
  var custom_arr1 = [];
$('.frequently-product-add').each(function(){
var value_variant = $(this).attr('sel-val');
    custom_arr1.push(value_variant);
})
  Shopify.new_arr = custom_arr1;
$('.hide_v').val(custom_arr1);
}
$('.frequently-checkbox input').change(function(){
var current_checkbox = $(this).attr('data-dval');
  if ($(this).prop('checked')) {
  
    $(this).parents('.frequentyly-text-price').children('.frequently-price-title ').addClass('frequently-product-add ');
      $(`.frequently-bought-images .${current_checkbox}`).css('display','block');
    update_array()
  }
   else {
$(this).parents('.frequentyly-text-price').children('.frequently-price-title ').removeClass('frequently-product-add ');
       console.log(current_checkbox);
       $(`.frequently-bought-images .${current_checkbox}`).addClass('aaa');
      $(`.frequently-bought-images .${current_checkbox}`).css('display','none');
       update_array()
   }
 
})

$(document).ready(function(){
  setTimeout(function(){

    update_array()
  },1000)
 
  //  $(".selector-for-featured-product").each(function(){
  //   var valu = $(this).children('option:selected').val();
  //   alert(valu);
  // });
  $('.selector-for-featured-product').each(function(){

    var option = $(this).children('option:selected').val();
   $(this).parent('.frequently-price-title').attr('sel-val',option);
    arrr.push(option);
})
});

var arrr = new Array();
console.log(arrr);

$(document).on('change','#product-select' ,function(){
      var val = $(this).find('option:selected').val();
   $(this).parent('.frequently-price-title').attr('sel-val',val);
update_array()
})

$(".custom-add-to-cart").click(function(){

 function addItem(variantId, quantity) {
        var data = {
          "id": variantId,
          "quantity": 1
        }
      
      
       jQuery.ajax({
          type: 'POST',
          url: '/cart/add.js',
          data: data,
          dataType: 'json',
          async: false,
          success: function(data) { 
            console.log(data);
            window.location.replace("/cart");

          }
         
       });
      
    }

 var productIds = [Shopify.new_arr]
     
     var productsCount = productIds.length;
     
     for (let i = 0; i < productsCount ; i++ ){
    
      addItem(productIds[i], 1);
     } 
   
});     
