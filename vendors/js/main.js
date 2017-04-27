$(function () {
    'use strict';

    var loremText, lorem1, lorem2, lorem3;
   		 	loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia sapien vitae tortor varius congue. Aliquam luctus fringilla aliquam. Aenean euismod ex vel metus ultricies, at finibus eros volutpat. Nullam turpis est, convallis non dolor quis, fringilla dictum justo. Pellentesque sagittis mollis sagittis. Etiam sagittis tempus lectus hendrerit dapibus. Aliquam quis aliquam augue.");
   			lorem1 =  '<h1>Title 1</h1>' + loremText;
    		lorem2 =  '<h1>Title 2</h1>' + loremText ;
    		lorem3 =  '<h1>Title 3</h1>' + loremText;
$('.lorem-text-1').html(lorem);
$('.lorem-text-2').html(lorem);
$('.lorem-text-3').html(lorem);