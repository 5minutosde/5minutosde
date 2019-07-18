# Server 5 minutos

## Install

`pip3 install -r requirements.txt `

## Run

- Create and configure `.env` file with `env-sample`
- `python3 fivemin.py`

## Deploy

```
cd ..
git push heroku `git subtree split --prefix server master`:master --force
```