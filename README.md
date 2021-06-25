# backend

Endpoints for Pintereach Project (Pinterest2.0)

Base URL: https://pintereachunit4.herokuapp.com/

GET (All Articles) "${base}api/articles"
https://pintereachunit4.herokuapp.com/api/articles


GET (Specific Articles) "${base}api/articles/:id"
https://pintereachunit4.herokuapp.com/api/articles/:id


POST (New Article) "${base}api/articles" + article
https://pintereachunit4.herokuapp.com/api/articles


PUT (Change Article) "${base}api/articles/:id"
https://pintereachunit4.herokuapp.com/api/articles/:id


DELETE (Removed Article) "${base}api/articles/:id"
https://pintereachunit4.herokuapp.com/api/articles/:id

REGISTER (NEW USER) "${base}api/auth/register" 
https://pintereachunit4.herokuapp.com/api/auth/register


LOGIN (EXISTING USER) "${base}api/auth/login" 
https://pintereachunit4.herokuapp.com/api/auth/login

GET (All Saved Articles) "${base}api/saved"
https://pintereachunit4.herokuapp.com/api/saved


GET (Specific Saved Article) "${base}api/saved/:id"
https://pintereachunit4.herokuapp.com/api/saved/:id


POST (Add Saved Article) "${base}api/saved" + article_id && user_id
https://pintereachunit4.herokuapp.com/api/saved