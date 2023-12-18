function rapihan() {
    var format = document.getElementById("mySelect").value;

    let a = document.getElementById("keywords").value.split(" ").join(" ");
    let b = a.split("\n");
    var res = "";
    for (let i = 0; i < b.length; i++) {
      if (i % 2 == 0) {
        if (format == 1) {
          var c = b[i] + " (" + b[i + 1] + " percobaan)\n";
          res += c;
        } else if (format == 2) {
          var c = b[i] + " (" + b[i + 1] + " kali)\n";
          res += c;
        } else if (format == 3) {
          var c = b[i] + " - " + b[i + 1] + "\n";
          res += c;
        } else if (format == 4) {
          var c = b[i] + "\n";
          res += c;
        } else {
          var c = b[i] + "\n";
          res += c;
        }
      }
    }
    $("#ip").val(res);

    var jmlDt = b.length;
    $("#jml").text(jmlDt/2 + " Data");
  }

  function salin() {
    var copyText = document.getElementById("ip");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }