!function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=41)}({41:function(e,t,i){e.exports=i(42)},42:function(e,t){function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var i=[],a=!0,n=!1,o=void 0;try{for(var l,r=e[Symbol.iterator]();!(a=(l=r.next()).done)&&(i.push(l.value),!t||i.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(n)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}var n={"あ":["a"],"い":["i","yi"],"う":["u","wu","whu"],"え":["e"],"お":["o"],"か":["ka","ca"],"き":["ki"],"く":["ku","cu","qu"],"け":["ke"],"こ":["ko","co"],"さ":["sa"],"し":["si","ci","shi"],"す":["su"],"せ":["se","ce"],"そ":["so"],"た":["ta"],"ち":["ti","chi"],"つ":["tu","tsu"],"て":["te"],"と":["to"],"な":["na"],"に":["ni"],"ぬ":["nu"],"ね":["ne"],"の":["no"],"は":["ha"],"ひ":["hi"],"ふ":["hu","fu"],"へ":["he"],"ほ":["ho"],"ま":["ma"],"み":["mi"],"む":["mu"],"め":["me"],"も":["mo"],"や":["ya"],"ゆ":["yu"],"よ":["yo"],"ら":["ra"],"り":["ri"],"る":["ru"],"れ":["re"],"ろ":["ro"],"わ":["wa"],"を":["wo"],"ん":["n","nn","xn"],"が":["ga"],"ぎ":["gi"],"ぐ":["gu"],"げ":["ge"],"ご":["go"],"ざ":["za"],"じ":["zi","ji"],"ず":["zu"],"ぜ":["ze"],"ぞ":["zo"],"だ":["da"],"ぢ":["di"],"づ":["du"],"で":["de"],"ど":["do"],"ば":["ba"],"び":["bi"],"ぶ":["bu"],"べ":["be"],"ぼ":["bo"],"ぱ":["pa"],"ぴ":["pi"],"ぷ":["pu"],"ぺ":["pe"],"ぽ":["po"],"きゃ":["kya","kilya","kixya"],"きぃ":["kyi","kili","kixi","kilyi","kixyi"],"きゅ":["kyu","kilyu","kixyu"],"きぇ":["kye","kile","kixe","kilye","kixye"],"きょ":["kyo","kilyo","kixyo"],"ぎゃ":["gya","gilya","gixya"],"ぎぃ":["gyi","gili","gixi","gilyi","gixyi"],"ぎゅ":["gyu","gilyu","gixyu"],"ぎぇ":["gye","gile","gixe","gilye","gixye"],"ぎょ":["gyo","gilyo","gixyo"],"しゃ":["sya","sha","sixya","silya","shixya","shilya","cixya","cilya"],"しぃ":["syi","sili","sixi","silyi","sixyi","shixi","shili","cixi","cili"],"しゅ":["syu","shu","silyu","sixyu","shixyu","shilyu","cixyu","cilyu"],"しぇ":["she","sye","sile","sixe","silye","sixye","shixe","shile","cixe","cile"],"しょ":["syo","sho","silyo","sixyo","shixyo","shilyo","cixyo","cilyo"],"じゃ":["ja","zya","jya","zilya","zixya","jilya","jixya"],"じぃ":["zyi","jyi","zili","zixi","jili","jixi","zilyi","zixyi","jilyi","jixyi"],"じゅ":["zyu","ju","jyu","zixyu","zilyu","jixyu","jilyu"],"じぇ":["zye","je","jye","zixe","zile","jixe","jile"],"じょ":["zyo","jo","jyo","zixyo","zilyo","jixyo","jilyo"],"ちゃ":["tya","cha","cya","tixya","tilya","chixya","chilya"],"ちぃ":["tyi","cyi","tixi","tili","chixi","chili"],"ちゅ":["tyu","chu","cyu","tixyu","tilyu","chixyu","chilyu"],"ちぇ":["tye","che","cye","tixe","tile","chixe","chile"],"ちょ":["tyo","cho","cyo","tixyo","tilyo","chixyo","chilyo"],"にゃ":["nya","nixya","nilya"],"にぃ":["nyi","nixi","nili"],"にゅ":["nyu","nixyu","nilyu"],"にぇ":["nye","nixe","nile"],"にょ":["nyo","nixyo","nilyo"],"ひゃ":["hya","hixya","hilya"],"ひぃ":["hyi","hixi","hili"],"ひゅ":["hyu","hixyu","hilyu"],"ひぇ":["hye","hixe","hile"],"ひょ":["hyo","hixyo","hilyo"],"ふぁ":["fa","fwa","fuxa","fula","huxa","hula"],"ふぃ":["fi","fwi","fyi","fuxi","fuli","huxi","huli"],"ふぅ":["fwu","fuxu","fulu","huxu","hulu"],"ふぇ":["fe","fwe","fye","fuxe","fule","huxe","hule"],"ふぉ":["fo","fwo","fuxo","fulo","huxo","hulo"],"くぁ":["qwa","qa","kwa","kuxa","kula","quxa","qula","cuxa","cula"],"くぃ":["qwi","qi","qyi","kuxi","kuli","quxi","quli","cuxi","culi"],"くぅ":["qwu","kuxu","kulu","quxu","qulu","cuxu","culu"],"くぇ":["qwe","qe","qye","kuxe","kule","quxe","qule","cuxe","cule"],"くぉ":["qwo","qo","kuxo","kulo","quxo","qulo","cuxo","culo"],"ぐぁ":["gya","guxa","gula"],"ぐぃ":["gyi","guxi","guli"],"ぐぅ":["gyu","guxu","gulu"],"ぐぇ":["gye","guxe","gule"],"ぐぉ":["gyo","guxo","gulo"],"すぁ":["swa","suxa","sula"],"すぃ":["swi","suxi","suli"],"すぅ":["swu","suxu","sulu"],"すぇ":["swe","suxe","sule"],"すぉ":["swo","suxo","sulo"],"てゃ":["tha","texya","telya"],"てぃ":["thi","texi","teli"],"てゅ":["thu","texyu","telyu"],"てぇ":["the","texe","tele"],"てょ":["tho","texyo","telyo"],"とぁ":["twa"],"とぃ":["twi"],"とぅ":["twu","toxu","tolu"],"とぇ":["twe"],"とぉ":["two","toxo","tolo"],"ぢゃ":["dya","dixya","dilya"],"ぢぃ":["dyi"],"ぢゅ":["dyu"],"ぢぇ":["dye"],"ぢょ":["dyo"],"でゃ":["dha"],"でぃ":["dhi","dexi","deli"],"でゅ":["dhu","dexyu","delyu"],"でぇ":["dhe"],"でょ":["dho"],"どぁ":["dwa"],"どぃ":["dwi"],"どぅ":["dwu","doxu","dolu"],"どぇ":["dwe"],"どぉ":["dwo"],"びゃ":["bya","bixya","bilya"],"びぃ":["byi"],"びゅ":["byu","bixyu","bilyu"],"びぇ":["bye"],"びょ":["byo","bixyo","bilyo"],"ぴゃ":["pya","pixya","pilya"],"ぴぃ":["pyi"],"ぴゅ":["pyu","pixyu","pilyu"],"ぴぇ":["pye"],"ぴょ":["pyo","pixyo","pilyo"],"りゃ":["rya","rixya","rilya"],"りゅ":["ryu","rixyu","rilyu"],"りょ":["ryo","rixyo","rilyo"],"ー":["-"]," ":[" "],"、":[","],"？":["?"],"！":["!"],"。":["."],"っ":["xtu","ltu","xtsu","ltsu"],"ぁ":["xa","la"],"ぇ":["xe","le"],"ゃ":["lya","xya"],"ゅ":["xyu","lyu"],"ょ":["lyo","xyo"],a:"a",b:"b",c:"c",d:"d",e:"e",f:"f",g:"g",h:"h",i:"i",j:"j",k:"k",l:"l",m:"m",n:"n",o:"o",p:"p",q:"q",r:"r",s:"s",t:"t",u:"u",v:"v",w:"w",x:"x",y:"y",z:"z","":"",",":","};$((function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},dataType:"json",processData:!1,contentType:!1,timeout:1e4});var e,t,a,o,l,r,s,c,u,y,d,p=[],h=[],x=[],_=[],f=[],m=[],b=[],g=[],k=0,w=0,v=0,j=0,q=0,A=new FormData,T=0,S=0,z=3,L=[],I=[],O=[],P=[],M=[],C=0,E=0,R=0,D=[],H=[],F=0,N=0,V=0,B=0,J=0;function G(){$.ajax({url:"/getdata",type:"POST",data:A}).done((function(e){var t;p=e.questions,h=e.player,f=e.user,m=e.field,b=e.having_items,g=e.equip_item,$(".player_name").text(f.name),$(".player_level").text(h.level),$("#player_hp").text(h.hp),t=(k=ae())<5?parseInt(Math.random()*k):parseInt(5*Math.random()),x=e.monsters[t],_=e.dropItems[t],$(".monster_name").text(x.name),$("#monster_hp").text(x.hp),K(),1==h.player_image?$(".player_image").attr("src","/images/player_images/主人公男h150.png"):$(".player_image").attr("src","/images/player_images/主人公女h150.png"),$(".monster_image").attr("src","/images/monster_images/"+x.image),$(".rpg_display").css("background-image","url(/images/field_images/"+m.image+")"),$(".select_field_display").hide(),$("#battle_text").html(x.name+"があらわれた！<br>BATTLE STARTボタンをクリック または スペースキーを押して戦闘開始<br>※ サウンドが流れます"),$("#battle_btn").show(),$("#monster_image").css("visibility","visible"),$("#player_image").css("visibility","visible"),T=1})).fail((function(e){console.log(e),$("#battle_text").append("<br>通信に失敗しました。"),oe()}))}function K(){null==g?($(".attack").text(h.attack),$(".item_attack").text(0),$(".defence").text(h.defence),$(".item_defence").text(0),$(".mistake_damage").text(1),$(".equipment_image").attr("src",""),r=x.attack-x.min_attack<h.defence?x.min_attack:x.attack-h.defence,l=h.attack,s=1):($(".attack").text(h.attack+g.attack),$(".item_attack").text(g.attack),$(".defence").text(h.defence+g.defence),$(".item_defence").text(g.defence),$(".mistake_damage").text(g.mistake_damage),$(".equipment_image").attr("src","/images/item_images/"+g.image),r=x.attack-x.min_attack<h.defence+g.defence?x.min_attack:x.attack-(h.defence+g.defence),l=h.attack+g.attack,s=g.mistake_damage)}function U(){var a=parseInt(Math.random()*L.length);$("#word").show(),$("#word").text(L[a]),2==m.id||4==m.id?$("#word_kana").text(""):$("#word_kana").text(I[a]),$("#word_kana").show();var o=i(function(e){for(var t=[],i=[],a=["a","i","u","e","o","y","n"],o=[],l=0;l<e.length;l++)if("ん"!=e[l]&&n[e[l]])t.push(n[e[l]][0]);else if("ん"==e[l]&&l==e.length-1)t.push(n[e[l]][1]);else if(l!=e.length-1&&"ん"==e[l]&&-1!=a.indexOf(n[e[l+1]][0][0]))t.push(n[e[l]][1]);else if("ん"==e[l])t.push(n[e[l]][0]);else{strList=2==e[l].length?n[e[l][1]]:n[e[l][1]+e[l][2]];for(var r=0;r<strList.length;r++)o.push(strList[r][0]+strList[r]);i[e[l]]=o,t.push(i[e[l]][0]),o=[]}return[t,i]}(O=function(e){for(var t=[],i=["a","i","u","e","o","n"],a=0;a<e.length;a++)if(a>0&&n[e[a-1]+e[a]]){var o=t.pop();t.push(o+e[a])}else a!=e.length-1&&"っ"==e[a]&&-1==i.indexOf(n[e[a+1]][0][0])?(t.push(e[a]+e[a+1]),a++):t.push(e[a]);return t}(I[a])),2);P=o[0],M=o[1],$("#word_romaji").show(),$("#word_romaji").text(P.join("")),e=O.shift(),t=P.shift(),W()}function W(){a=$("#word_romaji").text().charAt(C)}function X(i){var r=i;if("Process"==r)return!1;function c(e,t){for(var i=[],a=0;a<t.length;a++)t[a].startsWith(e)&&i.push(t[a]);return i}function u(){$("#missAudio")[0].currentTime=0,$("#correctAudio")[0].currentTime=0,$("#correctAudio")[0].play(),$("#word_romaji").html("<span style='color: red;'>"+$("#word_romaji").text().substr(0,C+1)+"</span>"+$("#word_romaji").text().substr(C+1,$("#word_romaji").text().length)),C++,E++,$("#monster_hp").text(parseInt($("#monster_hp").text())-l),$("#monster_hp").text()<=0&&($("#monster_hp").text(0),function(){switch($("#count").hide(),$("#word").hide(),$("#word_kana").hide(),$("#word_romaji").hide(),$("#battleAudio")[0].pause(),$("#battleAudio")[0].currentTime=0,$("#victoryAudio")[0].play(),$("#victoryAudio")[0].volume=.4,$(".victoryVoice")[0].play(),$("#battle_text").append("<br>"+x.name+"をたおした！"),$("#monster_image").css("visibility","hidden"),oe(),o=Math.ceil(x.hp*(E/(E+R))-R*s),m.id){case 1:h.field1_victory_count++,w=1;break;case 2:h.field2_victory_count++,v=1;break;case 3:h.field3_victory_count++,j=1;break;case 4:h.field4_victory_count++,q=1;break;case 5:h.field5_victory_count++}$("#scoredis").show(),$("#press_enter").show(),$("#scoredis").html("スコア： "+o+"点<hr>正タイプ数： "+E+"<br>ミスタイプ数： "+R),T=3}()),W()}function y(){$("#missAudio")[0].currentTime=0,$("#correctAudio")[0].currentTime=0,$("#missAudio")[0].play(),R++,H=H.slice(0,-1),D=D.slice(0,-1),$("#player_hp").text(parseInt($("#player_hp").text())-s),$("#battle_text").append("<br>タイプミス！"+f.name+"は "+s+" のダメージ！"),$("#player_hp").text()<=0&&($("#player_hp").text(0),Z()),oe()}D+=r,H+=r,r==a?(u(),t=t.slice(1)):1==F&&"n"==r?($("#word_romaji").text(H+t+P.join("")),u(),D="",F=0):(remainingList=n[e]?n[e]:M[e],anotherList=c(D,remainingList),""!=anotherList?(t=anotherList[0].slice(D.length),$("#word_romaji").text(H+t+P.join("")),u()):e.length>=2?(remainingList=n[e[0]],anotherList=c(D,remainingList),""!=anotherList?(nextStr=e.slice(1),e=e[0],O.unshift(nextStr),t=anotherList[0].slice(D.length),nextRomaji=n[nextStr][0],P.unshift(nextRomaji),$("#word_romaji").text(H+t+P.join("")),u()):3==e.length?(remainingList=M[e],anotherList=c(D,remainingList),""!=anotherList?(nextStr=e[2],e.pop(),O.unshift(nextStr),t=anotherList[0].slice(D.length),nextRomaji=n[nextStr][0],P.unshift(nextRomaji),$("#word_romaji").text(H+t+P.join("")),u()):y()):y()):y(),F=0),""==t&&(t=P.shift(),e=O.shift(),F="n"!=D||2==A.id&&4==m.id?0:1,D=""),0!=$("#monster_hp").text()&&0!=$("#player_hp").text()&&C==$("#word_romaji").text().length&&(C=0,D=[],H=[],U())}function Q(){y=x.attack_interval,$("#count").html("モンスターの攻撃まであと <span class='time'>"+y+"</span> 秒"),clearInterval(d),d=setInterval((function(){if(parseInt($("#player_hp").text())<=0||parseInt($("#monster_hp").text())<=0)return!1;2==T&&(y--,$("#count").html("モンスターの攻撃まであと <span class='time'>"+y+"</span> 秒"),y<=0&&(clearInterval(d),function(){$("#player_hp").html(parseInt($("#player_hp").text())-r),$("#attackAudio")[0].play(),$("#battle_text").append("<br>"+x.name+"の攻撃！主人公は "+r+" のダメージ！"),oe(),$("#player_hp").text()<=0&&($("#player_hp").text(0),Z());Q()}()))}),1e3)}function Y(){0==V?($("#press_enter").show(),S=0==c?4:5):($("#battle_text").append("<br>成長させるステータスを選んでください  ボーナスポイント残り "+V+"<br>HP("+h.hp+"→"+(h.hp+10)+")：1ボタン　攻撃力("+h.attack+"→"+(h.attack+1)+")：2ボタン　防御力("+h.defence+"→"+(h.defence+2)+")：3ボタン"),oe())}function Z(){$("#count").hide(),$("#word").hide(),$("#word_kana").hide(),$("#word_romaji").hide(),$("#battleAudio")[0].pause(),$("#battleAudio")[0].currentTime=0,$("#loseAudio")[0].play(),$("#loseAudio")[0].volume=.4,$(".loseVoice")[0].play(),$("#battle_text").append("<br>"+x.name+"にやぶれた・・・"),$("#press_enter").show(),$("#player_image").css("visibility","hidden"),oe(),h.get_item="",T=4}function ee(){$("#press_enter").hide(),$("#scoredis").hide(),$("#battle_text").append("<br>次の行動を選択してください。"),oe(),ae()!=k?($("#shareing_twitter").attr("href","https://twitter.com/share?url=https://typing-rpg.com/login&hashtags=TypingRPG&text=".concat(x.name,"をスコア").concat(o,"で倒しました！")),$(".shareing_sns").show()):($("#shareing_twitter").attr("href",""),$(".shareing_sns").hide()),$(".select_next_action").css("display","flex"),p=[],x=[],_=[],f=[],m=[],b=[],T=0,S=0,z=3,L=[],I=[],O=[],P=[],M=[],E=0,R=0,o=0,D=[],H=[],F=0,N=0,V=0,a="",C=0,y=0,w=0,v=0,j=0,q=0,$("#change_equipment_btn").prop("disabled",!1),$("#change_equipment_btn").css("color","white"),$("#change_field_btn").prop("disabled",!1),$("#change_field_btn").css("color","white")}function te(){$(".equip").removeClass("equip"),null!=g&&$(".having_item").filter((function(){return $(this).data("id")==g.id})).addClass("equip")}function ie(){h.field1_victory_count>=5&&($("#field2").removeClass("not_select"),$("#field2").prop("disabled",!1)),h.field2_victory_count>=5&&($("#field3").removeClass("not_select"),$("#field3").prop("disabled",!1)),h.field3_victory_count>=5&&($("#field4").removeClass("not_select"),$("#field4").prop("disabled",!1)),h.field4_victory_count>=5&&($("#field5").removeClass("not_select"),$("#field5").prop("disabled",!1))}function ae(){switch(m.id){case 1:return h.field1_victory_count;case 2:return h.field2_victory_count;case 3:return h.field3_victory_count;case 4:return h.field4_victory_count;case 5:return h.field5_victory_count}}function ne(e){return e>=40?10*(e-40)+160:e<40&&e>=20?5*(e-20)+60:3*(e+1)}function oe(){battle_text.scroll(0,battle_text.scrollHeight)}$(".field_btn").on("click",(function(e){e.preventDefault(),$("#battle_text").append("<br>通信中・・・"),A.append("field_id",$(this).val()),G()})),$("#battle_btn").on("click",(function(){$("#battle_btn").hide(),$(".select_field_display").hide(),$(".equipment_display").hide(),$("#selectAudio")[0].play(),function(){z=3;for(var e=0;e<p.length;e++)L.push(p[e].word),I.push(p[e].word_kana);$("#ready_count").show(),$("#ready_count").text(z);var t=setInterval((function(){$("#ready_count").text(z),--z<0&&(clearInterval(t),z=3,$("#change_equipment_btn").prop("disabled",!0),$("#change_equipment_btn").css("color","lightgray"),$("#change_field_btn").prop("disabled",!0),$("#change_field_btn").css("color","lightgray"),$("#ready_count").hide(),U(),o=0,E=0,R=0,$("#battleAudio")[0].play(),$("#battleAudio")[0].volume=.4,$("#battleAudio")[0].loop=!0,$(".readyVoice")[0].play(),$("#count").show(),Q(),T=2)}),1e3)}()})),$("#next_battle").on("click",(function(){$(".select_next_action").hide(),$(".select_field_display").hide(),$(".equipment_display").hide(),G()})),$("#change_field").on("click",(function(){$("#change_field_btn").trigger("click")})),$("#change_equipment").on("click",(function(){$("#change_equipment_btn").trigger("click")})),$("body").on("keydown",(function(e){if(1==T&&" "==e.key){if(1==J)return!1;$("#battle_btn").trigger("click")}if(2==T){if(1==J)return!1;"Escape"==e.key?$("#battle_reset").trigger("click"):X(e.key)}if(3==T&&3==S){if(1==J)return!1;if(1==e.key)h.hp+=10,$("#battle_text").append("<br>さらに、さいだいHPが<span style='color: yellow'> 10 </span>上がった！"),oe(),V--,Y();else if(2==e.key)h.attack++,$("#battle_text").append("<br>さらに、攻撃力が<span style='color: yellow'> 1 </span>上がった！"),oe(),V--,Y();else if(3==e.key)h.defence+=2,$("#battle_text").append("<br>さらに、防御力が<span style='color: yellow'> 2 </span>上がった！"),oe(),V--,Y();else if("Enter"==e.key)return!1}if(3==T&&"Enter"==e.key){if(1==B||1==J)return!1;0==S?function(){$("#battle_text").append("<br>"+f.name+"は "+x.exp+" の経験値を得た"),oe();for(var e=[],t=0;t<b.length;t++)e.push(b[t].id);u=$.inArray(_.id,e),c=u<0?parseInt(5*Math.random()):1,h.get_item=0==c?_.id:"",h.next_exp<=x.exp?S=1:0==c?(h.next_exp-=x.exp,S=4):(h.next_exp-=x.exp,S=5)}():1==S?function(){var e=x.exp;h.exp+=e;for(var t=h.level;;t++){if(e<h.next_exp){h.next_exp-=e,h.level+=N,V=N;break}e-=h.next_exp,h.next_exp=ne(t),N++}$("#battle_text").append("<br>".concat(f.name,' は レベル <span style="color: yellow">').concat(h.level,"</span> に上がった！")),oe(),S=2}():2==S?function(){for(var e=0,t=0;t<N;t++)e+=parseInt(5*Math.random()+5);h.hp+=e,$("#battle_text").append('<br>さいだいHPが<span style="color: yellow"> '.concat(e," </span>上がった！")),Y(),$("#press_enter").hide(),S=3,N=0}():4==S?($("#battle_text").append("<br><span style='color: lime'>"+_.name+" </span>を手に入れた！"),oe(),S=5):(B=1,$("#battle_text").append("<br>データを保存しています・・・"),oe(),$.ajax({url:"/setdata",type:"POST",dataType:"text",contentType:"application/json",data:JSON.stringify(h)}).done((function(){$("#battle_text").append("<br>データを保存しました。"),5==h.field1_victory_count&&1==w?($("#battle_text").append("<br>新たなフィールド <span style='color: yellow'>森林地帯</span> が解放されました！"),ie()):5==h.field2_victory_count&&1==v?($("#battle_text").append("<br>新たなフィールド <span style='color: yellow'>荒野地帯</span> が解放されました！"),ie()):5==h.field3_victory_count&&1==j?($("#battle_text").append("<br>新たなフィールド <span style='color: yellow'>山岳地帯</span> が解放されました！"),ie()):5==h.field4_victory_count&&1==q&&($("#battle_text").append("<br>新たなフィールド <span style='color: yellow'>魔界</span> が解放されました！"),ie()),oe(),S=0,T=4,B=0})).fail((function(e){console.log(e),$("#battle_text").append("<br>データの保存に失敗しました。"),oe(),B=0})))}4==T&&"Enter"==e.key&&ee()})),$(document).on("click",".having_item",(function(){var e={id:$(this).data("id")};e=null!=g&&g.id==e.id?{id:""}:{id:$(this).data("id")},$.ajax({url:"/setitem",type:"POST",contentType:"application/json",data:JSON.stringify(e)}).done((function(e){g=e.item,K(),null!=g?$("#battle_text").append("<br>"+g.name+" を装備しました。"):$("#battle_text").append("<br>装備を外しました。"),te(),oe()})).fail((function(e){console.log(e),$("#battle_text").append("<br>通信に失敗しました。"),oe()}))})),$(".close_equipment").on("click",(function(){$(".equipment_display").hide()})),$("#change_equipment_btn").on("click",(function(){$("#battle_text").append("<br>所持アイテムを取得中・・・"),oe(),$.ajax({url:"/getitem",type:"POST"}).done((function(e){var t;b=e.items,g=e.equip_item;var i="";for(t=0;t<b.length;t++)i+='<li class="having_item" data-id="'.concat(b[t].id,'">\n                            <div class="item_image">\n                                <img src="/images/item_images/').concat(b[t].image,'" alt="').concat(b[t].name,'">\n                                <p>').concat(b[t].name,'</p>\n                            </div>\n                            <div class="item_detail">\n                                <p><i class="far fa-hand-rock"></i>：<span>').concat(b[t].attack,'</span></p>\n                                <p><i class="fas fa-shield-alt"></i>：<span>').concat(b[t].defence,'</span></p>\n                                <p><i class="far fa-tired"></i>：<span>').concat(b[t].mistake_damage,"</span></p>\n                            </div>\n                        </li>");$(".having_items_list").empty().append(i),te(),$(".equipment_display").show(),$("#battle_text").append("<br>装備するアイテムを選択してください。")})).fail((function(e){console.log(e),$("#battle_text").append("<br>データの取得に失敗しました。"),oe()}))})),$("#change_field_btn").on("click",(function(){$(".select_next_action").hide(),$(".equipment_display").hide(),$("#battle_btn").hide(),$(".select_field_display").show(),A=new FormData,$("#battle_text").html("フィールドを選択してください。"),T=0})),$("#battle_reset").on("click",(function(){if(2!=T)return!1;clearInterval(d),$("#change_equipment_btn").prop("disabled",!1),$("#change_equipment_btn").css("color","white"),$("#change_field_btn").prop("disabled",!1),$("#change_field_btn").css("color","white"),$("#count").hide(),$("#word").hide(),$("#word_kana").hide(),$("#word_romaji").hide(),$("#battleAudio")[0].pause(),$("#battleAudio")[0].currentTime=0,$("#player_hp").text(h.hp),$("#monster_hp").text(x.hp),$("#battle_text").html("バトルをリセットしました。<br>BATTLE STARTボタンをクリック または スペースキーを押して戦闘開始"),$("#battle_btn").show(),E=0,R=0,a="",C=0,D=[],H=[],y=0,T=1})),$("#show_info").on("click",(function(){$("#game_tab").prop("checked",!0),J=1,$(".info_modal").show()})),$(".modal_close").on("click",(function(){J=0,$(".info_modal").hide()}))}))}});
//# sourceMappingURL=main.js.map