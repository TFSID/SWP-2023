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

function generate_csv(){
  function generateJsonFromRawData(rawData) {
    // Split the raw data by lines
    const lines = rawData.trim().split("\n");
    
    // Initialize an empty array to store items
    const items = [];
    
    // Process each line of raw data
    for (const line of lines) {
        // Split the line by " - " to get IP address and count
        const [ip, count] = line.split(" - ");
        // Create an item object
        const item = {
            cccaDestination: ip,
            jumlah: parseInt(count)
        };
        // Append the item to the array
        items.push(item);
    }
    
    // Create an object with the "items" key
    const result = { items };
    
    return result;
}

// Example raw data



const rawData = `
hmbhcqmrqm.com - 54
fzgrpqktmq.com - 51
ercfncabme.com - 48
ngqajnrqgo.com - 44
hgrbcdchpc.com - 44
bqpddrhdno.com - 42
iqmfbbdpbq.com - 42
irqrbdmjig.com - 42
bbnrdnicmo.com - 40
faddbbhcno.com - 40
cfdceqrdpr.com - 40
bhcomfrcfb.com - 40
hjngdagmjm.com - 40
ahdnfppcgf.com - 36
inqmjbbgnn.com - 36
gqbmnacghq.com - 36
hrfbmmdipd.com - 34
jeaiqddgmq.com - 34
odnnbpcccg.com - 34
mhdgjcfgbd.com - 34
jegbcrnbmh.com - 33
ijraobngqd.com - 32
gtxvdqvuweqs.com - 32
brgfmfncnn.com - 32
onogqdnghj.com - 32
fqjoqgmbdf.com - 31
rqedfdbbqd.com - 28
wmcbeuwnnbmf.com - 27
mmjbvlhudk.net - 25
fwsprpowva.com - 24
`;


// Generate JSON data from raw data
const jsonData = generateJsonFromRawData(rawData);

// Print the JSON data
console.log(jsonData);
const ruleName = `
ruleName - 6
Possible DGA - DNS (Response) - 6032
Possible CONFICKER DNS Response - 254
TeamViewer RMM - DNS (Response) - 14
Possible attacker manipulator (IP) - DNS (Response) - 12
Possible CRILOCK DNS Response - 10`

const cccaDestination = `
hostName - 453
hmbhcqmrqm.com - 54
fzgrpqktmq.com - 51
ercfncabme.com - 48
ngqajnrqgo.com - 44
hgrbcdchpc.com - 44
bqpddrhdno.com - 42
iqmfbbdpbq.com - 42
irqrbdmjig.com - 42
bbnrdnicmo.com - 40
faddbbhcno.com - 40
cfdceqrdpr.com - 40
bhcomfrcfb.com - 40
hjngdagmjm.com - 40
ahdnfppcgf.com - 36
inqmjbbgnn.com - 36
gqbmnacghq.com - 36
hrfbmmdipd.com - 34
jeaiqddgmq.com - 34
odnnbpcccg.com - 34
mhdgjcfgbd.com - 34
jegbcrnbmh.com - 33
ijraobngqd.com - 32
gtxvdqvuweqs.com - 32
brgfmfncnn.com - 32
onogqdnghj.com - 32
fqjoqgmbdf.com - 31
rqedfdbbqd.com - 28
wmcbeuwnnbmf.com - 27
mmjbvlhudk.net - 25
fwsprpowva.com - 24`

const destinationIP = `
dst - 31
10.15.42.240 - 5101
10.20.255.2 - 597
10.208.5.11 - 409
10.2.14.18 - 52
10.133.86.73 - 32
10.0.127.82 - 17
10.109.5.154 - 14
10.0.127.81 - 14
10.203.58.125 - 12
10.15.42.85 - 10
10.133.144.140 - 8
10.133.80.120 - 8
10.133.88.99 - 6
10.118.1.1 - 6
10.169.4.31 - 5
172.20.12.93 - 4
10.201.47.16 - 4
10.133.145.207 - 4
10.201.254.1 - 4
10.5.0.81 - 2
10.203.83.227 - 2
10.1.237.169 - 2
10.203.59.61 - 2
10.133.147.71 - 2
10.105.3.52 - 1
10.169.18.55 - 1
10.201.19.218 - 1
10.2.236.46 - 1
10.103.114.188 - 1
10.132.22.10 - 1`

 // Initialize an empty array to store CSV rows
const csvRows = [];

// Add CSV header
csvRows.push(['sourceIP', 'Jumlah']);

// Process each item in the JSON data
for (const item of jsonData.items) {
      csvRows.push([item.nama, item.jumlah]);
  }

// Join rows with line breaks
const csvContent = csvRows.map(row => row.join(',')).join('\n');

return csvContent;

}