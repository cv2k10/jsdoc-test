import './App.css';
import User from './User';

/**
 * Main App
 * 
 * @mermaid
 * sequenceDiagram
 *  participant App
 *  participant User
 *  App->>User:project({ projectId })
 *  User->>App:ProjectObject
 *  App->>User:search()
 *  Jira->>User:IssueObject[]
 * 
 * @mermaid
 * gantt
 *    title A Gantt Diagram
 *    dateFormat  YYYY-MM-DD
 *    section Section
 *    A task           :a1, 2014-01-01, 30d
 *    Another task     :after a1  , 20d
 *    section Another
 *    Task in sec      :2014-01-12  , 12d
 *    another task      : 24d
 */


function App() {
  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
