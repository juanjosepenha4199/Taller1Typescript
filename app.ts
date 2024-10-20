import { series } from './data';

function loadSeries(): void {
  const tableBody: HTMLElement | null = document.getElementById('series-table');
  if (!tableBody) return;

  let totalSeasons = 0;

  series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);
    totalSeasons += serie.seasons;
  });

  const averageSeasons: number = totalSeasons / series.length;
  const averageRow: HTMLElement | null = document.getElementById('average-row');

  if (averageRow) {
    averageRow.textContent = `Seasons Average: ${averageSeasons.toFixed(2)}`;
  } else {
    const newRow = document.createElement('div');
    newRow.id = 'average-row';
    newRow.textContent = `Seasons Average: ${averageSeasons.toFixed(2)}`;
    document.body.appendChild(newRow);
  }
}

document.addEventListener('DOMContentLoaded', loadSeries);
