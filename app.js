// Start JQ Area
$(document).ready(function(){
  //Start Header
     //Start Nav bar
     $(".navbuttons").click(function(){
       $(this).toggleClass('crossxs');
     });
     //End Nav bar
  //End Header

  //Start Login Box
  $('#open-btn').click(function(){
    document.getElementById("form-popup").style.display="block";
  });
  $('#formclose-btn').click(function(){
      document.getElementById("form-popup").style.display="none";
  })
  //End Login Box

});
//End JQ Area

//Start Js Area
    //Start Student Counter section
    var getcountervalues=document.querySelectorAll('.countervalues');
    //console.log(getcountervalues);
    getcountervalues.forEach(function(getcountervalue){
      getcountervalue.textContent=0;
      //console.log(getcountervalue);

      const updatecounter=function(){
        //console.log("i am working");
        const getcttarget=+getcountervalue.getAttribute('data-target');
        //console.log(getcttarget);
        //console.log(typeof getcttarget,getcttarget);
        const getctcontent=+getcountervalue.innerText;
        console.log(typeof getctcontent);

        const incnumber=getcttarget/100;
        console.log(incnumber);

        if(getctcontent<getcttarget){
          getcountervalue.textContent=getctcontent+incnumber;
          setTimeout(updatecounter,50);
        }
      }
      updatecounter();

    });
    //End Student Counter section

    // Start Rating Section
    // start code for google Chart api
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Mayanmar',     8],
          ['Thailand',      2],
          ['Singnapore',  4],
          ['Indonesia', 2],
          ['Sri Lanka',    8]
        ]);

        var options = {
          title: 'International Students',
          //is3D:true,
          //pieHole:0.4,
          width:550,
          height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
        // end code for google Chart api
    // End Rating Section

    const getyear=document.getElementById('getyear');
    const getfullyear=new Date().getUTCFullYear();
    getyear.textContent=getfullyear;
//End Js Area
