d3.text("veggies.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select("#veggiestable")
        .append("table")

        .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")

        .selectAll("td")
            .data(function(d) { return d; }).enter()
            .append("td")
            .text(function(d) { return d; })
    d3.select("#veggiestable")
    .select("table")
    .selectAll("tr")
    .filter((d, i) => i === 8) // Select the ninth row (index 8)
    .remove();
});
