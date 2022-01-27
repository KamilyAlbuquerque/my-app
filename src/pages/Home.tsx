import illustration from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

export function Home () {
    return (
        <div>
            <aside>
               <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
               <strong>Crie salas de Q&amp;A ao-vivo</strong>
               <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                <img src={logo} alt="Letmeask" />
                <button>
                    <img src={googleIcon} alt="Logo do Google" />
                    Crie sua sala com o Google 
                </button>
                <div>ou entre em uma sala</div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Digite o código da sala"
                    />
                    <button type="submit"></button>
                </form>
                </div> 
            </main>
        </div>
    )
}