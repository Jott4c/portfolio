import { NextPage } from 'next';
import { IProps } from '@/interfaces';
import 'swiper/css';
import 'swiper/css/effect-cards';

import 'swiper/css/pagination';

export const Container: NextPage<IProps> = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', marginTop: '70px' }}>
      <h1>Política de Privacidade para GlowArth</h1>
      <p>
        <strong>Data de Vigência: 10/09/2024 </strong>
      </p>

      <h2>1. Coleta de Informações</h2>
      <p>
        Coletamos dados pessoais como nome, número de telefone, e informações de comunicação quando
        você interage com nossa API. Podemos coletar dados automaticamente, como endereço IP, tipo
        de dispositivo e logs de uso, para melhorar a experiência do usuário.
      </p>

      <h2>2. Uso das Informações</h2>
      <p>
        Utilizamos as informações coletadas para fornecer, manter e melhorar nossos serviços, como a
        personalização de respostas automáticas via WhatsApp. As informações também podem ser usadas
        para comunicar novidades, atualizações de serviços e promoções.
      </p>

      <h2>3. Compartilhamento de Informações</h2>
      <p>
        Não compartilhamos suas informações pessoais com terceiros, exceto conforme exigido por lei
        ou para proteger nossos direitos legais. Podemos compartilhar informações anonimizadas com
        parceiros de negócios para fins de análise e melhoria de serviços.
      </p>

      <h2>4. Segurança das Informações</h2>
      <p>
        Implementamos medidas de segurança adequadas para proteger suas informações contra acesso
        não autorizado, alteração ou destruição. No entanto, nenhum sistema de segurança é
        impenetrável, e não podemos garantir a total segurança das informações.
      </p>

      <h2>5. Seus Direitos</h2>
      <p>
        Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais
        a qualquer momento. Para isso, entre em contato conosco pelo e-mail jrcba123@gmail.com.
      </p>

      <h2>6. Alterações à Política de Privacidade</h2>
      <p>
        Reservamo-nos o direito de modificar esta política de privacidade a qualquer momento.
        Qualquer alteração será notificada através de nossos canais de comunicação.
      </p>

      <h2>7. Contato</h2>
      <p>
        Se você tiver dúvidas sobre esta política, entre em contato pelo e-mail jrcba123@gmail.com.
      </p>

      <hr />

      <h1>Termos de Serviço para GlowArth</h1>
      <p>
        <strong>Data de Vigência:</strong> [Data de Publicação]
      </p>

      <h2>1. Aceitação dos Termos</h2>
      <p>
        Ao utilizar nossa API, você concorda em cumprir todos os termos e condições estabelecidos
        aqui. Se você não concordar, não poderá utilizar nossos serviços.
      </p>

      <h2>2. Uso da API</h2>
      <p>
        Nossa API de WhatsApp deve ser usada apenas para finalidades legítimas, como comunicação
        entre sua empresa e seus clientes. Qualquer uso indevido, como o envio de mensagens não
        solicitadas (spam) ou o uso fraudulento de nossa API, resultará na suspensão imediata do
        serviço.
      </p>

      <h2>3. Direitos e Responsabilidades</h2>
      <p>
        Você é responsável por garantir que as informações que envia para nossos servidores,
        incluindo mensagens e dados dos clientes, estejam em conformidade com todas as leis e
        regulamentos aplicáveis. Nós nos reservamos o direito de limitar, suspender ou encerrar o
        seu acesso à nossa API a qualquer momento, sem aviso prévio, se acreditarmos que você está
        violando os termos aqui descritos.
      </p>

      <h2>4. Modificações nos Serviços</h2>
      <p>
        Podemos modificar ou descontinuar a API de WhatsApp a qualquer momento sem aviso prévio.
        Tentaremos informar os usuários sobre quaisquer mudanças importantes.
      </p>

      <h2>5. Isenção de Garantias</h2>
      <p>
        Nossos serviços são fornecidos como estão, sem qualquer tipo de garantia. Não garantimos que
        a API estará disponível ininterruptamente ou isenta de erros.
      </p>

      <h2>6. Limitação de Responsabilidade</h2>
      <p>
        Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos,
        incidentais ou consequenciais resultantes do uso ou da incapacidade de usar nossos serviços.
      </p>

      <h2>7. Alterações aos Termos</h2>
      <p>
        Reservamo-nos o direito de alterar estes Termos a qualquer momento. As alterações serão
        notificadas e publicadas em nosso site ou canais de comunicação.
      </p>

      <h2>8. Contato</h2>
      <p>
        Para dúvidas ou preocupações relacionadas a estes Termos de Serviço, entre em contato pelo
        e-mail jrcba123@gmail.com.
      </p>
    </div>
  );
};

export default Container;
