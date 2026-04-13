[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/template-string/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/template-string/actions)
[![License](https://img.shields.io/github/license/Tox1469/template-string?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/template-string?style=flat-square)](https://github.com/Tox1469/template-string/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/template-string?style=flat-square)](https://github.com/Tox1469/template-string/stargazers)

---

# template-string

Interpolação segura de strings com suporte a escape `\\{` e caminhos aninhados `{user.name}`.

## Instalação

```bash
npm install template-string
```

## Uso

```ts
import { format } from "template-string";

format("Olá {user.name}, saldo {saldo}", {
  user: { name: "Tox" },
  saldo: 100,
});
```

## API

- `format(template: string, data: Record<string, unknown>): string`

## Licença

MIT