d3.text("veggies.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    // Create the table
    var container = d3.select("#veggiestable")
        .append("table");

    var rows = container.selectAll("tr")
        .data(parsedCSV).enter()
        .append("tr");

    rows.selectAll("td")
        .data(function(d) { return d; }).enter()
        .append("td")
        .text(function(d) { return d; });

    // Remove non-English text in the ninth row (index 8)
    d3.select("#veggiestable")
        .select("table")
        .selectAll("tr")
        .filter((d, i) => i === 8) // Select the ninth row
        .selectAll("td")
        .text(function(d) {
            // Remove non-English text using regex
            return d.replace(/[^\x00-\x7F]/g, ""); // Removes non-ASCII characters
        });
});
