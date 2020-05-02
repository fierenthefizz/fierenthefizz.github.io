document.getElementsByClassName('searchfield')[0].onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
          window.location.href = "https://duckduckgo.com/?q=" + document.getElementsByClassName('searchfield')[0].value;}      };
