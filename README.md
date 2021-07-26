- react code installed from npx create-react-app cra
- removed extra sample files and logo.


Scheduler

```mermaid
 sequenceDiagram
  participant App
  participant Jira
  App->>Jira:project({ projectId })
  Jira->>App:ProjectObject
  App->>Jira:search()
  Jira->>App:IssueObject[]
```