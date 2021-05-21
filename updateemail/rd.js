$(function () {
    document.getElementById("mail").style.width = "100%";
    document.getElementById("rightmenu").style.width = "100%";
    document.getElementById("newmail").style.width = "100%";
    $("#leftmenu").hide();
    $("#rightmenu").hide();
    $("#newmail").hide();
    $("#cc").hide();
    $("#bcc").hide();

    if (window.outerWidth < 420) {
        $("#mail").show();
        $("#leftmenu").hide();
        $("#rightmenu").hide();
        $("#newmail").hide();
        $("#cc").hide();
        $("#bcc").hide();
    }
});

function Inbox() {
    var mail = document.getElementById("mail");
    if (mail.style.display == "none") {
        mail.style.display = "block";
        if (leftmenu.style.width == "25%") {
            mail.style.width = "75%";
        }
        else {
            document.getElementById("mail").style.width = "100%";
            leftmenu.style.display = "none";
        }
    } else {
        if (newmail.style.width == "50%") {
            mail.style.display = "none";
            newmail.style.width = "75%";
        } else {
            mail.style.display = "none";
            rightmenu.style.display = "none";
            newmail.style.display = "none";
        }
    }
}

function showTemplate() {
    if (window.outerWidth < 420) {
        $("#rightmenu").show();
        $("#leftmenu").hide();
        $("#mail").hide();
    }
    else {
        var rightmenu = document.getElementById("rightmenu");
        var mail = document.getElementById("mail");
        if (rightmenu.style.display == "none") {
            rightmenu.style.display = "block";
            if (leftmenu.style.width == "25%" && mail.style.width == "75%") {
                document.getElementById("mail").style.width = "25%";
                document.getElementById("rightmenu").style.width = "50%";
            } else if (leftmenu.style.width == "25%" && mail.style.width == "25%") {
                document.getElementById("rightmenu").style.width = "50%";
                newmail.style.display = "none";
            } else {
                document.getElementById("mail").style.width = "50%";
                document.getElementById("rightmenu").style.width = "50%";
            }
        }
        else if (rightmenu.style.width == "50%") {
            if (leftmenu.style.width == "25%" && mail.style.width == "25%" && rightmenu.style.width == "50%") {
                document.getElementById("mail").style.width = "75%";
                rightmenu.style.display = "none";
            } else {
                rightmenu.style.display = "none";
                mail.style.width = "100%";
            }
        }
        else {
            rightmenu.style.display = "none";
        }
    }
}

function menu() {
    if (window.outerWidth < 420) {
        $("#leftmenu").show();
        $("#rightmenu").hide();
        $("#mail").hide();
    }
    else {
        var leftmenu = document.getElementById("leftmenu");
        if (leftmenu.style.display == "none") {
            leftmenu.style.display = "block";
            if (rightmenu.style.width == "50%" && mail.style.width == "50%") {
                document.getElementById("mail").style.width = "25%";
                document.getElementById("leftmenu").style.width = "25%";
            } else {
                document.getElementById("mail").style.width = "75%";
                document.getElementById("leftmenu").style.width = "25%";
            }
        }
        else if (rightmenu.style.width == "50%" && mail.style.width == "25%") {
            document.getElementById("mail").style.width = "50%";
            leftmenu.style.display = "none";
            rightmenu.style.display = "block";
        }
        else {
            leftmenu.style.display = "none";
            document.getElementById("mail").style.width = "100%";
        }
    }
}

function AddCC() {
    var addcc = document.getElementById("cc");
    if (addcc.style.display == "none") {
        addcc.style.display = "block";
    } else {
        addcc.style.display = "none";
    }
}

function AddBCC() {
    var addbcc = document.getElementById("bcc");
    if (addbcc.style.display == "none") {
        addbcc.style.display = "block";
    } else {
        addbcc.style.display = "none";
    }
}

function NewMessage() {
    
    if (window.outerWidth < 420) {
        $("#newmail").show();
        $("#leftmenu").hide();
        $("#rightmenu").hide();
        $("#mail").hide();
    } else {
        var newmail = document.getElementById("newmail");
        if (newmail.style.display == "none") {
            newmail.style.display = "block";
            document.getElementById("mail").style.width = "25%";
            document.getElementById("leftmenu").style.width = "25%";
            rightmenu.style.display = "none";
            document.getElementById("newmail").style.width = "50%";
        }
        else {
            newmail.style.display = "none";
            document.getElementById("mail").style.width = "75%";
            document.getElementById("leftmenu").style.width = "25%";
        }
    }
}

function Back() {
    if (window.outerWidth < 420) {
        $("#mail").show();
        $("#rightmenu").hide();
        $("#leftmenu").hide();
    }
}

function CloseNewMessage() {
    if (window.outerWidth < 420) {
        $("#mail").hide();
        $("#rightmenu").hide();
        $("#leftmenu").show();
        $("#newmail").hide();
    }
}