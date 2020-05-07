function circles(){
    const dimensions=['25px', '75px', '100px', '150px', '200px', '125px']

    $( ".box li" ).each(function( i ) {
        $( this ).css({'width': dimensions[i], 
        'height': dimensions[i],'border': 'none', 
        'background': 'rgba(249, 48, 72, 0.2)',
        'border-radius':'100%'});
    });

}

function squares(){
    const dimensions=['25px', '75px', '100px', '150px', '200px', '125px']

    $( ".box li" ).each(function( i ) {
        $( this ).css({'width': dimensions[i], 
        'height': dimensions[i],'border': 'none', 
        'background': 'rgba(249, 48, 72, 0.2)',
        'border-radius':'0'});
    });

}

function triangles(){
    const dimensions=['0 50px 86.6px 50px', '0 62.5px 108.3px 62.5px',
    '0 12.5px 21.7px 12.5px', '0 25px 43.3px 25px', 
    '0 75px 129.9px 75px', '0 100px 173.2px 100px']

    $( ".box li" ).each(function( i ) {
        $( this ).css({'width': '0', 'height': '0',
        'border-style': 'solid', 'border-width': dimensions[i],
        'border-color':'transparent transparent rgba(249, 48, 72, .2) transparent',
        'background': 'none', 'border-radius':'0'});
    });
}

function pacmans(){
    const dimensions=['10px', '20px', '50px', '75px', '100px', '60px']

    $( ".box li" ).each(function( i ) {
        $( this ).css({'background-color': 'transparent', 
        'width': '0', 'height': '0', 
        'border-right' : dimensions[i] + ' solid transparent',
        'border-top' : dimensions[i] + ' solid rgba(249, 48, 72, .2)',
        'border-left' : dimensions[i] + ' solid rgba(249, 48, 72, .2)',
        'border-bottom': dimensions[i] + ' solid rgba(249, 48, 72, .2',
        'border-radius' : dimensions[i]});
    });
}

$(document).ready(function(){
    const insert="<table>" +
    "<tbody>" +
        "<tr>" +
            "<td>" +
                "<button onclick='squares()' class='buttons' id='squares'></button>" +
            "</td>" +
            "<td>" +
                "<button onclick='circles()' class='buttons' id='circles'></button>" +
            "</td>" +
            "<td>"+
                "<button onclick='triangles()' class='buttons' id='triangles'></button>" +
            "</td>" +
            "<td>" +
                "<button onclick='pacmans()' class='buttons' id='pacmans'></button>" +
            "</td>" +
        "</tr>" +
    "</tbody>" +
"</table>"

$("#hi").hover(function(){
    $( ".box" ).css( "display", "block");
    $(".banner").append(insert)
    squares();
    $("#hi").remove()
    });
}); 

$(document).ready(function(){
    $("#me").mouseenter(function(){
        $(this).css("opacity", ".5")
    });
    $("#me").mouseleave(function(){
        $(this).css("opacity", "1")
});

}); 

    $("#me").click(function() {

        $( ".box" ).toggle();
    
      });



      $(document).ready(function(){
        $('#mail').on('click',function(){
           window.location.href = "mailto:taylor.palm@yahoo.com?subject=Hey Taylor, I saw your portfolio...&body=Let's Chat!"; 
        });
    });