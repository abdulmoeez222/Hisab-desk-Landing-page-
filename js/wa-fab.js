/* v17r: floating WhatsApp button. Hidden while the hero CTA is on screen, near the footer,
   and whenever it would sit on top of a link, button, field, chip row or toast. */
(function(){
  var fab=document.getElementById("waFab"); if(!fab) return;
  var hero=document.querySelector(".hero-btn"), foot=document.querySelector(".footer");
  var SEL=".btn,a,button,input,select,textarea,label,.sp-chips,.toast,.dk-progress,[role=tab]";
  var pend=false;
  function hit(a,b){return a.left<b.right+8&&a.right>b.left-8&&a.top<b.bottom+8&&a.bottom>b.top-8;}
  function check(){
    pend=false;
    var vh=innerHeight, off=false;
    if(hero){var h=hero.getBoundingClientRect(); if(h.bottom>0&&h.top<vh) off=true;}
    if(!off&&foot&&foot.getBoundingClientRect().top<vh) off=true;
    if(!off){
      var was=fab.classList.contains("is-off"); fab.classList.remove("is-off");
      var r=fab.getBoundingClientRect(); if(was) fab.classList.add("is-off");
      /* rect without the hide transform */
      r={left:r.left,right:r.right,top:r.top-(was?12:0),bottom:r.bottom-(was?12:0)};
      var els=document.querySelectorAll(SEL);
      for(var i=0;i<els.length;i++){var e=els[i]; if(e===fab||e.closest("[hidden]")) continue;
        var b=e.getBoundingClientRect(); if(!b.width||!b.height) continue;
        if(b.bottom<r.top-8||b.top>r.bottom+8) continue;
        var cs=getComputedStyle(e); if(cs.visibility==="hidden"||+cs.opacity===0) continue;
        if(hit(r,b)){off=true;break;}}
    }
    fab.classList.toggle("is-off",off);
    fab.setAttribute("tabindex",off?"-1":"0"); fab.setAttribute("aria-hidden",off?"true":"false");
  }
  function q(){if(!pend){pend=true;requestAnimationFrame(check);}}
  addEventListener("scroll",q,{passive:true}); addEventListener("resize",q);
  document.addEventListener("click",function(){setTimeout(q,400);},true);
  new MutationObserver(q).observe(document.body,{childList:true});
  setInterval(q,1200); q();
})();
