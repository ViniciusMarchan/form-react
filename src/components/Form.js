import '../components/styles/Form.css'

function Form() {
    return(
        <>
                <div class="wrapper">
            <span class="icon-close"><ion-icon name="close-outline"></ion-icon></span>

            <div class="form-box login">
                <h2>Login</h2>
                <form action="#">

                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required />
                        <label>Senha</label>
                    </div>

                    <div class="remember-forgot">
                        <label><input type="checkbox" />Relembre-me</label>
                        <a href="#">Esqueceu a Senha?</a> 
                    </div>

                        <button type="submit" class="btn">Login</button>

                        <div class="login-register">
                            <p>Não possui uma conta? <a href="#" class="register-link">Registre-se</a></p>
                        </div>
                </form>
            </div>

            <div class="form-box register">
                <h2>Registro</h2>
                <form action="#">

                    <div class="input-box">
                        <span class="icon"><ion-icon name="person"></ion-icon></span>
                        <input type="email" required />
                        <label>Usuário</label>
                    </div>


                    <div class="input-box">
                        <span class="icon"><ion-icon name="mail"></ion-icon></span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div class="input-box">
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" required />
                        <label>Senha</label>
                    </div>

                    <div class="remember-forgot">
                        <label><input type="checkbox" />Aceito os <span class="underline">Termos de Uso e Privacidade</span></label>
                    </div>

                        <button type="submit" class="btn">Registrar-se</button>

                        <div class="login-register">
                            <p>Já possui uma conta? <a href="#" class="login-link">Login</a></p>
                        </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Form;