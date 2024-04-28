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
            sourceIP: ip,
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
141.98.11.96 - 84
10.88.56.113 - 72
180.178.103.126 - 6
104.248.146.138 - 2
167.71.221.194 - 2
31.220.92.91 - 1
54.69.173.158 - 1
103.20.206.181 - 1
45.33.50.104 - 1
143.198.203.67 - 1
10.174.0.2 - 1
93.56.199.127 - 1
185.98.138.98 - 1
180.222.187.50 - 1
113.22.32.193 - 1
128.199.124.176 - 1
45.38.189.7 - 97
`;


// Generate JSON data from raw data
const jsonData = generateJsonFromRawData(rawData);

// Print the JSON data
console.log(jsonData);