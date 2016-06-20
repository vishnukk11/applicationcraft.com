/*
Tipue Search 2.0
Copyright (c) 2012 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/
!function(e){e.fn.tipuesearch=function(t){var i=e.extend({show:7,newWindow:!1,showURL:!0,minimumLength:3,descriptiveWords:25,highlightTerms:!1,highlightEveryTerm:!1,mode:"static",contentLocation:"tipuesearch/tipuesearch_content.json"},t);return this.each(function(){function t(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}function o(t,r){e("#tipue_search_content").hide();var s="",l=!1,c=!1,d=e(".docs aside form input").val().toLowerCase();d=e.trim(d);var u=d.split(" ");if(d.length>=i.minimumLength){if(r){for(var h=d,p=0;p<u.length;p++)for(var f=0;f<tipuesearch_replace.words.length;f++)u[p]==tipuesearch_replace.words[f].word&&(d=d.replace(u[p],tipuesearch_replace.words[f].replace_with),l=!0);u=d.split(" ")}for(var g=d,p=0;p<u.length;p++)for(var f=0;f<tipuesearch_stem.words.length;f++)u[p]==tipuesearch_stem.words[f].word&&(g=g+" "+tipuesearch_stem.words[f].stem);u=g.split(" ");var m=0;found=new Array;for(var p=0;p<a.pages.length;p++)if(void 0!=a.pages[p].t){for(var v=1e7,b=a.pages[p].t,f=0;f<u.length;f++){var y=new RegExp(u[f],"i");if(-1!=a.pages[p].t.search(y)&&(v-=2e3-p),a.pages[p].text&&-1!=a.pages[p].text.search(y)&&(v-=1500-p),i.highlightTerms){if(i.highlightEveryTerm)var w=new RegExp("("+u[f]+")","gi");else var w=new RegExp("("+u[f]+")","i");b=b.replace(w,"<em>$1</em>")}-1!=a.pages[p].b.search(y)&&(v-=1e3-p)}1e7>v&&(found[m++]=v+"^"+a.pages[p].r+"^"+b+"^"+a.pages[p].u)}if(0!=m){1==l&&(s+='<div id="tipue_search_warning_head">Showing results for '+d+"</div>",s+='<div id="tipue_search_warning">Show results for <a href="javascript:void(0)" id="tipue_search_replaced">'+h+"</a></div>"),1==m?s+='<div id="tipue_search_results_count">1 result for '+d+"...</div>":(c_c=m.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),s+='<div id="tipue_search_results_count">'+c_c+" results for "+d+"...</div>"),found.sort();for(var x=0,p=0;p<found.length;p++){var T=found[p].split("^");if(x>=t&&x<i.show+t){s+='<div id="tipue_search_content_title"><a href="'+T[3]+'"'+n+">"+T[1]+"</a></div>";var k=T[2],C="",A=k.split(" ");if(A.length<i.descriptiveWords)C=k;else for(var f=0;f<i.descriptiveWords;f++)C+=A[f]+" ";C=e.trim(C),"."!=C.charAt(C.length-1)&&(C+=" ..."),s+='<div id="tipue_search_content_text">'+C+"</div>",i.showURL&&(s+='<div id="tipue_search_content_loc"><a href="'+T[3]+'"'+n+">"+T[3]+"</a></div>")}x++}if(m>i.show){var S=Math.ceil(m/i.show),_=t/i.show;if(s+='<div id="tipue_search_foot"><ul id="tipue_search_foot_boxes">',t>0&&(s+='<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+(t-i.show)+"_"+r+'">&#171; Previous</a></li>'),4>=_){var P=S;S>5&&(P=5);for(var f=0;P>f;f++)s+=f==_?'<li class="current">'+(f+1)+"</li>":'<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+f*i.show+"_"+r+'">'+(f+1)+"</a></li>"}else{var P=S+4;P>S&&(P=S);for(var f=_;P>f;f++)s+=f==_?'<li class="current">'+(f+1)+"</li>":'<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+f*i.show+"_"+r+'">'+(f+1)+"</a></li>"}_+1!=S&&(s+='<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+(t+i.show)+"_"+r+'">Next &#187;</a></li>'),s+="</ul></div>"}}else s+='<div id="tipue_search_warning_head">Nothing found</div>'}else c?s+='<div id="tipue_search_warning_head">Nothing found</div><div id="tipue_search_warning">Common words are largely ignored</div>':(s+='<div id="tipue_search_warning_head">Search too short</div>',s+=1==i.minimumLength?'<div id="tipue_search_warning">Should be one character or more</div>':'<div id="tipue_search_warning">Should be '+i.minimumLength+" characters or more</div>");e(".docs article").fadeOut(function(){e("#tipue_search_content").html(s).fadeIn()}),e("#tipue_search_replaced").click(function(){o(0,!1)}),e(".tipue_search_foot_box").click(function(){var t=e(this).attr("id"),i=t.split("_");o(parseInt(i[0]),i[1])})}var a={pages:[]};e.ajaxSetup({async:!1}),"json"==i.mode&&e.getJSON(i.contentLocation,function(t){a=e.extend({},t)}),"static"==i.mode&&(a=e.extend({},tipuesearch));var n="";i.newWindow&&(n=' target="_blank"'),t("q")&&(e(".docs aside form input").val(t("q")),o(0,!0)),e(".docs aside form").submit(function(){return o(0,!0),!1})})}}(jQuery);