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
