var mclick = 'click',mtouchstart = 'mousedown',mtouchend = 'mouseup',mtouchmove = 'mousemove';
if (window.ontouchstart !== undefined) {
	mclick = 'click';mtouchstart = 'touchstart';mtouchend = 'touchend';mtouchmove = 'touchmove';
}
/**Global Function**/
function getSessionExpiredUrl()
{
	$(window).unbind('beforeunload');
	alert(translate('page.sessionTimeout')); 
	window.close();
	return null;
}

function wp_heightAdapt(dom,oldHeight){}


function is_website_mobile(){
	var type=getWebSiteType();
	return type=='mobile';
}

function layer_img_lzld(layerid){
	var imgcontainer=$('#scroll_container');
	var ismobile=is_website_mobile();
	if(!ismobile){
		var chromebug=$('#scroll_container').data('chrome_bug');
		if(chromebug){
			imgcontainer=window;
		}
	}else imgcontainer=window;
	$('#'+layerid+'  img.img_lazy_load').lazyload({
		     threshold  : 200,
			failure_limit : $('#'+layerid+'  img.img_lazy_load').length,
			container : imgcontainer,	
			placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
			load:function(){
			 var self=$(this);
			 var id=self.closest('.cstlayer').prop('id');
			if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
		 }
	});
}

function initScrollcontainerHeight(){
	var container=$('#scroll_container');
	var cvhgt = window.innerHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	container.height(cvhgt);
	$('#scroll_container_bg').css('height',cvhgt);
}

function noRightClick(){
	//禁用鼠标右键  CTRL+C 复制   CTRL+V  粘贴   CTRL+S 保存
	$(function(){
		document.body.oncontextmenu=function(){return false;}
		$(document).keydown(function(event) {
					if ((event.ctrlKey&&event.which==67) || (event.ctrlKey&&event.which==86)) {
							return false;
					}        
			})
			$(document).keydown(function(event) {
					if ((event.ctrlKey&&event.which==67) || (event.ctrlKey&&event.which==86) || (event.ctrlKey&&event.which==83)) {
							return false;
					}        
			})
	})
}

function doc_end_exec(){
	$(function(){
		$(document).triggerHandler('lastexec');
	})
	$('#scroll_container').css("visibility", 'visible');
	$('.mloading-mask').remove();
	$(window).load(function(){
		var heightadaptel=$("#canvas").find(".cstlayer[type='article_detail'],.cstlayer[type='product_detail'],.cstlayer[type='wzl'],.cstlayer[type='fxdp'],.cstlayer[type='mcoupon'],.cstlayer[type='coupon'],.cstlayer[type='tb_product_detail'],.cstlayer[type='tb_product_list'],.cstlayer[type='product_list'],.cstlayer[type='wkj'],.cstlayer[type='crowdfunding'],.cstlayer[type='btag'],.cstlayer[type='greetingcard'],.cstlayer[type='weiredpack'],.cstlayer[type='mseckill_detail'],.cstlayer[type='mgroupon_detail'],.cstlayer[type='mgroupons_detail'],.cstlayer[type='groupon_detail'],.cstlayer[type='jfpro_detail'],.cstlayer[type='mjfpro_detail'],.cstlayer[type='payknow_detail'],.cstlayer[type='mpayknow_detail']");
		if(heightadaptel.length){
			heightadaptel.each(function(){
				if($(this).data('not_need_heightadapt')) return;
				wp_heightAdapt($(this));
			})
			window.scroll_container_adjust();
		}
	});
	
	var imgcontainer=$('#scroll_container');
	var ismobile=is_website_mobile();
	if(!ismobile){
		var chromebug=$('#scroll_container').data('chrome_bug');
		if(chromebug){
			imgcontainer=window;
		}
	}else imgcontainer=window;
	$('img.img_lazy_load').lazyload({
		     threshold  : 200,
			failure_limit : $('img.img_lazy_load').length,
			container : imgcontainer,	
			placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
			load:function(){
			 var self=$(this);
			 var id=self.closest('.cstlayer').prop('id');
			if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
		 }
	});
	
	$(window).load(function(){
		$('.cstlayer').showEffects();
	})
}

function wpfullcolumn_float(unbindFunc){
    var wp_ibody = $('#scroll_container'),wp_icontent = $('#canvas'),wp_icontent_foot = $('#site_footer #footer_content');
    $('.full_column,.cstlayer').filter('[infixed=1]').each(function(){
        var fc_lid = '#'+$(this).attr('id');
        var $fc_lid = $(this);
        var wp_layer_abs = $('#canvas '+fc_lid),wp_layer_abs_footer = $('#site_footer #footer_content '+fc_lid),wp_layer_fix= $('#scroll_container '+fc_lid);
        var currpoor = ($('.full_width').width() - $('.full_content').width())/2;
        var isinfixed = $fc_lid.attr('infixed');
		
		var infixed_html = $(document).data(fc_lid+'infixed_content');
		if(!infixed_html){		 
			infixed_html =$fc_lid.html(); $(document).data(fc_lid+'infixed_content',infixed_html);
		}
        var fullc_wid_bgcolor = $(document).data(fc_lid+'fullc_wid_bgcolor');
		if(!fullc_wid_bgcolor){		 
			fullc_wid_bgcolor =$fc_lid.find('.full_width').css('background-color'); $(document).data(fc_lid+'fullc_wid_bgcolor',fullc_wid_bgcolor);
		}
        var fullc_con_bgcolor = $(document).data(fc_lid+'fullc_con_bgcolor');
		if(!fullc_con_bgcolor){		 
			fullc_con_bgcolor =$fc_lid.find('.full_content').css('background-color'); $(document).data(fc_lid+'fullc_con_bgcolor',fullc_con_bgcolor);
		}
        var fullc_hoverbgcolor = $(document).data(fc_lid+'fullc_hoverbgcolor');
		if(!fullc_hoverbgcolor){		 
			fullc_hoverbgcolor =$fc_lid.attr('zindextopcolor'); $(document).data(fc_lid+'fullc_hoverbgcolor',fullc_hoverbgcolor);
		}
        var fullc_hoverbgcolorSet = $(document).data(fc_lid+'fullc_hoverbgcolorSet');
		if(!fullc_hoverbgcolorSet){		 
			fullc_hoverbgcolorSet =$fc_lid.attr('infixed');
			var zindextopcolorset =$fc_lid.attr('zindextopcolorset');
            if(!zindextopcolorset)fullc_hoverbgcolorSet=''
            $(document).data(fc_lid+'fullc_hoverbgcolorSet',fullc_hoverbgcolorSet);
		}
        
		
        if(isinfixed==1) {
            var nPos = $('#scroll_container').scrollTop() ;
		  var container=$('#scroll_container');
		  var is_mobile_preview=false;
		  if(is_website_mobile()){
				nPos = $(window).scrollTop() ;
			}
		if($('.wp-mobile-device-premask').length){
			is_mobile_preview=true;
		}
            //oPos get第一次正确的值,以后不再获得
            var oPos_tmp = $(document).data("fixed_"+$(this).attr('id')+"_oPos");
		  var inbuttom=$(document).data("fixed_"+$(this).attr('id')+"_inbuttom");
            if(!oPos_tmp){
                oPos_tmp =  $fc_lid.ab_pos_cnter('top');
                $(document).data("fixed_"+$(this).attr('id')+"_oPos",oPos_tmp);
            }
		if(inbuttom==null){
                inbuttom =  $fc_lid.attr('inbuttom');
                $(document).data("fixed_"+$(this).attr('id')+"_inbuttom",inbuttom);
            }
            var oPos = $(document).data("fixed_"+$(this).attr('id')+"_oPos");
            if(oPos==0 && $fc_lid.parent().is('#canvas')) return;
            if(oPos==0){
				var oldsty = $fc_lid.attr('oldstyle')||'';
				if(oldsty.match(/top:\d+px/)){
					var oldtop = oldsty.match(/top:\d+px/);
					oldtop = oldtop[0].match(/\d+/);
					oPos = oldtop[0];
				}
			}
            if(inbuttom>0){
                //存在页脚中
                if(nPos > oPos){
                    var newleft = $('.full_column').ab_pos('left') + currpoor ;
				if(wp_layer_abs_footer.is('.cstlayer')){
					newleft =wp_layer_abs_footer.offset().left+$(container).scrollLeft();
					if(is_mobile_preview){
						newleft =wp_layer_abs_footer .ab_pos_cnter('left');
					}
				}
                    if(wp_layer_abs_footer.length>0){
                        var oldstyle = wp_layer_abs_footer.attr('style');
                        wp_layer_fix = wp_layer_abs_footer.clone(true).appendTo(container)
                        .attr('oldstyle',oldstyle).attr('inbuttom','1')
                        .attr('fc_fh_istop','1')
                        .addClass('full_column-fixed');
				if(wp_layer_abs_footer.attr('fatherid')) wp_layer_fix.attr('fatherid',wp_layer_abs.attr('fatherid'));
                    wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'});
				if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
				}
                    wp_layer_abs_footer.remove();
                    }else{
					if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
					}							
				}
                  if(fullc_hoverbgcolorSet){
                    wp_layer_fix.find('.full_width').css({'background-color':fullc_hoverbgcolor,'transition':'1.2s'})
                    wp_layer_fix.find('.full_content').css({'background-color':'','transition':'1.2s'})
                  }
                }else{
                    oldstyle = wp_layer_fix.attr('oldstyle');
                    if(wp_layer_abs_footer.length==0){
					wp_icontent_foot=$('#site_footer #footer_content');
					if(wp_layer_fix.attr('fatherid')){
						wp_icontent_foot=$('#'+wp_layer_fix.attr('fatherid'));
					}
                        wp_layer_abs_footer = wp_layer_fix.clone(true).appendTo(wp_icontent_foot)
                        .attr('fc_fh_istop','')
                        .attr('style',oldstyle).attr('inbuttom','1').removeClass('full_column-fixed');
					if(wp_layer_fix.attr('fatherid')){
						wp_layer_abs_footer.attr('fatherid',wp_layer_fix.attr('fatherid'));
					}
                        wp_layer_abs_footer.show();wp_layer_fix.remove();
                    }
                  if(fullc_hoverbgcolorSet){
                    wp_layer_fix.find('.full_width').css('background-color',fullc_wid_bgcolor)
                    wp_layer_fix.find('.full_content').css('background-color',fullc_con_bgcolor)
                  }
                }
            }else{
              
                if(nPos > oPos){
                    var newleft = Math.abs(parseFloat($('.full_column').find('.full_width').css('left')));
				if(wp_layer_abs.is('.cstlayer')){
					newleft =wp_layer_abs.offset().left+$(container).scrollLeft();
					if(is_mobile_preview){
						newleft =wp_layer_abs.ab_pos_cnter('left');
					}
				}
				var fatherid=$.getElementFatherid(wp_layer_abs);
				$(document).data("fixed_"+wp_layer_abs.attr('id')+"_father",$('#'+fatherid));
                    //clone(true) has true 可以存储data
                    if(wp_layer_abs.length>0){
                        var oldstyle = wp_layer_abs.attr('style');
                        var func=function(){ //未加载完拖拽滚动条为空异常处理
                            var success=true;
                            var newleft = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!(newleft)){success=false;}
                            if(success){
                                $(fc_lid).css('left',newleft);
                            }else {
                                setTimeout(func,100);
                            }
                         }
                         func();
                        var layerdiv=$("<div/>").attr({
                                'id':wp_layer_abs.attr('id'),'class':wp_layer_abs.attr('class'),'infixed':1,'style':wp_layer_abs.attr('style'),'zindextopcolor':wp_layer_abs.attr('zindextopcolor'),'zindextopcolorset':wp_layer_abs.attr('zindextopcolorset')});
						if(wp_layer_abs.attr('fatherid')) layerdiv.attr('fatherid',wp_layer_abs.attr('fatherid'));
							container.append(layerdiv);
							wp_layer_abs.remove();
							var wp_layer_fix =$(fc_lid).html(infixed_html)
							.attr('oldstyle',oldstyle)
							.attr('fc_fh_istop',1)
							.addClass('full_column-fixed');
							wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'});
						if(is_mobile_preview){
								wp_layer_fix.css({top:nPos+'px'});
						}
                    if(fullc_hoverbgcolorSet){
                        wp_layer_fix.find('.full_width').css({'background-color':fullc_hoverbgcolor,'transition':'1.2s'})
                        wp_layer_fix.find('.full_content').css({'background-color':"",'transition':'1.2s'})
//                        wp_layer_fix.css({'transition':'0.5s'})
                    }
                        ////fix时 full_width宽为空异常处理
                        var funco=function(){
                            var full_width_val = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!full_width_val){
                                $(fc_lid).children('.full_width').css({left:0-$('#canvas').offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
                                if(!(Math.abs(parseFloat($(fc_lid).find('.full_width').css('left'))))){
                                    setTimeout(funco,100);
                                }
                            }
                        }
                        funco();
						var imgcontainer=$('#scroll_container');
						var ismobile=is_website_mobile();
						if(!ismobile){
							var chromebug=$('#scroll_container').data('chrome_bug');
							if(chromebug){
								imgcontainer=window;
							}
						}else imgcontainer=window;
                        $('.full_content img.img_lazy_load').lazyload({
                           threshold  : 200,
                        	  failure_limit : $('img.img_lazy_load').length,
                        	  container : imgcontainer,	
                        	  placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
                        	  load:function(){
                        		 var self=$(this);
                        		 var id=self.closest('.cstlayer').prop('id');
                        		if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
                        	 }
                        });	
                    }else{
						if(is_mobile_preview){
							wp_layer_fix.css({top:nPos+'px'});
						}						
						if(oPos==0 && $.isFunction(unbindFunc)) unbindFunc();
					}
                }else{
                    if( wp_layer_fix.data('always_fix')){
						if(is_mobile_preview){
							wp_layer_fix.css({top:nPos+'px'});
					    }	
						return;
					}
                    oldstyle = wp_layer_fix.attr('oldstyle');
                    if(!wp_layer_abs.length>0){
                        var layerdiv=$("<div/>").attr({
                                'id':wp_layer_fix.attr('id'),'class':wp_layer_fix.attr('class'),'infixed':1,'style':wp_layer_fix.attr('oldstyle'),'zindextopcolor':wp_layer_fix.attr('zindextopcolor'),'zindextopcolorset':wp_layer_fix.attr('zindextopcolorset')});
				    if(wp_layer_fix.attr('fatherid')) layerdiv.attr('fatherid',wp_layer_fix.attr('fatherid'));
				    wp_icontent = $(document).data("fixed_"+wp_layer_fix.attr('id')+"_father");
				    if(!wp_icontent.length) wp_icontent=$('#canvas');
                        wp_icontent.append(layerdiv);
                        wp_layer_fix.remove();
                        wp_layer_abs =$(fc_lid).html(infixed_html)
                        .attr('oldstyle',oldstyle)
                        .attr('fc_fh_istop','')
                        .removeClass('full_column-fixed');
                        wp_layer_abs.show();
                        //
                        if(fullc_hoverbgcolorSet){
                            wp_layer_fix.find('.full_width').css('background-color',fullc_wid_bgcolor)
                            wp_layer_fix.find('.full_content').css('background-color',fullc_con_bgcolor)
                        }
                        //为空异常处理
                        var funco=function(){
                            var full_width_val = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!(full_width_val)){
                                $(fc_lid).children('.full_width').css({left:0-$('#canvas').offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
                                if(!(Math.abs(parseFloat($(fc_lid).find('.full_width').css('left'))))){
                                    setTimeout(funco,100);
                                }
                            }
                        }
                        funco();
				    var imgcontainer=$('#scroll_container');
					var ismobile=is_website_mobile();
					if(!ismobile){
						var chromebug=$('#scroll_container').data('chrome_bug');
						if(chromebug){
							imgcontainer=window;
						}
					}else imgcontainer=window;
                        $('.full_content img.img_lazy_load').lazyload({
                           threshold  : 200,
                        	  failure_limit : $('img.img_lazy_load').length,
                        	  container : imgcontainer,	
                        	  placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
                        	  load:function(){
                        		 var self=$(this);
                        		 var id=self.closest('.cstlayer').prop('id');
                        		if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
                        	 }
                        });	
                    }
                }
            }
        }
    });
}

function getTop(){//for ie6 css hack
  return document.documentElement.scrollTop;
}

function init_fullcolumn_bottomfixed_code(){
	var bottomel=$('.full_column,.cstlayer').filter('.full_column-bottomfixed');
	bottomel.each(function(){
			var self=$(this);
			var container=$('#scroll_container');
			var newleft=$('#canvas').offset().left;
			var ismobile=is_website_mobile();
			if(ismobile){
				setTimeout(function(){
					var newleft=$('#canvas').offset().left;
					self.css({'left':newleft+'px'})
				},500);
			}else if(self.attr('type')=='box'){
                var old_left = self.offset().left;
                newleft += old_left;
            }
			self.css({'position':'fixed','top':'',bottom:'0','left':newleft+'px','z-index':'999',visibility:'visible'});
	})
	$(function(){
			var is_mobile_preview=false;
			if($('.wp-mobile-device-placeholder').length){
				is_mobile_preview=true;
			}
			if(is_mobile_preview){
				setInterval(function(){
					var oritop=$('#scroll_container').scrollTop();
					bottomel.css('bottom',(0-oritop)+'px');
				},60)
			}
	})
}

function init_fullcolumn_fixed_code(){
	$(function(){
			setTimeout(function(){
					$('.full_column,.cstlayer').filter('[infixed=1]').each(function(){
					var self=$(this);
					 var container=$('#scroll_container');
					 var is_mobile_preview=false;
					 if($('.wp-mobile-device-premask').length){
						is_mobile_preview=true;
					}
					if(self.parent().is('#canvas')&&parseInt(self.css('top'))==0){
					var currpoor = ($('.full_width').width() - $('.full_content').width())/2;
					var newleft = self.ab_pos('left') + currpoor ;
					if(self.is('.cstlayer')){
						newleft =self.offset().left+$('#scroll_container').scrollLeft();
						if(is_mobile_preview){
							newleft =self.ab_pos_cnter('left');
						}
					}
					var wp_layer_abs=self;
					var layerid=wp_layer_abs.attr('id');
					 var oldstyle = wp_layer_abs.attr('style');
					var layerhtml=wp_layer_abs.html();
					var layerdiv=$("<div/>").attr({
						id:wp_layer_abs.attr('id'),
						'class':wp_layer_abs.attr('class'),
						infixed:1,
						'zindextopcolor':wp_layer_abs.attr('zindextopcolor'),
						style:wp_layer_abs.attr('style'),
					});
					wp_layer_abs.remove();
					container.append(layerdiv);
					var wp_layer_fix =$('#'+layerid).html(layerhtml)
					.attr('oldstyle',oldstyle)
					.addClass('full_column-fixed');
					wp_layer_fix.data('always_fix',true);
					wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'})
					if($.browser.msie && ($.browser.version < 9)){
						wp_layer_fix.css({'top':'0px'});
						wp_layer_fix.find('.full_width').css({'top':'0px'});
					}
					var ismobile=is_website_mobile();
					var imgcontainer=window;
					if(!ismobile) imgcontainer=$('#scroll_container').add(window);
					wp_layer_fix.find('img.img_lazy_load').lazyload({
							threshold  : 200,
							failure_limit : wp_layer_fix.find('img.img_lazy_load').length,
							container : imgcontainer,
							placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
							load:function(){
								 var self=$(this);
								 var id=self.closest('.cstlayer').prop('id');
								if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
							 }
					});	
					// 固定通栏里显示动画
					wp_layer_fix.find('.cstlayer:not(.now_effecting)').showEffects();
									//explain:修复bug(2282多语言模块放置固定的通栏后异常),author:fpf,date:2015/03/30,action:add;
									var $multilingual = $(document).find('.wp-multilingual_content');
									if($multilingual.get(0) != 'undefined'){
											var $multilingual_content = $multilingual.find('.wp-content > .overz');
											if(parseInt($multilingual_content.length) > 1){
													$multilingual.find('.wp-content > .overz:last').remove();
											}
									}
									wp_layer_fix.find('.cstlayer[type=twitter]').each(function(){
										var code=$(this).data('wpcode');
										if(code){
											$(this).find('.wp-twitter_content').html(code);
										}
									})
									wp_layer_fix.find('.cstlayer[type=weibofollowbutton]').each(function(){
										var code=$(this).data('wpcode');
										$LAB.script('//tjs.sjs.sinajs.cn/open/api/js/wb.js');
										if(code){
											$(this).find('.wp-weibofollowbutton_content').html(code);
										}
									})
							}
					});
		// 修复“通栏设置‘固定显示’后导致‘鼠标滚轮’事件异常（bug#4230）”
		$(document).bind("mousewheel DomMouseScroll MozMousePixelScroll", function(e){
			e = e || window.event;			
			var $target = $(e.target).closest('.full_column[infixed="1"],.cstlayer[infixed="1"]');
			if ($target.length > 0) {
				var wheeldelta=e.wheelDelta;
				var detail=e.detail||e.originalEvent.detail;
				if(e.type=='mousewheel'){
					var wheeldelta=e.deltaY || e.originalEvent.deltaY;
					wheeldelta=(wheeldelta>0)?1:-1;
				}else{
					var wheeldelta=e.wheelDelta || e.originalEvent.wheelDelta;
					if(!wheeldelta) wheeldelta=detail;
				}
				var $win = $(window),$stainer = $('#scroll_container'),
				$scroll = $stainer.height() <= $win.height() ? $stainer : $win,
				movey = wheeldelta * -(Math.abs(detail) > 3 ? 1 : 40);
				$scroll.scrollTop($scroll.scrollTop() - movey);
				$win = $stainer = $scroll = movey = null;
			}
			$target = null;
		});
					//explain:修复flash模块在360安全浏览器极速模式下鼠标:hover后无法触发滚动效果，该事件在采用Webkit内核的浏览器下都会触发,author:fpf,date:2015-01-15,action:add;
					$('div.wp-flash_content').each(function(){
							$(this).unbind('mousewheel').bind('mousewheel',function(event){
									var scrolltop=$('#scroll_container').scrollTop();
									if(event.wheelDelta>0){
											$('#scroll_container').scrollTop(scrolltop-50);
									} else{
											$('#scroll_container').scrollTop(scrolltop+50);
									}
							});
					});

			},300);
	})
	
	if(is_website_mobile()){
		var need_unbind=false;
		$(window).scroll(function(e){
			var unbindfunc=function(){
				need_unbind=true;
			}
			wpfullcolumn_float(unbindfunc);
			if(need_unbind){
				$(window).unbind(e);
			}
		});
	}else{
		var need_unbind=false;
		$('#scroll_container').scroll(function(e){
			var unbindfunc=function(){
				need_unbind=true;
			}
			wpfullcolumn_float(unbindfunc);
			if(need_unbind){
				$('#scroll_container').unbind(e);
			}
		});
	}
}

function initCanvasHeight(){
	var maxheight=0;
	var helperfunc=function(dom){
		var degree=dom.data('deg')||dom.attr('deg');
		var pos=[parseInt(dom.css('left')),parseInt(dom.css('top'))]
		var w=dom.width();
		var h=dom.height();
		if(dom.hasClass('cstlayer')){
			var buttompos=$.divrotate.getDegreeModMaxPointOrigin(dom,degree,pos,[w,h],'buttom');
		}else{
			var buttompos=dom.ab_pos_cnter('top')+parseInt(dom.css('height'));
		}
		if(dom.data('wopop_effect_oristyle')) {
			var style=dom.data('wopop_effect_oristyle');
			var topregexp=/(?:^|;)\s*top\s*:\s*(-?\d+)(?:\.\d+)?px/;
			var topmatches=style.match(topregexp);
			if(topmatches){
				var oritop=parseInt(topmatches[1]);
				var nowt=parseInt(dom.css('top'))
				var domfatherid=$.getElementFatherid(dom);
				buttompos=buttompos-nowt+oritop;
				if(domfatherid && domfatherid!='canvas' && domfatherid!='site_footer' && $('#'+domfatherid).length){
					buttompos=oritop+dom.height()+$('#'+domfatherid).ab_pos('top');
				}
			  }
		  }
		  return buttompos;
	}
	var filterfunc=function(){
		return $(this).is(":not(div[deleted='deleted'])") && $(this).attr('childdel') != 'del';
	}
	$('#canvas  .cstlayer,#canvas  .full_column').filter(filterfunc).each(function(){
		var canvheight=helperfunc($(this));
		if(canvheight>maxheight) maxheight=canvheight;
	})
	$("#canvas").data('layermaxheight',maxheight);
	//#5460
	setTimeout(function(){
		$('#site_footer').find('.cstlayer').each(function(){
			var sitetop = parseInt($('#site_footer').css('top'));
			var thistop = parseInt($(this).css('top'))
			if(thistop<0&&sitetop<-thistop) {$(this).css('top',-sitetop);}
		})
	},100)
}

function fullcolumn_HoverInit(params){
    if(!params.full_con.bg)params.full_con.bg=''
    if(!params.full.bg)params.full.bg=''
    var thisFHopacity= 1;
    var fc_lid = '#'+params.full.id
    var zindextopColor =$(fc_lid).attr('zindextopcolor');
    var zindextopColorSet =$(fc_lid).attr('zindextopcolorset');
    if(!zindextopColorSet)zindextopColor=''
    if(params.full.hover){
        $("body").on('mouseover','#'+params.full.id+' .full_width',function(e){
            $("#"+params.full.id+" .full_width").css({"background-color":params.full.hover,"opacity":params.full.opacity});
        }).on('mouseout','#'+params.full.id+' .full_width',function(e){
            if(params.full.bgopacity){thisFHopacity = params.full.bgopacity;}
			else{thisFHopacity = "";}
            var parfbg = ''
            if($(fc_lid).attr('fc_fh_istop')&&zindextopColorSet)parfbg=zindextopColor
            else parfbg = params.full.bg;
            $("#"+params.full.id+" .full_width").css({"background-color":parfbg,"opacity":thisFHopacity});
        });
        if(params.full_con.hover=='transparent'){
            $("#scroll_container").on('mouseover','#'+params.full.id+' .full_content',function(e){
                $("#"+params.full.id+" .full_content").css({"background-color":params.full.hover,"opacity":params.full.opacity});
            }).on('mouseout','#'+params.full.id+' .full_content',function(e){
                $("#"+params.full.id+" .full_content").css({"background-color":params.full.bg,"opacity":"1"});
            });
        }
    }
    if(params.full_con.hover||params.full.hover){
        $("body").on('mouseover','#'+params.full_con.id+' .full_content',function(e){
        var fc_opacity = params.full_con.opacity?params.full_con.opacity:''
        if(fc_opacity==0)fc_opacity=''
            $("#"+params.full_con.id+" .full_content").css({"background-color":params.full_con.hover,"opacity":fc_opacity});
            $("#"+params.full.id+" .full_width").css({"background-color":params.full.hover,"opacity":params.full.opacity});
        }).on('mouseout','#'+params.full_con.id+' .full_content',function(e){
            var parfcbg ='', parfbg1 = ''
            if($(fc_lid).attr('fc_fh_istop')&&zindextopColorSet){
              parfbg1 = zindextopColor
              parfcbg=''
            }else{
              parfcbg = params.full_con.bg;parfbg1 = params.full.bg;
            }
            $("#"+params.full_con.id+" .full_content").css({"background-color":parfcbg,"opacity":''});
            if(params.full.bgopacity)thisFHopacity = params.full.bgopacity?params.full.bgopacity:'';
            $("#"+params.full.id+" .full_width").css({"background-color":parfbg1,"opacity":thisFHopacity});
        });
    }
}

function fullcolumn_bgvideo_init_func(videoParams){
	var domid=videoParams.id,dom=$('#'+domid),$bauto=videoParams.bgauto,$ctauto=videoParams.ctauto,$buse=videoParams.bVideouse,
		$cuse=videoParams.cVideouse,videoH = videoParams.bgvHeight,videoW = videoParams.bgvWidth;
	var $fullwidth=$('#'+domid+' .full_width'),fheight=$fullwidth.height(),$contentwidth=$('#'+domid+' .full_content');
	var dheight=dom.height();
	if($buse=='usevideo'){
		var $fullDiv=dom.find('.fullwidth_vdiv'),
			$fullBg=dom.find('.fullwidth_bg'),
			vwidht=$('.fullwidth_vdiv').width();
		var videoRatio = videoH / videoW;
		var theight=$.parseInteger(vwidht*videoRatio);
		var newWidth=$.parseInteger(fheight/videoRatio);
		if (theight!='0') {
			var ntheight=theight;
		}else{
			var ntheight=dheight;
		}
		$fullDiv.height(dheight);
		$fullDiv.find('.fullwidth_video').height(dheight);
		$fullDiv.find('.fullwidth_bg').height(dheight);
	}
	if($bauto=='noautoplay' && $buse=='usevideo'){
		var $bvideo=$fullwidth.find('.fullwidth_video');
		$('#'+domid).click(function(){
			$bvideo[0].play();
		});
	}
	if($ctauto=='noautoplay' && $cuse=='usevideo'){
		var $cvideo=$contentwidth.find('.content_video');
		$('#'+domid).click(function(){
			$cvideo[0].play();
		});
	}
}

$.fn.layer_ready=function(func){
	var is_exec=false;
	var execfunc=function(){
		if(is_exec) return;
		try{
			func();
		}catch(e){}
		is_exec=true;
	}
	$(this).bind('layer_ready',function(){
		execfunc();
	})
	
	$(function(){
		execfunc();
	})
};

(function(){
	var is_init=false;
	var init_pageinfo={}
	var is_layer_add={};
	var PageHistory={
		init:function(layerid,pageid){
			if(history && history.pushState){
				init_pageinfo[layerid]=pageid;
				if(is_init) return;
				window.onpopstate=function(e){
					var state=e.state;
					if(state && state.action=='page'){
						var layerid=state.layerid;
						$('#'+layerid).trigger('to_page',state.page);
					}
				}
				is_init=true;
			}
		},
		add_page:function(layerid,pageid){
			if(history && history.pushState){
				var loc=window.location.href;
				var layerend=layerid.replace(/.+(\w{5})$/,'$1');
				var paramregexp=new RegExp(layerend+'_p=[^&]+');
				var newloc='';
				if(loc.match(paramregexp)){
					newloc=loc.replace(paramregexp,layerend+'_p='+pageid);
				}else{
					if(loc.indexOf('?')>0){
						newloc=loc+'&'+layerend+"_p="+pageid
					}else{
						newloc=loc+'?'+layerend+"_p="+pageid
					}
				}
				newloc=newloc.replace(/.+?\?/,'?');
				if(!is_layer_add[layerid] && pageid != init_pageinfo[layerid]){
					history.replaceState({action:'page',layerid:layerid,page:init_pageinfo[layerid]}, document.title, loc);
					is_layer_add[layerid]=true;
				}
				history.pushState({action:'page',layerid:layerid,page:pageid}, document.title, newloc);
			}
		}
	};
	window.PageHistory=PageHistory;
})();
(function(){
	function resizeCanvasHeight(){
		window.canv = $("#canvas");
		var container=$('#scroll_container');
		// 画布高度
		var cvhgt = window.getdeviceheight || window.innerHeight || self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//$(window).height();
		var ua = /micromessenger/i.test(navigator.userAgent.toLowerCase());
		if (window.isHandheld&&!ua) cvhgt = Math.min(cvhgt, MobileUtils.getScreenHeight());
		cvhgt -= container.offset().top,mfooterheight = $('#wp-mobile-device-footer').height()||0;
		if (!window.isHandheld) {
			container.height(cvhgt - mfooterheight);
		}
		if($('#site_footer').length>0){
			var canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt-$('#site_footer').height()-mfooterheight);
			if($('#site_footer:not(.only_copyright)').length>0){
				canvheight=Math.max(canvheight,$("#canvas").height());
			}
		}else{
			var canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt);
			canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt-mfooterheight);//没有页脚时去设备底部高度，防没有任何模块时有滚动条bug/4574
		}
		// 重置bSlider模块高度 2013/03/25
		$('.cstlayer[type="bslider"]:not(.isplate)').each(function(i, dom){
			$(dom).triggerHandler('resetbsliderheight', [canvheight]);
		});
		if(!canv) var canv = $("#canvas");
		canv.css('height',canvheight+'px');
		var footermargintop=parseInt($('#site_footer').css('margin-top'))||0;
		var bottomfixedheight=0;
		if($('.full_column-bottomfixed:not(.cstlayer)').length){
			bottomfixedheight=$('.full_column-bottomfixed').height();
		}
 
		$('#scroll_container_bg').css('height',(canvheight+$('#site_footer').height()+footermargintop+bottomfixedheight)+'px');
		if($(window).width()-canv.width()<0) $('#scroll_container_bg').width(canv.width());
		else  $('#scroll_container_bg').css('width','100%');
		$('#scroll_container_bg').triggerHandler('after_resize');
		// 更新标尺位置Start 2012/3/2
		var canvleft = canv.offset().left;
		if (typeof $.fn.ruler_locate != 'undefined') {
			$.fn.ruler_locate({
				x : {left:canvleft+'px'},
				y : {height:canvheight+'px', left:(canvleft>17?canvleft-17:0)+'px'}
			});
			$('.line_y').height(canvheight);// 辅助线高度
		}
		// 在手机设备上访问 2014/02/08
		if (window.isHandheld) {
			var $container = $('#scroll_container'),$footer = $('#site_footer'),$footer_ads = $('#footer_ads'),
			maxheight = $('#scroll_container_bg').height() + $('>.mblank_placeholder',$container).height();
			//计算实际的页脚高度，防止页脚内元素超出页脚底部这一情况
			if ($footer.length > 0 && $footer_ads.length > 0) {
				var maxh = $('#site_footer').height();
				$('#site_footer > .full_content').children(':not(script)').each(function(){
					var eleh = parseInt($(this).css('top')) + $(this).outerHeight();
					maxh = (eleh > maxh) ? eleh : maxh;
				});
				maxheight += (maxh - $('#site_footer').height());
			}
			//如果显示页脚广告，再加上页脚广告的高度
			if ($footer_ads.length > 0) maxheight += 35;
			$container.css({"height": maxheight+'px',"overflow-x": 'hidden',"overflow-y": 'hidden'});
			if($footer.length) {
				if (/micromessenger/i.test(navigator.userAgent.toLowerCase())) {
					$footer.css({'position':'absolute','top':$('#canvas').height()});
				}
				$footer.find('#footer_content').andSelf().width($('#canvas').width());
			}
			//设置页脚广告的宽度，和页脚保持一致
			$footer_ads.width($('#canvas').width());
			$('.mloading-mask').remove();
			$container.css("visibility", 'visible');$(window).triggerHandler("pageloaded");
			// 修复ipad中iframe touchmove冲突问题(bug#97) 2014/09/16
			if (/ipad/.test(navigator.userAgent.toLowerCase())) {
				$(document.body).parent().andSelf().css({"overflow-x": 'hidden',"overflow-y": 'auto'});
				container.css({"height": 'auto',"overflow-y": 'auto'});
			}
		}
	}
	window.resizeCanvasHeight=resizeCanvasHeight;
	function correctFooterPos(){
		var canv = $("#canvas");
		var canvheight=canv.height();
		var footertop=canvheight;
		if (window.isHandheld) {
			footertop-=1;
			$('#scroll_container').css('height',($('#scroll_container').height()-1)+'px');
			$('#scroll_container_bg').css('height',($('#scroll_container_bg').height()-1)+'px');
			//手机正式访问时设置页脚广告的宽度，和页脚保持一致
			$('#footer_ads').css('width',$('#canvas').width()+'px');
		}
		var canvwidth=canv.width();
		//编辑，预览，正式访问时都会调用这里来设置页脚的宽度
		$('#site_footer').children('.full_content').andSelf().css('width',$('#canvas').width()+'px');
		var containerOffsetLeft = $('#scroll_container').offset().left;
			$('#site_footer').css({left:canv.offset().left-containerOffsetLeft+$('#scroll_container').scrollLeft()+$.parseInteger($('#canvas').css("borderLeftWidth")),top:footertop});
		$('#site_footer >.full_width').css({left:0-canv.offset().left+containerOffsetLeft-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$(window.MobileModel?'#canvas':'#scroll_container_bg').width()});
		if($('#wp-mobile-device-header').length) $('#site_footer >.full_width').css("left", '0px');
		//计算页脚广告的位置，保证在页脚的下边
		var footer_ads = $('#footer_ads');
		if (footer_ads.length > 0) {
			if ($('#site_footer').length > 0) {
				var maxh = $('#site_footer').height();
				$('#site_footer > .full_content').children(':not(script)').each(function(){
					var eleh = parseInt($(this).css('top')) + $(this).outerHeight();
					maxh = (eleh > maxh) ? eleh : maxh;
				});
				footer_ads.css({top:footertop + maxh});
			} else {
				footer_ads.css({top:footertop});
			}
		}
	}
	window.correctFooterPos=correctFooterPos;
	
	window.scroll_container_adjust=function(){
		initCanvasHeight();
        //微信下初始化加载cvans高度过大出现滚动条。bug/4574
        if (/micromessenger/i.test(navigator.userAgent.toLowerCase())) {
		  var fxdpstr = $(window).data("fxdp_scrollpage")||''
            setTimeout(function(){
				// fixed bug#1107
				var _scrtop = $(window).scrollTop();
				if(fxdpstr == 'fxdp'){
					resizeCanvasHeight();
					$(window).scrollTop(_scrtop);
					correctFooterPos();
				}
				// 修复"微信浏览器中锚点异常(bug#1059)"问题
				var hstr = location.hash||'';
				if(hstr.length > 0){location.href = location.href;location.hash = hstr.substr(1)}
            },600)
		   if(fxdpstr != 'fxdp'){
				resizeCanvasHeight();
				correctFooterPos();
		   }
        }else {
            resizeCanvasHeight();
            correctFooterPos();
        }
		
	}
})()
/**document ready js**/
$(document).bind('lastexec',function(){

	// Mobile device 2014/01/06
	if (window.MobileModel) {
		var $scontainer = $('#scroll_container'),canvaswidth = $('#canvas').width();
		$scontainer.unbind(".mbprevredhat.tmpredhat");
		if ($('#wp-mobile-device-header').length > 0) {
			// 手机模型定位
			var screenWidth = window.innerWidth||self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
			deviceOtherHeight = $('#wp-mobile-device-header').closest('.wp-new-manage-toolbar-position').height() + $('#wp-mobile-device-footer').height();
			var onlyOnce_resize_width = false;
			$(window).bind("resize.mbeditor", function(e, status){
				var screenHeight = window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
				$('#wp-mobile-device-sides').height(screenHeight - deviceOtherHeight).children('.mwrapper').height(screenHeight - deviceOtherHeight - 2);
				// 自定义滚动条样式
				var sidewidth = 14;/* 手机模型边缘宽度 */
				var mbtimer = setTimeout(function(){
					var newleft = ($._parseFloat($('#wp-mobile-device-header').css("left"))||0) + sidewidth;
					$scontainer.css({"left": (newleft - 10)+'px',"width": function(){/*-10是为了修复"缩放句柄被遮"问题*/
						if( onlyOnce_resize_width == false ){
							onlyOnce_resize_width = true;
							return ($(this).width() + (status?(sidewidth + 15 + 10):0))+'px';
						}else{
							return ;
						}
					},"margin": '0',"padding-left": '11px',"top": '-6px',"overflow-y": 'scroll'});
					$('#site_footer').css("left", '11px');/*11px是为了修复"缩放句柄被遮"问题*/
					if (status == undefined) $scontainer.mscroll("destroy");
					$scontainer.mscroll({difleft: 10,maskbg: '#ccc'});clearTimeout(mbtimer);
				}, 100);
			}).triggerHandler("resize.mbeditor", ['init']);
			$('#wp-mobile-device-header,#wp-mobile-device-sides,#wp-mobile-device-footer').css({"left": function(){
				return ((screenWidth - $(this).width()) / 2)+'px';
			}, "visibility": 'visible'});
			// 保存布局
			$('#wp-mobile-device-footer > span').click(function(){
				wp_floatpanel(parseToURL('wp_widgets','save_page'),{
					title: translate('page.saveLayout'),width: 418,overlay: true,isCenter: true,
					contentClass: 'wp-site-set_panel_c',id: 'wp-page_save',zIndex: 9999,isSet:true
				});
			});
		} else {/* 预览模式 */
			$scontainer.css("visibility", 'visible');
			$(window).load(function(){
				var $win = $(this),frmwidth = $win.width(),frmheight = window.getdeviceheight||565;
				$scontainer.height(frmheight);
				var mprevtimer = setTimeout(function(){
					$scontainer.mscroll({"maskcname": 'wp-mobile-device-premask',"difleft": -6,
					"height": frmheight,"barcname": 'wp-mobile-prescrollbar',"maskleft": frmwidth,"barleft": frmwidth});
					$scontainer.css('overflow-y','auto').css('width','350px');
					$win.triggerHandler("pageloaded");clearTimeout(mprevtimer);
					// 模拟“触屏”模式
					var maxtop = frmheight - $('.wp-mobile-prescrollbar > span.pane').height();
					$('.wp-mobile-prescrollbar').css('visibility','hidden');
					var scrollbartimer;
					var lasthidetime=0;
					var isBarShow=false;
					setInterval(function(){
						var nowtime=(new Date()).getTime();
						if(isBarShow && lasthidetime>0 && nowtime-lasthidetime>=600){
							$('.wp-mobile-prescrollbar').css('visibility','hidden');
							isBarShow=false;
							lasthidetime=0;
						}
					},300);
					var showbar=function(){
						if(!isBarShow){
							$('.wp-mobile-prescrollbar').css('visibility','visible');
							isBarShow=true;
						}
						lasthidetime=0;
					}
					var hidebar=function(){
						if(isBarShow && lasthidetime==0){
							lasthidetime=(new Date()).getTime();
						}
					}
					$scontainer.bind("scroll.prescrollbar",function(){
						showbar();
						hidebar();
					})
					$scontainer.data('preview_scroll',false);
					$scontainer.find('a').bind('click',function(e){
						if($scontainer.data('preview_scroll')){
							e.preventDefault();
						}
					})
					$scontainer.bind("mousedown.mbprevredhat", function(e){
						if($(e.target).is('input')){
							return;
						}
						e.preventDefault();
						$scontainer.data('preview_scroll',false);
						showbar();
						var $prebar = $('.wp-mobile-prescrollbar');var pagey = e.pageY;
						var scrltop = $scontainer.scrollTop(),movey = e.pageY - pagey;
						if (scrltop < 0) scrltop = 0;
						$scontainer.bind("mousemove.tmpredhat", function(e){
							e.preventDefault();
							var movey = e.pageY - pagey;
							if(Math.abs(movey)>5){
								$scontainer.data('preview_scroll',true);
							}
							$scontainer.scrollTop(scrltop - movey);
						}).bind("mouseup.tmpredhat", function(e){
							e.preventDefault();$scontainer.unbind(".tmpredhat");
							$(parent.document).unbind(".rmredhat");
							hidebar();
						});
						$(parent.document).bind("mouseup.rmredhat",function(){$scontainer.unbind(".tmpredhat");hidebar();});
					});
				}, 150);
			});
		}
		//编辑预览模式下设置页脚和页脚广告的宽度
		$('#site_footer,#footer_content,#footer_ads').width(canvaswidth);
	}
	window.scroll_container_adjust();
	if(!canv) var canv = $("#canvas");
	$('.full_column').children('.full_content').andSelf().css('width',$('#canvas').width()+'px');
	$('.full_column>.full_width').css({left:0-canv.offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
	//浏览器缩放是自动调整高度
	var me = "orientation" in window && "onorientationchange" in window ? "orientationchange" : "resize"
	$(window).bind(me, function(e){
		if(e.target==window||e.target==document){
			setTimeout(function(){
				resizeCanvasHeight();
				correctFooterPos();
				$('.full_column>.full_width').css({left:0-canv.offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
				if($('.full_column-fixed:not(.cstlayer)').length){
					var full_column_left = 0-$('.full_column-fixed>.full_width').position().left;
					$('.full_column-fixed').css("left",full_column_left+"px");
				}
			},100);
		}
	})
	
	if (!window.isHandheld) rotateDom($('.cstlayer'));
	//Preview need resize window
	if(window.opener){
		var winH = screen.availHeight || 768,winW = screen.availWidth || 1024;
		window.resizeTo(winW, winH);
	}
	// 新窗口打开超链接
	$.extend({
		openNewWin: function(URI){
			var win = window.open(URI,'_blank');
			win.focus;
		}
	});
})

function getImageProcessType(){
    return 1;
}

function wp_pages_global_func(params){
    var uname = params.domain, sessid = params.phpsessionid;
    window['parseToURL'] = function(module,action,anotherparams){
        if (params.isedit == '1') {
		var defaultparams = {"_m": module,"_a": action,"domain": uname,"SessionID": sessid};
        } else if (params.islogin == '1') {
		var defaultparams = {"_m": module,"_a": action,"domain": uname,"_v": 'preview',"SessionID": sessid};
        } else {
		webmodel = {};
		var defaultparams = {"_m": module,"_a": action};
        }
        var urlparams=$.extend({}, anotherparams, defaultparams, webmodel);
        var paramstr=$.param(urlparams);
	   var url=params.punyurl;
	   var u = navigator.userAgent;
	   if(u && u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
			 url=params['p_rooturl'];
		 }
        return url+"/index.php?"+paramstr;
    };
    
    window['parseToAdminURL'] = function(module,action,anotherparams){
        var defaultparams = {'_m': module,'_a': action,'domain': uname,"SessionID": sessid};
        var urlparams = $.extend({}, anotherparams, defaultparams, webmodel);
        var paramstr = $.param(urlparams);
        return params['p_rooturl']+"/admin/index.php?"+paramstr;
    };
    
    window['getSiteCurLang'] = function(){return params['interface_locale']};
    window['getPreviewSiteCurLang'] = function(){return params['curr_locale']};
    window['getSystemCurrentDomain'] = function(){return uname};
    window['isSiteDevMode'] = function(){return params['dev_mode']=='1'?true:false;};
    
    window['relativeToAbsoluteURL'] = function(relativeurl, nostatic){
        if (nostatic == '1') return params['p_rooturl']+"/"+relativeurl;
        else return params['static_rooturl']+"/"+relativeurl;
    };
    
    window['getWebSiteType'] = function(){return $.trim(params['mscript_name']||'').length > 0 ? 'mobile' : 'pc'};
    window['getSystemSession'] = function(){return params.getsession};
    
    if ((params.isedit == '1') && params.converted) {
        if($.browser.msie && ($.browser.version < 9)) location.href = parseToURL("wp_frontpage","browser");
    }
    if ($.browser.msie && ($.browser.version < 7)) {
        location.href = parseToURL("wp_frontpage","browser");
    }
}

function wopop_navigator_standalone_func(){
	$(window).load(function(){
		if(location.hash && location.hash !='' && location.hash !='#'){
			location.href=location.hash;
		}
	});
	if(('standalone' in window.navigator)&&window.navigator.standalone){  
        var noddy,remotes=false;  
        document.addEventListener('click',function(event){  
                noddy=event.target;  
                while(noddy.nodeName!=='A'&&noddy.nodeName!=='HTML') noddy=noddy.parentNode;  
                if('href' in noddy&&noddy.href.indexOf('http')!==-1&&(noddy.href.indexOf(document.location.host)!==-1||remotes)){  
                        event.preventDefault();  
                        document.location.href=noddy.href;  
                }  
        },false);  
	} 
}