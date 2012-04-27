function checkAll(checkbox, stub) {
	if (!stub) {
		stub = 'cb';
	}
	if (checkbox.form) {
		var c = 0;
		for ( var i = 0, n = checkbox.form.elements.length; i < n; i++) {
			var e = checkbox.form.elements[i];
			if (e.type == checkbox.type) {
				if ((stub && e.id.indexOf(stub) == 0) || !stub) {
					e.checked = checkbox.checked;
					c += (e.checked == true ? 1 : 0);
				}
			}
		}
		if (checkbox.form.boxchecked) {
			checkbox.form.boxchecked.value = c;
		}
		return true;
	} else {
		// The old way of doing it
		var f = document.adminForm;
		var c = f.toggle.checked;
		var n = checkbox;
		var n2 = 0;
		for ( var i = 0; i < n; i++) {
			var cb = f[stub + '' + i];
			if (cb) {
				cb.checked = c;
				n2++;
			}
		}
		if (c) {
			document.adminForm.boxchecked.value = n2;
		} else {
			document.adminForm.boxchecked.value = 0;
		}
	}
}

function isChecked(isitchecked) {
	if (isitchecked == true) {
		document.adminForm.boxchecked.value++;
	} else {
		document.adminForm.boxchecked.value--;
	}
}

function submit(url, option) {
	var f = document.adminForm;
	if (f.boxchecked.value == 0) {
		alert('Vui lòng chọn dòng!');
	} else {
		if (option == 0) {
			var answer = confirm("Bạn có muốn xóa?");
			if (answer) {
				f.action = url;
				f.submit();
			}
		} else {			
			f.action = url;
			f.submit();
		}
	}
}


