var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1WuhbvcNVx_Rx1_ze50WheK1n2j9djFhyXqABE19NNVc/pubhtml';

      $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showWork,
                         parseNumbers: true } );
      });
      function showWork(data, tabletop) {
        var source   = $("#work-template").html();
        var template = Handlebars.compile(source);

        $.each( tabletop.sheets("work").all(), function(i, work) {
          var html = template(work);
          $("#selectWork").append(html);
        });
      };



      $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showExtraWork,
                         parseNumbers: true } );
      });

      function showExtraWork(data, tabletop) {
        var source   = $("#extra-work-template").html();
        var template = Handlebars.compile(source);

        $.each( tabletop.sheets("extra-work").all(), function(i, extraWork) {
          var html = template(extraWork);
          $("#extra-work").append(html);
        });
      };
    
     


// $(function() { init() });

// 			var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1WuhbvcNVx_Rx1_ze50WheK1n2j9djFhyXqABE19NNVc/pubhtml';

// 			// once tabletop is ready, call the function showInfo
// 			function init() {
// 				Tabletop.init( { 
// 					key: public_spreadsheet_url,
// 				    callback: showInfo,
// 				    simpleSheet: true } )
// 			}
			

// 			// showInfo understands that data comes from the key we set up in Tabletop.init
// 			function showInfo(data, tabletop) {
// 				var source   = $("#table-template").html();
// 				var template = Handlebars.compile(source);

// 				// these are for the individual lines
// 				// document.getElementById("simple-table").innerHTML = "<strong>Months:</strong> " + [ data[0].Name, data[1].Name, data[2].Name ].join(", ") 
// 		  //       + "<br> <strong>Weather: </strong>" + [ data[0].Weather, data[1].Weather, data[2].Weather ].join(", ")
// 		  //       + "<br> <strong>Average: </strong>" + [ data[0].Average, data[1].Average, data[2].Average ].join(", ");
// 		  //       console.log(data);
				
// 				$("#live-table").append("<tr class='hidden-header'><th><b>Month</b></th><b>" + "<th>Weather</th>" + "<th>Average</th> <th>Sunlight</th></tr>");

// 				$.each(tabletop.sheets("tabletopTest").all(), function(i, element) {
// 					var html = template(element);
// 					$("#live-table").append(html);
// 				});


		        

				
// 			}



// // document.write("The published spreadsheet is located at <a target='_new' href='" + public_spreadsheet_url + "'>" + public_spreadsheet_url + "</a>");  


// // Full table tabletop w/handlebars
// // When the document is ready, initialize tabletop.js
