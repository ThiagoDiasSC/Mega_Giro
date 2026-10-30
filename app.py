from flask import Flask, render_template, request, redirect, url_for, session, flash
from werkzeug import generate_password_hash, check_password_hash
from functools import wraps
import sqlite3
import os

app = Flask(__name__)
app.secret_key = os.environ.get("MEGA_GIRO_SECRET", "troque-esta-chave-por-uma-chave-secreta")
DB_PATH = os.path.join(os.path.dirname(__file__), "banco.db")


def conectar():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def inicializar_banco():
    with conectar() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                usuario TEXT NOT NULL UNIQUE,
                senha_hash TEXT NOT NULL
            )
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS clientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                telefone TEXT,
                email TEXT,
                endereco TEXT,
                observacoes TEXT,
                criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        existe = conn.execute(
            "SELECT id FROM usuarios WHERE usuario = ?", ("admin",)
        ).fetchone()
        if not existe:
            conn.execute(
                "INSERT INTO usuarios (usuario, senha_hash) VALUES (?, ?)",
                ("admin", generate_password_hash("MegaGiro@123"))
            )


def login_obrigatorio(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if "usuario_id" not in session:
            return redirect(url_for("login"))
        return func(*args, **kwargs)
    return wrapper


@app.route("/", methods=["GET", "POST"])
def login():
    if "usuario_id" in session:
        return redirect(url_for("clientes"))

    if request.method == "POST":
        usuario = request.form.get("usuario", "").strip()
        senha = request.form.get("senha", "")

        with conectar() as conn:
            conta = conn.execute(
                "SELECT id, usuario, senha_hash FROM usuarios WHERE usuario = ?",
                (usuario,)
            ).fetchone()

        if conta and check_password_hash(conta["senha_hash"], senha):
            session.clear()
            session["usuario_id"] = conta["id"]
            session["usuario"] = conta["usuario"]
            return redirect(url_for("clientes"))

        flash("Usuário ou senha incorretos.", "erro")

    return render_template("login.html")


@app.route("/clientes", methods=["GET", "POST"])
@login_obrigatorio
def clientes():
    if request.method == "POST":
        nome = request.form.get("nome", "").strip()
        telefone = request.form.get("telefone", "").strip()
        email = request.form.get("email", "").strip()
        endereco = request.form.get("endereco", "").strip()
        observacoes = request.form.get("observacoes", "").strip()

        if not nome:
            flash("Informe o nome do cliente.", "erro")
        else:
            with conectar() as conn:
                conn.execute("""
                    INSERT INTO clientes (nome, telefone, email, endereco, observacoes)
                    VALUES (?, ?, ?, ?, ?)
                """, (nome, telefone, email, endereco, observacoes))
            flash("Cliente cadastrado com sucesso!", "sucesso")
            return redirect(url_for("clientes"))

    termo = request.args.get("busca", "").strip()
    with conectar() as conn:
        if termo:
            lista = conn.execute("""
                SELECT * FROM clientes
                WHERE nome LIKE ? OR telefone LIKE ? OR email LIKE ?
                ORDER BY nome
            """, (f"%{termo}%", f"%{termo}%", f"%{termo}%")).fetchall()
        else:
            lista = conn.execute("SELECT * FROM clientes ORDER BY nome").fetchall()

    return render_template("clientes.html", clientes=lista, busca=termo)


@app.route("/clientes/excluir/<int:cliente_id>", methods=["POST"])
@login_obrigatorio
def excluir_cliente(cliente_id):
    with conectar() as conn:
        conn.execute("DELETE FROM clientes WHERE id = ?", (cliente_id,))
    flash("Cliente excluído.", "sucesso")
    return redirect(url_for("clientes"))


@app.route("/sair")
def sair():
    session.clear()
    return redirect(url_for("login"))


if __name__ == "__main__":
    inicializar_banco()
    app.run(debug=True)
