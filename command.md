# Course info

https://www.youtube.com/watch?v=Hv70fn8xTL4&list=PLkcjSbKkQ5_LE7g1vjrSQK-Ns4doCEGmY&index=4&t=205s

# Command

## Using npx without global install

npx @nestjs/cli new nestjs-crash-course
nest g module user
-> gen template module user
-> g chứ ko phải -g
nest g co user --no-spec
-> generate controller

Nest có hỗ trợ hot reload --watch

# Model

User:

- id
- name
- email
- password

Topic:

- id
- title
- description

Comment:

- id
- text
- user_id
- topic_id
