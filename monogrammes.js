/* Real vector monograms: geometry only, no fonts or embedded raster images. */
function monogramSVG(name,colors,options={}){
 const bg=colors.bg,ink=colors.face,accent=colors.accessory;
 const path=(d,extra='')=>'<path d="'+d+'" fill="'+ink+'" fill-rule="evenodd" '+extra+'/>';
 const glyphs={
 D:'M8 0H48C91 0 116 27 116 70S91 140 48 140H8Q0 140 0 132V8Q0 0 8 0Z M38 34V106H48C68 106 80 93 80 70S68 34 48 34Z',
 K:'M8 0H28Q36 0 36 8V49L77 3Q80 0 85 0H116Q123 0 118 6L66 66 120 133Q125 140 117 140H84Q79 140 76 136L36 86V132Q36 140 28 140H8Q0 140 0 132V8Q0 0 8 0Z',
 M:'M8 0H28Q34 0 37 5L68 53 99 5Q102 0 108 0H128Q136 0 136 8V132Q136 140 128 140H106Q98 140 98 132V65L74 100Q68 109 62 100L38 65V132Q38 140 30 140H8Q0 140 0 132V8Q0 0 8 0Z'
 };
 let content='';
 if(!options.transparent)content+='<rect width="512" height="512" fill="'+bg+'"/>';
 if(name==='DL'){
  content+=path('M76 144H160C232 144 280 188 280 256S232 368 160 368H76Q68 368 68 360V152Q68 144 76 144Z M122 194V318H160C201 318 226 295 226 256S201 194 160 194Z');
  content+=path('M300 144H334Q342 144 342 152V318H430Q438 318 438 326V360Q438 368 430 368H300Q292 368 292 360V152Q292 144 300 144Z');
  content+='<rect x="410" y="273" width="28" height="28" rx="2" fill="'+accent+'"/>';
 }else if(name==='DKKM'){
  content+='<g transform="translate(104 102)">'+path(glyphs.D)+'</g>';
  content+='<g transform="translate(246 102)">'+path(glyphs.K)+'</g>';
  content+='<g transform="translate(104 258)">'+path(glyphs.K)+'</g>';
  content+='<g transform="translate(246 258)">'+path(glyphs.M)+'</g>';
  content+='<rect x="397" y="366" width="30" height="32" rx="3" fill="'+accent+'"/>';
 }else{
  content+='<g transform="translate(78 188) scale(.92)">'+path(glyphs.K)+'<g transform="translate(124)">'+path(glyphs.K)+'</g><g transform="translate(248)">'+path(glyphs.M)+'</g></g>';
  content+='<rect x="78" y="334" width="318" height="20" rx="5" fill="'+ink+'"/><rect x="408" y="334" width="24" height="20" rx="2" fill="'+accent+'"/>';
 }
 const clipping=options.round?'<defs><clipPath id="mono-circle"><circle cx="256" cy="256" r="256"/></clipPath></defs><g clip-path="url(#mono-circle)">'+content+'</g>':content;
 return '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 512 512" role="img" aria-label="Monogramme '+name+'"><title>Monogramme '+name+' - Kinq Konq Maker</title>'+clipping+'</svg>';
}
const MONOGRAM_ORIGINALS=[
 {name:'DL',colors:['#003d46','#123d44','#fff1d8','#d85f35','#d85f35']},
 {name:'DKKM',colors:['#003d41','#113e41','#fff0d6','#e26023','#e26023']},
 {name:'KKM',colors:['#131d17','#16241c','#fff0d2','#f56c05','#f56c05']}
].map(o=>({...o,category:'Monogrammes',tags:'monogramme vectoriel svg lettres initiales '+o.name,transparent:true,src:'data:image/svg+xml;base64,'+btoa(monogramSVG(o.name,{bg:o.colors[0],face:o.colors[2],accessory:o.colors[3]}))}));
