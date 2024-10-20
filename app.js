"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
function displaySeries() {
    var seriesTable = document.getElementById('series-table');
    if (seriesTable) {
        data_1.series.forEach(function (serie) {
            var row = document.createElement('tr');
            row.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n      ");
            seriesTable.appendChild(row);
        });
    }
}
function calculateAverageSeasons() {
    var totalSeasons = data_1.series.reduce(function (total, serie) { return total + serie.seasons; }, 0);
    return totalSeasons / data_1.series.length;
}
function displayAverageSeasons() {
    var seriesTable = document.getElementById('series-table');
    var avgSeasons = calculateAverageSeasons();
    if (seriesTable) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td colspan=\"4\">Average Seasons: ".concat(avgSeasons.toFixed(2), "</td>\n    ");
        seriesTable.appendChild(row);
    }
}
displaySeries();
displayAverageSeasons();
