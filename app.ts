import { series } from './data';

function displaySeries(): void {
  const seriesTable = document.getElementById('series-table');
  
  if (seriesTable) {
    series.forEach(serie => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      seriesTable.appendChild(row);
    });
  }
}

function calculateAverageSeasons(): number {
  const totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
  return totalSeasons / series.length;
}

function displayAverageSeasons(): void {
  const seriesTable = document.getElementById('series-table');
  const avgSeasons = calculateAverageSeasons();
  
  if (seriesTable) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td colspan="4">Average Seasons: ${avgSeasons.toFixed(2)}</td>
    `;
    seriesTable.appendChild(row);
  }
}


displaySeries();
displayAverageSeasons();
