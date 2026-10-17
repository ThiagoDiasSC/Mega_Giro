MEGA GIRO - COMO EXECUTAR

1. Instale o Python 3 no computador.
2. Abra a pasta mega_giro no VS Code.
3. Abra o terminal do VS Code e execute:

   python -m venv .venv

No Windows:
   .venv\Scripts\activate

No macOS/Linux:
   source .venv/bin/activate

4. Instale as dependências:
   pip install -r requirements.txt

5. Execute:
   python app.py

6. Abra o navegador em:
   http://127.0.0.1:5000

LOGIN INICIAL
Usuário: admin
Senha: MegaGiro@123

IMPORTANTE
- Troque a senha inicial antes de usar com dados reais.
- O sistema é um protótipo local. Antes de publicar na internet, configure uma chave secreta forte,
  desative o modo debug, adicione proteção CSRF, limitação de tentativas de login e backups.
- O banco banco.db é criado automaticamente na primeira execução.
