export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
}

export interface ToolFormState {
  input: string;
  output: string;
  error: string | null;
  isLoading: boolean;
}

export interface SearchParams {
  q?: string;
  category?: string;
}
