javascript:(function(){s=prompt("MARC%20field?");if(s){pwin=window.open('','_blank','menubar=yes,scrollbars=yes,location=no,height=600,width=850');if(s=="ldr"||s=="LDR"){pwin.location="http://www.loc.gov/marc/bibliographic/bdleader.html";}else{f=s.charAt(0);if(s>840&&s<880){d="holdingsformat";}else{d="bibformats";}pwin.location="http://www.oclc.org/"+d+"/en/"+f+"xx/"+s+".html";}}})();