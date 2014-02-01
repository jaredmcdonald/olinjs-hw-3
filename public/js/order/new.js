$(document).ready(function(){
    var map = [].map;
    $('#newOrder').on('submit', function submitForm(e){
        e.preventDefault();
        var $this = $(this),
            ingredients = map.call($this.find('#ingredients input:checked'), function (i){
                return i.name;
            }),
            data = {
                name: $this.find('#customerName').val(),
                ingredients: ingredients
            };
            console.log(data);
        $.post($this.attr('action'), data);
    });
});