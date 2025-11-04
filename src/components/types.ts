// Fix: Import React to make the React namespace available for type definitions.
import * as React from 'react';

export interface QueryItem {
  id: string;
  title: string;
  description: string;
  query?: string;
  data?: {
    type: 'table_list';
    tables: string[];
  };
}

export interface QueryCategory {
  id:string;
  name: string;
  items: QueryItem[];
}

export interface DbConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  db: string;
}

export interface AssistantStep {
  title: string;
  explanation: React.ReactNode;
  query: ((questId: string, npcId: string) => string) | null;
}
