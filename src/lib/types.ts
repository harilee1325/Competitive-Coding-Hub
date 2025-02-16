export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Category = 
  | 'Arrays'
  | 'Strings'
  | 'Trees'
  | 'Dynamic Programming'
  | 'Graphs'
  | 'Hash Tables'
  | 'Linked Lists';
export type ProgrammingLanguage = 'JavaScript' | 'Python' | 'Java' | 'C++' ;

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  category: Category;
  language: ProgrammingLanguage;
  testCases: TestCase[];
  solutionApproach: string;
  timeComplexity: string;
  spaceComplexity: string;
  created: Date;
  updated: Date;
}

export interface TestCase {
  input: string;
  output: string;
  explanation?: string;
}

export interface FilterState {
  difficulty: Difficulty | '';
  category: Category | '';
  language: ProgrammingLanguage | '';
} 