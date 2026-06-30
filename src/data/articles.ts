export type Article = {
  id: string;
  title: string;
  author: string;
  readTime: string;
};

export const articles: Article[] = [
  {id: '1', title: 'Understanding React Hooks', author: 'Dan Abramov', readTime: '5 min'},
  {id: '2', title: 'Clean Architecture in Mobile Apps', author: 'Robert Martin', readTime: '8 min'},
  {id: '3', title: 'Jetpack Compose vs SwiftUI', author: 'Jane Doe', readTime: '6 min'},
  {id: '4', title: 'Mastering TypeScript Generics', author: 'Anders Hejlsberg', readTime: '10 min'},
  {id: '5', title: 'State Management Patterns', author: 'Dan Abramov', readTime: '7 min'},
  {id: '6', title: 'Building Offline-First Apps', author: 'John Smith', readTime: '9 min'},
];