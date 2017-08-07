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


      // extrawork
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

      // timeline
      $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showTimeline,
                         parseNumbers: true } );
      });

      function showTimeline(data, tabletop) {
        var source   = $("#timeline-template").html();
        var template = Handlebars.compile(source);

        $.each( tabletop.sheets("timeline").all(), function(i, timeline) {
          var html = template(timeline);
          $("#timeline").append(html);
        });
      };

      // skills
      $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showSkills,
                         parseNumbers: true } );
      });

      function showSkills(data, tabletop) {
        var source   = $("#skills-template").html();
        var template = Handlebars.compile(source);

        $.each( tabletop.sheets("skills").all(), function(i, skills) {
          var html = template(skills);
          $("#skills").append(html);
        });
      };
    
     

$('#viewMore').click(function() {
   
    $('#extra-work-container').slideDown();
    $('html,body').animate({
            scrollTop: $(this).offset().top-100
        }, 1000);
    $('#viewMore').toggle();
    $('#viewLess').toggle();           
});

$('#viewLess').click(function() {
    $('#extra-work-container').slideUp(300);
    // $('html,body').animate({
    //         scrollTop: $(this).offset().top-1200
    //     }, 1000);
    $('#viewMore').toggle();
    $('#viewLess').toggle() ;           
});

