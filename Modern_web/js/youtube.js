//Initialize the viz variable
var viz;

window.onload=function() {
  var vizDiv= document.getElementById('myViz');
  var vizURL= 'https://youtu.be/ItQBoJjREkk'
  var option= {
    width: '680px',
    height: '540px',
    hideToolbar: true ,
    hideTabs: true
    
    
  };
  
  viz = new tableau.Viz(vizDiv, vizURL, options);
};