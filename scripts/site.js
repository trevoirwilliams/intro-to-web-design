function ClearForm(){
    //document.getElementById("fullname").value = '';
    document.getElementById("contactForm").reset();
}

function hidePTags(){
    let ptags = document.getElementsByTagName('p');
    for(let item of ptags){
        // item.style.visibility = 'hidden'; // removes element, leaves space
        item.style.display = 'none'; // removes element and space
    }
}

$('#jqueryBtn').click(function(){
    $('p').hide();
})

$(function(){
    var pages = ['index','about','contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(item){
        if(pathname.includes(pages[item])){
            $(this).addClass('active');
            $(this).attr('aria-current', 'page');
        }
    })
});