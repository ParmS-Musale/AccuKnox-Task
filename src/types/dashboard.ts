export interface Widget {
  id: string;
  name: string;
  text: string;
  category: string;
  isActive?: boolean;
}

export interface DashboardCategory {
  id: string;
  name: string;
  widgets: Widget[];
}

export interface DashboardData {
  [categoryName: string]: Widget[];
}