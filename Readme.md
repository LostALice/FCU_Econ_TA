# FCU LLM

## 逢甲大學課程問答機械人

### Backend .env file

| **Section**              | **Variable**                   | **Value**                                     |
| ------------------------ | ------------------------------ | --------------------------------------------- |
| Development              | DEBUG                          | True                                          |
| FastAPI CORS             | CORS_ALLOWED_ORIGIN            | []                                            |
| MySQL                    | MYSQL_DEBUG                    | True                                          |
|                          | MYSQL_HOST                     | localhost                                     |
|                          | MYSQL_USER_NAME                | root                                          |
|                          | MYSQL_PASSWORD                 | example_password                              |
|                          | MYSQL_DATABASE                 | FCU                                           |
|                          | MYSQL_PORT                     | 3306                                          |
|                          | MYSQL_CONNECTION_RETRY         | 3                                             |
|                          | MYSQL_ROOT_USERNAME            | root                                          |
|                          | MYSQL_ROOT_PASSWORD            | example_password                              |
| JSON Web Token (JWT)     | JWT_SECRET                     | example_secret                                |
|                          | JWT_ALGORITHM                  | HS256                                         |
| API Endpoint             | API_URL                        | (empty)                                       |
|                          | API_KEY                        | (empty)                                       |
|                          | MODEL_NAME                     | (empty)                                       |
| Milvus (Vector Database) | MILVUS_DEBUG                   | True                                          |
|                          | MILVUS_HOST                    | localhost                                     |
|                          | MILVUS_PORT                    | 19530                                         |
|                          | MILVUS_DEFAULT_COLLECTION_NAME | default                                       |
|                          | MILVUS_VECTOR_DIM              | 1024                                          |
|Local LLM Setup                | REPO_ID                        | shenzhi-wang/Llama3-8B-Chinese-Chat-GGUF-4bit |
|                          | LLM_MODEL                      | Llama3-8B-Chinese-Chat-q4_0-v2_1.gguf         |
|                          | HF_EMBEDDING_MODEL             | shibing624/text2vec-base-chinese              |


### Frontend .env file
> TO DO