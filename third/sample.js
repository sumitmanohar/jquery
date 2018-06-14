$(document).ready(()=>{
$('#flip').click(()=>{
	$('#myModal').css('display','block')
})
$('span').click(()=>{
	$('#myModal').css('display','none')
})
$(window).click(function (e) {
if ( $(e.target).is(".modal")) {
$(".modal").css("display", "none");

}

})
$("#close").click(()=>{
	$('#myModal').css('display','none')
})
})

