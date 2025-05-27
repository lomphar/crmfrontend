import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-screen flex flex-col">
      <!-- Topbar -->
      <header class="bg-blue-600 text-white px-6 py-4 shadow-md">
        <h1 class="text-xl font-semibold">BeepChain CRM</h1>
      </header>

      <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-100 p-4 space-y-4 border-r border-gray-300">
          <nav class="flex flex-col space-y-2">
            <a routerLink="/dashboard" class="text-gray-800 hover:bg-blue-100 rounded px-3 py-2">Dashboard</a>
            <a routerLink="/clientes" class="text-gray-800 hover:bg-blue-100 rounded px-3 py-2">Clientes</a>
            <a routerLink="/produtos" class="text-gray-800 hover:bg-blue-100 rounded px-3 py-2">Produtos</a>
            <a routerLink="/chatbot" class="text-gray-800 hover:bg-blue-100 rounded px-3 py-2">Chatbot</a>
            <button class="mt-4 text-red-600 hover:underline text-left px-3 py-2">Sair</button>
          </nav>
        </aside>

        <!-- Main content -->
        <main class="flex-1 p-6 overflow-y-auto">
          <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
          <p class="text-gray-700">Bem-vindo ao seu painel de controle.</p>
        </main>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent {}
