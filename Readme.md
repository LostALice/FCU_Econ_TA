# FCU LLM

## 逢甲大學課程問答機械人

### Backend .env file
| **Section**                  | **Variable**                   | **Value**        |
| ---------------------------- | ------------------------------ | ---------------- |
| **Development**              | DEBUG                          | True             |
| **FastAPI CORS**             | CORS_ALLOWED_ORIGIN            |                  |
| **MySQL**                    | MYSQL_DEBUG                    | True             |
|                              | MYSQL_HOST                     | localhost        |
|                              | MYSQL_USER_NAME                | root             |
|                              | MYSQL_PASSWORD                 | example_password |
|                              | MYSQL_DATABASE                 | FCU              |
|                              | MYSQL_PORT                     | 3306             |
|                              | MYSQL_CONNECTION_RETRY         | 3                |
|                              | MYSQL_ROOT_USERNAME            | root             |
|                              | MYSQL_ROOT_PASSWORD            | example_password |
| **JWT (Authentication)**     | JWT_SECRET                     | example_secret   |
|                              | JWT_ALGORITHM                  | HS256            |
| **LLM**                      | LLM_DEPLOY_MODE                | ollama           |
| **Embedding**                | EMBEDDING_DEPLOY_MODE          | ollama           |
| **AFS**                      | AFS_API_URL                    |                  |
|                              | AFS_API_KEY                    |                  |
|                              | AFS_MODEL_NAME                 |                  |
| **Ollama**                   | OLLAMA_HOST                    | http://localhost |
|                              | OLLAMA_PORT                    | 11434            |
|                              | OLLAMA_MODEL_NAME              |                  |
|                              | OLLAMA_EMBEDDING_MODEL_NAME    |                  |
| **OpenAI**                   | OPENAI_API_URL                 |                  |
|                              | OPENAI_API_KEY                 |                  |
|                              | OPENAI_MODEL_NAME              |                  |
|                              | OPENAI_EMBEDDING_MODEL_NAME    |                  |
| **Milvus (Vector Database)** | MILVUS_DEBUG                   | True             |
|                              | MILVUS_HOST                    | localhost        |
|                              | MILVUS_PORT                    | 19530            |
|                              | MILVUS_DEFAULT_COLLECTION_NAME | default          |
|                              | MILVUS_VECTOR_DIM              | 1024             |



### Frontend .env file
> TO DO