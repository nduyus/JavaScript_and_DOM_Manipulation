var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function (ufoSighting) {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    if (d3.select("#datetime").property("value") != "") {
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#datetime");

        // Get the value property of the input element
        var inputValue = inputElement.property("value");

        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
        var tbody = d3.select("tbody");
        tbody.html("");
        filteredData.forEach(function (ufoSighting) {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(function ([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        d3.select("#datetime").property("value", "");
    };
    if (d3.select("#city").property("value") != "") {
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#city");

        // Get the value property of the input element
        var inputValue = inputElement.property("value");

        var filteredData = tableData.filter(tableData => tableData.city === inputValue);
        var tbody = d3.select("tbody");
        tbody.html("");
        filteredData.forEach(function (ufoSighting) {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(function ([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        d3.select("#city").property("value", "");
    };
    if (d3.select("#state").property("value") != "") {
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#state");

        // Get the value property of the input element
        var inputValue = inputElement.property("value");

        var filteredData = tableData.filter(tableData => tableData.state === inputValue);
        var tbody = d3.select("tbody");
        tbody.html("");
        filteredData.forEach(function (ufoSighting) {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(function ([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        d3.select("#state").property("value", "");
    };
    if (d3.select("#country").property("value") != "") {
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#country");

        // Get the value property of the input element
        var inputValue = inputElement.property("value");

        var filteredData = tableData.filter(tableData => tableData.country === inputValue);
        var tbody = d3.select("tbody");
        tbody.html("");
        filteredData.forEach(function (ufoSighting) {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(function ([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        d3.select("#country").property("value", "");
    };
    if (d3.select("#shape").property("value") != "") {
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#shape");

        // Get the value property of the input element
        var inputValue = inputElement.property("value");

        var filteredData = tableData.filter(tableData => tableData.shape === inputValue);
        var tbody = d3.select("tbody");
        tbody.html("");
        filteredData.forEach(function (ufoSighting) {
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(function ([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        d3.select("#shape").property("value", "");
    };
    filteredData = data;
});