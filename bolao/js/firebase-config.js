// =============================================================
//  CONFIGURAÇÃO DO FIREBASE  (preencha com os dados do SEU projeto)
// =============================================================
//
//  Passo a passo (leva ~5 min, é grátis):
//
//  1. Acesse https://console.firebase.google.com e clique em
//     "Adicionar projeto". Dê um nome (ex.: bolao-copa-2026).
//  2. No menu lateral: Build > Realtime Database > "Criar banco
//     de dados". Escolha o local e o modo "Iniciar em modo de teste".
//  3. Ainda no projeto, clique no ícone </> ("Web") para registrar
//     um app. Copie o objeto "firebaseConfig" que aparecer.
//  4. Cole os valores aqui embaixo, substituindo os "SEU_...".
//
//  Pronto! O bolão passa a funcionar para todos os amigos.
//  (As regras de teste expiram em 30 dias — veja o README.md para
//   colar as regras definitivas e nunca mais se preocupar.)
// =============================================================

export const firebaseConfig = {
  apiKey:            "SEU_API_KEY",
  authDomain:        "SEU_PROJETO.firebaseapp.com",
  databaseURL:       "https://SEU_PROJETO-default-rtdb.firebaseio.com",
  projectId:         "SEU_PROJETO",
  storageBucket:     "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId:             "SEU_APP_ID"
};

// PIN do administrador (quem lança os resultados oficiais e cadastra
// os jogos). Troque por um número/senha que só você saiba.
export const ADMIN_PIN = "1234";
