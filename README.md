# 5 minutos de

## Uso

1) Comece no bot: https://t.me/cinco_minutos_bot
2) Envie um áudio
3) Responda o áudio para adicionar um título

## Embed

Adicione no seu **rodapé** os arquivos:

```
<link rel="stylesheet" href="https://5minutos.de/embed/style.css">
<script src="https://5minutos.de/embed/script.js"></script>
```

Onde você quiser embedar seu áudio, adicione o seguinte html:

```
<div id="embed-5-minutos" data-url=""></div>
```

Onde `data-url` é o link completo do áudio. Ex:

```
<div id="embed-5-minutos" data-url="http://5minutos.de/por/?little_war"></div>
```