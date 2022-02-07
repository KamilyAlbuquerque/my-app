import { useHistory } from 'react-router-dom';

import { auth } from '../services/firebase'

import illustration from '../assets/images/illustration.svg';
import logo from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';


import '../styles/auth.scss';
import { firebase } from '../services/firebase';

export function Home () {
    const history = useHistory();

    function handleCreateRoom () {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.SignInWithPopup(provider).then(result => {
            console.log(result);
        })

        history.push('/new/room');
    }

    return (
        <div id='page-auth'>
            <aside>
               <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
               <strong>Crie salas ao-vivo</strong>
               <p>Tire dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                <img src={logo} alt="Letmeask" />
                <button onClick={handleCreateRoom} className='create-room'>
                    <img src={googleIcon} alt="Logo do Google" />
                    Crie sua sala com o Google 
                </button>
                <div className='separator'>ou entre em uma sala</div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Digite o código da sala"
                    />
                    <Button type="submit">
                        Entrar na sala 
                    </Button>
                </form>
                </div> 
            </main>
        </div>
    )
}