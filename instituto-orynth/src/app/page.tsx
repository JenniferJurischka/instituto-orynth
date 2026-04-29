import { loginWithDiscord } from "../services/auth";

<button
  onClick={() => {
    console.log("Cliquei no botão");
    loginWithDiscord();
  }}
>
  Entrar com Discord
</button>

import { useEffect } from "react";
import { supabase } from "../services/supabase";

useEffect(() => {
  supabase.auth.getSession().then(({ data }) => {
    console.log("Sessão:", data.session);
  });
}, []);