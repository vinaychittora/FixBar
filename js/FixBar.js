		var CONFIG = {};
		CONFIG.MAX_ITEMS = 10;
		
		var local_items = 0;
		var item_index = 0;
		jQuery(function( $ ){
			$('#addItems').live("click",function(){
					if (local_items < CONFIG.MAX_ITEMS){
						$('ul#site-bottom-bar-items').append("<li id='site-bottom-bar-item-"+item_index+"'><img src='images/sw"+Math.ceil(Math.random()*17)+".png' width='55px' height='55px' title=' Some Random Description "+ Math.random() +"' /></li>");
						$('p#remove-items-links').append('<button class="removeFromItemList" id="remove-'+item_index+'">Remove Item No - '+item_index+'</button>');
						local_items++;item_index++;
					}else {
						alert ("Hey Stop you bugger, You can't add More then #10 items");	
					}
				});
			
			$(".removeFromItemList").live("click", function(){
					itemNo = $(this).attr("id").split('-')[1];
					$("li#site-bottom-bar-item-"+itemNo).remove();
					$(this).remove();
					local_items = local_items - 1;
				});
		});
