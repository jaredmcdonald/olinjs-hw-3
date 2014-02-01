$(document).ready(function(){
    $('.complete').on('click', function completeOrder(e) {
        var $this = $(this),
            data = { order: $this.attr('data-orderid')};
            
            console.log(data);
        $.post('/order/remove', data).success(function(){
            $this.parent('.order').fadeOut().remove();            
        });
    });
});