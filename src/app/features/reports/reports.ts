import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { ChartData, ChartConfiguration, ChartDataset } from 'chart.js';

import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
  selector: 'app-reports',
  imports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    MatMenuModule,
    MatButtonModule,
    BaseChartDirective
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports {
  categoryEfficiency = [
    { name: 'Housing', change: 0, isUp: false, health: 100 },
    { name: 'Food & Dining', change: 12, isUp: true, health: 85 },
    { name: 'Travel', change: 4, isUp: false, health: 20 },
    { name: 'Shopping', change: 22, isUp: true, health: 92 },
  ];

  // 1. Line Chart: Income vs Spending
  public lineChartData: ChartData<'line'> = {
    labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      {
        data: [4200, 4500, 5100, 4100, 4800, 5200],
        label: 'Joint Income',
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: 'origin',
        tension: 0.4,
      },
      {
        data: [3100, 3800, 4900, 3200, 3500, 3900],
        label: 'Joint Spending',
        borderColor: '#f43f5e',
        backgroundColor: 'rgba(244, 63, 94, 0.1)',
        fill: 'origin',
        tension: 0.4,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'bottom' },
    },
    scales: {
      y: { grid: { display: false } },
      x: { grid: { display: false } },
    },
  };

  // 2. Doughnut Chart: Partner Contributions
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['You', 'Sarah'],
    datasets: [
      {
        data: [1800, 2400],
        backgroundColor: ['#6366f1', '#a5b4fc'],
        borderWidth: 0,
        // TypeScript now sees this because we typed the ChartData as 'doughnut'
        cutout: '75%',
        borderRadius: 10,
        spacing: 5,
      } as ChartDataset<'doughnut'>, // Explicitly casting ensures the property is recognized
    ],
  };

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => ` ${context.label}: $${context.formattedValue}`,
        },
      },
    },
  };

  // Integration Note:
  // Use Chart.js in ngAfterViewInit to render the graphs.
  // 'mainFinanceChart' would be a bar chart.
  // 'contributionDonut' would be a donut chart showing Sarah vs You.
}
