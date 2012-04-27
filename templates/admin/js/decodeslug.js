function decode() {
    var input = document.getElementById('name');
    var output = document.getElementById('alias');

    slugcontent = input.value.toLowerCase();
    var from = "đàáäâăặắầẩẫắẵẳậạếềễểệèéëêẹìíïîịòóöôọốồổỗộớờởỡợụứừửữụùúüûñç·/_,:;";
    var to   = "daaaaaaaaaaaaaaaeeeeeeeeeeiiiiiooooooooooooooouuuuunuuuuuc------";
    for (var i=0, l=from.length ; i<l ; i++) {
    	slugcontent = slugcontent.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    // convert special chars
    var   accents={a:/\u00e1/g,e:/u00e9/g,i:/\u00ed/g,o:/\u00f3/g,u:/\u00fa/g,n:/\u00f1/g}
    for (var i in accents) slugcontent = slugcontent.replace(accents[i],i);

	var slugcontent_hyphens = slugcontent.replace(/\s/g,'-');
	var finishedslug = slugcontent_hyphens.replace(/[^a-zA-Z0-9\-]/g,'');
    finishedslug = finishedslug.toLowerCase();  
    
    output.value = finishedslug;
}
function decodeSlug() {
    var input = document.getElementById('alias');
    var output = document.getElementById('alias');

    slugcontent = input.value.toLowerCase();
    var from = "đàáäâăắặầẩẫắẵẳậạếềễểệèéëêẹìíïîịòóöôọốồổỗộớờởỡợụứừửữụùúüûñç·/_,:;";
    var to   = "daaaaaaaaaaaaaaaeeeeeeeeeeiiiiiooooooooooooooouuuuunuuuuuc------";
    for (var i=0, l=from.length ; i<l ; i++) {
    	slugcontent = slugcontent.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    // convert special chars
    var   accents={a:/\u00e1/g,e:/u00e9/g,i:/\u00ed/g,o:/\u00f3/g,u:/\u00fa/g,n:/\u00f1/g}
    for (var i in accents) slugcontent = slugcontent.replace(accents[i],i);

	var slugcontent_hyphens = slugcontent.replace(/\s/g,'-');
	var finishedslug = slugcontent_hyphens.replace(/[^a-zA-Z0-9\-]/g,'');
    finishedslug = finishedslug.toLowerCase();  
    
    output.value = finishedslug;
}