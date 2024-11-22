$("h1").addClass("big-title margin-50");
$("button").click(function(){
    $("h1").css("color", "purple");
});
$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>append</button>");

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});