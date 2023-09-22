# Course info

https://www.youtube.com/watch?v=Hv70fn8xTL4&list=PLkcjSbKkQ5_LE7g1vjrSQK-Ns4doCEGmY&index=4&t=205s

# Command

npm i --save class-validator class-transformer

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

# Demo JSON data for Insomnia

{{host}}/user/create

{
"name": "Danh",
"email": 2134213213,
"kekee": "someibgfi",
"more": "34232553"
}

{
"name": "Danh",
"email": "test@gmail.com",
"more": "someibgfi",
"phone": "34232553"
}
